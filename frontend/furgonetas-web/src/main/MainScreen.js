import React, { useState } from 'react';
import { AppBar, Box, Grid, Toolbar, Typography } from '@mui/material';

import HeaderMenu from './components/HeaderMenu';
import SideMenu from './components/SideMenu';

import { Outlet, useLocation } from 'react-router-dom';
import EmbarqueModal from '../embarque/components/EmbarqueModal';
import MainMap from './map/MainMap';

const screens = ['/listado']

export default function MainScreen() {

    const location = useLocation();
    const mostrarMapa = !screens.includes(location.pathname)

    const [drawerOpen, setDrawerOpen] = React.useState(false);

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    return (
        <Box
            sx={{
                display: 'flex'
            }}
        >
            <Box
                sx={{
                    position: 'fixed',
                    zIndex: 0
                }}
            >
                <HeaderMenu
                    toggleDrawer={toggleDrawer}
                />
                <SideMenu
                    drawerOpen={drawerOpen}
                    toggleDrawer={toggleDrawer}
                />
            </Box>

            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    // p: 3,
                    marginTop: '64.5px',
                    marginLeft: drawerOpen ? '290px' : '0px',
                    backgroundColor: 'red',
                    height: '100%',
                    transition: 'margin-left 0.25s ease',
                    overflow: 'hidden'
                    //border: 1,
                    //borderColor: 'black'
                }}
            >
                <Box
                    border={2}
                    borderRadius={2}
                    //mt={1}
                    //ml={1}
                    //mr={1}
                    sx={{
                        //backgroundColor: 'green',
                        //border: 1,
                        //borderBlockColor: 'black',
                        height: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        display: mostrarMapa ? 'flex' : 'none',
                    }}
                >
                    <MainMap />
                    {/* <Typography variant="h5">
                        Aquí Mapa
                    </Typography> */}
                </Box>

                
                <Box
                    mt={1}
                    ml={1}
                    mr={1}
                    mb={1}
                    sx={{
                        height: '46.5vh',
                        overflowY: 'auto',
                        //overflowX: 'hidden',  // Evita el desplazamiento horizontal
                        backgroundColor: 'blue' 
                    }}
                >
                    
                    {/* Tamaño definido para el Outlet */}
                    <Outlet />
                </Box>
            </Box>

            <EmbarqueModal />
        </Box>
    );
}