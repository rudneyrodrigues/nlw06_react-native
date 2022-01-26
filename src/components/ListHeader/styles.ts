import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24
  },
  title: {
    fontFamily: theme.texts.heading.fontFamilyBold,
    fontSize: 18,
    color: theme.texts.heading.color,
  },
  subtitle: {
    fontFamily: theme.texts.body.fontFamilyRegular,
    color: theme.texts.body.color,
    fontSize: 13,
  },
});