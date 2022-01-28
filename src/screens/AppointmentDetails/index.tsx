import { View, TouchableOpacity } from "react-native";
import { Fontisto } from '@expo/vector-icons';

import { Background } from '../../components/Background';
import { Header } from "../../components/Header";
import { theme } from "../../global/styles/theme";

import { styles } from "./style";

export function AppointmentDetails() {
  const { primary } = theme.colors;

  return (
    <Background>
      <Header
        title="Detalhes"
        action={
          <TouchableOpacity activeOpacity={0.7}>
            <Fontisto name="share" size={24} color={primary} />
          </TouchableOpacity>
        }
      />
    </Background>
  )
}