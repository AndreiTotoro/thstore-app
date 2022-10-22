import React from 'react';

import DragHandleIcon from '@mui/icons-material/DragHandle';
import Logout from './Logout';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import BtnStack1 from './BtnStack1';
import BtnStack2 from './BtnStack2';
import Logo from './Logo';
import { Divider, Flex } from '@chakra-ui/react';

function Menu() {
  return (
    <Flex
      height="100vh"
      flexBasis="14%"
      bgColor="#171624"
      gap="60px"
      alignContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Logo icon={<DragHandleIcon sx={{ color: 'white' }} />} name="THSTORE" />

      <BtnStack1 />
      <Divider orientation="horizontal" width="80%" borderColor="#414050" />
      <BtnStack2 />
      <Logout
        text="Logout"
        icon={<ExitToAppIcon sx={{ color: '#cb4444', fontSize: '14px' }} />}
      />
    </Flex>
  );
}

export default Menu;
