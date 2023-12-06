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

    // validación de los textfields
    const [errorCedula, setErrorCedula] = useState(false);
    const [errorNombre, setErrorNombre] = useState(false);
    const [errorApellido, setErrorApellido] = useState(false);
    const [errorDireccion, setErrorDireccion] = useState(false);
    const [errorParentesco, setErrorParentesco] = useState(false);

    const [msgErrorCedula, setMsgErrorCedula] = useState('');
    const [msgErrorNombre, setMsgErrorNombre] = useState('');
    const [msgErrorApellido, setMsgErrorApellido] = useState('');
    const [msgErrorDireccion, setMsgErrorDireccion] = useState('');
    const [msgErrorParentesco, setMsgErrorParentesco] = useState('');

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
                        error={errorCedula}
                        label="Cédula"
                        fullWidth
                        value={cedula}
                        onChange={(e) => {
                            setCedula(e.target.value)
                            if(cedula.length >= 10){
                                setErrorCedula(true);
                                setMsgErrorCedula("La cédula no debe ser mayor a 10 Digitos");
                            }else if(isNaN(cedula)){
                                setErrorCedula(true);
                                setMsgErrorCedula("Debe Ingresar solo Digitos");
                            }else{
                                setErrorCedula(false);
                                setMsgErrorCedula("");
                            }
                        }}
                        margin="normal"
                        helperText={msgErrorCedula}
                    />
                </Grid>

                <Grid item xs={6}>
                    <TextField
                        error={errorNombre}
                        label="Nombre"
                        fullWidth
                        value={nombre}
                        onChange={(e) => {
                            setNombre(e.target.value)
                            if(!isNaN(nombre)){
                                setErrorNombre(true);
                                setMsgErrorNombre("Debe ingresar solo letras");
                            }else{
                                setErrorNombre(false);
                                setMsgErrorNombre("");
                            }
                        }}
                        margin="normal"
                        helperText={msgErrorNombre}
                    />
                </Grid>

                <Grid item xs={6}>
                    <TextField
                        error={errorApellido}
                        label="Apellido"
                        fullWidth
                        value={apellido}
                        onChange={(e) => {
                            setApellido(e.target.value)
                            if(!isNaN(apellido)){
                                setErrorApellido(true);
                                setMsgErrorApellido("Debe ingresar solo letras");
                            }else{
                                setErrorApellido(false);
                                setMsgErrorApellido("");
                            }
                        }}
                        margin="normal"
                        helperText={msgErrorApellido}
                    />
                </Grid>

                <Grid item xs={6}>
                    <TextField
                        error={errorDireccion}
                        label="Dirección"
                        fullWidth
                        value={direccion}
                        onChange={(e) => {
                            setDireccion(e.target.value)
                            if(!isNaN(direccion)){
                                setErrorDireccion(true);
                                setMsgErrorDireccion("Debe ingresar solo letras");
                            }else{
                                setErrorDireccion(false);
                                setMsgErrorDireccion("");
                            }
                        }}
                        margin="normal"
                        helperText={msgErrorDireccion}
                    />
                </Grid>

                <Grid item xs={6}>
                    <TextField
                        error={errorParentesco}
                        label="Parentesco"
                        fullWidth
                        value={parentesco}
                        onChange={(e) => {
                            setParentesco(e.target.value)
                            if(!isNaN(parentesco)){
                                setErrorParentesco(true);
                                setMsgErrorParentesco("Debe ingresar solo letras");
                            }else{
                                setErrorParentesco(false);
                                setMsgErrorParentesco("");
                            }
                        }}
                        margin="normal"
                        helperText={msgErrorParentesco}
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
