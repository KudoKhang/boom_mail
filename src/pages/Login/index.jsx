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
import { LoginApi } from '../api';
import { useFormData } from '../../hooks/useFormData';
import { localCache } from '../../utils/localStorage';
import { useAlert } from '../../contexts/alert';

export default function Login() {
  const { formData, onChange } = useFormData();
  const navigate = useNavigate();
  const { showError } = useAlert();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = await LoginApi(formData);
      if (token) {
        localCache.setUserToken(token);
        navigate(URL.HOME, { replace: true });
        return;
      }
      showError('Sai email hoặc mật khẩu');
    } catch (error) {
      showError(error?.response?.data?.message || error?.message);
    }
  };

  return (
    <Container maxWidth="xs" sx={{ mt: 8 }}>
      <Box
        sx={{
          marginTop: 8,
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
                onChange={onChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="input-password"
                label="Mật khẩu"
                type="password"
                name="password"
                required
                fullWidth
                onChange={onChange}
              />
            </Grid>
          </Grid>
          <Button type="submit" variant="contained" sx={{ my: 3 }} fullWidth>
            Đăng nhập
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href={URL.SIGNUP} variant="body2">
                Bạn chưa có tài khoản? Đăng kí
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
