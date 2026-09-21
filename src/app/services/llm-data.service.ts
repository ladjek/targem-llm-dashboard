import { Injectable } from '@angular/core';
import { LlmModel } from '../models/llm-model';

@Injectable({
  providedIn: 'root'
})
export class LlmDataService {

  getUserToken(): string {
    return 'sk-21c43a8f7342=';
  }
  getlabel(): string {
    return 'Ваш тиктокен';
  }
  getMainlabel(): string {
    return 'Targem LLM Hub UP';
  }
  getTools(): string[] {
  return [
    'Claude Code',
    'OpenCode',
    'Kilo Code',
    'Continue',
    'Cursor'
  ];
}
  getModels(): LlmModel[] {
    return [
      {
        name: 'Gemini 1.5 Pro',
        tokens: 7561,
        share: 58,
        provider: 'Targem LLM'
      },
      {
        name: 'Claude 3.5 Sonnet',
        tokens: 5420,
        share: 32,
        provider: 'Targem LLM'
      },
      {
        name: 'GPT-4o',
        tokens: 2890,
        share: 21,
        provider: 'Targem LLM'
      },
      {
        name: 'DeepSeek',
        tokens: 1540,
        share: 12,
        provider: 'Targem LLM'
      },
      {
        name: 'Grog',
        tokens: 850,
        share: 6,
        provider: 'Targem LLM'
      }
    ];
  }
}