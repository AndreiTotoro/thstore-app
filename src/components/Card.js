import { Box, Flex, Image } from '@chakra-ui/react';
import React from 'react';

function Card({ imgp, name, author, price }) {
  return (
    <Flex direction="column" p={5} align="center">
      <Box w="100">
        <Image src={require(`../img/${imgp}`)} />
      </Box>

      <Box>{name}</Box>
      <Box display="flex" width="100%" justifyContent="space-between">
        <Box>{author}</Box>
        <Box>{price}</Box>
      </Box>
    </Flex>
  );
}

export default Card;
