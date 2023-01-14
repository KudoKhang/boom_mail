import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import AdminMenu from '../../../components/AdminMenu';
import Table from '../../../components/Table';
import { getTotalAmountByAd, getUsers, searchUser, updateUser } from '../../../api';
import { useHandleError } from '../../../hooks/useHandleError';
import { useAlert } from '../../../contexts/alert';
import { useLoading } from '../../../contexts/loading';
import { useFormData } from '../../../hooks/useFormData';

export default function Dashboard() {
  const [users, setUsers] = useState([]);
  const { handleResponseMsg, handleAdminUnauthorized } = useHandleError();
  const { loading, showLoading, hideLoading } = useLoading();
  const [totalAmount, setTotalAmount] = useState(0);
  const { showSuccess } = useAlert();
  const { formData, onInputChange } = useFormData();

  const handleSearch = async () => {
    if (loading) return;
    showLoading();

    try {
      const { search } = formData;
      if (!search || search.trim() === '') {
        const list = await getUsers();
        setUsers(list);
        return;
      }
      const list = await searchUser({ email_user: search });
      setUsers(list);
    } catch (error) {
      handleAdminUnauthorized(error);
      handleResponseMsg(error);
    } finally {
      hideLoading();
    }
  };

  useEffect(() => {
    document.title = 'Dashboard';
    hideLoading();
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
    showLoading();

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
      hideLoading();
    }
  };

  return (
    <Container maxWidth={false} sx={{ my: 8 }}>
      <Grid container spacing={2}>
        <Grid item sm={3}>
          <AdminMenu totalAmount={totalAmount} />
        </Grid>
        <Grid item sm={9} sx={{ display: 'flex', height: '100%', flexDirection: 'column' }}>
          <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search email"
              inputProps={{ 'aria-label': 'search-email' }}
              name="search"
              onChange={onInputChange}
            />
            <IconButton
              type="button"
              sx={{ p: '10px' }}
              aria-label="search-email"
              onClick={handleSearch}
            >
              <SearchIcon />
            </IconButton>
          </Paper>
          <Box component="div" sx={{ height: 650, width: '100%', mt: 4 }}>
            <Table rows={users} onSubmit={onSubmit} setRows={setUsers} />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
