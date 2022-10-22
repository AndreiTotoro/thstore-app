import { Box } from '@chakra-ui/react';
import React from 'react';
import Chart from './Chart';
import Creators from './Creators';

function Social() {
  return (
    <Box
      height="60%"
      width="auto"
      flexBasis="32.5%"
      align="center"
      marginTop={6}
      rounded={20}
    >
      <Chart />
      <Creators />
    </Box>
  );
}

export default Social;
