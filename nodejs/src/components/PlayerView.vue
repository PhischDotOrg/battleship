<template>
  <!-- Header / Title -->
  <v-container>
    <v-row
      justify="center"
    >
      <v-col>
        <v-container>
          <h3>Player View</h3>
        </v-container>
      </v-col>
    </v-row>
  </v-container>

  <!-- Main Content -->
  <v-container>
    <v-sheet>
      <v-row
        justify="center"
        no-gutters
      >
        <v-col>
          <GameGrid
            :width="gameStore.width"
            :height="gameStore.height"
          />
        </v-col>
      </v-row>
    </v-sheet>
  </v-container>
</template>

<script lang="ts" setup>
  import { useGameStore } from '@/stores/game';

  const gameStore = useGameStore();
</script>
