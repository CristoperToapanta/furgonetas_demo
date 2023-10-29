import { Table, TableBody, TableContainer, TableHead, TableRow, Paper } from '@mui/material'
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import React, { useEffect, useState } from 'react';

import {consultar_recorrido} from '../server/recorridoApi'

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

export default function RecorridoScreen() {

    const [recorridos, setRecorridos] = useState([])

    useEffect(() => {
        consultar_recorrido()
            .then((res) => {
                console.log("Lista: ", res.data.lista)
                setRecorridos(res.data.lista)
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
          <StyledTableCell align="center">CONDUCTOR</StyledTableCell>
          <StyledTableCell align="center">FURGONETA</StyledTableCell>
          <StyledTableCell align="center">PASAJERO</StyledTableCell>     
          <StyledTableCell align="center">TIPO RECORRIDO</StyledTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {recorridos.map((recorrido) => (
          <StyledTableRow key={recorrido.id_recorrido}>
            <StyledTableCell align="center">{recorrido.nombre_conductor}</StyledTableCell>
            <StyledTableCell align="center">{recorrido.placa_furgoneta}</StyledTableCell>
            <StyledTableCell align="center">{recorrido.nombre_pasajero}</StyledTableCell>
            <StyledTableCell align="center">{recorrido.tipo_recorrido}</StyledTableCell>
          </StyledTableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}
