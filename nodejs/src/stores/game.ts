import { defineStore } from 'pinia'
import { GameState } from '@/types/GameState';

export const useGameStore = defineStore('game', () => {
  const state = ref<GameState>(GameState.Waiting);

  return { state }
})
