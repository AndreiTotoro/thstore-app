import { Box, Flex, Image } from '@chakra-ui/react';
import React from 'react';

function Card({ imgp, name, author, price }) {
  return (
    <Flex
      flexBasis="45%"
      direction="column"
      align="center"
      background="#171624"
      boxShadow="xs"
      rounded="xl"
      paddingLeft={2}
      paddingRight={2}
      marginBottom={3}
    >
      <Box>
        <Image
          background="#171624"
          boxShadow="xs"
          width="100"
          rounded="xl"
          src={require(`../img/${imgp}`)}
        />
      </Box>

      <Box
        fontSize="lg"
        color="white"
        alignSelf="flex-start"
        paddingTop={3}
        paddingLeft={4}
      >
        {name}
      </Box>
      <Box
        paddingBottom={6}
        display="flex"
        width="100%"
        justifyContent="space-between"
        alignContent="center"
        alignItems="center"
        paddingLeft={4}
        paddingRight={4}
        paddingTop={3}
      >
        <Box
          fontSize="sm"
          color="#5e5d6b"
          display="flex"
          justifyContent="center"
          alignItems="center"
          alignContent="center"
          gap={2}
        >
          <Image
            width="8"
            src={require('../img/ape.jpg')}
            boxShadow="xs"
            rounded="md"
          />{' '}
          {author}
        </Box>
        <Box
          paddingTop={2}
          paddingLeft={2}
          paddingRight={4}
          paddingBottom={2}
          boxShadow="xs"
          rounded="md"
          color="#41d052"
          backgroundColor="#1d302a"
          display="flex"
          justifyContent="center"
          alignItems="center"
          alignContent="center"
        >
          <Image width="6" src={require('../img/eth.png')} />{' '}
          <box fontSize="sm">{price} ETH</box>
        </Box>
      </Box>
    </Flex>
  );
}

export default Card;
