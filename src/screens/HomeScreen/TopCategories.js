import React from 'react';
import { FlatList, Dimensions } from 'react-native';
import Feather from 'react-native-vector-icons/Feather'
import Icon from 'react-native-vector-icons/FontAwesome';
import styled from 'styled-components';

import TopHeader from './TopHeader';

import { Text, Block, Button, Input } from '../../components';
import categories from '../../mooks/categories.json';

const W = Dimensions.get('window').width / 4;

const Image = styled.Image`
  width: ${W}px;
  height: ${(W * 9) / 16}px;
  border-radius: 8px;
`

function TopCategories() {


  const renderItem = ({ item }) => {
    return (
      <Button p="5px">
        <Image source={{ uri: item.image }} />
        <Text p="8px" center>{item.name}</Text>
      </Button>
    )
  }

  return (
    <Block p='10px'>
      <TopHeader title='Top Categories' moreTitle='Filter' moreIcon='filter' />
      <FlatList
        horizontal
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
        data={categories}
        renderItem={renderItem}
      />
    </Block>
  )
}

export default TopCategories;
