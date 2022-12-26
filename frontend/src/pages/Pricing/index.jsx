import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';
import Typography from '@mui/material/Typography';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import { useOutletContext } from 'react-router-dom';
import { buyPackage } from '../../api';
import { useAlert } from '../../contexts/alert';
import ConfirmDialog from '../../components/ConfirmDialog';

const tiers = [
  {
    title: 'Normal',
    price: '20',
    description: ['1.000 request spam', 'Help center access', 'Email support'],
    text: 'Buy',
    value: 'normal',
  },
  {
    title: 'Vip',
    subheader: 'Most popular',
    price: '80',
    description: ['5.000 request spam', 'Save 20% money', 'Phone & email support'],
    text: 'Buy',
    value: 'vip',
  },
  {
    title: 'Pro',
    price: '130',
    description: ['10.000 request spam', 'Save 35% money', 'Phone & email support'],
    text: 'Buy',
    value: 'pro',
  },
];

export default function Pricing() {
  // const navigate = useNavigate();
  const { showSuccess, showError } = useAlert();
  const [openConfirmPopup, setOpenConfirmPopup] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});
  const { reloadUser } = useOutletContext();

  const handleBuy = async () => {
    try {
      await buyPackage(selectedItem?.value);
      await reloadUser();
      showSuccess('Buy successful');
    } catch (error) {
      showError(error?.response?.data?.message || error?.message);
    } finally {
      closePopup();
    }
  };

  const openPopup = (selected) => {
    setOpenConfirmPopup(true);
    setSelectedItem(selected);
  };

  const closePopup = () => {
    setOpenConfirmPopup(false);
    setSelectedItem({});
  };

  return (
    <>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      {/* Hero unit */}
      <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
        <Typography component="h1" variant="h2" align="center" color="text.primary" gutterBottom>
          Pricing
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" component="p">
          Email spam price list. If you have any questions or need advice, please contact the shop
          owner directly for answers.
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main" sx={{ mb: 3 }}>
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid item key={tier.title} xs={12} sm={tier.title === 'Enterprise' ? 12 : 6} md={4}>
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  action={tier.title === 'Pro' ? <StarIcon /> : null}
                  subheaderTypographyProps={{
                    align: 'center',
                  }}
                  sx={{
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'light'
                        ? theme.palette.grey[200]
                        : theme.palette.grey[700],
                  }}
                />
                <CardContent>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'baseline',
                      mb: 2,
                    }}
                  >
                    <Typography component="h2" variant="h3" color="text.primary">
                      ${tier.price}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      /mo
                    </Typography>
                  </Box>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography component="li" variant="subtitle1" align="center" key={line}>
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button variant="outlined" fullWidth onClick={() => openPopup(tier)}>
                    {tier.text}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <ConfirmDialog
        open={openConfirmPopup}
        title="Confirm"
        content={`Do you want buy package ${selectedItem?.title}?`}
        handleCancel={closePopup}
        handleConfirm={handleBuy}
      />
    </>
  );
}
