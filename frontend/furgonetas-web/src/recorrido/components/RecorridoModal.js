import React from 'react'
import {Dialog,DialogTitle,DialogContent,Slide,Typography} from '@mui/material';
import '@fontsource/roboto/300.css';

import RecorridoFormulario from './RecorridoFormulario';

export default function RecorridoModal({ dialogOpen,handleDialogClose,cerrarSideMenu}) {
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
                <RecorridoFormulario 
                    handleDialogClose={handleDialogClose}
                    cerrarSideMenu={cerrarSideMenu}
                />
            </DialogContent>


        </Dialog>
  )
}
