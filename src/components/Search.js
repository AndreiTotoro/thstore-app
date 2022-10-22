import { Input } from '@chakra-ui/react';
import React from 'react';

function Search({ search, updateSearch }) {
  const handleSearch = e => {
    updateSearch(e.target.value);
  };
  return (
    <Input
      value={search}
      onChange={handleSearch}
      placeholder="Here is a sample placeholder"
      size="sm"
      color="white"
    />
  );
}

export default Search;
