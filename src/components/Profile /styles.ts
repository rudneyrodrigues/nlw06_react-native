import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  user: {
    flexDirection: 'row',
  },
  greeting: {
    fontFamily: theme.texts.heading.fontFamilyMedium,
    fontSize: 24,
    color: theme.texts.heading.color,
    marginRight: 5,
  },
  username: {
    fontFamily: theme.texts.heading.fontFamilyBold,
    fontSize: 24,
    color: theme.texts.heading.color,
    marginRight: 5,
  },
  message: {
    fontFamily: theme.texts.body.fontFamilyRegular,
    fontSize: 13,
    lineHeight: 17,
    color: theme.texts.heading.color,
    marginRight: 5,
  },
});