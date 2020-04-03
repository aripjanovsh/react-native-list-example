import React, {ReactNode} from 'react';
import {StyleProp, StyleSheet, Text, TextStyle} from 'react-native';
import {IS_IPHONE_X} from '../../constants/PlatformConstants';

import {Color} from '../../theme/MainTheme';

const styles = StyleSheet.create({
  heading: {
    marginHorizontal: 16,
    color: Color.Black,
    fontFamily: 'Lato-Bold',
  },

  h1: {
    fontSize: 28,
    marginTop: IS_IPHONE_X ? 70 : 40,
    marginBottom: 65,
  },
  h2: {
    fontSize: 24,
    marginVertical: 13,
  },
  h3: {
    fontSize: 20,
    marginVertical: 16,
  },
  h4: {
    fontSize: 18,
    marginVertical: 21,
  },
  h5: {
    fontSize: 16,
    marginVertical: 18,
  },
  noBottomMargin: {
    marginBottom: 0,
  },
});

interface Props {
  children: ReactNode;
  size?: 1 | 2 | 3 | 4 | 5;
  style?: StyleProp<TextStyle>;
  noBottomMargin?: boolean;
}

export const Heading: ReactNode = ({
  size,
  style,
  children,
  noBottomMargin,
}: Props) => {
  return (
    <Text
      style={[
        styles.heading,
        size === 1 && styles.h1,
        size === 2 && styles.h2,
        size === 3 && styles.h3,
        size === 4 && styles.h4,
        size === 5 && styles.h5,
        noBottomMargin && styles.noBottomMargin,
        style,
      ]}>
      {children}
    </Text>
  );
};
