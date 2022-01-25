import { StyleSheet } from 'react-native';

import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: 360,
  },
  content: {
    marginTop: -50,
    paddingHorizontal: 50,
  },
  title: {
    color: theme.texts.heading.color,
    textAlign: 'center',
    fontSize: 40,
    fontFamily: theme.texts.heading.fontFamilyBold,
    lineHeight: 40,
    marginBottom: 16,
  },
  subtitle: {
    color: theme.texts.heading.color,
    textAlign: 'center',
    fontSize: 15,
    fontFamily: theme.texts.body.fontFamilyRegular,
    lineHeight: 25,
    marginBottom: 48,
  },
});