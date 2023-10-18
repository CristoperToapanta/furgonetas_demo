import { Box, Button, Modal, TextField, Stack } from '@mui/material';
import React, {useState} from 'react';
import PasajerosTabla from './components/PasajerosTabla';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};


export default function PasajerosScreen() {
 
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

    const [cedula, setCedula] = useState('');
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [edad, setEdad] = useState('');
    const [direccion, setDireccion] = useState('');
    const [institucionEducativa, setInstitucionEducativa] = useState('');
    const [direccionInstitucion, setDireccionInstitucion] = useState('');
 
    function handleSubmit(event) {
        event.preventDefault();
        console.log(cedula, nombre, apellido, edad, direccion, institucionEducativa, direccionInstitucion) 
    }
  
    return (
      <div>
      <Button variant="contained" color="warning" onClick={handleOpen}>Crear Pasajero</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
        <React.Fragment>
            <h2>Agregar Pasajero</h2>
            <form onSubmit={handleSubmit}>
            
                  <Stack spacing={2} direction="row" sx={{marginBottom: 4}}>
                    <TextField
                        type="text"
                        variant='outlined'
                        color='warning'
                        label="Cédula"
                        onChange={e => setCedula(e.target.value)}
                        value={cedula}
                        fullWidth
                        required
                    />
                    </Stack>
                    <Stack spacing={2} direction="row" sx={{marginBottom: 4}}>
                    <TextField
                        type="text"
                        variant='outlined'
                        color='warning'
                        label="Nombre"
                        onChange={e => setNombre(e.target.value)}
                        value={nombre}
                        fullWidth
                        required
                    />
                
                <TextField
                        type="text"
                        variant='outlined'
                        color='warning'
                        label="Apellido"
                        onChange={e => setApellido(e.target.value)}
                        value={apellido}
                        fullWidth
                        required
                    />
                </Stack>

                <Stack spacing={2} direction="row" sx={{marginBottom: 4}}>
                <TextField
                        type="text"
                        variant='outlined'
                        color='warning'
                        label="Edad"
                        onChange={e => setEdad(e.target.value)}
                        value={edad}
                        fullWidth
                        required
                    />

                    <TextField
                        type="text"
                        variant='outlined'
                        color='warning'
                        label="Dirección"
                        onChange={e => setDireccion(e.target.value)}
                        value={direccion}
                        fullWidth
                        required
                    />
                </Stack>

                <Stack spacing={2} direction="row" sx={{marginBottom: 4}}>
                    <TextField
                        type="text"
                        variant='outlined'
                        color='warning'
                        label="Intitución Educativa"
                        onChange={e => setInstitucionEducativa(e.target.value)}
                        value={institucionEducativa}
                        fullWidth
                        required
                    />
                </Stack>

                <Stack spacing={2} direction="row" sx={{marginBottom: 4}}>
                    <TextField
                        type="text"
                        variant='outlined'
                        color='warning'
                        label="Dirección Institución Educativa"
                        onChange={e => setDireccionInstitucion(e.target.value)}
                        value={direccionInstitucion}
                        fullWidth
                        required
                    />
                    </Stack>

                <Button variant="contained" color="warning" type="submit">Agregar</Button>
            </form>
        </React.Fragment>
        </Box>
      </Modal>
      <Stack spacing={2} direction="row" sx={{marginTop: 4}}>
        <PasajerosTabla/>
      </Stack>
    </div>
  );
}
