import React, { useContext, useEffect, useState } from 'react';
import {
    Checkbox,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from '@mui/material';
import { consultar_pasajeros } from '../../server/pasajeroApi';
import { AccionContext } from '../../context/AccionesContext';
import { useLocation } from 'react-router-dom';

const screens = ['/embarque'];

export default function EmbarqueTable() {
    const location = useLocation();
    const mostrarCheck = !screens.includes(location.pathname);
    const { recargarPasajeros } = useContext(AccionContext);
    const [pasajeros, setPasajeros] = useState([]);
    const [estadoEmbarque, setEstadoEmbarque] = useState({});

    useEffect(() => {
        consultar_pasajeros()
            .then((res) => {
                setPasajeros(res.data.lista);
                const estadosIniciales = {};
                res.data.lista.forEach((row) => {
                    estadosIniciales[row.id_pasajero] = row.estado_pasajero || false;
                });
                setEstadoEmbarque(estadosIniciales);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [recargarPasajeros]);

    const handleChangeEmbarque = (idEmbarcado, isChecked) => {
        setEstadoEmbarque({
            ...estadoEmbarque,
            [idEmbarcado]: isChecked,
        });
    };

    return (

     

        <TableContainer 
            style={{ 
                maxHeight: mostrarCheck == true ? null : '490px' , 
                overflow: mostrarCheck == true ? null : 'auto',
                height: mostrarCheck == true ? null : '100vh'
            }}
        >
            <Table stickyHeader aria-label="simple table" style={{ border: '1px solid lightgray', borderRadius: '5px' }}>
                <TableHead>
                    <TableRow>
                        <TableCell align='center' style={{ width: '10%', backgroundColor: 'lightgray' }}>
                            <Typography fontWeight={'bold'} fontSize={'16px'}> CÉDULA </Typography>
                        </TableCell>
                        <TableCell align='center' style={{ width: '20%', backgroundColor: 'lightgray' }}>
                            <Typography fontWeight={'bold'} fontSize={'16px'}> INFORMACIÓN </Typography>
                        </TableCell>
                        <TableCell align='center' style={{ width: '20%', backgroundColor: 'lightgray' }}>
                            <Typography fontWeight={'bold'} fontSize={'16px'}> RESIDENCIA </Typography>
                        </TableCell>
                        <TableCell align='center' style={{ width: '10%', backgroundColor: 'lightgray' }}>
                            <Typography fontWeight={'bold'} fontSize={'16px'}> EDAD </Typography>
                        </TableCell>
                        <TableCell align='center' style={{ width: '20%', backgroundColor: 'lightgray' }}>
                            <Typography fontWeight={'bold'} fontSize={'16px'}> INSTITUCION </Typography>
                        </TableCell>
                        <TableCell align='center' style={{ width: '10%', backgroundColor: 'lightgray' }}>
                            <Typography fontWeight={'bold'} fontSize={'16px'}> MATRIZ </Typography>
                        </TableCell>
                        {mostrarCheck === true && (
                            <TableCell align='center' style={{ width: '10%', backgroundColor: 'lightgray' }}>
                                <Typography fontWeight={'bold'} fontSize={'16px'}> EMBARCADO </Typography>
                            </TableCell>
                        )}
                    </TableRow>
                </TableHead>


                <TableBody>

                    {
                        pasajeros.length > 0 ? (
                            pasajeros.map((row) => (

                                <TableRow key={row.id_pasajero}>
                                    {/* <TableCell align='center' style={{ width: '10%'}}>{row.id_pasajero}</TableCell> */}
                                    <TableCell align='center'>{row.cedula_pasajero}</TableCell>
                                    <TableCell align='center'>{row.nombre_pasajero}</TableCell>
                                    <TableCell align='center'>{row.direccion_pasajero}</TableCell>
                                    <TableCell align='center'>{row.edad_pasajero}</TableCell>
                                    <TableCell align='center'>{row.institucion_pasajero}</TableCell>
                                    <TableCell align='center'>{row.direccion_pasajero}</TableCell>
                                    {mostrarCheck === true && (
                                        <TableCell align='center' style={{ width: '10%' }}>
                                            <Checkbox
                                                checked={estadoEmbarque[row.id_pasajero] || false}
                                                onChange={(e) => {
                                                    handleChangeEmbarque(row.id_pasajero, e.target.checked);
                                                }}
                                            />
                                        </TableCell>
                                    )}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={6} sx={{ height: '25vh' }}>
                                    <Typography variant="h6" align="center" sx={{ fontWeight: 'bold' }}>
                                        SIN DATOS
                                    </Typography>
                                </TableCell>
                            </TableRow>
                        )
                    }


                </TableBody>

            </Table>
        </TableContainer>

    );
}
