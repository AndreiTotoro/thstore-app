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

  useEffect(() => {
    addCard([...cards, cardCreator('John', 'someimg.jpg', 'Andrei', '300')]);
    addCard([...cards, cardCreator('Udad', 'someimg.jpg', 'Andrei', '30dsa0')]);
    addCard([
      ...cards,
      cardCreator('saad', 'someimdsg.jpg', 'Andrei', '30dsa0'),
    ]);
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
