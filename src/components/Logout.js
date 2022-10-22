import React from 'react';
import { Text, Box } from '@chakra-ui/react';

function Logout({ icon, text }) {
  return (
    <Box display="flex" gap={1.5} alignContent="center" alignItems="center">
      {icon}
      <Text color="#cb4444" fontSize={15}>
        {text}
      </Text>
    </Box>
  );
}

export default Logout;
