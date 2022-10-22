import { Box, Text } from '@chakra-ui/react';
import React from 'react';

function Btn({ icon, text, highlighted }) {
  if (highlighted === 'true') {
    return (
      <Box display="flex" gap={1.5} alignContent="center" alignItems="center">
        {icon}
        <Text color="white" fontSize={15}>
          {text}
        </Text>
      </Box>
    );
  } else {
    return (
      <Box display="flex" gap={1.5} alignContent="center" alignItems="center">
        {icon}
        <Text color="#4f4e5e" fontSize={15}>
          {text}
        </Text>
      </Box>
    );
  }
}

export default Btn;
