import { Box, Flex, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import Creator from './Creator';

function Creators() {
  return (
    <Stack marginTop={8} p={5} backgroundColor="#171624" rounded={18}>
      <Flex justifyContent="space-between" alignContent="center">
        <Text size="md" color="white">
          Top Creators
        </Text>
        <Text size="xs" color="green">
          See all
        </Text>
      </Flex>
      <Stack>
        <Creator name="Andrew" tag="@AndreiTotoro" />
        <Creator name="Victor" tag="@VictorCodes" />
        <Creator name="Sabina" tag="@Sabinkap" />
        <Creator name="Rares" tag="@brrares" />
        <Creator name="Paul" tag="@paulsomesan" />
        <Creator name="Alex" tag="@alexg" />
        <Creator name="Razvan" tag="@hartin" />
        <Creator name="Catalina" tag="@codediaries" />
        <Creator name="Razaga" tag="@razaaga" />
        <Creator name="Fred" tag="@iam_fred" />
      </Stack>
    </Stack>
  );
}

export default Creators;
