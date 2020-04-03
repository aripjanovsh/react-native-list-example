import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Color} from '../../theme/MainTheme';

const styles = StyleSheet.create({
  root: {
    paddingTop: 22,
    paddingBottom: 8,
    marginHorizontal: 12,
  },
  title: {
    fontSize: 13,
    color: Color.GreyFour,
  },
});

interface Props {
  title: string;
}

export const SearchSectionHeader = ({title}: Props) => (
  <View style={styles.root}>
    <Text style={styles.title}>{title}</Text>
  </View>
);
