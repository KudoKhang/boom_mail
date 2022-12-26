import React, { useCallback, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useColumns } from './columns';
import ConfirmDialog from '../ConfirmDialog';

export default function Table({ rows, onSubmit, setRows }) {
  const [promiseArguments, setPromiseArguments] = useState(null);
  const [isOpenPopupEdit, setOpenPopupEdit] = useState(false);
  const [selectedField, setSelectedField] = useState();
  const [isOpenPopupDelete, setOpenPopupDelete] = useState(false);
  const [deletedRow, setDeleteRow] = useState();

  const openPopupDelete = (row) => {
    setDeleteRow(row);
    setOpenPopupDelete(true);
  };

  const columns = useColumns({ openPopupDelete });

  const processRowUpdate = useCallback(
    (newRow, oldRow) =>
      new Promise((resolve, reject) => {
        // Save the arguments to resolve or reject the promise later
        setPromiseArguments({ resolve, reject, newRow, oldRow });
        setOpenPopupEdit(true);
      }),
    []
  );

  const clearState = () => {
    setPromiseArguments(null);
    setSelectedField();
  };

  const confirmUpdate = async () => {
    const { newRow, oldRow, reject, resolve } = promiseArguments;

    try {
      if (newRow[selectedField] === oldRow[selectedField]) {
        resolve(oldRow);
        return;
      }

      await onSubmit({
        email: newRow?.email,
        field: selectedField,
        value: newRow[selectedField],
      });
      resolve(newRow);
      clearState();
    } catch {
      reject(oldRow);
      clearState();
    } finally {
      setOpenPopupEdit(false);
    }
  };

  const cancelUpdate = () => {
    const { oldRow, resolve } = promiseArguments;
    resolve(oldRow); // Resolve with the old row to not update the internal state
    clearState();
    setOpenPopupEdit(false);
  };

  const confirmDelete = async () => {
    try {
      await onSubmit({
        email: deletedRow?.email,
        field: 'delete',
        value: '',
      });
      setRows((prev) => prev.filter((item) => item.email !== deletedRow?.email));
      setDeleteRow();
    } finally {
      setOpenPopupDelete(false);
    }
  };

  const cancelDelete = () => {
    setOpenPopupDelete(false);
    setDeleteRow();
  };

  return (
    <>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        disableSelectionOnClick
        disableColumnMenu
        experimentalFeatures={{ newEditingApi: true }}
        getRowId={(params) => params?.email}
        processRowUpdate={processRowUpdate}
        onCellEditStop={(params) => {
          setSelectedField(params.field);
        }}
      />
      <ConfirmDialog
        open={isOpenPopupEdit}
        title="Update user"
        content="Are you sure to update this user?"
        handleCancel={cancelUpdate}
        handleConfirm={confirmUpdate}
      />
      <ConfirmDialog
        open={isOpenPopupDelete}
        title="Delete user"
        content="Are you sure to delete this user?"
        handleCancel={cancelDelete}
        handleConfirm={confirmDelete}
      />
    </>
  );
}
