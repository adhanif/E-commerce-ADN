import React from 'react';
import { Box, Typography } from '@mui/material';

export default function NoAuthorization() {
  return (
    <>
      <Box>
        <Typography variant='h5' textAlign='center' marginY='10rem'>
          You are not authorized to access this page!
        </Typography>
      </Box>
    </>
  );
}
