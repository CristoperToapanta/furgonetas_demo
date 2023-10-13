import React from 'react'

import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    Slide,
    Typography,
    makeStyles 
} from '@mui/material';
import '@fontsource/roboto/300.css';
import EmbarqueFormulario from './EmbarqueFormulario';
export default function EmbarqueModal({
    dialogOpen,
    setDialogOpen,
    handleDialogOpen,
    handleDialogClose
}) {

    return (

        <Dialog
            open={dialogOpen}
            TransitionComponent={Slide}
            onClose={handleDialogClose}
            fullWidth
            maxWidth="sm"
            sx={{
                borderRadius: '15px', // Aplica el borde redondo de 15px
            }}
        >

            <DialogTitle
               align='center'
               mt={2}
            >
                <Typography
                   fontSize={20}
                   fontWeight={'bold'}
                >
                    Embarque de Pasajeros
                </Typography>
            </DialogTitle>

            <DialogContent>
                 <EmbarqueFormulario 
                     handleDialogClose={handleDialogClose}
                 />
            </DialogContent>


        </Dialog>

    )

}