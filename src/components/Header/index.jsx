import React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typo from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { URL } from '../../config/constants';

export default function Header() {
  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
    >
      <Toolbar sx={{ flexWrap: 'wrap' }}>
        <Typo variant="span" sx={{ flexGrow: 1 }}>
          Logo
        </Typo>
        <nav>
          <Link variant="button" href={URL.HOME} sx={{ my: 1, mx: 1.5 }}>
            Bom mail
          </Link>
          <Link variant="button" href={URL.HOME} sx={{ my: 1, mx: 1.5 }}>
            Kiểm tra CCV
          </Link>
          <Link variant="button" href={URL.PRICING} sx={{ my: 1, mx: 1.5 }}>
            Chọn gói
          </Link>
          <Link variant="button" href={URL.SIGNUP} sx={{ my: 1, mx: 1.5 }}>
            Đăng kí
          </Link>
        </nav>
        <Button href={URL.PAYMENT} variant="outlined" sx={{ my: 1, mx: 1.5 }}>
          Nạp tiền
        </Button>
        <Typo component="div">
          <Typo variant="span">Xin chào</Typo>
          <Typo variant="h6">SH150</Typo>
        </Typo>
        <Typo component="div" sx={{ ml: 1, display: 'flex', flexDirection: 'column' }}>
          <Typo variant="span">Tài khoản</Typo>
          <Typo variant="h6">$79.999.999</Typo>
        </Typo>
      </Toolbar>
    </AppBar>
  );
}
