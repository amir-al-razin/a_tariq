// Arabic Audio playback helper for mobile
import { Platform } from 'react-native';

let activeAudio: any = null;

export function playArabicAudio(
  keyOrText: string,
  fallbackArabicOrOnEnded?: string | (() => void),
  onEndedCallback?: () => void
): void {
  const fallback =
    typeof fallbackArabicOrOnEnded === 'string' ? fallbackArabicOrOnEnded : undefined;
  const onEnded =
    typeof fallbackArabicOrOnEnded === 'function' ? fallbackArabicOrOnEnded : onEndedCallback;
  const textToSpeak = fallback || keyOrText;

  if (Platform.OS === 'web' && typeof window !== 'undefined') {
    try {
      if (activeAudio) {
        activeAudio.pause();
        activeAudio = null;
      }

      // Check if Web Speech Synthesis is available as an instant fallback
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(textToSpeak);
        utterance.lang = 'ar-SA';
        utterance.rate = 0.85;
        if (onEnded) {
          utterance.onend = () => onEnded();
          utterance.onerror = () => onEnded();
        }
        window.speechSynthesis.speak(utterance);
        return;
      }
    } catch {
      onEnded?.();
    }
  } else {
    // Native fallback: complete callback safely
    setTimeout(() => {
      onEnded?.();
    }, 400);
  }
}

export function stopArabicAudio(): void {
  if (Platform.OS === 'web' && typeof window !== 'undefined') {
    try {
      if (activeAudio) {
        activeAudio.pause();
        activeAudio = null;
      }
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    } catch {
      // Ignore
    }
  }
}
