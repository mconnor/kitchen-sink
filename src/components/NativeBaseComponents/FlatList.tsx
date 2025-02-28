import React from 'react';
import { Box, FlatList } from 'native-base';

export const Example = () => {
  const data = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];

  return (
    <FlatList
      mt={6}
      data={data}
      renderItem={({ item }) => (
        <Box
          px={5}
          py={2}
          rounded="md"
          my={1}
          _light={{ bg: 'lightBlue.400' }}
          _dark={{ bg: 'blue.200' }}
         />
      )}
      keyExtractor={(item) => item.id}
    />
  );
};
