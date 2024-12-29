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
          <OpponentView />
        </v-col>

        <v-col>
          <PlayerView />
        </v-col>
      </v-row>
    </v-container>

    <!-- Footer Row -->
    <v-container>
      <v-row
        no-gutters
      >
        <v-col>
          <Footer />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts" setup>
  import { useGameStore } from '@/stores/game';

  const gameStore = useGameStore();

  // Watch gameStore.selection for changes
  watch(() => gameStore.selection, () => {
    console.log(`Ships: ${gameStore.selection}`);
  });
</script>
