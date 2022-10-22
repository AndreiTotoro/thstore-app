import React from 'react';
import { Text, Box } from '@chakra-ui/react';

function Logout({ icon, text }) {
  return (
    <Box
      marginTop="auto"
      display="flex"
      gap={1.5}
      alignContent="center"
      alignItems="center"
      marginBottom="30px"
    >
      {icon}
      <Text color="#cb4444" fontSize={14}>
        {text}
      </Text>
    </Box>
  );
}

export default Logout;
