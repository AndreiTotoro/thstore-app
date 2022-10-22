import { Box, Input } from '@chakra-ui/react';
import React from 'react';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
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
    <Box
      boxShadow="xs"
      rounded="xl"
      p={2}
      paddingTop={1}
      paddingBottom={1}
      borderColor="#171624"
      background="#171624"
      display="flex"
      alignContent="center"
      alignItems="center"
    >
      <TravelExploreIcon sx={{ color: '#646371' }} />
      <Input
        focusBorderColor="0"
        value={search}
        onChange={handleSearch}
        placeholder="Here is a sample placeholder"
        size="sm"
        color="#646371"
      />
    </Box>
  );
}

export default Search;
