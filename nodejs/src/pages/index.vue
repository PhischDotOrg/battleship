<template>
  <div>
    <!-- Header Row -->
    <v-container>
      <v-row
        no-gutters
      >
        <v-col cols="2" />

        <v-col>
          <Header />
        </v-col>

        <v-col cols="2" />
      </v-row>
    </v-container>

    <!-- Main Content -->
    <v-container>
      <v-row
        no-gutters
      >
        <v-col>
          <PlayerView />
        </v-col>

        <v-col>
          <OpponentView />
        </v-col>
      </v-row>
    </v-container>

    <!-- Footer Row -->
    <v-container>
      <v-row
        no-gutters
      >
        <v-col>
          Bottom
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts" setup>
  import { useGameStore } from '@/stores/game';

  const gameStore = useGameStore();
</script>
