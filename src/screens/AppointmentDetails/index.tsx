import { FlatList, ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { Fontisto } from '@expo/vector-icons';

import { Background } from '../../components/Background';
import { ListHeader } from "../../components/ListHeader";
import { Header } from "../../components/Header";
import { ButtonIcon } from "../../components/ButtonIcon";
import { Member } from "../../components/Member";
import { ListDivider } from "../../components/ListDivider";

import { theme } from "../../global/styles/theme";
import { styles } from "./style";

import BannerImg from '../../assets/banner.png';

export function AppointmentDetails() {
  const members = [
    {
      id: '1',
      username: 'Rudney Rodrigues',
      avatar_url: 'https://github.com/rudneyrodrigues.png',
      status: 'online',
    },
    {
      id: '2',
      username: 'John Doe',
      avatar_url: 'https://github.com/rudneyrodrigues.png',
      status: 'offline',
    },
    {
      id: '3',
      username: 'Glenda Priscila',
      avatar_url: 'https://github.com/rudneyrodrigues.png',
      status: 'online',
    },
    {
      id: '4',
      username: 'Rudney Rodrigues',
      avatar_url: 'https://github.com/rudneyrodrigues.png',
      status: 'offline',
    },
  ];

  return (
    <Background>
      <Header
        title="Detalhes"
        action={
          <TouchableOpacity activeOpacity={0.7}>
            <Fontisto name="share" size={24} color={theme.colors.primary} />
          </TouchableOpacity>
        }
      />

      <ImageBackground
        source={BannerImg}
        style={styles.banner}
      >
        <View style={styles.bannerContent}>
          <Text style={styles.title}>League of Legends</Text>
          <Text style={styles.subtitle}>
            É hoje que vamos chegar ao challenger sem perder uma partida da md10
          </Text>
        </View>
      </ImageBackground>

      <ListHeader title="Jogadores" subtitle="Total 3" />

      <FlatList
        data={members}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Member data={item} />
        )}
        ItemSeparatorComponent={() => <View style={styles.divider} />}
        style={styles.members}
        showsVerticalScrollIndicator={false}
      />

      <View style={styles.footer}>
        <ButtonIcon title="Entrar no servidor do Discord" />
      </View>
    </Background>
  )
}