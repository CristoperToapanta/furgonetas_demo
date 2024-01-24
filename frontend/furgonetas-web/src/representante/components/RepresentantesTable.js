import { Table, TableBody, TableContainer, TableHead, TableRow, Paper } from '@mui/material'
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import React, { useContext, useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditNoteIcon from '@mui/icons-material/EditNote';

import {consultar_representantes} from '../../server/representanteApi';
//import {eliminar_representante} from '../../server/representanteApi';
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

export default function RepresentantesTable() {

    const { recargarRepresentante } = useContext(AccionContext)
    const [representantes, setRepresentantes] = useState([])

    const { eliminarRepresentante } = useContext(AccionContext);

    useEffect(() => {
      consultar_representantes()
          .then((res) => {
            console.log("Lista: ", res.data.lista)
            setRepresentantes(res.data.lista)
        })
        .catch((err) => {
            console.log(err)
        })
    },[recargarRepresentante])

    const hadleEliminar = (id) => {
      eliminarRepresentante(id);
    }

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
          <StyledTableCell align="center">ACCIONES</StyledTableCell>
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
            <StyledTableCell align="center">
              <Button variant="outlined" color="info">
                <EditNoteIcon/>
              </Button>
              <Button variant="outlined" color="error" onClick={() => hadleEliminar(representante._id_representante)}>
                <DeleteIcon/>
              </Button>
            </StyledTableCell>
          </StyledTableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}
