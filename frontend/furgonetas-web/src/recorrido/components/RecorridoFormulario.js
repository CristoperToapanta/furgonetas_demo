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

import {insertar_recorridos} from '../../server/recorridoApi';
import { AccionContext } from '../../context/AccionesContext';

/* extrayendo los datos de tres entidades de la base de datos */
import {nombres_conductor} from '../../server/conductorApi';
import {nombres_pasajeros} from '../../server/pasajeroApi';
import {consultar_placas} from '../../server/furgonetaApi';

export default function RecorridoFormulario({handleDialogClose,cerrarSideMenu}) {

  const [idconductor, setIdConductor] = useState('');
  const [idpasajero, setIdPasajero] = useState('');
  const [idplaca, setIdPlaca] = useState('');
  const [tiporecorrido, setTiporecorrrido] = useState('');

  // Llamar al contexto
  const { accionRecorrido } = useContext(AccionContext);

  const handleIngresarRecorrido = (data) => {
    insertar_recorridos(data)
      .then((res) => {
        accionRecorrido()
        console.log("Se inserto?: ", res)
      }).catch((err) => {
        console.log("Ocurrio un error al insertar el pasajero: ", err)
      })
  }

  const [conductores, setConductores] = useState([]);
  const [pasajeros, setPasajeros] = useState([]);
  const [furgonetas, setFurgonetas] = useState([]);

  useEffect(() => {
    nombres_conductor()
      .then((res) => {
        console.log("Lista: ", res.data.lista)
        setConductores(res.data.lista)
        setIdConductor(res.data.lista)
      })
      .catch((err) => {
        console.log(err)
      })

    nombres_pasajeros()
      .then((res) => {
        console.log("Lista: ", res.data.lista)
        setPasajeros(res.data.lista)
        setIdPasajero(res.data.lista)
      })
      .catch((err) => {
        console.log(err)
      })

    consultar_placas()
      .then((res) => {
        console.log("Lista: ", res.data.lista)
        setFurgonetas(res.data.lista)
        setIdPlaca(res.data.lista)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <>
    <Grid container spacing={2}>
        
        <Grid item xs={6}>
          <FormControl
              fullWidth
              style={{
                  marginTop: '6px'
              }}
          >
          <InputLabel sx={{
              marginTop: '10px'
          }}>Conductor</InputLabel>
            <Select
                label="Conductor"
                value={idconductor}
                onChange={(e) => setIdConductor(e.target.value)}
                
                style={{
                    marginTop: '10px'
                }}
            >
                {conductores.map((conductor) =>(
                    <MenuItem key={conductor.id_conductor} value={conductor.id_conductor}>{conductor.id_conductor}    {conductor.nombre_conductor}</MenuItem>
                ))}
            </Select>
          </FormControl>
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
          }}>Pasajero</InputLabel>
            <Select
                label="Pasajero"
                value={idpasajero}
                onChange={(e) => setIdPasajero(e.target.value)}
                
                style={{
                    marginTop: '10px'
                }}
            >
                {pasajeros.map((pasajero) =>(
                    <MenuItem key={pasajero.id_pasajero} value={pasajero.id_pasajero}>{pasajero.id_pasajero}    {pasajero.nombre_pasajero}</MenuItem>
                ))}
            </Select>
          </FormControl>
        </Grid>

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
                value={idplaca}
                onChange={(e) => setIdPlaca(e.target.value)}
                
                style={{
                    marginTop: '10px'
                }}
            >
                {furgonetas.map((furgoneta) =>(
                    <MenuItem key={furgoneta.id_furgoneta} value={furgoneta.id_furgoneta}>{furgoneta.id_furgoneta}   {furgoneta.placa_furgoneta}</MenuItem>
                ))}
            </Select>
          </FormControl>
        </Grid>
        
        <Grid item xs={12}>
            <TextField
                label="Tipo Recorrido"
                fullWidth
                value={tiporecorrido}
                onChange={(e) => setTiporecorrrido(e.target.value)}
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

                    const data_recorrido = {
                        "id_conductor": idconductor, 
                        "id_pasajero": idpasajero,
                        "id_furgoneta": idplaca,
                        "tipo_recorrido": tiporecorrido
                    }

                    handleIngresarRecorrido(data_recorrido)
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
