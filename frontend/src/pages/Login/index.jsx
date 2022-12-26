import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import { useNavigate } from 'react-router-dom';
import loginImg from '../../imgs/login.png';
import { Img } from '../../styles';
import { URL } from '../../config/constants';
import { LoginApi } from '../../api';
import { useFormData } from '../../hooks/useFormData';
import { localCache } from '../../utils/localStorage';
import { useAlert } from '../../contexts/alert';
import { useHandleError } from '../../hooks/useHandleError';

export default function Login() {
  const { formData, onInputChange } = useFormData();
  const { showError } = useAlert();
  const { handleResponseMsg } = useHandleError();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = await LoginApi(formData);

      if (!token) {
        showError('Wrong email or password, please try again');
        return;
      }

      localCache.setUserToken(token);
      navigate(URL.HOME, { replace: true });
    } catch (error) {
      handleResponseMsg(error);
    }
  };

  return (
    <Container maxWidth="xs" sx={{ mt: 8 }}>
      <Box
        sx={{
          my: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Img src={loginImg} alt="logo login" width="auto" />
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                id="input-email"
                type="email"
                label="Email"
                name="email"
                required
                fullWidth
                onChange={onInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="input-password"
                label="Password"
                type="password"
                name="password"
                required
                fullWidth
                onChange={onInputChange}
              />
            </Grid>
          </Grid>
          <Button type="submit" variant="contained" sx={{ my: 3 }} fullWidth>
            Login
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href={URL.SIGNUP} variant="body2">
                Don&apos;t have an account yet? Sign Up
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
