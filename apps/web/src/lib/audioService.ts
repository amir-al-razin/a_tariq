export class AudioService {
  private ctx: AudioContext | null = null;

  public playTone(freq: number, type: OscillatorType = 'sine', duration: number = 0.15): void {
    try {
      if (typeof window === 'undefined') return;
      if (!this.ctx) {
        const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        this.ctx = new AudioCtx();
      }
      if (this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch {
      // Graceful fallback if Web Audio is restricted
    }
  }

  public playClick(): void {
    this.playTone(400, 'triangle', 0.05);
  }

  public playSuccess(): void {
    this.playTone(523.25, 'sine', 0.1);
    setTimeout(() => this.playTone(659.25, 'sine', 0.15), 80);
    setTimeout(() => this.playTone(783.99, 'sine', 0.25), 160);
  }

  public playError(): void {
    this.playTone(240, 'sawtooth', 0.18);
  }

  public speakArabic(text: string, enabled: boolean): void {
    if (!enabled || typeof window === 'undefined') return;
    this.playClick();
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'ar-SA';
      utterance.rate = 0.85;
      window.speechSynthesis.speak(utterance);
    }
  }
}

export const audioService = new AudioService();
