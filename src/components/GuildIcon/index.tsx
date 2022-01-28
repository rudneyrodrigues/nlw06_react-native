import { Image } from "react-native";

import { styles } from "./styles";

interface GuildIconProps {
  icon: string | null;
}

export function GuildIcon({ icon }: GuildIconProps) {
  const uri = `${icon}`;

  return (
    <Image
      style={styles.image}
      source={{uri}}
      resizeMode="cover"
    />
  )
}