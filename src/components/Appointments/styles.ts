import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignSelf: 'center',
    paddingHorizontal: 24,
  },
  content: {
    flex: 1,
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  title: {
    fontFamily: theme.texts.heading.fontFamilyBold,
    color: theme.texts.heading.color,
    fontSize: 18,
  },
  category: {
    fontFamily: theme.texts.body.fontFamilyRegular,
    color: theme.texts.body.color,
    fontSize: 13,
  },
  footer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dateInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  date: {
    fontFamily: theme.texts.body.fontFamilyMedium,
    color: theme.texts.heading.color,
    fontSize: 13,
    marginLeft: 7,
  },
  playersInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  player: {
    fontFamily: theme.texts.body.fontFamilyMedium,
    fontSize: 13,
    marginLeft: 7,
  },
});