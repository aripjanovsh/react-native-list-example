import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Color} from '../../theme/MainTheme';

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    paddingVertical: 25,
    borderBottomWidth: 1,
    borderBottomColor: Color.GreyThree,
    marginHorizontal: 12,
  },
  title: {
    fontSize: 13,
  },
  price: {
    fontSize: 13,
    color: Color.GreyTwo,
    marginLeft: 'auto',
  },
});

interface Props {
  item: {title: string; price: string};
}

export const SearchSectionItem = ({item}: Props) => (
  <View style={styles.root}>
    <Text style={styles.title}>{item.title}</Text>
    <Text style={styles.price}>{item.price}</Text>
  </View>
);
