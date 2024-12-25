<template>
  <v-container>
    <!-- Header Row -->
    <v-row no-gutters>
      <v-col cols="12">
        <Header />
      </v-col>
    </v-row>

    <!-- Main Content -->
    <v-row>
      <v-spacer cols="1" />
      <v-col cols="4">
        <GameGrid
          :width="gameStore.width"
          :height="gameStore.height"
        />
      </v-col>
      <v-spacer cols="2" />
      <v-col cols="4">
        <OpponentGrid
          :width="gameStore.width"
          :height="gameStore.height"
          :opponents="gameStore.opponents"
        />
      </v-col>
      <v-spacer cols="1" />
    </v-row>

    <!-- Footer Row -->
    <v-row>
      <v-col cols="12">
        Bottom
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
  import { useGameStore } from '@/stores/game';

  const gameStore = useGameStore();
</script>
