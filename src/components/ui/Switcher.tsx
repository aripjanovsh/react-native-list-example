import React from 'react';
import {
  StyleProp,
  ViewStyle,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Color} from '../../theme/MainTheme';

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    borderRadius: 30,
  },
  item: {
    paddingVertical: 8,
    flexGrow: 1,
    alignItems: 'center',
    backgroundColor: Color.GreyThree,
  },
  firstItem: {
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  lastItem: {
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
  selectedItem: {
    backgroundColor: Color.Blue,
  },
  itemText: {
    fontSize: 13,
  },
  selectedItemText: {
    color: Color.White,
  },
});

interface Props {
  style?: StyleProp<ViewStyle>;
  items: {id: string; title: string}[];
  value?: string;
  onPress: (id: string) => void;
}

export const Switcher = ({style, items, value, onPress}: Props) => {
  return (
    <View style={[styles.root, style]}>
      {items.map((item, key) => {
        const selected = value === item.id;
        return (
          <TouchableOpacity
            key={item.id}
            activeOpacity={1}
            onPress={() => onPress(item.id)}
            style={[
              styles.item,
              selected && styles.selectedItem,
              key === 0 && styles.firstItem,
              key === items.length - 1 && styles.lastItem,
            ]}>
            <Text
              style={[styles.itemText, selected && styles.selectedItemText]}>
              {item.title}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
