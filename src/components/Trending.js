import { Flex, Stack, Text, Wrap } from '@chakra-ui/react';
import React from 'react';
import Fbutton from './Fbutton';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';

function Trending() {
  return (
    <Stack width="89%">
      <Flex
        justifyContent="space-between"
        alignContent="center"
        alignItems="center"
      >
        <Text fontSize="2xl" color="white">
          Trending NFTs
        </Text>
        <Text size="xs" color="green">
          See all
        </Text>
      </Flex>
      <Wrap justify="space-between">
        <Fbutton icon="đĨ" text="Trending" />
        <Fbutton icon="đ¨" text="Art" />
        <Fbutton icon="đšī¸" text="Game" />
        <Fbutton icon="đ" text="Fashion" />
        <Fbutton icon="đģs" text="Programming" />
        <Fbutton icon="đ¸" text="Music" />
      </Wrap>
    </Stack>
  );
}

export default Trending;
