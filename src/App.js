import React, { useState, useEffect } from 'react';
import { Box, ChakraProvider } from '@chakra-ui/react';
import Card from './components/Card';

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
      cardCreator('John', 'someimg.jpg', 'Andrei', '300'),
      cardCreator('ewqeq', 'someimg.jpg', 'Andrei', '500'),
      cardCreator('Jqewn', 'somimg.jpg', 'Andrei', '800'),
    ];
  };

  useEffect(() => {
    addCard([...cards, dummyValues()]);
  }, []);

  return (
    <ChakraProvider>
      <Box bg="tomato" w="100%" p={4} color="white">
        This is a test!
      </Box>
      <Box display="flex">
        <Card imgp="1.jpg" name="Andrei" author="John" price="300" />
        <Card imgp="1.jpg" name="Andrei" author="John" price="300" />
      </Box>
    </ChakraProvider>
  );
}

export default App;
