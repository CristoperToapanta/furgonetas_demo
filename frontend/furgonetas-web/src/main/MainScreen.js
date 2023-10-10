import React from 'react';
import {
    Box
} from '@mui/material'

import HeaderMenu from './components/HeaderMenu';
import SideMenu from './components/SideMenu';

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

            <HeaderMenu
                toggleDrawer={toggleDrawer}
            />

            <SideMenu
                drawerOpen={drawerOpen}
            />


            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: 3
                }}
            >
             
                
            </Box>


        </Box>

    );

}
