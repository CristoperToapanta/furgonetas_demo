import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from '@mui/material';
import React, { useState } from 'react';

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

    const [pasajeros, setPasajeros] = useState([])

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
                            <Typography fontWeight={'bold'} fontSize={'16px'}> INFORMACIÓN </Typography>
                        </TableCell>
                        <TableCell align='center'> 
                            <Typography fontWeight={'bold'} fontSize={'16px'}> EDAD </Typography>
                        </TableCell>
                        <TableCell align='center'> 
                            <Typography fontWeight={'bold'} fontSize={'16px'}> INSTITUCIÓN </Typography>
                        </TableCell>
                        <TableCell align='center'> 
                            <Typography fontWeight={'bold'} fontSize={'16px'}> HORA DE EMBARQUE </Typography>
                        </TableCell>
                        <TableCell align='center'> 
                            <Typography fontWeight={'bold'} fontSize={'16px'}> HORA DE DESEMBARQUE </Typography>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.informacion}
                        >
                            <TableCell align='center'>{row.informacion}</TableCell>
                            <TableCell align='center'>{row.edad}</TableCell>
                            <TableCell align='center'>{row.institucion}</TableCell>
                            <TableCell align='center'>{row.embarque}</TableCell>
                            <TableCell align='center'>{row.desembarque}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
