import React from 'react';
import { Box, Typography } from '@mui/material';

import HeaderMenu from './components/HeaderMenu';
import SideMenu from './components/SideMenu';

import { Outlet } from 'react-router-dom';
import EmbarqueModal from '../embarque/components/EmbarqueModal';

export default function MainScreen() {

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
                    // backgroundColor: 'red',
                    height: '91vh',
                    transition: 'margin-left 0.3s ease',
                }}
            >
                <Box
                    // border={2}
                    // borderRadius={2}
                    sx={{
                        // backgroundColor: 'red',
                        height: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <Typography variant="h5">
                        Aquí Mapa
                    </Typography>
                </Box>

                <Outlet />

            </Box>

            <EmbarqueModal />
        </Box>
    );
}
