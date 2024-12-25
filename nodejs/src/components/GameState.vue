<template>
  <v-btn
    :color="getButtonColor()"
    readonly
    outlined
  >
    {{ getButtonText() }}
  </v-btn>
</template>

<script setup lang="ts">
  import { defineProps } from 'vue';

  // Define an enum for the game state
  enum GameState {
    Offline = 'offline',
    Waiting = 'waiting',
    Playing = 'playing',
    Winning = 'winning',
    Losing = 'losing',
  }

  // Define props
  const props = defineProps<{
    status: GameState;
  }>();

  // Method to calculate button color
  function getButtonColor(): string {
    // Return the color based on the game state
    switch (props.status) {
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
  function getButtonText(): string {
    // Return the text based on the game state
    switch (props.status) {
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
