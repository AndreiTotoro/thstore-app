import React, { useState, useEffect } from 'react';
import { Box, ChakraProvider } from '@chakra-ui/react';
import Cards from './components/Cards';
import Search from './components/Search';
import { extendTheme } from '@chakra-ui/react';
import BtnStack1 from './components/BtnStack1';
import BtnStack2 from './components/BtnStack2';
import Logo from './components/Logo';
import '@fontsource/poppins';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import Logout from './components/Logout';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const theme = extendTheme({
  fonts: {
    heading: `'Raleway', sans-serif`,
    body: `'Raleway', sans-serif`,
  },
});

function App() {
  const [cards, addCard] = useState([]);
  const [search, updateSearch] = useState('');
  const [showAll, setShowAll] = useState(true);

  const cardCreator = (name, img, author, price) => {
    const new_card = {
      name: name,
      img: img,
      author: author,
      price: price,
    };
    return new_card;
  };

  const dummyValues = () => {
    return [
      ...cards,
      cardCreator('Weay Artwork', '1.jpg', 'Darwin Shaffer', '4.5'),
      cardCreator('Spectrum of Color', '3.jpg', 'Chace Rojos', '6.5'),
      cardCreator('Dawn of Men', '3.jpg', 'Baltazar Armenie', '5.2'),
      cardCreator('Retribution', '1.jpg', 'Jake Tran', '4.1'),
    ];
  };

  useEffect(() => {
    addCard(dummyValues());
  }, []);

  const cardsToShow = showAll
    ? cards
    : cards.filter(card =>
        card.name.toLowerCase().includes(search.toLocaleLowerCase())
      );

  return (
    <ChakraProvider theme={theme}>
      <Box bg={'#202135'} fontFamily="Poppins">
        <Logo
          icon={<DragHandleIcon sx={{ color: 'white' }} />}
          name="THSTORE"
        />
        <Logout
          text="Logout"
          icon={<ExitToAppIcon sx={{ color: '#cb4444' }} />}
        />
        <BtnStack1 />
        <BtnStack2 />
        <Search
          search={search}
          updateSearch={updateSearch}
          setShowAll={setShowAll}
        />
        <Cards cards={cardsToShow} />
      </Box>
    </ChakraProvider>
  );
}

export default App;
