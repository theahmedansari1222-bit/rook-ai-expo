import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { semanticColors } from '../theme/colors';

export default function MessageBubble({ message, isUser = false }) {
  const bubbleStyle = isUser ? styles.userBubble : styles.assistantBubble;
  const textStyle = isUser ? styles.userText : styles.assistantText;

  return (
    <View style={[styles.container, isUser && styles.userContainer]}>
      <View style={bubbleStyle}>
        <Text style={textStyle}>{message}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 6,
    marginHorizontal: 12,
    alignItems: 'flex-start',
    maxWidth: '85%'
  },
  userContainer: {
    alignSelf: 'flex-end',
    alignItems: 'flex-end',
    maxWidth: '90%'
  },
  userBubble: {
    backgroundColor: semanticColors.userMessageBackground,
    borderRadius: 14,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderBottomRightRadius: 4
  },
  assistantBubble: {
    backgroundColor: semanticColors.assistantMessageBackground,
    borderRadius: 14,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderBottomLeftRadius: 4
  },
  userText: {
    color: '#FFFFFF',
    fontSize: 15,
    lineHeight: 20
  },
  assistantText: {
    color: '#FFFFFF',
    fontSize: 15,
    lineHeight: 20
  }
});
