import React, { useState, useEffect } from 'react';
import { Box, ChakraProvider } from '@chakra-ui/react';
import Card from './components/Card';
import Cards from './components/Cards';

function App() {
  const [cards, addCard] = useState([]);

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

  return (
    <ChakraProvider>
      <Box bg={'#202135'}>
        <Box bg="tomato" w="100%" p={4} color="white">
          This is a test!
        </Box>
        <Cards cards={cards} />
      </Box>
    </ChakraProvider>
  );
}

export default App;
