import React, { useEffect } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typo from '@mui/material/Typography';
import { Img } from '../../styles';
import maintenanceImg from '../../imgs/maintenance.jpg';

export default function CCV() {
  useEffect(() => {
    document.title = 'Check CCVs';
  }, []);

  return (
    <>
      <Container maxWidth="xs" sx={{ mt: 2 }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typo component="h1" variant="h2" align="center" color="text.primary" sx={{ mt: 2 }}>
            Maintenance
          </Typo>
        </Box>
      </Container>
      <Img
        src={maintenanceImg}
        alt="maintenance"
        width="auto"
        sx={{ mx: 'auto', display: 'block', height: '600px' }}
      />
    </>
  );
}
