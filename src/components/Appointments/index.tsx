import { Text, View } from "react-native";
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { categories } from "../../utils/categories";

import { GuildIcon } from "../GuildIcon";

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";
import PlayerSvg from '../../assets/player.svg';
import CalendarSvg from '../../assets/calendar.svg';

export interface GuildProps {
  id: string,
  name: string,
  icon: 'string' | null,
  owner: boolean,
}

export interface AppointmentsProps {
  id: string;
  guild: GuildProps;
  category: string;
  date: string;
  description: string;
}

interface Props extends TouchableOpacityProps {
  data: AppointmentsProps;
}

export function Appointments({ data, ...props }: Props) {
  const [category] = categories.filter(item => item.id === data.category);
  const { owner } = data.guild;
  const { primary } = theme.colors;
  const { online } = theme.status;

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      {...props}
    >
      <View style={styles.container}>
        <GuildIcon />

        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.title}>{data.guild.name}</Text>
            <Text style={styles.category}>{ category.title }</Text>
          </View>

          <View style={styles.footer}>
            <View style={styles.dateInfo}>
              <CalendarSvg />

              <Text style={styles.date}>
                { data.date }
              </Text>
            </View>

            <View style={styles.playersInfo}>
              <PlayerSvg fill={owner ? primary: online } />

              <Text style={[
                styles.player,
                { color: owner ? primary : online }
              ]}>
                { owner ? 'Anfitrião' : 'Visitante' }
              </Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}