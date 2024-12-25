import { defineStore } from 'pinia'
import { GameState } from '@/types/GameState';

export const useGameStore = defineStore('game', () => {
  const state = ref<GameState>(GameState.Waiting);

  /* Number of Opponents */
  const opponents = ref(1);

  /* Width and Height of the Game */
  const width = ref(10);
  const height = ref(10);

  return { state, opponents, width, height }
})
