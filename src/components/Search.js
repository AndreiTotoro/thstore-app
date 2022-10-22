import { Input } from '@chakra-ui/react';
import React from 'react';

function Search({ search, updateSearch, setShowAll }) {
  const handleSearch = e => {
    updateSearch(e.target.value);
    if (e.target.value === '') {
      setShowAll(true);
    } else {
      setShowAll(false);
    }
  };
  return (
    <Input
      boxShadow="xs"
      rounded="xl"
      paddingTop={1}
      paddingBottom={1}
      borderColor="#171624"
      background="#171624"
      value={search}
      onChange={handleSearch}
      placeholder="Here is a sample placeholder"
      size="sm"
      color="white"
    />
  );
}

export default Search;
