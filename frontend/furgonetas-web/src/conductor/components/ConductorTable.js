import { Table, TableBody, TableContainer, TableHead, TableRow, Paper } from '@mui/material'
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import React, { useEffect, useState } from 'react';

import { consultar_conductores } from '../../server/conductorApi';

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

export default function ConductorTable() {

    const [conductores, setConductores] = useState([])
  
    useEffect(() => {
      consultar_conductores()
          .then((res) => {
              console.log("Lista: ", res.data.lista)
              setConductores(res.data.lista)
          })
          .catch((err) => {
              console.log(err)
          })
    }, [])

  return (
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 700 }} aria-label="customized table">
      <TableHead>
        <TableRow>
          <StyledTableCell align="center">Placa</StyledTableCell>
          <StyledTableCell align="center">Cédula Conductor</StyledTableCell>
          <StyledTableCell align="center">Nombre Conductor</StyledTableCell>
          <StyledTableCell align="center">Edad Conductor</StyledTableCell>
          <StyledTableCell align="center">Tipo de Licencia</StyledTableCell>
          <StyledTableCell align="center">Dirección Conductor</StyledTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {conductores.map((conductor) => (
          <StyledTableRow key={conductor.id_conductor}>
            <StyledTableCell align="center">{conductor.placa_furgoneta}</StyledTableCell>
            <StyledTableCell align="center">{conductor.cedula_conductor}</StyledTableCell>
            <StyledTableCell align="center">{conductor.nombre_conductor}</StyledTableCell>
            <StyledTableCell align="center">{conductor.edad_conductor}</StyledTableCell>
            <StyledTableCell align="center">{conductor.tipo_licencia_conductor}</StyledTableCell>
            <StyledTableCell align="center">{conductor.direccion_conductor}</StyledTableCell>
          </StyledTableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}