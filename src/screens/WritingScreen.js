import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import RookHeader from '../components/RookHeader';

export default function WritingScreen() {
  return (
    <View style={styles.container}>
      <RookHeader title="Writing Studio" />
      <View style={styles.body}>
        <Text style={styles.text}>Writing Studio placeholder — modes: Human / Editorial / Creator / Professional.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000' },
  body: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  text: { color: '#fff', textAlign: 'center' }
});
