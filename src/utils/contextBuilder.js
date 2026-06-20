// Stub for intent detector / context builder

export function buildContext(userInput, userMeta = {}) {
  // TODO: run language detection, intent classification, tone estimation
  return {
    intent: 'unknown',
    language: userMeta.language || 'en',
    tone: 'neutral',
    contextText: userInput
  };
}
