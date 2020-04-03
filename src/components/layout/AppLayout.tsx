import React, {ReactNode} from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import {BottomNavigationWrapper} from '../bottom-navigation/BottomNavigationWrapper';
import {Color} from '../../theme/MainTheme';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Color.White,
  },
  container: {
    flex: 1,
  },
});

interface Props {
  header?: ReactNode;
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
}

export const AppLayout: ReactNode = ({style, children, header}: Props) => {
  return (
    <View flex={1}>
      <View style={[styles.root, style]}>
        {header && header}

        <View style={styles.container}>{children}</View>
      </View>
      <BottomNavigationWrapper />
    </View>
  );
};
