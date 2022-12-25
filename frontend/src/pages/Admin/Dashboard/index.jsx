import React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import AdminMenu from '../../../components/AdminMenu';
import Table from '../../../components/Table';
import { rows } from './helper';

export default function Dashboard() {
  return (
    <Container maxWidth="xl" sx={{ mt: 8 }}>
      <Grid container spacing={2}>
        <Grid item sm={3}>
          <AdminMenu />
        </Grid>
        <Grid item sm={9}>
          <Table rows={rows} />
        </Grid>
      </Grid>
    </Container>
  );
}
