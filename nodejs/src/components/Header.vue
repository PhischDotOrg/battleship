<template>
  <v-card
    class="mx-auto"
    color="surface-variant"
    max-width="400"
    outlined
    shaped
  >
    <v-card-title>
      <v-icon
        class="mr-2"
        color="primary"
        size="24"
      >
        mdi-ship-wheel
      </v-icon>
      Battleship
    </v-card-title>
    <v-card-text class="text-center">
      <v-btn
        :color="getButtonColor()"
        readonly
        outlined
      >
        {{ currentGameStatus }}
      </v-btn>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
  import { ref } from 'vue';

  // Define an enum for the game state
  enum GameState {
    Offline = 'offline',
    Waiting = 'waiting',
    Playing = 'playing',
    Winning = 'winning',
    Losing = 'losing',
  }

  const currentGameStatus = ref<GameState>(GameState.Offline);

  currentGameStatus.value = GameState.Waiting;

  // Method to calculate button color
  function getButtonColor(): string {
    // Return the color based on the game state
    switch (currentGameStatus.value) {
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
    switch (currentGameStatus.value) {
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
