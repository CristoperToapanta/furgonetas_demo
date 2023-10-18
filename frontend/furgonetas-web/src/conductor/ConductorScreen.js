import { Box, Typography, Card, CardContent } from '@mui/material';
import { useState, useEffect } from "react";
import axios from "axios";

const URI = "http://192.168.1.6:3002/prueba/listado-conductores";

export default function ConductorScreen() {

  const [conductores, setConductores] = useState([]);

  const cargarConductores = async () => {
    const response = await axios.get(URI);
    setConductores(response.data);
  };

  useEffect(() => {
    cargarConductores();
  },[])

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        
        <Typography variant="h5" component="div">
         

        </Typography>
        <Typography variant="body2">
          
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
    </Card>
  );
}
