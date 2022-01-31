import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  label: {
    fontSize: 18,
    fontFamily: theme.texts.heading.fontFamilyBold,
    color: theme.texts.heading.color,
  },
  form: {
    paddingHorizontal: 24,
    marginTop: 32,
  },
  select: {
    width: '100%',
    height: 68,
    flexDirection: 'row',
    borderColor: theme.colors.secondary50,
    borderWidth: 1,
    borderRadius: 8,
    alignItems: 'center',
    paddingRight: 25,
    overflow: 'hidden',
  },
  image: {
    width: 64,
    height: 68,
    backgroundColor: theme.colors.secondary50,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: theme.colors.secondary50
  },
  selectBody: {
    flex: 1,
    alignItems: 'center',
  },
  field: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  column: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  divider: {
    marginRight: 4,
    fontSize: 15,
    fontFamily: theme.texts.body.fontFamilyMedium,
    color: theme.texts.body.color,
  },
  caracteresLimit: {
    fontFamily: theme.texts.body.fontFamilyRegular,
    fontSize: 13,
    color: theme.texts.body.color
  },
  footer: {
    marginVertical: 20,
    marginBottom: 56,
  },
});