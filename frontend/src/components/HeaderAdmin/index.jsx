import React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typo from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { ADMIN_URL } from '../../config/constants';
import { logoutAdmin } from '../../api';
import AccountMenu from './AccountMenu';

export default function Header({ user }) {
  const navigate = useNavigate();

  const logout = async () => {
    await logoutAdmin();
    navigate(ADMIN_URL.LOGIN, { replace: true });
  };

  const showMenu = () => {
    if (!user) {
      return (
        <Button
          href={ADMIN_URL.LOGIN}
          variant="outlined"
          sx={{ my: 1, mx: 1.5, color: 'common.white' }}
        >
          Sign in
        </Button>
      );
    }

    const { first_name: firstN, last_name: lastN } = user;

    return (
      <>
        <Typo component="div" sx={{ color: 'common.white' }}>
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
        <Typo variant="span" sx={{ flexGrow: 3 }}>
          BoomCheck
        </Typo>
        {showMenu()}
      </Toolbar>
    </AppBar>
  );
}
