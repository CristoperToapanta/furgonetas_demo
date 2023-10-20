import {
    Box,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { consultar_pasajeros } from '../../server/pasajeroApi';
import { AccionContext } from '../../context/AccionesContext';

function createData(informacion, edad, institucion, embarque, desembarque) {
    return { informacion, edad, institucion, embarque, desembarque };
}

const rows = [
    createData('Kevin Rodriguez', 27, 'Unidad Educativa "Urcuqui"', "22/09/23 07:00:00", "22/09/23 12:45:00"),
    createData('Bryan Cachimuel', 25, 'Instituto Tecnologico "17 de Julio"', "22/09/23 07:00:00", "22/09/23 12:45:00"),
    createData('Cristoper Toapanta', 25, 'Instituto Tecnologico "17 de Julio"', "22/09/23 07:00:00", "22/09/23 12:45:00"),
    createData('Edgar Quezada', 24, 'Unidad Educativa "Mariano Suarez Ventimilla"', "22/09/23 07:00:00", "22/09/23 12:45:00"),
    createData('Richard Tarupi', 26, 'Unidad Educativa "Tulcan"', "22/09/23 07:00:00", "22/09/23 12:45:00"),
    createData('Josue Alba', 29, 'Colegio Tecnico "Ciudad de Ibarra"', "22/09/23 07:00:00", "22/09/23 12:45:00"),
    createData('Nelson Cacoango', 26, 'Instituto Tecnologico "Otavalo"', "22/09/23 07:00:00", "22/09/23 12:45:00"),
    createData('Kevin Rodriguez', 27, 'Unidad Educativa "Urcuqui"', "22/09/23 07:00:00", "22/09/23 12:45:00"),
    createData('Bryan Cachimuel', 25, 'Instituto Tecnologico "17 de Julio"', "22/09/23 07:00:00", "22/09/23 12:45:00"),
    createData('Cristoper Toapanta', 25, 'Instituto Tecnologico "17 de Julio"', "22/09/23 07:00:00", "22/09/23 12:45:00"),
    createData('Edgar Quezada', 24, 'Unidad Educativa "Mariano Suarez Ventimilla"', "22/09/23 07:00:00", "22/09/23 12:45:00"),
    createData('Richard Tarupi', 26, 'Unidad Educativa "Tulcan"', "22/09/23 07:00:00", "22/09/23 12:45:00"),
    createData('Josue Alba', 29, 'Colegio Tecnico "Ciudad de Ibarra"', "22/09/23 07:00:00", "22/09/23 12:45:00"),
    createData('Nelson Cacoango', 26, 'Instituto Tecnologico "Otavalo"', "22/09/23 07:00:00", "22/09/23 12:45:00"),
    createData('Kevin Rodriguez', 27, 'Unidad Educativa "Urcuqui"', "22/09/23 07:00:00", "22/09/23 12:45:00"),
    createData('Bryan Cachimuel', 25, 'Instituto Tecnologico "17 de Julio"', "22/09/23 07:00:00", "22/09/23 12:45:00"),
    createData('Cristoper Toapanta', 25, 'Instituto Tecnologico "17 de Julio"', "22/09/23 07:00:00", "22/09/23 12:45:00"),
    createData('Edgar Quezada', 24, 'Unidad Educativa "Mariano Suarez Ventimilla"', "22/09/23 07:00:00", "22/09/23 12:45:00"),
    createData('Richard Tarupi', 26, 'Unidad Educativa "Tulcan"', "22/09/23 07:00:00", "22/09/23 12:45:00"),
    createData('Josue Alba', 29, 'Colegio Tecnico "Ciudad de Ibarra"', "22/09/23 07:00:00", "22/09/23 12:45:00"),
    createData('Nelson Cacoango', 26, 'Instituto Tecnologico "Otavalo"', "22/09/23 07:00:00", "22/09/23 12:45:00"),
];

export default function EmbarqueTable() {

    // Importar Contexto y sus variables
    const { recargarPasajeros } = useContext(AccionContext);
    const [pasajeros, setPasajeros] = useState([])

    useEffect(() => {

        consultar_pasajeros()
            .then((res) => {
                console.log("Lista: ", res.data.lista)
                setPasajeros(res.data.lista)
            })
            .catch((err) => {
                console.log(err)
            })

    // Escuchar el cambio del evento de la bandera del contexto
    // para actualizar la lista
    }, [recargarPasajeros])

    return (
        <TableContainer
            component={Paper}
            sx={{
                // border: '1px solid #e0e0e0',
                // borderRadius: 2,
                boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.1)',
                //width: '96.5%',
                //padding: '16px',
                //margin: '16px',
                //overflowX: 'auto',
            }}
        >
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align='center' >
                            <Typography fontWeight={'bold'} fontSize={'16px'}> ID </Typography>
                        </TableCell>
                        <TableCell align='center' >
                            <Typography fontWeight={'bold'} fontSize={'16px'}> CÉDULA </Typography>
                        </TableCell>
                        <TableCell align='center' >
                            <Typography fontWeight={'bold'} fontSize={'16px'}> INFORMACIÓN </Typography>
                        </TableCell>
                        <TableCell align='center'>
                            <Typography fontWeight={'bold'} fontSize={'16px'}> ORIGEN </Typography>
                        </TableCell>
                        <TableCell align='center'>
                            <Typography fontWeight={'bold'} fontSize={'16px'}> EDAD </Typography>
                        </TableCell>
                        <TableCell align='center'>
                            <Typography fontWeight={'bold'} fontSize={'16px'}> INSTITUCION </Typography>
                        </TableCell>
                        <TableCell align='center'>
                            <Typography fontWeight={'bold'} fontSize={'16px'}> MATRIZ </Typography>
                        </TableCell>
                    </TableRow>
                </TableHead>
                {pasajeros.length > 0 ? (
                    <TableBody>
                        {pasajeros.map((row) => (

                            <TableRow
                                key={row.nombre_pasajero}
                            >
                                <TableCell align='center'>{row.id_pasajero}</TableCell>
                                <TableCell align='center'>{row.cedula_pasajero}</TableCell>
                                <TableCell align='center'>{row.nombre_pasajero}</TableCell>
                                <TableCell align='center'>{row.direccion_pasajero}</TableCell>
                                <TableCell align='center'>{row.edad_pasajero}</TableCell>
                                <TableCell align='center'>{row.institucion_pasajero}</TableCell>
                                <TableCell align='center'>{row.direccion_pasajero}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                ) : (
                    <TableBody>
                        <TableRow>
                            <TableCell colSpan={5} sx={{ height: '25vh' }}>
                                <Typography variant="h6" align="center" sx={{ fontWeight: 'bold' }}>
                                    SIN DATOS
                                </Typography>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                )}

            </Table>
        </TableContainer>
    );
}
