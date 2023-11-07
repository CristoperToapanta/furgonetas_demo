import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
  Typography,
} from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ContactsIcon from "@mui/icons-material/Contacts";
import MonitorIcon from "@mui/icons-material/Monitor";
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import TransferWithinAStationIcon from "@mui/icons-material/TransferWithinAStation";
import GroupsIcon from "@mui/icons-material/Groups";


import { Link } from "react-router-dom";

import EmbarqueModal from "../../embarque/components/EmbarqueModal";

import FurgonetaModal from '../../furgoneta/components/FurgonetaModal';

import RepresentanteModal from '../../representante/components/RepresentantesModal';

import ConductorModal from "../../conductor/components/ConductorModal";


export default function SideMenu({ drawerOpen, toggleDrawer }) {
  const [open, setOpen] = React.useState(false);
  const [dialogOpen, setDialogOpen] = React.useState(false);

  const [dialogOpenF, setDialogOpenF] = React.useState(false);

  const [dialogOpenR, setDialogOpenR] = React.useState(false);

  const [dialogOpenC, setDialogOpenC] = React.useState(false);

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

  /* Modal Furgonetas */
  const handleDialogOpenF = () => {
    setDialogOpenF(true);
  };

  const handleDialogCloseF = () => {
    setDialogOpenF(false);
  };

  /* Modal Representante */
  const handleDialogOpenR = () => {
    setDialogOpenR(true);
  };

  const handleDialogCloseR = () => {
    setDialogOpenR(false);
  };

  /* Modal Conductor */
  const handleDialogOpenC = () => {
    setDialogOpenC(true);
  };

  const handleDialogCloseC = () => {
    setDialogOpenC(false);
  };

  return (
    <Drawer
      variant="persistent"
      anchor="left"
      open={drawerOpen}
      transitionDuration={300}
      sx={{
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 290,
          backgroundColor: "#FDDE00",
          boxShadow: "2px 0px 6px rgba(0, 0, 0, 0.2)",
          border: "none",
        },
        zIndex: (theme) => theme.zIndex.drawer,
      }}
    >
      <List
        sx={{
          marginTop: "64px",
        }}
      >
        <ListItem button component={Link} to="/" onClick={cerrarSideMenu}>
          <ListItemIcon>
            <MonitorIcon
              style={{
                color: "black",
                textShadow: "1px 1px 1px rgba(255, 255, 255, 0.8)",
              }}
            />
          </ListItemIcon>
          <ListItemText>
            <Typography variant="body1" fontWeight="bold" color="black">
              Home
            </Typography>
          </ListItemText>
        </ListItem>

        <ListItem button onClick={handleClick}>
          <ListItemIcon>
            <AirportShuttleIcon
              style={{
                color: "black",
                textShadow: "1px 1px 1px rgba(255, 255, 255, 0.8)",
              }}
            />
          </ListItemIcon>
          <ListItemText>
            <Typography variant="body1" fontWeight="bold" color="black">
              Gestion de Pasajeros
            </Typography>
          </ListItemText>
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>

          <ListItem
              button
              sx={{ pl: 4 }}
              component={Link}
              to="conductor"
              onClick={handleDialogOpenC}
            >
              <ListItemIcon>
                <ContactsIcon
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
                  Conductor
                </Typography>
              </ListItemText>
            </ListItem>
            
            <ListItem
              button
              sx={{ pl: 4 }}
              component={Link}
              to="furgoneta"
              onClick={handleDialogOpenF}
            >
              <ListItemIcon>
                <DirectionsBusIcon
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
                  Furgonetas
                </Typography>
              </ListItemText>
            </ListItem>

            <ListItem
              button
              sx={{ pl: 4 }}
              component={Link}
              to="representante"
              onClick={handleDialogOpenR}
            >
              <ListItemIcon>
                <FamilyRestroomIcon
                  style={{
                    color: "black",
                    textShadow: "1px 1px 1px rgba(255, 255, 255, 0.8)",
                  }}
                />
              </ListItemIcon>
              <ListItemText>
                <Typography variant="body1" color="black">
                  Representantes
                </Typography>
              </ListItemText>
            </ListItem>
            


            <ListItem
              button
              sx={{ pl: 4 }}
              component={Link}
              to="embarque"
              onClick={handleDialogOpen}
            >
              <ListItemIcon>
                <TransferWithinAStationIcon
                  style={{
                    color: "black",
                    textShadow: "1px 1px 1px rgba(255, 255, 255, 0.8)",
                  }}
                />
              </ListItemIcon>
              <ListItemText>
                <Typography variant="body1" color="black">
                  Embarque
                </Typography>
              </ListItemText>
            </ListItem>

            <ListItem
              button
              sx={{ pl: 4 }}
              component={Link}
              to="recorrido"
            >
              <ListItemIcon>
                <MyLocationIcon
                  style={{
                    color: "black",
                    textShadow: "1px 1px 1px rgba(255, 255, 255, 0.8)",
                  }}
                />
              </ListItemIcon>
              <ListItemText>
                <Typography variant="body1" color="black">
                  Recorridos
                </Typography>
              </ListItemText>
            </ListItem>

            <ListItem button sx={{ pl: 4 }}>
              <ListItemIcon>
                <GroupsIcon
                  style={{
                    color: "black",
                    textShadow: "1px 1px 1px rgba(255, 255, 255, 0.8)",
                  }}
                />
              </ListItemIcon>
              <ListItemText>
                <Typography variant="body1" color="black">
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

      <FurgonetaModal
        dialogOpen={dialogOpenF}
        setDialogOpen={setDialogOpenF}
        handleDialogOpen={handleDialogOpenF}
        handleDialogClose={handleDialogCloseF}
        cerrarSideMenu={cerrarSideMenu}
      />

      <RepresentanteModal
        dialogOpen={dialogOpenR}
        setDialogOpen={setDialogOpenR}
        handleDialogOpen={handleDialogOpenR}
        handleDialogClose={handleDialogCloseR} 
        cerrarSideMenu={cerrarSideMenu}        
      />

      <ConductorModal
        dialogOpen={dialogOpenC}
        setDialogOpen={setDialogOpenC}
        handleDialogOpen={handleDialogOpenC}
        handleDialogClose={handleDialogCloseC}
        cerrarSideMenu={cerrarSideMenu} 
      />
    </Drawer>
  );
}
