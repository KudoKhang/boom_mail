import React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
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
    field: 'request_remaning',
    headerName: 'Request remaning',
    type: 'number',
    width: 110,
    editable: false,
  },
].map((item) => ({ ...item, sortable: false }));

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', amount: 9999, request_remaning: 9 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', amount: 9999, request_remaning: 9 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', amount: 9999, request_remaning: 9 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', amount: 9999, request_remaning: 9 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', amount: 9999, request_remaning: 9 },
  { id: 6, lastName: 'Melisandre', firstName: null, amount: 9999, request_remaning: 9 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', amount: 9999, request_remaning: 9 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', amount: 9999, request_remaning: 9 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', amount: 9999, request_remaning: 9 },
];

export default function Table() {
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
