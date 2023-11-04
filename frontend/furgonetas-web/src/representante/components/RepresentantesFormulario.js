import React, { useContext, useState } from 'react';
import {
    Button,
    DialogActions,
    TextField,
    Typography,
    Grid,
    Box,
} from '@mui/material';

import { insertar_representante } from '../../server/representanteApi';
import { AccionContext } from '../../context/AccionesContext';

export default function RepresentantesFormulario({handleDialogClose,cerrarSideMenu}) {

    const [cedula, setCedula] = useState('');
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [direccion, setDireccion] = useState('');
    const [parentesco, setParentesco] = useState('');

    // llamando al contexto
    const { accionRepresentante } = useContext(AccionContext);

    const handleIngresarRepresentante = (data) => {
        insertar_representante(data)
            .then((res) => {
                accionRepresentante()
                console.log("Se inserto?: ", res)

            }).catch((err) => {
                console.log("Ocurrio un error al insertar un representante: ", err)
            })
    }

  return (
    <>
            <Grid container spacing={2}>
                
                <Grid item xs={12}>
                    <TextField
                        label="Cédula"
                        fullWidth
                        value={cedula}
                        onChange={(e) => setCedula(e.target.value)}
                        margin="normal"
                    />
                </Grid>

                <Grid item xs={6}>
                    <TextField
                        label="Nombre"
                        fullWidth
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        margin="normal"
                    />
                </Grid>

                <Grid item xs={6}>
                    <TextField
                        label="Apellido"
                        fullWidth
                        value={apellido}
                        onChange={(e) => setApellido(e.target.value)}
                        margin="normal"
                    />
                </Grid>

                <Grid item xs={6}>
                    <TextField
                        label="Dirección"
                        fullWidth
                        value={direccion}
                        onChange={(e) => setDireccion(e.target.value)}
                        margin="normal"
                    />
                </Grid>

                <Grid item xs={6}>
                    <TextField
                        label="Parentesco"
                        fullWidth
                        value={parentesco}
                        onChange={(e) => setParentesco(e.target.value)}
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

                            const data_representante = {
                                "cedula_representante": cedula,
                                "nombre_representante": nombre+' '+apellido,
                                "direccion_representante": direccion,
                                "parentesco_representante": parentesco 
                            }

                            handleIngresarRepresentante(data_representante)
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
