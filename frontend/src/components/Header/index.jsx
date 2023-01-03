import React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typo from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { useNavigate } from 'react-router-dom';
import { URL } from '../../config/constants';
import { logoutUser } from '../../api';
import AccountMenu from './AccountMenu';
import { Img } from '../../styles';
import logo from '../../imgs/logo.png';

export default function Header({ user }) {
  const navigate = useNavigate();

  const logout = async () => {
    await logoutUser();
    navigate(URL.LOGIN, { replace: true });
  };

  const showMenu = () => {
    if (!user) {
      return (
        <>
          <nav>
            <Link variant="button" href={URL.SIGNUP} sx={{ my: 1, mx: 1.5, color: 'common.white' }}>
              Sign up
            </Link>
          </nav>
          <Button
            href={URL.LOGIN}
            variant="outlined"
            sx={{ my: 1, mx: 1.5, color: 'common.white' }}
          >
            Sign in
          </Button>
        </>
      );
    }

    const { first_name: firstN, last_name: lastN } = user;

    return (
      <>
        <nav>
          <Link variant="button" href={URL.HOME} sx={{ my: 1, mx: 1.5, color: 'common.white' }}>
            Boom mail
          </Link>
          <Link variant="button" href={URL.CCV} sx={{ my: 1, mx: 1.5, color: 'common.white' }}>
            Check CCV
          </Link>
          <Link variant="button" href={URL.PRICING} sx={{ my: 1, mx: 1.5, color: 'common.white' }}>
            Select packages
          </Link>
        </nav>
        <Button
          href={URL.PAYMENT}
          variant="outlined"
          sx={{ my: 1, mx: 1.5, color: 'common.white', borderColor: 'common.white' }}
        >
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
      sx={{
        borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
        backgroundColor: 'primary.main',
        color: 'common.white',
      }}
    >
      <Toolbar sx={{ flexWrap: 'wrap' }}>
        <Link variant="button" href={URL.HOME} sx={{ m: 0, p: 0, flexGrow: 3 }}>
          <Img src={logo} alt="logo app" sx={{ width: '150px' }} />
        </Link>
        {showMenu()}
      </Toolbar>
    </AppBar>
  );
}
