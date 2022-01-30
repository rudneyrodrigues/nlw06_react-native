import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontFamily: theme.texts.heading.fontFamilyBold,
    fontSize: 18,
    color: theme.texts.heading.color,
    lineHeight: 22.97,
  },
  status: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  bulletStatus: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 8,
  },
  nameStatus: {
    fontFamily: theme.texts.body.fontFamilyRegular,
    fontSize: 13,
    color: theme.texts.body.color,
  },
});