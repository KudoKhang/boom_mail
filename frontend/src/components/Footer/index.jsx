import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {'Copyright © '}
      <Link color="inherit" href="/">
        boomcheck.io
      </Link>{' '}
      {new Date().getFullYear()}
    </Typography>
  );
}

export default function Footer() {
  return (
    <Container
      component="footer"
      maxWidth="xl"
      sx={{
        py: 2,
        px: 4,
        mt: 'auto',
        backgroundColor: (theme) =>
          theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[800],
      }}
    >
      <Box
        sx={{
          textAlign: 'right',
        }}
      >
        <Typography variant="body1">
          You have problems, we have solved them. Contact for work 💌{' '}
          <a href="https://t.me/+-xS4H-XvTlkxNGY1"> Telegram </a>
        </Typography>
        <Copyright />
      </Box>
    </Container>
  );
}
