import React from 'react';
import EventNoteIcon from '@mui/icons-material/EventNote';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import WalletIcon from '@mui/icons-material/Wallet';
import SettingsIcon from '@mui/icons-material/Settings';
import Btn from './Btn';
import { VStack } from '@chakra-ui/react';
function BtnStack2() {
  return (
    <VStack alignItems="center" spacing={6}>
      <Btn
        icon={<EventNoteIcon sx={{ color: '#414050', fontSize: '18px' }} />}
        text={'My Portofolio'}
      />
      <Btn
        icon={<TrackChangesIcon sx={{ color: '#414050', fontSize: '18px' }} />}
        text={'History'}
      />
      <Btn
        icon={<WalletIcon sx={{ color: '#414050', fontSize: '18px' }} />}
        text={'Wallet'}
      />
      <Btn
        icon={<SettingsIcon sx={{ color: '#414050', fontSize: '18px' }} />}
        text={'Settings'}
      />
    </VStack>
  );
}

export default BtnStack2;
