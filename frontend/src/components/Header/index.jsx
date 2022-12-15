import React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typo from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Divider from '@mui/material/Divider';
import { useNavigate } from 'react-router-dom';
import { URL } from '../../config/constants';
import { localCache } from '../../utils/localStorage';
import { logoutUser } from '../../api';

export default function Header() {
  const navigate = useNavigate();
  const user = localCache.getUser();

  const logout = async () => {
    await logoutUser();
    navigate(URL.LOGIN, { replace: true });
  };

  const showMenu = () => {
    if (!user) {
      return (
        <>
          <nav>
            <Link variant="button" href={URL.SIGNUP} sx={{ my: 1, mx: 1.5 }}>
              Đăng kí
            </Link>
          </nav>
          <Button href={URL.LOGIN} variant="outlined" sx={{ my: 1, mx: 1.5 }}>
            Đăng nhập
          </Button>
        </>
      );
    }

    const { first_name: firstN, last_name: lastN, request_remaning: remaning, amount } = user;

    return (
      <>
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
        </nav>
        <Button href={URL.PAYMENT} variant="outlined" sx={{ my: 1, mx: 1.5 }}>
          Nạp tiền
        </Button>
        <Typo component="div">
          <Typo variant="span">Xin chào</Typo>
          <Typo variant="h6">{`${firstN} ${lastN}`}</Typo>
        </Typo>
        <Divider orientation="vertical" flexItem sx={{ mx: 1, my: 1 }} />
        <Typo component="div" sx={{ ml: 1, display: 'flex', flexDirection: 'column' }}>
          <Typo variant="span">Số tiền</Typo>
          <Typo variant="h6">{`$${amount || 0}`}</Typo>
        </Typo>
        <Divider orientation="vertical" flexItem sx={{ mx: 1, my: 1 }} />
        <Typo component="div" sx={{ ml: 1, display: 'flex', flexDirection: 'column' }}>
          <Typo variant="span">Lượt còn lại</Typo>
          <Typo variant="h6">{`${remaning || 0}`}</Typo>
        </Typo>
        <Button variant="outlined" sx={{ my: 1, mx: 1.5 }} onClick={logout}>
          Đăng xuất
        </Button>
      </>
    );
  };

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
        {showMenu()}
      </Toolbar>
    </AppBar>
  );
}
