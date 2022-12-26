import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typo from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import loginImg from '../../../imgs/login.png';
import { Img } from '../../../styles';
import { ADMIN_URL } from '../../../config/constants';
import { LoginApi } from '../../../api';
import { useFormData } from '../../../hooks/useFormData';
import { localCache } from '../../../utils/localStorage';
import { useAlert } from '../../../contexts/alert';
import { useHandleError } from '../../../hooks/useHandleError';

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

      localCache.setAdminToken(token);
      navigate(ADMIN_URL.HOME, { replace: true });
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
        <Typo component="h1" variant="h2" align="center" color="text.primary" sx={{ mt: 2 }}>
          Administrator sign in
        </Typo>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                id="input-email"
                type="text"
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
            Sign in
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
