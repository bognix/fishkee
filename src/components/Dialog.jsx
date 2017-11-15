import React from 'react'
import Dialog, {
    DialogContent,
    DialogContentText,
    DialogTitle
  } from 'material-ui/Dialog';

export default ({show, onDialogClose}) => {
    return (
        <Dialog open={show} onRequestClose={onDialogClose}>
          <DialogTitle>Dodaj Fiszke</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To subscribe to this website, please enter your email address here. We will send
              updates occationally.
            </DialogContentText>
          </DialogContent>
        </Dialog>
    )
}
