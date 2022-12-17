import React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typo from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { useNavigate } from 'react-router-dom';
import { URL } from '../../config/constants';
import { localCache } from '../../utils/localStorage';
import { logoutUser } from '../../api';
import AccountMenu from './AccountMenu';

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
              Sign up
            </Link>
          </nav>
          <Button href={URL.LOGIN} variant="outlined" sx={{ my: 1, mx: 1.5 }}>
            Sign in
          </Button>
        </>
      );
    }

    const { first_name: firstN, last_name: lastN } = user;

    return (
      <>
        <nav>
          <Link variant="button" href={URL.HOME} sx={{ my: 1, mx: 1.5 }}>
            Boom mail
          </Link>
          <Link variant="button" href={URL.HOME} sx={{ my: 1, mx: 1.5 }}>
            Check CCV
          </Link>
          <Link variant="button" href={URL.PRICING} sx={{ my: 1, mx: 1.5 }}>
            Select packages
          </Link>
        </nav>
        <Button href={URL.PAYMENT} variant="outlined" sx={{ my: 1, mx: 1.5 }}>
          Add money
        </Button>
        <Typo component="div">
          <Typo variant="h6">{`${firstN} ${lastN}`}</Typo>
        </Typo>
        <AccountMenu user={user} logout={logout} />
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
        <Typo variant="span" sx={{ flexGrow: 3 }}>
          BoomCheck
        </Typo>
        {showMenu()}
      </Toolbar>
    </AppBar>
  );
}
