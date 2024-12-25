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
      <GameState status="waiting" />
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">

</script>
