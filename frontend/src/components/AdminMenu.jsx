import React from 'react';
import Paper from '@mui/material/Paper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';
import Typo from '@mui/material/Typography';

export default function AdminMenu({ totalAmount }) {
  return (
    <Stack direction="row" spacing={2} sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%' }}>
        <Typo component="div" sx={{ display: 'flex', padding: '6px 16px' }}>
          <Typo>Total amount: </Typo>
          <Typo sx={{ ml: 1 }}>$ {totalAmount}</Typo>
        </Typo>
        <MenuList>
          <MenuItem>Users</MenuItem>
        </MenuList>
      </Paper>
    </Stack>
  );
}
