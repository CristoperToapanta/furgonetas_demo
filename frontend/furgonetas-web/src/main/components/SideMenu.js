import React from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
  Typography
} from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import MonitorIcon from '@mui/icons-material/Monitor';
import TransferWithinAStationIcon from '@mui/icons-material/TransferWithinAStation';
import GroupsIcon from '@mui/icons-material/Groups';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';

import { Link } from 'react-router-dom'
import EmbarqueModal from '../../embarque/components/EmbarqueModal';

export default function SideMenu({ drawerOpen, toggleDrawer}) {

  const [open, setOpen] = React.useState(false);
  const [dialogOpen, setDialogOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const cerrarSideMenu = () => {
    toggleDrawer(false);
  };

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  return (

    <Drawer
      variant="persistent"
      anchor="left"
      open={drawerOpen}
      transitionDuration={300}
      sx={{
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 290,
          backgroundColor: '#FDDE00',
          boxShadow: '2px 0px 6px rgba(0, 0, 0, 0.2)',
          border: 'none',
        },
        zIndex: (theme) => theme.zIndex.drawer,
      }}
    >
      <List
        sx={{
          marginTop: '64px'
        }}
      >
        <ListItem
          button
          component={Link}
          to="/"
          onClick={cerrarSideMenu}
        >
          <ListItemIcon>
            <MonitorIcon
              style={{
                color: 'black',
                textShadow: '1px 1px 1px rgba(255, 255, 255, 0.8)',
              }}
            />
          </ListItemIcon>
          <ListItemText>
            <Typography
              variant="body1"
              fontWeight="bold"
              color="black"
            >
              Home
            </Typography>
          </ListItemText>
        </ListItem>

        <ListItem
          button
          onClick={handleClick}
        >
          <ListItemIcon>
            <AirportShuttleIcon
              style={{
                color: 'black',
                textShadow: '1px 1px 1px rgba(255, 255, 255, 0.8)',
              }}
            />
          </ListItemIcon>
          <ListItemText>
            <Typography
              variant="body1"
              fontWeight="bold"
              color="black"
            >
              Gestion de Pasajeros
            </Typography>
          </ListItemText>
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse
          in={open}
          timeout="auto"
          unmountOnExit
        >
          <List
            component="div"
            disablePadding
          >
            <ListItem
              button
              sx={{ pl: 4 }}
              component={Link}
              to="embarque"
              onClick={
                handleDialogOpen
              }
            >
              <ListItemIcon>
                <TransferWithinAStationIcon
                  style={{
                    color: 'black',
                    textShadow: '1px 1px 1px rgba(255, 255, 255, 0.8)',
                  }}
                />
              </ListItemIcon>
              <ListItemText>
                <Typography
                  variant="body1"
                  color="black"
                >
                  Embarque
                </Typography>
              </ListItemText>
            </ListItem>
            <ListItem
              button
              sx={{ pl: 4 }}
            >
              <ListItemIcon>
                <GroupsIcon
                  style={{
                    color: 'black',
                    textShadow: '1px 1px 1px rgba(255, 255, 255, 0.8)',
                  }}
                />
              </ListItemIcon>
              <ListItemText>
                <Typography
                  variant="body1"
                  color="black"
                >
                  Listado
                </Typography>
              </ListItemText>
            </ListItem>
          </List>
        </Collapse>
      </List>

      <EmbarqueModal 
         dialogOpen={dialogOpen}
         setDialogOpen={setDialogOpen}
         handleDialogOpen={handleDialogOpen}
         handleDialogClose={handleDialogClose}
         cerrarSideMenu={cerrarSideMenu}
      />

    </Drawer>

  );
}
