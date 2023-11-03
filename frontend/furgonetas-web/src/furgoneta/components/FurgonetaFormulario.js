import React, { useContext, useState } from 'react';
import {
    Button,
    DialogActions,
    TextField,
    Typography,
    Grid,
    Box,
} from '@mui/material';

import {insertar_furgoneta} from '../../server/furgonetaApi'
import {AccionContext} from '../../context/AccionesContext'

export default function FurgonetaFormulario({handleDialogClose,cerrarSideMenu}) {

    const [placa, setPlaca] = useState('');

    // llamando al contexto
    const {accionFurgonetas} = useContext(AccionContext);

    const handleIngresarFurgonetas = (data) => {
        insertar_furgoneta(data)
            .then((res) => {
                accionFurgonetas()
                console.log("Se inserto?: ", res)
            }).catch((err) => {
                console.log("Ocurrio un error al insertar una furgoneta: ", err)
            })
    }

  return (
    <>
            <Grid container spacing={2}>
                
                <Grid item xs={12}>
                    <TextField
                        label="Placa Furgoneta"
                        fullWidth
                        value={placa}
                        onChange={(e) => setPlaca(e.target.value)}
                        margin="normal"
                    />
                </Grid>
               
            </Grid>

            <DialogActions
                sx={{
                    mt: '15px',
                    justifyContent: 'center',
                }}
            >

                <Box 
                    sx={{ 
                        display: 'flex', 
                        justifyContent: 'space-between', 
                        marginTop: '5px',
                        marginLeft: '10px'
                    }}
                >

                    <Button
                        onClick={()=>{

                            const data_furgoneta = {
                                "placa_furgoneta": placa, 
                            }

                            handleIngresarFurgonetas(data_furgoneta)
                            cerrarSideMenu()
                            handleDialogClose() 
                        }}
                        sx={{
                            marginRight: '10px',
                            padding: '15px',
                            paddingRight: '20px',
                            paddingLeft: '20px',
                            backgroundColor: '#65CA7C',
                            '&:hover': {
                                backgroundColor: '#65CA7C', 
                            },
                        }}
                    >
                        <Typography
                            color={'white'}
                        >
                            Aceptar
                        </Typography>
                    </Button>

                    <Button
                        onClick={handleDialogClose}
                        color="primary"
                        sx={{
                            padding: '15px',
                            paddingRight: '20px',
                            paddingLeft: '20px',
                            backgroundColor: '#AFBDB2',
                            '&:hover': {
                                backgroundColor: '#AFBDB2', 
                            },
                        }}
                    >
                        <Typography
                            color={'white'}
                        >
                            Cancelar
                        </Typography>
                    </Button>
                </Box>

            </DialogActions>
        </>
  )
}
