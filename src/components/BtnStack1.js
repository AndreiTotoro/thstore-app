import { VStack } from '@chakra-ui/react';
import React from 'react';
import Btn from './Btn';
import DashboardIcon from '@mui/icons-material/Dashboard';
import StorefrontIcon from '@mui/icons-material/Storefront';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import BookmarksIcon from '@mui/icons-material/Bookmarks';

function BtnStack1() {
  return (
    <VStack alignItems="center">
      <Btn
        icon={<DashboardIcon sx={{ color: 'white', fontSize: '15px' }} />}
        highlighted="true"
        text={'Dashboard'}
      />
      <Btn
        icon={<ShowChartIcon sx={{ color: '#414050', fontSize: '15px' }} />}
        text={'Active Bids'}
      />
      <Btn
        icon={<StorefrontIcon sx={{ color: '#414050', fontSize: '15px' }} />}
        text={'Market'}
      />
      <Btn
        icon={<BookmarksIcon sx={{ color: '#414050', fontSize: '15px' }} />}
        text={'Favorites'}
      />
    </VStack>
  );
}

export default BtnStack1;
