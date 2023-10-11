import React from 'react';
import { Box } from '@mui/material';

import HeaderMenu from './components/HeaderMenu';
import SideMenu from './components/SideMenu';

import { Outlet } from 'react-router-dom';

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
                    zIndex: 1,
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
                    p: 3,
                    marginTop: '64px'
                }}
            >
                <Outlet />

            </Box>

        </Box>
    );
}
