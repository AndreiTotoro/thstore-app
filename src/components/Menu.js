import React from 'react';

import DragHandleIcon from '@mui/icons-material/DragHandle';
import Logout from './Logout';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import BtnStack1 from './BtnStack1';
import BtnStack2 from './BtnStack2';
import Logo from './Logo';
import { VStack } from '@chakra-ui/react';

function Menu() {
  return (
    <VStack flexBasis="20%" bgColor="#171624">
      <Logo icon={<DragHandleIcon sx={{ color: 'white' }} />} name="THSTORE" />

      <BtnStack1 />
      <BtnStack2 />
      <Logout
        text="Logout"
        icon={<ExitToAppIcon sx={{ color: '#cb4444' }} />}
      />
    </VStack>
  );
}

export default Menu;
