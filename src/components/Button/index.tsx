import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { Text } from 'react-native';

import { styles } from './styles';

interface Props extends TouchableOpacityProps {
  title: string;
}

export function Button({ title, ...rest }: Props) {
  return(
    // TouchableOpacity é utilizado para que o usuário possa clicar no botão
    // ...rest é utilizado para que o TouchableOpacity possa receber todas as
    // propriedades presentes na interface

    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.7}
      {...rest}
    >
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
}