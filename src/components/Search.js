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
      rounded="40"
      p={2}
      paddingTop={2}
      paddingBottom={2}
      borderColor="#171624"
      background="#171624"
      display="flex"
      alignContent="center"
      alignItems="center"
      width="90%"
    >
      <TravelExploreIcon sx={{ color: '#646371' }} />
      <Input
        focusBorderColor="0"
        value={search}
        onChange={handleSearch}
        placeholder="Search any collection"
        size="sm"
        color="#646371"
      />
    </Box>
  );
}

export default Search;
