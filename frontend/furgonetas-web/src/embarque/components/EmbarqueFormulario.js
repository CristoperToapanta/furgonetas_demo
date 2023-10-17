import React, { useState } from 'react';
import {
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
    Select,
    FormControl,
    InputLabel,
    MenuItem,
    Typography,
    Grid,
    Paper,
    Box,
} from '@mui/material';

export default function EmbarqueFormulario({
    handleDialogClose,
    cerrarSideMenu
}) {

    const [cedula, setCedula] = useState('');
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [edad, setEdad] = useState('');
    const [direccion, setDireccion] = useState('');
    const [institucionEducativa, setInstitucionEducativa] = useState('');
    const [direccionInstitucion, setDireccionInstitucion] = useState('');

    return (
        <>
            <Grid container spacing={2}>
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
