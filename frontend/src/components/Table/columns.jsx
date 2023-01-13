import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { GridActionsCellItem } from '@mui/x-data-grid';

export const useColumns = ({ openPopupDelete }) => {
  return [
    {
      field: 'first_name',
      headerName: 'First name',
      editable: true,
    },
    {
      field: 'last_name',
      headerName: 'Last name',
      editable: true,
    },
    {
      field: 'email',
      headerName: 'Email',
      editable: true,
      width: 180,
    },
    {
      field: 'amount',
      headerName: 'Money',
      type: 'number',
      editable: true,
    },
    {
      field: 'amount_total',
      headerName: 'Total amount',
      type: 'number',
      width: 120,
      editable: true,
    },
    {
      field: 'request_remaining',
      headerName: 'Request remaining',
      type: 'number',
      width: 140,
      editable: true,
    },
  ]
    .map((item) => ({ ...item, sortable: false }))
    .concat([
      {
        field: 'actions',
        type: 'actions',
        headerName: 'Action',
        width: 100,
        getActions: (params) => [
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={() => {
              openPopupDelete(params.row);
            }}
          />,
        ],
      },
    ]);
};
