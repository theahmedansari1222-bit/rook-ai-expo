import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import RookHeader from '../components/RookHeader';

export default function ResearchScreen() {
  return (
    <View style={styles.container}>
      <RookHeader title="Research" />
      <View style={styles.body}>
        <Text style={styles.text}>Deep Research Engine placeholder — summary, points, analysis, comparison, insight.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000' },
  body: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  text: { color: '#fff', textAlign: 'center' }
});
