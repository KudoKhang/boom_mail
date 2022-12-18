import React, { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useFormData } from '../../hooks/useFormData';
import { addMailsApi } from '../../api';
import { localCache } from '../../utils/localStorage';
import { useHandleError } from '../../hooks/useHandleError';

export default function Home() {
  const { formData, onInputChange } = useFormData();
  const { handleResponseMsg } = useHandleError();
  const [logEmails, setLogEmails] = useState([]);
  const [listEmails, setListEmails] = useState([]);
  const [intervalId, setIntervalId] = useState();

  const showLogEmails = () => {
    try {
      const id = setInterval(
        (emails, logs) => {
          console.log(12, emails);
          console.log(33, logs.length);

          setLogEmails((prev) => [...prev, `${emails[logs.length]} ... done`]);
        },
        1000,
        listEmails,
        logEmails
      );
      setIntervalId(id);
    } catch {
      //
    }
  };

  const transformEmails = (emails) => {
    return emails
      .trim()
      .replace(/[ ]+/g, '')
      .split(/\n/)
      .filter((item) => item);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLogEmails([]);

    try {
      const token = localCache.getUserToken();
      const { number, emails } = formData;
      const list = transformEmails(emails);

      if (!list?.length) {
        throw new Error('Emails invalid');
      }
      setListEmails(list);
      // await addMailsApi({ token, n_spam: number }, list);
    } catch (error) {
      handleResponseMsg(error);
    }
  };

  useEffect(() => {
    if (!logEmails?.length) return;

    if (logEmails.length >= listEmails.length) {
      clearInterval(intervalId);
      setListEmails([]);
    }
  }, [logEmails]);

  useEffect(() => {
    if (!listEmails?.length) return;
    showLogEmails();
  }, [listEmails]);

  return (
    <Container maxWidth="md" sx={{ mt: 8 }}>
      <Grid container spacing={2}>
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
                    label="Danh sách email"
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
                    id="input-password"
                    label="Số lượt"
                    required
                    fullWidth
                    name="number"
                    onChange={onInputChange}
                  />
                </Grid>
              </Grid>
              <Button type="submit" variant="contained" sx={{ my: 3 }} fullWidth>
                Bắt đầu
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="logs"
            label="Kết quả"
            multiline
            minRows={8}
            maxRows={8}
            fullWidth
            value={logEmails.join('\n')}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
