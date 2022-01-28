import { useState } from 'react';
import {
  View,
  FlatList,
  Text
} from "react-native";
import { useNavigation } from '@react-navigation/native';

import { Background } from '../../components/Background';
import { Profile } from "../../components/Profile ";
import { ButtonAdd } from "../../components/ButtonAdd";
import { CategorySelect } from "../../components/CategorySelect";
import { ListHeader } from '../../components/ListHeader';
import { Appointments } from '../../components/Appointments';
import { ListDivider } from '../../components/ListDivider';

import { styles } from "./style";
import { appointmentsData } from '../../utils/appointments';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../routes/auth.routes';

type navigationProps = StackNavigationProp<RootStackParamList>;

export function Home() {
  const [category, setCategory] = useState('');
  const navigation = useNavigation<navigationProps>();

  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory('') : setCategory(categoryId);
  }

  function handleAppointmentDetails() {
    navigation.navigate('Details');
  }

  return (
    <Background>
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
          <ListHeader title='Partidas agendadas' subtitle='Total de 5' />

          {/* As FlatList são indicadas quando é necessário uma grande listagem de objetos, pois possui um melhor desempenho na renderização */}
          <FlatList
            data={appointmentsData}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
                <Appointments
                  data={item}
                  onPress={handleAppointmentDetails}
                />
            )}
            ItemSeparatorComponent={ListDivider}
            style={styles.matches}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </Background>
  )
}