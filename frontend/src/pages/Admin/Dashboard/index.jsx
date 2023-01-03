import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import AdminMenu from '../../../components/AdminMenu';
import Table from '../../../components/Table';
import { getTotalAmountByAd, getUsers, updateUser } from '../../../api';
import { useHandleError } from '../../../hooks/useHandleError';
import { useAlert } from '../../../contexts/alert';

export default function Dashboard() {
  const [users, setUsers] = useState([]);
  const { handleResponseMsg, handleAdminUnauthorized } = useHandleError();
  const [loading, setLoading] = useState(false);
  const [totalAmount, setTotalAmount] = useState(0);
  const { showSuccess } = useAlert();

  useEffect(() => {
    document.title = 'Dashboard';
    (async () => {
      try {
        const total = await getTotalAmountByAd();
        setTotalAmount(total);
        const list = await getUsers();
        setUsers(list);
      } catch (error) {
        handleAdminUnauthorized(error);
        handleResponseMsg(error);
      }
    })();
  }, []);

  const onSubmit = async (data) => {
    if (loading) return;
    setLoading(true);

    try {
      const { email, field, value } = data;
      await updateUser({
        email_user: email,
        properties: field,
        value,
      });
      showSuccess('Update successful');
    } catch (error) {
      handleAdminUnauthorized(error);
      handleResponseMsg(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth={false} sx={{ my: 8 }}>
      <Grid container spacing={2}>
        <Grid item sm={3}>
          <AdminMenu totalAmount={totalAmount} />
        </Grid>
        <Grid item sm={9} sx={{ display: 'flex', height: '100%' }}>
          <Box component="div" sx={{ height: 650, width: '100%' }}>
            <Table rows={users} onSubmit={onSubmit} setRows={setUsers} />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
