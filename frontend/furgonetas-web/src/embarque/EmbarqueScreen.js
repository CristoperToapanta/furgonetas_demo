import React from 'react';
import {
  Box
} from '@mui/material';
import EmbarqueTable from './components/EmbarqueTable';

export default function EmbarqueScreen() {

  return (
    <Box
      mt={3}
      ml={2.5}
      mr={2.5}
      // border={2}
      // borderRadius={3}
      sx={{
        width: '98%',
        height: '40vh',
        overflow: 'auto'
      }}
    >
      <EmbarqueTable />
    </Box>
  );
}
