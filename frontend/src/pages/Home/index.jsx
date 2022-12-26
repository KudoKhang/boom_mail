import React, { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Typo from '@mui/material/Typography';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import { useOutletContext } from 'react-router-dom';
import { useFormData } from '../../hooks/useFormData';
import { addMailsApi } from '../../api';
import { localCache } from '../../utils/localStorage';
import { useHandleError } from '../../hooks/useHandleError';

const colors = [
  'red',
  'pink',
  'puple',
  'deepPurple',
  'indigo',
  'blue',
  'cyan',
  'teal',
  'green',
  'lightGreen',
  'lime',
  'yellow',
  'amber',
  'orange',
  'brown',
  'gray',
  'blueGrey',
].map((item) => `${item}.500`);

export default function Home() {
  const { formData, onInputChange } = useFormData();
  const { handleResponseMsg } = useHandleError();
  const [logEmails, setLogEmails] = useState([]);
  const [reqNumber, setReqNumber] = useState(0);
  const [loading, setLoading] = useState(false);
  const { reloadUser } = useOutletContext();

  const transformEmails = (emails) => {
    return emails
      .trim()
      .replace(/[ ]+/g, '')
      .split(/\n/)
      .filter((item) => item);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    setLogEmails([]);

    try {
      const token = localCache.getUserToken();
      const { number, emails } = formData;
      const list = transformEmails(emails);

      if (!list?.length) {
        throw new Error('Emails invalid');
      }
      setReqNumber(number * list.length);
      await addMailsApi({ token, n_spam: number }, list);
      await reloadUser();
    } catch (error) {
      handleResponseMsg(error);
    }
  };

  const showLogEmails = () => {
    try {
      setTimeout(() => {
        setLogEmails((prev) => [...prev, `Request ${prev.length + 1}: ... done`]);
        setReqNumber((prev) => prev - 1);
      }, 3000);
    } catch {
      //
    }
  };

  useEffect(() => {
    if (!reqNumber) {
      setLoading(false);
      return;
    }
    showLogEmails();
  }, [reqNumber]);

  return (
    <Container maxWidth="md" sx={{ mt: 8 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} justifyContent="center">
          <Typo component="h1" variant="h2" align="center" color="text.primary">
            Dashboard
          </Typo>
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid item xs={6}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Box component="form" onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    id="input-emails"
                    label="List emails"
                    multiline
                    minRows={8}
                    maxRows={8}
                    required
                    fullWidth
                    name="emails"
                    onChange={onInputChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="input-number"
                    label="Number"
                    type="number"
                    required
                    fullWidth
                    name="number"
                    onChange={onInputChange}
                    inputProps={{ min: 0 }}
                  />
                </Grid>
              </Grid>
              <Button type="submit" variant="contained" sx={{ my: 3 }} fullWidth disabled={loading}>
                {loading ? <CircularProgress size={24} /> : 'Start'}
              </Button>
            </Box>
          </Box>
          <Box>
            <Typo>1. Enter list emails, 1 email per line</Typo>
            <Typo>2. Enter number of requests</Typo>
            <Typo>3. Click start</Typo>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box
            sx={{
              border: '1px solid',
              borderColor: 'grey.400',
              padding: '16.5px 14px',
              borderRadius: '4px',
              minHeight: '289px',
            }}
          >
            {logEmails.map((mail) => (
              <Typo
                key={`${mail}`}
                sx={{
                  mb: 1,
                  display: 'flex',
                  alignItems: 'center',
                  width: '100%',
                  color: `${colors[Math.floor(Math.random() * (colors.length + 1))]}`,
                }}
              >
                <MarkEmailReadIcon sx={{ mr: 2 }} />
                {mail}
              </Typo>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
