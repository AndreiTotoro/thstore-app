import React, { useState, useEffect } from 'react';
import { Box, Button, ChakraProvider } from '@chakra-ui/react';
import Cards from './components/Cards';
import Search from './components/Search';
import Btn from './components/Btn';
import HomeIcon from '@mui/icons-material/Home';

const BTNCOLOR = '#4f4e5e';

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
    <ChakraProvider>
      <Box bg={'#202135'}>
        <Box bg="tomato" w="100%" p={4} color="white">
          This is a test!
        </Box>
        <Btn
          icon={<HomeIcon sx={{ color: 'white' }} />}
          highlighted="true"
          text={'Hello'}
        />
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
