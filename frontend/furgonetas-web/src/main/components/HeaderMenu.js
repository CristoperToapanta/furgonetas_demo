import React from 'react'
import { AppBar, Toolbar, Typography } from '@mui/material'
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';


export default function HeaderMenu({toggleDrawer}) {

    return (

        <AppBar
            position="fixed"
            sx={{
                zIndex: (theme) => theme.zIndex.drawer + 1,
                backgroundColor: '#1C1E38'
                //91C2D6 27A1D3
            }}
        >

            <Toolbar>

                {/* <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={toggleDrawer}
                    edge="start"
                    sx={{
                        marginRight: 2
                    }}
                >
                    <MenuIcon />
                </IconButton> */}

                <Typography
                    style={{
                        fontWeight: 'bold'
                    }}
                    variant="h6"
                    noWrap
                >
                    Furgonetas
                </Typography>
            </Toolbar>

        </AppBar>
    )
}
