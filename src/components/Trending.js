import { Flex, Text } from '@chakra-ui/react';
import React from 'react';

function Trending() {
  return (
    <Flex
      justifyContent="space-between"
      alignContent="center"
      alignItems="center"
      width="89%"
    >
      <Text fontSize="2xl" color="white">
        Trending NFTs
      </Text>
      <Text size="xs" color="green">
        See all
      </Text>
    </Flex>
  );
}

export default Trending;
