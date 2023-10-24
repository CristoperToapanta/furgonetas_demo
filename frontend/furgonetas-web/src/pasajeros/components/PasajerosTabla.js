import initConfig from '../../configs/initConfig'
import axios from 'axios'
import { Table, TableBody, TableContainer, TableHead, TableRow, Paper } from '@mui/material'
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import React, { useEffect, useState } from 'react';



const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));


  const URI = initConfig.host + "/prueba/listado-pasajeros";
  

export default function PasajerosTabla() {

  const [pasajeros, setPasajero] = useState([])
  useEffect(()=>{
    obtenerPasajeros()
  },[])

  const obtenerPasajeros = async () => {
    const res = await axios.get(URI);
    setPasajero(res.data)
  }

  return (
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 700 }} aria-label="customized table">
      <TableHead>
        <TableRow>
          <StyledTableCell>Representante</StyledTableCell>
          <StyledTableCell align="center">Cédula Pasajero</StyledTableCell>
          <StyledTableCell align="center">Nombre Pasajero</StyledTableCell>
          <StyledTableCell align="center">Dirección Pasajero</StyledTableCell>
          <StyledTableCell align="center">Edad Pasajero</StyledTableCell>
          <StyledTableCell align="center">Institución Pasajero</StyledTableCell>
          <StyledTableCell align="center">Dirección Institución</StyledTableCell>
          <StyledTableCell align="center">Género Pasajero</StyledTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {pasajeros.map((pasajero) => (
          <StyledTableRow key={pasajero.id_pasajero}>
            <StyledTableCell align="center">{pasajero.nombre_representante}</StyledTableCell>
            <StyledTableCell align="center">{pasajero.cedula_pasajero}</StyledTableCell>
            <StyledTableCell align="center">{pasajero.nombre_pasajero}</StyledTableCell>
            <StyledTableCell align="center">{pasajero.direccion_pasajero}</StyledTableCell>
            <StyledTableCell align="center">{pasajero.edad_pasajero}</StyledTableCell>
            <StyledTableCell align="center">{pasajero.institucion_pasajero}</StyledTableCell>
            <StyledTableCell align="center">{pasajero.direccion_institucion}</StyledTableCell>
            <StyledTableCell align="center">{pasajero.genero}</StyledTableCell>
          </StyledTableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  );
}
