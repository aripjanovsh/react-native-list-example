import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {Color} from '../../theme/MainTheme';

const styles = StyleSheet.create({
  root: {
    padding: 8,
    margin: 12,
  },

  title: {
    marginBottom: 8,
  },
  titleText: {
    fontSize: 20,
  },
  message: {
    fontSize: 15,
    marginBottom: 16,
  },
  messageText: {},

  button: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: Color.Blue,
    borderRadius: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: Color.White,
    fontSize: 13,
  },
});

interface Props {
  title: string;
  message: string;
  buttonText: string;
  onButtonPress: () => void;
}

export function ErrorView({title, message, buttonText, onButtonPress}) {
  return (
    <View style={styles.root}>
      <View style={styles.title}>
        <Text style={styles.titleText}>{title}</Text>
      </View>
      <View style={styles.message}>
        <Text style={styles.messageText}>{message}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={onButtonPress}>
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
}
