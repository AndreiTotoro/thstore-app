import React, { useState, useEffect } from 'react';
import { Box, ChakraProvider } from '@chakra-ui/react';
import Cards from './components/Cards';
import Search from './components/Search';
import { extendTheme } from '@chakra-ui/react';

import '@fontsource/poppins';

import Menu from './components/Menu';
import Banner from './components/Banner';

const theme = extendTheme({
  fonts: {
    heading: `'Raleway', sans-serif`,
    body: `'Raleway', sans-serif`,
  },
  styles: {
    global: () => ({
      body: {
        bg: '#202135',
      },
    }),
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
      <Box bg={'#202135'} fontFamily="Poppins" display="flex">
        <Menu />
        <Box flexBasis="45%">
          <Search
            search={search}
            updateSearch={updateSearch}
            setShowAll={setShowAll}
          />
          <Banner />
          <Cards cards={cardsToShow} />
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;
