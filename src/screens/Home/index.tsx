import { useState } from 'react';
import {
  View,
  FlatList,
  Text
} from "react-native";

import { Profile } from "../../components/Profile ";
import { ButtonAdd } from "../../components/ButtonAdd";
import { CategorySelect } from "../../components/CategorySelect";
import { ListHeader } from '../../components/ListHeader';
import { Appointments } from '../../components/Appointments';
import { ListDivider } from '../../components/ListDivider';

import { styles } from "./style";

export function Home() {
  const [category, setCategory] = useState('');

  const appointments = [
    {
      id: '1',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true,
      },
      category: '1',
      date: '28/01 às 20:40h',
      description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
    },
    {
      id: '2',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true,
      },
      category: '1',
      date: '28/01 às 20:40h',
      description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
    },
    {
      id: '3',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true,
      },
      category: '1',
      date: '28/01 às 20:40h',
      description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
    },
    {
      id: '4',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true,
      },
      category: '1',
      date: '28/01 às 20:40h',
      description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
    },
    {
      id: '5',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true,
      },
      category: '1',
      date: '28/01 às 20:40h',
      description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
    },
  ];

  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory('') : setCategory(categoryId);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd />
      </View>

      <CategorySelect
        categorySelected={category}
        setCategory={handleCategorySelect}
      />

      <View style={styles.content}>
        <ListHeader title='Partidas agendadas' subtitle='Total 6' />

        {/* As FlatList são indicadas quando é necessário uma grande listagem de objetos, pois possui um melhor desempenho na renderização */}
        <FlatList
          data={appointments}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
              <Appointments data={item} />
          )}
          ItemSeparatorComponent={ListDivider}
          style={styles.matches}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  )
}