import React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'first_name',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'last_name',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 150,
    editable: true,
  },
  {
    field: 'amount',
    headerName: 'Money',
    type: 'number',
    min: 0,
    width: 110,
    editable: true,
  },
  {
    field: 'amount_total',
    headerName: 'Total amount',
    type: 'number',
    min: 0,
    width: 150,
    editable: true,
  },

  {
    field: 'request_remaning',
    headerName: 'Request remaning',
    type: 'number',
    min: 0,
    width: 110,
    editable: true,
  },
].map((item) => ({ ...item, sortable: false }));

export default function Table({ rows }) {
  return (
    <Box sx={{ height: 650, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        disableSelectionOnClick
        disableColumnMenu
        editMode="row"
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
}
