import { defineStore } from 'pinia'
import { GameState } from '@/types/GameState';

export type Game = {
  state     : GameState,
  opponents : number,
  isHost    : boolean,
  width     : number,
  height    : number,
  ships     : { [key: number]: number }
}

export const useGameStore = defineStore('game', {
  state: (): Game => ({
    state: GameState.Waiting,
    isHost: false,
    opponents: 1,
    width: 10,
    height: 10,
    ships: {
      2: 1,
      3: 2,
      4: 1,
      5: 1
    }
  })
})
