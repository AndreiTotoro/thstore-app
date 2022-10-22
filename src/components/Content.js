import { Flex } from '@chakra-ui/react';
import React from 'react';
import Cards from './Cards';
import Search from './Search';
import Banner from './Banner';
import Trending from './Trending';

function Content({ search, updateSearch, setShowAll, cardsToShow }) {
  return (
    <Flex
      flexDirection="column"
      flexBasis="50%"
      justifyContent="flex-start"
      alignItems="center"
      gap={7}
    >
      <Search
        search={search}
        updateSearch={updateSearch}
        setShowAll={setShowAll}
      />
      <Banner />
      <Trending />
      <Cards cards={cardsToShow} />
    </Flex>
  );
}

export default Content;
