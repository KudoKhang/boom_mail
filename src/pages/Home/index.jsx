import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useFormData } from '../../hooks/useFormData';
import { addMailsApi } from '../../api';
import { localCache } from '../../utils/localStorage';
import { useAlert } from '../../contexts/alert';

export default function Home() {
  const { formData, onInputChange } = useFormData();
  const { showError } = useAlert();

  const transformEmails = (emails) => {
    return emails.trim().replace(/[ ]+/g, '').split(/\n/);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localCache.getUserToken();
      const { number, emails } = formData;
      await addMailsApi({ token, n_spam: number }, transformEmails(emails));
    } catch (error) {
      showError(error?.response?.data?.message || error?.message);
    }
  };

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
          <TextField id="logs" label="Kết quả" multiline minRows={8} maxRows={8} fullWidth />
        </Grid>
      </Grid>
    </Container>
  );
}
