import React, {ReactElement, ReactNode} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Color} from '../../theme/MainTheme';

const styles = StyleSheet.create({
  button: {flex: 1},

  label: {
    paddingBottom: 5,
    color: Color.GreyTwo,
    fontSize: 11,
  },

  icon: {
    flex: 1,
    paddingTop: 13,
    paddingBottom: 13,
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  focusedLabel: {color: Color.Red},
});

interface TabBarItemProps {
  label: string;
  focused: boolean;
  onPress: () => void;
  icon: ReactElement<object>;
}
export const BottomNavigationItem: ReactNode = ({
  icon,
  label,
  focused,
  onPress,
}: TabBarItemProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <View flex={1} alignItems="center">
        <View style={styles.icon}>{icon}</View>

        <Text style={[styles.label, focused && styles.focusedLabel]}>
          {label}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
