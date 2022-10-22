import { Box, Button, Text } from '@chakra-ui/react';
import React from 'react';
import { Image } from '@chakra-ui/react';

function Banner() {
  return (
    <Box
      boxShadow="xs"
      rounded="20"
      height="30%"
      width="90%"
      backgroundImage={require('../img/bkg.jpg')}
      display="flex"
      justifyContent="space-between"
      alignContent="center"
      alignItems="center"
    >
      <Box flexDir="column">
        <Text fontWeight="bold" fontSize="xl" padding={4} paddingLeft={10}>
          Discover and sell<br></br> your own NFT's
        </Text>
        <Button rounded="15" color="black" display="flex" marginLeft={10}>
          Discover Now
        </Button>
      </Box>
      <Image
        paddingRight={10}
        src={require('../img/eth-logo.png')}
        height="60%"
      ></Image>
    </Box>
  );
}

export default Banner;
