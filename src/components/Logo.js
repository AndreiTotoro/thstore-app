import { Text } from '@chakra-ui/react';
import React from 'react';
import { Box } from '@chakra-ui/react';

function Logo({ icon, name }) {
  return (
    <Box
      display="flex"
      alignContent="center"
      alignItems="center"
      paddingTop={30}
    >
      {icon}
      <Text fontFamily="Poppins" color="white" fontSize={20}>
        {name}
      </Text>
    </Box>
  );
}

export default Logo;
