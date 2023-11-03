import { Table, TableBody, TableContainer, TableHead, TableRow, Paper } from '@mui/material'
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import React, { useContext, useEffect, useState } from 'react';

import { consultar_furgonetas } from '../../server/furgonetaApi';

import { AccionContext } from '../../context/AccionesContext';

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

export default function FurgonetaTable() {
  const { recargarFurgonetas } = useContext(AccionContext);
  const [furgonetas, setFurgonetas] = useState([])

  useEffect(() => {
    consultar_furgonetas()
      .then((res) => {
        console.log("Lista: ", res.data.lista)
        setFurgonetas(res.data.lista)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [recargarFurgonetas])

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">ID</StyledTableCell>
            <StyledTableCell align="center">PLACA FURGONETA</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {furgonetas.map((furgoneta) => (
            <StyledTableRow key={furgoneta.id_furgoneta}>
              <StyledTableCell align="center">{furgoneta.id_furgoneta}</StyledTableCell>
              <StyledTableCell align="center">{furgoneta.placa_furgoneta}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
