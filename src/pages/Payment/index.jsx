import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
// import { useNavigate } from 'react-router-dom';
import { useFormData } from '../../hooks/useFormData';
// import { toExternalPayment } from '../../api';

const TARGET_URL = 'https://perfectmoney.com/api/step1.asp';
const PAYMENT_OPTIONS = {
  PAYEE_ACCOUNT: 'U14526665',
  PAYMENT_NAME: 'boomcheck.io',
  PAYMENT_ID: 'BOOMCHECK',
  PAYMENT_UNITS: 'USD',
  STATUS_URL: 'https://boomcheck.io/handlers/paymentHandler.php?for=k',
  PAYMENT_URL: 'https://boomcheck.io/handlers/paymentHandler.php?for=k',
  PAYMENT_URL_METHOD: 'POST',
  NOPAYMENT_URL: 'http://0.0.0.0:8000/payment',
  NOPAYMENT_URL_METHOD: 'GET',
  SUGGESTED_MEMO: '',
  BAGGAGE_FIELDS: '',
};

export default function Payment() {
  const { formData, onInputChange } = useFormData();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const params = { ...PAYMENT_OPTIONS, ...formData };
    const urlParams = new URLSearchParams(Object.entries(params));
    const fullUrl = `${TARGET_URL}?${urlParams.toString()}`;

    // const res = await toExternalPayment(fullUrl);
    // window.location.replace(fullUrl);
    window.location = TARGET_URL;
    const form = React.createElement('form', { action: TARGET_URL, method: 'POST', body: params });
    form.submit();
  };

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
            <Box component="form" onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    id="input-amount"
                    name="PAYMENT_AMOUNT"
                    type="number"
                    label="Số tiền cần nạp"
                    required
                    fullWidth
                    onChange={onInputChange}
                  />
                </Grid>
              </Grid>
              <Button type="submit" variant="contained" sx={{ my: 3 }} fullWidth>
                Thực hiện
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
