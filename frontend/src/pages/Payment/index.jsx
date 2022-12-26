import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import Typo from '@mui/material/Typography';
import { useFormData } from '../../hooks/useFormData';
import { API_URL } from '../../config/constants';
import { localCache } from '../../utils/localStorage';

const TARGET_URL = 'https://perfectmoney.com/api/step1.asp';
const PAYMENT_OPTIONS = {
  PAYEE_ACCOUNT: 'U14526665',
  PAYEE_NAME: 'boomcheck.io',
  PAYMENT_ID: 'BOOMCHECK',
  PAYMENT_UNITS: 'USD',
  // STATUS_URL: `${API_URL}/payment`,
  PAYMENT_URL_METHOD: 'POST',
  NOPAYMENT_URL_METHOD: 'GET',
  SUGGESTED_MEMO: '',
  BAGGAGE_FIELDS: '',
  PAYMENT_METHOD: 'PerfectMoney account',
};
const PAYMENT_METHOD = 'PerfectMoney account';

export default function Payment() {
  const { formData, onInputChange } = useFormData({
    PAYMENT_AMOUNT: '',
  });

  const getPaymentUrl = () => `${API_URL}/payment?token=${localCache.getUserToken()}`;
  const getNoPaymentUrl = () => `${API_URL}/payment_failed`;

  return (
    <Container maxWidth="xs" sx={{ mt: 8 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} justifyContent="center">
          <Typo component="h1" variant="h2" align="center" color="text.primary">
            Payment 💸
          </Typo>
        </Grid>
        <Grid item xs={12}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              mt: 4,
            }}
          >
            <Box component="form" action={TARGET_URL} sx={{ width: '100%' }} method="POST">
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  {Object.entries(PAYMENT_OPTIONS).map(([key, value]) => (
                    <input key={key} name={key} value={value} type="hidden" />
                  ))}
                  <input name="PAYMENT_URL" value={getPaymentUrl()} type="hidden" />
                  <input name="NOPAYMENT_URL" value={getNoPaymentUrl()} type="hidden" />
                  <TextField
                    id="input-amount"
                    name="PAYMENT_AMOUNT"
                    type="number"
                    label="How money do you want to recharge?"
                    required
                    fullWidth
                    onChange={onInputChange}
                    value={formData.PAYMENT_AMOUNT}
                    InputProps={{
                      startAdornment: <InputAdornment position="start">$</InputAdornment>,
                    }}
                  />
                </Grid>
              </Grid>
              <Button component="label" variant="contained" sx={{ my: 3 }} fullWidth>
                <input hidden type="submit" name="PAYMENT_METHOD" value={PAYMENT_METHOD} />
                Enter
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
