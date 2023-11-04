import React, { useContext, useState, useEffect } from 'react';
import {
    Button,
    DialogActions,
    TextField,
    Select,
    FormControl,
    InputLabel,
    MenuItem,
    Typography,
    Grid,
    Box,
} from '@mui/material';

import { insertar_pasajero } from '../../server/pasajeroApi';
import { AccionContext } from '../../context/AccionesContext';

import { consultar_nombres_representantes } from '../../server/representanteApi';

export default function EmbarqueFormulario({
    handleDialogClose,
    cerrarSideMenu
}) {
    const [idrepresentante, setIdRepresentante] = useState('');
    const [cedula, setCedula] = useState('');
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [edad, setEdad] = useState('');
    const [direccion, setDireccion] = useState('');
    const [institucionEducativa, setInstitucionEducativa] = useState('');
    const [direccionInstitucion, setDireccionInstitucion] = useState('');
    const [genero, setGenero] = useState('');

    // Llamar al contexto
    const { accionPasajeros } = useContext( AccionContext );

    const handleIngresarPasajero = (data) => {

        insertar_pasajero(data)
            .then((res) => {
                // Ejecutar el evento del contexto al insertar un nuevo pasajero
                // al insertar se ejecuta la bandera dentro del metodo
                accionPasajeros()
                console.log("Se inserto?: ", res)
            })
            .catch((err) => {
                console.log("Ocurrio un error al insertar el pasajero: ", err)
            })

    }

    const [representantes, setRepresentantes] = useState([]);
    /*const [nombresRep, setNombresRep] = useState('');
    const [idRepresentantes, setIdRepresentantes] = useState('');*/

    useEffect(() => {
        consultar_nombres_representantes()
            .then((res) => {
                console.log("Lista: ", res.data.lista)
                setRepresentantes(res.data.lista)
                setIdRepresentante(res.data.lista)
            })
            .catch((err) => {
                console.log(err)
            })
    },[])
    

    return (
        <>
            <Grid container spacing={2}>
                
                <Grid item xs={12}>

                <FormControl
                    fullWidth
                    style={{
                        marginTop: '6px'
                    }}
                >
                <InputLabel sx={{
                    marginTop: '10px'
                }}>Representante</InputLabel>
                <Select
                    label="Representante"
                    value={idrepresentante}
                    onChange={(e) => setIdRepresentante(e.target.value)}
                    
                    style={{
                        marginTop: '10px'
                    }}
                >
                    {representantes.map((representante) =>(
                        <MenuItem key={representante.id_representante} value={representante.id_representante}>{representante.id_representante}    {representante.nombre_representante}</MenuItem>
                    ))}
                </Select>
                 </FormControl>

                </Grid>

                
               

                <Grid item xs={6}>
                    <TextField
                        label="Cédula"
                        fullWidth
                        type="number"
                        value={cedula}
                        onChange={(e) => setCedula(e.target.value)}
                        margin="normal"
                    />
                </Grid>
                <Grid item xs={6}>
                    <FormControl
                        fullWidth
                        style={{
                            marginTop: '6px'
                        }}
                    >
                        <InputLabel sx={{
                            marginTop: '10px'
                        }}>Edad</InputLabel>
                        <Select
                            label="Edad"
                            value={edad}
                            onChange={(e) => setEdad(e.target.value)}
                            style={{
                                marginTop: '10px'
                            }}
                        >
                            {Array.from({ length: 100 }, (_, i) => (
                                <MenuItem key={i} value={i + 1}>
                                    {i + 1}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
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
                        label="Institución"
                        fullWidth
                        value={institucionEducativa}
                        onChange={(e) => setInstitucionEducativa(e.target.value)}
                        margin="normal"
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        label="Direccion Institucion"
                        fullWidth
                        value={direccionInstitucion}
                        onChange={(e) => setDireccionInstitucion(e.target.value)}
                        margin="normal"
                    />
                </Grid>
                <Grid item xs={6}>

                <FormControl
                        fullWidth
                        style={{
                            marginTop: '6px'
                        }}
                    >
                        <InputLabel sx={{
                            marginTop: '10px'
                        }}>Género</InputLabel>
                        <Select
                            label="genero"
                            value={genero}
                            onChange={(e) => setGenero(e.target.value)}
                            style={{
                                marginTop: '10px'
                            }}
                        >
                           <MenuItem value={'masculino'}>masculino</MenuItem>
                           <MenuItem value={'femenino'}>femenino</MenuItem>
                        </Select>
                    </FormControl>

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

                            const data_pasajero = {
                                "id_representante": idrepresentante, 
                                "cedula_pasajero": cedula, 
                                "nombre_pasajero": nombre+' '+apellido, 
                                "estado_pasajero": true, 
                                "direccion_pasajero": direccion, 
                                "edad_pasajero": edad, 
                                "institucion_pasajero": institucionEducativa, 
                                "direccion_institucion": direccionInstitucion,
                                "genero_pasajero":genero
                            }

                            handleIngresarPasajero(data_pasajero)
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

    );
}