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
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
  {
    field: 'amount',
    headerName: 'Money',
    type: 'number',
    width: 110,
    editable: false,
  },
  {
    field: 'amount_total',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },

  {
    field: 'request_remaning',
    headerName: 'Request remaning',
    type: 'number',
    width: 110,
    editable: false,
  },
].map((item) => ({ ...item, sortable: false }));

export default function Table({ rows }) {
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
}
