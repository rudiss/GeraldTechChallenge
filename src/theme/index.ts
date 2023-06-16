import {TextStyle} from 'react-native/types';

export const colors = {
  WHITE: '#FFFFFF',
  BLACK: '#000',
  PRIMARY: '#120a3c',
  GREY: '#CCC',
  DARK_GREY: 'rgba(150, 150, 150, 1)',
  LIGHT_GREY: 'rgba(67, 85, 85, 0.7)',
  LIGHTER_GREY: 'rgba(100, 100, 100, 0.5)',
  BLUE_PICKER: '#D0EAFF',
  BLUE: '#0ED0E0',
  SKY: '#EFF8F8',
  OPAQUE_BACKGROUND: 'rgba(19, 19, 21, 0.2)',
  PURPLE: '#120a3c',
  LIGHTER_RED: 'rgba(250, 150, 115, 0.35)',
  LIGHT_RED: 'rgba(221, 115, 115, 1)',
};

export const commonViewStyles = {
  shadow: (opacity: number) => ({
    elevation: opacity,
    shadowColor: colors.BLACK,
    shadowOpacity: opacity / 100,
    shadowRadius: 10,
    shadowOffset: {width: -2, height: 8},
  }),
  flex: {flex: 1},
  container: {
    flex: 1,
    margin: 10,
  },
};

export const commonTextStyles: {
  [styleName: string]: TextStyle | ((...args: any) => TextStyle);
} = {};
