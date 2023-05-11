//@ts-nocheck
import React from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { emptyUser } from "../resources/User.ts";

function AlertDialog(props) {

  const { open, setOpen, selectedUser, setAcceptDelete } = props

  const handleClose = () => {
    setOpen(false);
  };
  const handleAccept = () => {
    setOpen(false);
    setAcceptDelete(true);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {selectedUser !== emptyUser ? `¿Quieres eliminar al usuario ${selectedUser.data().name}?` : ''}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            No se podrá recuperar el usuario
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>No eliminar</Button>
          <Button onClick={handleAccept} autoFocus>
            Eliminar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default AlertDialog;