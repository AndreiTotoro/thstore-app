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
        <Fbutton icon="🔥" text="Trending" />
        <Fbutton icon="🎨" text="Art" />
        <Fbutton icon="🕹️" text="Game" />
        <Fbutton icon="👜" text="Fashion" />
        <Fbutton icon="💻s" text="Programming" />
        <Fbutton icon="🎸" text="Music" />
      </Wrap>
    </Stack>
  );
}

export default Trending;
