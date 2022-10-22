import React, { useState, useEffect } from 'react';
import { Box, ChakraProvider } from '@chakra-ui/react';

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
    </ChakraProvider>
  );
}

export default App;
