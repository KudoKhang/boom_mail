import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import AdminMenu from '../../../components/AdminMenu';
import Table from '../../../components/Table';
import { getUsers } from '../../../api';
import { useHandleError } from '../../../hooks/useHandleError';

export default function Dashboard() {
  const [users, setUsers] = useState([]);
  const { handleResponseMsg } = useHandleError();

  useEffect(() => {
    (async () => {
      try {
        const list = await getUsers();
        setUsers(list);
      } catch (error) {
        handleResponseMsg(error);
      }
    })();
  }, []);

  return (
    <Container maxWidth="xl" sx={{ mt: 8 }}>
      <Grid container spacing={2}>
        <Grid item sm={3}>
          <AdminMenu />
        </Grid>
        <Grid item sm={9}>
          <Table rows={users} />
        </Grid>
      </Grid>
    </Container>
  );
}
