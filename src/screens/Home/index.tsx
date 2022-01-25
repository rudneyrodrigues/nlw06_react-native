import {
  View,
  Text,
  Image
} from "react-native";
import { styles } from "./style";

import { Profile } from "../../components/Profile ";

import PlayerImg from '../../assets/player.svg';

export function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Profile />
      </View>
    </View>
  )
}