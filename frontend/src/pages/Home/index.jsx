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
import { SPAM_INTERVAL } from '../../config/constants';
import { useAlert } from '../../contexts/alert';

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
  const { handleResponseMsg, handleUnauthorized } = useHandleError();
  const [logEmails, setLogEmails] = useState([]);
  const [reqNumber, setReqNumber] = useState(0);
  const [loading, setLoading] = useState(false);
  const { reloadUser } = useOutletContext();
  const { showSuccess, showError } = useAlert();
  const [total, setTotal] = useState(0);

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
      setTotal(number * list.length);
      await addMailsApi({ token, n_spam: number }, list);
      await reloadUser();
    } catch (error) {
      handleResponseMsg(error);
      handleUnauthorized(error);
    }
  };

  const showLogEmails = () => {
    try {
      setTimeout(() => {
        setLogEmails((prev) => [
          ...prev,
          `Request ${prev.length + 1}: Spam Successfully Completed 💣`,
        ]);
        setReqNumber((prev) => prev - 1);
      }, SPAM_INTERVAL);
    } catch {
      showError('Something went wrong');
    }
  };

  useEffect(() => {
    if (!reqNumber) {
      if (loading) {
        showSuccess(`Spam successful: ${total} emails`);
        setTotal(0);
      }
      setLoading(false);
      return;
    }
    showLogEmails();
  }, [reqNumber]);

  useEffect(() => {
    document.title = 'Home';
  }, []);

  return (
    <Container maxWidth="lg" sx={{ my: 8 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} justifyContent="center">
          <Typo component="h1" variant="h2" align="center" color="text.primary">
            Welcome to Boom Mail 🤪
          </Typo>
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ mt: 2, justifyContent: 'center' }}>
        <Grid item xs={6} md={5}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
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
            <Typo>1️⃣ Enter list emails, one email per line</Typo>
            <Typo>2️⃣ Enter number of requests. Recommend 10-15 requests</Typo>
            <Typo>3️⃣ Click start 🦥</Typo>
          </Box>
        </Grid>
        <Grid item xs={6} md={5}>
          <Box
            sx={{
              border: '1px solid',
              borderColor: 'grey.400',
              padding: '16.5px 14px',
              borderRadius: '4px',
              height: '289px',
              overflow: 'auto',
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
