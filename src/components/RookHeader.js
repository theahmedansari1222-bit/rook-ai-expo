import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function RookHeader({ title }) {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 48,
    paddingBottom: 16,
    backgroundColor: '#000',
    alignItems: 'center'
  },
  title: {
    color: '#1E90FF',
    fontSize: 20,
    fontWeight: '700'
  }
});
