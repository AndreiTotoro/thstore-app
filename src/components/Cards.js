import { Box } from '@chakra-ui/react';
import React from 'react';
import Card from './Card';

function Cards({ cards }) {
  return (
    <Box
      display="flex"
      justifyContent="space-around"
      flexWrap="wrap"
      p={3}
      paddingTop={0}
    >
      {cards.map(card => {
        return (
          <Card
            imgp={card.img}
            name={card.name}
            author={card.author}
            price={card.price}
          />
        );
      })}
    </Box>
  );
}

export default Cards;
