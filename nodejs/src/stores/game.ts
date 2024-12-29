import { defineStore } from 'pinia'
import { GameState } from '@/types/GameState';

export type Coordinate = {
  x: number,
  y: number
}

export type Game = {
  state     : GameState,
  opponents : number,
  isHost    : boolean,
  width     : number,
  height    : number,
  ships     : { [key: number]: number },
  selection : number,
  placement : { [key: number]: Coordinate[] },
}

export const useGameStore = defineStore('game', {
  state: (): Game => ({
    state: GameState.Placing,
    isHost: true,
    opponents: 1,
    width: 10,
    height: 10,
    ships: {
      2: 1,
      3: 2,
      4: 1,
      5: 1
    },
    selection: 2,
    placement: {},
  })
})
