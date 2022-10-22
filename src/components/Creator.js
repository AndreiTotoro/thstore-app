import { Box, Button, Image, Text, Wrap } from '@chakra-ui/react';
import { Stack } from '@mui/system';
import React from 'react';

function Creator({ name, tag }) {
  return (
    <Box
      paddingTop={2}
      paddingBottom={2}
      fontSize="sm"
      color="#5e5d6b"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      alignContent="center"
      gap={2}
    >
      <Wrap align="center">
        <Image
          width="8"
          src={require('../img/ape.jpg')}
          boxShadow="xs"
          rounded="md"
        />
        <Stack alignItems="flex-start" alignContent="flex-start">
          <Text color="white">{name}</Text>
          <Text color="#504f5d" size="sm">
            {tag}
          </Text>
        </Stack>
      </Wrap>

      <Button
        size="sm"
        rounded="15"
        color="white"
        display="flex"
        marginLeft={10}
        backgroundColor="#171624"
        borderColor="white"
        border="1px"
      >
        Follow
      </Button>
    </Box>
  );
}

export default Creator;
