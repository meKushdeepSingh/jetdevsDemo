import {StyleSheet} from 'react-native';
import {colors} from './colors';

export const commonStyles = StyleSheet.create({
  mainView: {
    flex: 1,
    color: colors.mainBackground,
  },
  horizontalViewStyles: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  fieldWrapperStyles: {
    width: '100%',
    maxWidth: 500,
    paddingVertical: 10,
    alignSelf: 'center',
    overflow: 'hidden',
    height: 'auto',
  },
  fieldLabelStyles: {
    alignSelf: 'flex-start',
    paddingHorizontal: '2%',
  },
  fieldInputWrapperStyles: {
    width: '100%',
    borderBottomWidth: 1,
    paddingHorizontal: '2%',
    flexDirection: 'row',
    minHeight: 40,
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  errorTextStyle: {
    color: colors.red,
    marginTop: 2,
    alignSelf: 'flex-start',
  },
  primaryButtonStyles: {
    width: '100%',
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',

    marginTop: 10,
  },
  primaryButtonLabelStyles: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.white,
  },
  primaryHeaderStyles: {
    width: '100%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderBottomWidth: 1.5,
    borderBottomColor: `${colors.fieldBorder}30`,
  },
  primaryHeaderLogoStyles: {
    height: 50,
    width: 50,
    resizeMode: 'contain',
  },
  verySmallIcon: {
    height: 12,
    width: 12,
    resizeMode: 'contain',
  },
  smallIcon: {
    height: 15,
    width: 15,
    resizeMode: 'contain',
  },
  mediumIcon: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
  },
  largeIcon: {
    height: 25,
    width: 25,
    resizeMode: 'contain',
  },
});
