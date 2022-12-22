import React from 'react';
import Paper from '@mui/material/Paper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';

export default function AdminMenu() {
  return (
    <Stack direction="row" spacing={2} sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%' }}>
        <MenuList>
          <MenuItem>Users</MenuItem>
        </MenuList>
      </Paper>
    </Stack>
  );
}
