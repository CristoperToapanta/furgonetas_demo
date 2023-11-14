import React, { useContext, useEffect, useState }  from 'react';
import { Table, TableBody, TableContainer, TableHead, TableRow, Paper } from '@mui/material'
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';

import { nombres_conductor } from '../server/conductorApi';
import { AccionContext } from '../context/AccionesContext';

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

export default function ListadoScreen() {

    // Importar Contexto y sus variables
    const {recargarConductor} = useContext(AccionContext)
    const [conductores, setConductores] = useState([])
  
    useEffect(() => {
      nombres_conductor()
          .then((res) => {
              console.log("Lista: ", res.data.lista)
              setConductores(res.data.lista)
          })
          .catch((err) => {
              console.log(err)
          })
    },[recargarConductor])

  return (
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 700 }} aria-label="customized table">
      <TableHead>
        <TableRow>   
          <StyledTableCell align="center">Id Conductor</StyledTableCell>
          <StyledTableCell align="center">Nombre Conductor</StyledTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {conductores.map((conductor) => (
          <StyledTableRow key={conductor.id_conductor}>
            <StyledTableCell align="center">{conductor.id_conductor}</StyledTableCell>
            <StyledTableCell align="center">{conductor.nombre_conductor}</StyledTableCell>
          </StyledTableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}
