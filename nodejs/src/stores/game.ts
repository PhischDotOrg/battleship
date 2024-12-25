import { defineStore } from 'pinia'
import { GameState } from '@/types/GameState';

export const useGameStore = defineStore('game', () => {
  const state = ref<GameState>(GameState.Waiting);

  /* Number of Opponents */
  const opponents = ref(1);

  /* Width and Height of the Game */
  const width = ref(10);
  const height = ref(10);

  // Define a dictionary to store the number of ships by type
  const ships = ref<{ [key: number]: number }>({
    2: 1,
    3: 2,
    4: 1,
    5: 1
  });

  return { state, opponents, width, height, ships }
})
