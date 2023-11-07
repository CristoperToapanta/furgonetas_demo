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

import { insertar_conductor } from '../../server/conductorApi';
import { AccionContext } from '../../context/AccionesContext';

import { consultar_furgonetas } from '../../server/furgonetaApi';



export default function ConductorFormulario({handleDialogClose,cerrarSideMenu}) {

    const [idfurgoneta, setIdFurgoneta] = useState('');
    const [cedula, setCedula] = useState('');
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [edad, setEdad] = useState('');
    const [licencia, setLicencia] = useState('');
    const [direccion, setDireccion] = useState('');

     // Llamar al contexto
     const { accionConductor } = useContext(AccionContext);

     const handleIngresarConductor = (data) => {
        insertar_conductor(data)
            .then((res) => {
                accionConductor()
                console.log("Se inserto?: ", res)
            }).catch((err) => {
                console.log("Ocurrio un error al insertar un conductor: ", err)
            })
     }

     const [furgonetas, setFurgonetas] = useState([]);

     useEffect(() => {
        consultar_furgonetas()
        .then((res) => {
            console.log("Lista: ", res.data.lista)
            setFurgonetas(res.data.lista)
            setIdFurgoneta(res.data.lista)
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
                }}>Furgoneta</InputLabel>
                <Select
                    label="Furgoneta"
                    value={idfurgoneta}
                    onChange={(e) => setIdFurgoneta(e.target.value)}
                    
                    style={{
                        marginTop: '10px'
                    }}
                >
                    {furgonetas.map((furgoneta) =>(
                        <MenuItem key={furgoneta.id_furgoneta} value={furgoneta.id_furgoneta}>{furgoneta.id_furgoneta}    {furgoneta.placa_furgoneta}</MenuItem>
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
                        label="Tipo de Licencia"
                        fullWidth
                        value={licencia}
                        onChange={(e) => setLicencia(e.target.value)}
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

                            const data_conductor = {
                                "id_furgoneta": idfurgoneta, 
                                "cedula_conductor": cedula, 
                                "nombre_conductor": nombre+' '+apellido,   
                                "edad_conductor": edad, 
                                "tipo_licencia_conductor": licencia,
                                "direccion_conductor": direccion
                            }

                            handleIngresarConductor(data_conductor)
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
