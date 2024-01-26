import React from 'react'
import EmbarqueTable from '../embarque/components/EmbarqueTable';
import { Box } from '@mui/material';
import { useLocation } from 'react-router-dom';

const screens = ['/listado']

export default function ListadoScreen() {

  
  const location = useLocation();
  const height = !screens.includes(location.pathname)

  console.log("GHT: ", height)

  return (
    <Box
      mt={1}
      ml={1}
      mr={1}
    // borderBottom={0.01}
    // borderRadius={1}
    // borderColor={'lightgray'}
    >
      <EmbarqueTable />
    </Box>
  );
}
