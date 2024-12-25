<template>
  <v-container>
    <v-radio-group
      v-model="ships"
    >
      <v-row>
        <v-col>
          <v-radio
            label="2 Cells"
            value="2"
          />
          <v-text-field
            v-model="numShips2"
            density="compact"
            style="width: 70px"
            type="number"
            min="0"
            max="2"
            hide-details
            single-line
            :disabled="gameStore.isHost === false"
          />
        </v-col>

        <v-col>
          <v-radio
            label="3 Cells"
            value="3"
          />
          <v-text-field
            v-model="numShips3"
            density="compact"
            style="width: 70px"
            type="number"
            min="0"
            max="2"
            hide-details
            single-line
            :disabled="gameStore.isHost === false"
          />
        </v-col>

        <v-col>
          <v-radio
            label="4 Cells"
            value="4"
          />
          <v-text-field
            v-model="numShips4"
            density="compact"
            style="width: 70px"
            type="number"
            min="0"
            max="1"
            hide-details
            single-line
            :disabled="gameStore.isHost === false"
          />
        </v-col>

        <v-col>
          <v-radio
            label="5 Cells"
            value="5"
          />
          <v-text-field
            v-model="numShips5"
            density="compact"
            style="width: 70px"
            type="number"
            min="0"
            max="1"
            hide-details
            single-line
            :disabled="gameStore.isHost === false"
          />
        </v-col>
      </v-row>
    </v-radio-group>
  </v-container>
</template>

<script lang="ts" setup>
  import { useGameStore } from '@/stores/game';
  import { computed } from 'vue';

  const gameStore = useGameStore();

  const ships = ref('5');

  const numShips2 = computed({
    get: () => gameStore.ships[2],
    set: (value) => gameStore.ships[2] = value
  });

  const numShips3 = computed({
    get: () => gameStore.ships[3],
    set: (value) => gameStore.ships[3] = value
  });

  const numShips4 = computed({
    get: () => gameStore.ships[4],
    set: (value) => gameStore.ships[4] = value
  });

  const numShips5 = computed({
    get: () => gameStore.ships[5],
    set: (value) => gameStore.ships[5] = value
  });
</script>
