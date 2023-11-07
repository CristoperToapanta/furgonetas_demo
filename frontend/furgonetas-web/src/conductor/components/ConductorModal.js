import React from 'react'

import {
    Dialog,
    DialogTitle,
    DialogContent,
    Slide,
    Typography
} from '@mui/material';
import '@fontsource/roboto/300.css';

import ConductorFormulario from './ConductorFormulario';


export default function ConductorModal({dialogOpen,handleDialogClose,cerrarSideMenu}) {
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
                    Registro de Conductores
                </Typography>
            </DialogTitle>

            <DialogContent>
                <ConductorFormulario 
                    handleDialogClose={handleDialogClose}
                    cerrarSideMenu={cerrarSideMenu}
                />
            </DialogContent>


        </Dialog>

  )
}
