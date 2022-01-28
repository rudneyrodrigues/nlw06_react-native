import { ReactNode } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import { RootStackParamList } from "../../routes/auth.routes";

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";

interface Props {
  title: string;
  action?: ReactNode;
}

type navigationProps = StackNavigationProp<RootStackParamList>;

export function Header({ title, action }: Props) {
  const { secondary100, secondary40, heading } = theme.colors;

  const navigation = useNavigation<navigationProps>()

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <LinearGradient
      colors={[secondary100, secondary40]}
      style={styles.container}
    >
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={handleGoBack}
      >
        <Feather name="arrow-left" size={24} color={heading} />
      </TouchableOpacity>

      <Text style={styles.title}>
        {title}
      </Text>

      {action && (
        <View>
          {action}
        </View>
      )}
    </LinearGradient>
  )
}