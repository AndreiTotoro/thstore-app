import { Box, Text } from '@chakra-ui/react';
import React from 'react';

function Fbutton({ icon, text }) {
  return (
    <Box
      display="flex"
      gap={1.5}
      alignContent="center"
      alignItems="center"
      textAlign="left"
      backgroundColor={'#171624'}
      p={2}
      paddingLeft={2}
      paddingRight={3}
      rounded={25}
    >
      <Box
        backgroundColor="#212030"
        paddingLeft={1}
        paddingTop={1}
        paddingBottom={1}
        paddingRight={1}
        rounded={20}
      >
        {icon}
      </Box>
      <Text color="white" fontSize={15}>
        {text}
      </Text>
    </Box>
  );
}

export default Fbutton;
