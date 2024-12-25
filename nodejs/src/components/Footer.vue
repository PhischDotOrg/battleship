<template>
  <v-card>
    <v-tabs
      v-model="tab"
      bg-color="primary"
    >
      <v-tab value="connection">Connection</v-tab>
      <v-tab value="settings">Settings</v-tab>
    </v-tabs>

    <v-card-text>
      <v-tabs-window v-model="tab">
        <v-tabs-window-item value="connection">
          <Connection />
        </v-tabs-window-item>

        <v-tabs-window-item value="settings">
          <Settings />
        </v-tabs-window-item>
      </v-tabs-window>
    </v-card-text>
  </v-card>
</template>

<script lang="ts" setup>
  import { useGameStore } from '@/stores/game';

  const gameStore = useGameStore();

  const tab = ref('settings');
</script>
