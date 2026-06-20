import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import RookHeader from '../components/RookHeader';

export default function HomeScreen({ navigation }) {
  const glow = new Animated.Value(0);

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(glow, { toValue: 1, duration: 900, useNativeDriver: false }),
        Animated.timing(glow, { toValue: 0.3, duration: 900, useNativeDriver: false })
      ])
    ).start();
  }, []);

  const glowColor = glow.interpolate({
    inputRange: [0.3, 1],
    outputRange: ['#111', '#1E90FF']
  });

  return (
    <View style={styles.container}>
      <RookHeader title="Rook AI" />
      <View style={styles.center}>
        <Animated.View style={[styles.dot, { backgroundColor: glowColor }]} />
        <Text style={styles.hint}>Rook AI — Tap a module</Text>

        <View style={styles.buttons}>
          <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Chat')}>
            <Text style={styles.btnText}>Chat</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Writing')}>
            <Text style={styles.btnText}>Writing</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Research')}>
            <Text style={styles.btnText}>Research</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Memory')}>
            <Text style={styles.btnText}>Memory</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000' },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  dot: { width: 24, height: 24, borderRadius: 12, marginBottom: 16 },
  hint: { color: '#fff', marginBottom: 24 },
  buttons: { width: '80%' },
  btn: { backgroundColor: '#111', padding: 14, borderRadius: 8, marginBottom: 12, alignItems: 'center' },
  btnText: { color: '#1E90FF', fontWeight: '600' }
});
