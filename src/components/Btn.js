import { Box, Icon, Text } from '@chakra-ui/react';
import React from 'react';

function Btn({ icon, text, highlighted }) {
  if (highlighted === 'true') {
    return (
      <Box display="flex" gap={1.5} alignContent="center" alignItems="center">
        {icon}
        <Text color="white" fontSize={20}>
          {text}
        </Text>
      </Box>
    );
  } else {
    return (
      <Box display="flex" gap={1.5}>
        {icon}
        <Text color="#4f4e5e" fontSize="md">
          {text}
        </Text>
      </Box>
    );
  }
}

export default Btn;