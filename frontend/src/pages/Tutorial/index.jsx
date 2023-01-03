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
          Tutorial
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
            Description
          </Typo>
          <Typo component="p" color="text.primary">
            text text...
          </Typo>
        </Box>
        <Box sx={{ mt: 2, width: '100%' }}>
          <Typo component="p" variant="h3" color="text.primary">
            Step by step
          </Typo>
          <Typo component="p" color="text.primary">
            step 1: ...
          </Typo>
          <Typo component="p" color="text.primary">
            step 2: ...
          </Typo>
          <Typo component="p" color="text.primary">
            step 3: ...
          </Typo>
        </Box>
        <Box sx={{ mt: 2 }}>
          <Typo component="p" variant="h3" color="text.primary">
            Contact us
          </Typo>
          <Typo component="p" color="text.primary">
            email, phone, ...
          </Typo>
        </Box>
      </Grid>
    </Grid>
  );
}
