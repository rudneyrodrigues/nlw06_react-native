import { LinearGradient } from "expo-linear-gradient";
import { Image, View } from "react-native";
import { theme } from "../../global/styles/theme";
import { styles } from "./styles";

interface Props {
  urlImage: string;
}

export function Avatar({ urlImage }: Props) {
  const { secondary40, secondary60 } = theme.colors;

  return (
    <LinearGradient colors={[secondary40, secondary60]} style={styles.container}>
      <Image
        source={{uri: urlImage}}
        style={styles.avatar}
      />
    </LinearGradient>
  )
}