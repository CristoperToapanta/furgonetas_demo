import axios from 'axios'
import { Table, TableBody, TableContainer, TableHead, TableRow, Paper } from '@mui/material'
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import React, { useEffect, useState } from 'react'

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


  const URI = "http://192.168.1.6:3002/prueba/listado-pasajeros";
  

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
          <StyledTableCell align="right">Cédula Pasajero</StyledTableCell>
          <StyledTableCell align="right">Nombre Pasajero</StyledTableCell>
          <StyledTableCell align="right">Estado</StyledTableCell>
          <StyledTableCell align="right">Dirección Pasajero</StyledTableCell>
          <StyledTableCell align="right">Edad Pasajero</StyledTableCell>
          <StyledTableCell align="right">Institución Pasajero</StyledTableCell>
          <StyledTableCell align="right">Dirección Institución</StyledTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {pasajeros.map((pasajero) => (
          <StyledTableRow key={pasajero.id_pasajero}>
            <StyledTableCell align="right">{pasajero.id_representante}</StyledTableCell>
            <StyledTableCell align="right">{pasajero.cedula_pasajero}</StyledTableCell>
            <StyledTableCell align="right">{pasajero.nombre_pasajero}</StyledTableCell>
            <StyledTableCell align="right">{pasajero.estado_pasajero}</StyledTableCell>
            <StyledTableCell align="right">{pasajero.direccion_pasajero}</StyledTableCell>
            <StyledTableCell align="right">{pasajero.edad_pasajero}</StyledTableCell>
            <StyledTableCell align="right">{pasajero.institucion_pasajero}</StyledTableCell>
            <StyledTableCell align="right">{pasajero.direccion_institucion}</StyledTableCell>
          </StyledTableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  );
}
