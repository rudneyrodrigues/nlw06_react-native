import { StyleSheet } from 'react-native';

import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: 104,
    height: 120,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  content: {
    width: 100,
    height: 116,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
  },
  checked: {
    position: 'absolute',
    right: 7,
    top: 7,
    width: 10,
    height: 10,
    backgroundColor: theme.colors.primary,
    borderRadius: 3,
  },
  check: {
    position: 'absolute',
    right: 7,
    top: 7,
    width: 10,
    height: 10,
    backgroundColor: theme.colors.secondary100,
    borderColor: theme.colors.secondary50,
    borderRadius: 3,
  },
  title: {
    fontFamily: theme.texts.heading.fontFamilyBold,
    color: theme.texts.heading.color,
    fontSize: 15,
  },
});