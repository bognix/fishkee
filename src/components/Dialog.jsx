import React from 'react'
import Dialog, {
    DialogActions,
    DialogContent,
    DialogContentText,
  } from 'material-ui/Dialog';

export default ({show, onDialogClose}) => {
    return (
        <Dialog open={show} onRequestClose={onDialogClose}>
            Test
        </Dialog>
    )
}
