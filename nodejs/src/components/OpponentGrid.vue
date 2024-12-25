<template>
  <OpponentGrid1 v-if="props.opponents == 1" />
  <OpponentGrid2 v-else-if="props.opponents == 2" />
  <OpponentGrid4
    v-else-if="props.opponents == 3 || props.opponents == 4"
    :opponents="props.opponents"
  />
  <GameStateButton
    v-else
    :status="GameState.Error"
  />
</template>

<script lang="ts" setup>
  import { defineProps } from 'vue';
  import { GameState } from '../types/GameState';

  const props = defineProps({
    opponents: {
      type: Number,
      default: 1
    }
  });
</script>
