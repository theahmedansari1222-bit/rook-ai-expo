import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import RookHeader from '../components/RookHeader';

export default function ChatScreen() {
  return (
    <View style={styles.container}>
      <RookHeader title="Chat" />
      <View style={styles.body}>
        <Text style={styles.text}>Chat Engine placeholder — integrate Gemini API & Rook Personality here.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000' },
  body: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  text: { color: '#fff', textAlign: 'center' }
});
