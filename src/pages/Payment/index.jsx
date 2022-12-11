import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
// import { useNavigate } from 'react-router-dom';

// const PAYMENT_URL = 'https://perfectmoney.com/api/step1.asp';

export default function Payment() {
  // const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // console.log(22, e.formData);
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
              <input type="hidden" name="PAYEE_ACCOUNT" value="U14526665" />
              <input type="hidden" name="PAYEE_NAME" value="boomcheck.io" />
              <input type="hidden" name="PAYMENT_ID" value="BOOMCHECK" />
              {/* <input type="hidden" name="PAYMENT_AMOUNT" value="0.1" id="deposit-amount" /> */}
              <input type="hidden" name="PAYMENT_UNITS" value="USD" />
              <input
                type="hidden"
                name="STATUS_URL"
                value="https://boomcheck.io/handlers/paymentHandler.php?for=k"
              />
              <input
                type="hidden"
                name="PAYMENT_URL"
                value="https://boomcheck.io/handlers/paymentHandler.php?for=k"
              />
              <input type="hidden" name="PAYMENT_URL_METHOD" value="POST" />
              <input type="hidden" name="NOPAYMENT_URL" value="http://0.0.0.0:8000/payment" />
              <input type="hidden" name="NOPAYMENT_URL_METHOD" value="GET" />
              <input type="hidden" name="SUGGESTED_MEMO" value="" />
              <input type="hidden" name="BAGGAGE_FIELDS" value="" />
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    id="input-amount"
                    name="PAYMENT_AMOUNT"
                    type="number"
                    label="Số tiền cần nạp"
                    required
                    fullWidth
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
