import React from 'react';
import { Box, ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
      <Box bg="tomato" w="100%" p={4} color="white">
        This is a test!
      </Box>
    </ChakraProvider>
  );
}

export default App;
