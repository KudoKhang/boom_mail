import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import { useFormData } from '../../hooks/useFormData';

const TARGET_URL = 'https://perfectmoney.com/api/step1.asp';
const PAYMENT_OPTIONS = {
  PAYEE_ACCOUNT: 'U14526665',
  PAYEE_NAME: 'boomcheck.io',
  PAYMENT_ID: 'BOOMCHECK',
  PAYMENT_UNITS: 'USD',
  STATUS_URL: 'https://boomcheck.io/handlers/paymentHandler.php?for=k',
  PAYMENT_URL: 'https://boomcheck.io/handlers/paymentHandler.php?for=k',
  PAYMENT_URL_METHOD: 'POST',
  NOPAYMENT_URL: 'http://0.0.0.0:8001/payment',
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

  // const handleSubmit = async () => {
  //   const params = { ...PAYMENT_OPTIONS, ...formData };
  //   const urlParams = new URLSearchParams(Object.entries(params));
  //   const fullUrl = `${TARGET_URL}?${urlParams.toString()}`;

  //   const res = await toExternalPayment(fullUrl);
  //   window.location.replace(fullUrl);
  // };

  return (
    <Container maxWidth="xs" sx={{ mt: 8 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Box component="form" action={TARGET_URL} sx={{ width: '100%' }} method="POST">
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  {Object.entries(PAYMENT_OPTIONS).map(([key, value]) => (
                    <input key={key} name={key} value={value} type="hidden" />
                  ))}
                  <TextField
                    id="input-amount"
                    name="PAYMENT_AMOUNT"
                    type="number"
                    label="Số tiền cần nạp"
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
                Thực hiện
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
