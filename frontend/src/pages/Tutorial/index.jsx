import React, { useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typo from '@mui/material/Typography';
import { TUTORIAL_URL } from '../../config/constants';

export default function Tutorial() {
  useEffect(() => {
    document.title = 'Tutorial';
  }, []);

  return (
    <Grid container spacing={2} sx={{ mb: 8, justifyContent: 'center' }}>
      <Grid item xs={12}>
        <Typo component="h1" variant="h2" align="center" color="text.primary" sx={{ mt: 2 }}>
          👀 Tutorial
        </Typo>
      </Grid>
      <Grid
        item
        xs={12}
        md={10}
        lg={8}
        sx={{
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box sx={{ textAlign: 'center' }}>
          <iframe
            width="100%"
            height="450"
            src={TUTORIAL_URL}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </Box>
        <Box sx={{ mt: 2 }}>
          <Typo component="p" variant="h3" color="text.primary">
            🎉 News
          </Typo>
          <Typo component="p" variant="h5" color="text.primary">
            The latest information about services, prices will be updated here
          </Typo>
          <Typo component="p" color="text.primary">
            🥹 The site is in beta, so it&apos;s not stable, please contact admin directly if there are
            any problems
          </Typo>
        </Box>
        <Box sx={{ mt: 2, width: '100%' }}>
          <Typo component="p" variant="h3" color="text.primary">
            How to use
          </Typo>
          <Typo component="p" color="text.primary">
            💵 : First step, you need to deposit money into your account
          </Typo>
          <Typo component="p" color="text.primary">
            🙆🏻‍♂️ : Next, choose the service package you want
          </Typo>
          <Typo component="p" color="text.primary">
            📧 : Finally, fill in the list of email addresses you want to spam and click start
          </Typo>
        </Box>
        <Box sx={{ mt: 2 }}>
          <Typo component="p" variant="h3" color="text.primary">
            Contact us
          </Typo>
          <Typo component="p" color="text.primary">
            📞 We always put prestige first, if you have any problems while using or need support,
            do not hesitate to contact us. We will support you 24/7
          </Typo>
          <Typo component="p" color="text.primary">
            📨 Join with us <a href="https://t.me/+-xS4H-XvTlkxNGY1"> Telegram </a>
          </Typo>
        </Box>
      </Grid>
    </Grid>
  );
}
