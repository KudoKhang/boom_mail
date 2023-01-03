import React, { useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useOutletContext } from 'react-router-dom';
import { changePassword } from '../../api';
import { useFormData } from '../../hooks/useFormData';
import { useAlert } from '../../contexts/alert';
import { useHandleError } from '../../hooks/useHandleError';

export default function Profile() {
  const { formData, onInputChange, resetForm } = useFormData();
  const { showSuccess, showError } = useAlert();
  const { handleResponseMsg, handleUnauthorized } = useHandleError();
  const { user } = useOutletContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { new_password: newPass, password_confirmation: confirmPass } = formData;

      if (newPass !== confirmPass) {
        showError('New password and password confirmation does not match');
        return;
      }

      await changePassword(formData);
      resetForm();
      showSuccess('Change password successful');
    } catch (error) {
      handleUnauthorized(error);
      handleResponseMsg(error);
    }
  };

  useEffect(() => {
    document.title = 'Profile';
  }, []);

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          my: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Profile
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="first_name"
                fullWidth
                id="first_name"
                label="First Name"
                value={user?.first_name || ''}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="last_name"
                label="Last Name"
                name="last_name"
                value={user?.last_name || ''}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                value={user?.email || ''}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="old_password"
                label="Current password"
                type="password"
                id="current-password"
                onChange={onInputChange}
                value={formData?.old_password || ''}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="new_password"
                label="New password"
                type="password"
                id="new-password"
                onChange={onInputChange}
                value={formData?.new_password || ''}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password_confirmation"
                label="Re-enter password"
                type="password"
                id="password-confirmation"
                onChange={onInputChange}
                value={formData?.password_confirmation || ''}
              />
            </Grid>
          </Grid>
          <Button type="submit" fullWidth variant="contained" sx={{ my: 3 }}>
            Update
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
