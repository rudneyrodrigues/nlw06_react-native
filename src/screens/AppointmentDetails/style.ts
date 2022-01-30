import { StyleSheet } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  banner: {
    width: '100%',
    height: 234,
    marginBottom: 30,
  },
  bannerContent: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 24,
    marginBottom: 30,
  },
  title: {
    fontFamily: theme.texts.heading.fontFamilyBold,
    fontSize: 28,
    color: theme.texts.heading.color,
    lineHeight: 36,
    marginBottom: 10,
  },
  subtitle: {
    fontFamily: theme.texts.body.fontFamilyRegular,
    fontSize: 13,
    color: theme.texts.body.color,
    lineHeight: 21,
  },
  members: {
    marginLeft: 24,
    marginTop: 27,
  },
  divider: {
    width: '79.5%',
    height: 1,
    backgroundColor: theme.colors.secondary40,
    marginTop: 10,
    marginVertical: 20,
    alignSelf: 'flex-end'
  },
  footer: {
    paddingHorizontal: 24,
    paddingVertical: 20,
    marginBottom: getBottomSpace(),
  },
});