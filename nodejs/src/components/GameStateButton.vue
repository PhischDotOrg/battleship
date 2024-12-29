<template>
  <v-btn
    :color="getButtonColor(props.status)"
    readonly
    outlined
  >
    {{ getButtonText(props.status) }}
  </v-btn>
</template>

<script lang="ts" setup>
  import { GameState } from '@/types/GameState';

  const props = defineProps<{
    status: GameState;
  }>();

  // Method to calculate button color
  function getButtonColor(pStatus: GameState): string {
    // Return the color based on the game state
    switch (pStatus) {
      case GameState.Placing:
        return 'primary';
      case GameState.Playing:
        return 'primary';
      case GameState.Waiting:
        return 'secondary';
      case GameState.Winning:
        return 'success';
      case GameState.Losing:
        return 'warning';
      case GameState.Offline:
        return 'disabled';
      default:
        return 'error';
    }
  }

  // Method to calculate button text
  function getButtonText(pStatus: GameState): string {
    // Return the text based on the game state
    switch (pStatus) {
      case GameState.Placing:
        return 'Placing';
      case GameState.Playing:
        return 'Playing';
      case GameState.Waiting:
        return 'Waiting';
      case GameState.Winning:
        return 'Winning';
      case GameState.Losing:
        return 'Losing';
      case GameState.Offline:
        return 'Offline';
      default:
        return 'Error';
    }
  }
</script>
