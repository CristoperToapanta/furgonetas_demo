import { Table, TableBody, TableContainer, TableHead, TableRow, Paper } from '@mui/material'
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import React, { useEffect, useState } from 'react';

import {consultar_representantes} from '../../server/representanteApi';

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

export default function RepresentantesTable() {

    const [representantes, setRepresentantes] = useState([])

    useEffect(() => {
      consultar_representantes()
          .then((res) => {
            console.log("Lista: ", res.data.lista)
            setRepresentantes(res.data.lista)
        })
        .catch((err) => {
            console.log(err)
        })
    },[])

  return (
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 700 }} aria-label="customized table">
      <TableHead>
        <TableRow>
          <StyledTableCell align="center">ID</StyledTableCell>
          <StyledTableCell align="center">CEDULA</StyledTableCell>
          <StyledTableCell align="center">NOMBRES</StyledTableCell>
          <StyledTableCell align="center">DIRECCION</StyledTableCell>
          <StyledTableCell align="center">PARENTESCO</StyledTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {representantes.map((representante) => (
          <StyledTableRow key={representante.id_representante}>
            <StyledTableCell align="center">{representante.id_representante}</StyledTableCell>
            <StyledTableCell align="center">{representante.cedula_representante}</StyledTableCell>
            <StyledTableCell align="center">{representante.nombre_representante}</StyledTableCell>
            <StyledTableCell align="center">{representante.direccion_representante}</StyledTableCell>
            <StyledTableCell align="center">{representante.parentesco_representante}</StyledTableCell>
          </StyledTableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}
