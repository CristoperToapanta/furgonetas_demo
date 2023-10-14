import { Typography, Card, CardContent } from '@mui/material';
import { useState, useEffect } from "react";
import axios from "axios";

const URI = "http://192.168.1.4:3002/prueba/listar/";

export default function ConductorScreen() {

  const [conductores, setConductores] = useState([])

  useEffect(() => {
    cargarConductores();
  },[])

  const cargarConductores = async () => {
    const response = await axios.get(URI);
    setConductores(response.data);
  };

  
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        
        <Typography variant="h5" component="div">

       
        </Typography>
        <Typography variant="body2">
          
          <br />
          
        </Typography>
      </CardContent>
    </Card>
  );
}
