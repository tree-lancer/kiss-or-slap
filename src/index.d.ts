export interface Feedback {
  id: string;
  url: string;
  selector: string;
  tag: string;
  text: string;
  sentiment: 'like' | 'dislike' | 'comment';
  comment: string;
}

export interface KissOrSlap {
  destroy(): void;
  getFeedback(): Feedback[];
  copyPrompt(): Promise<string>;
}

export function mount(options?: { storageKey?: string }): KissOrSlap;
