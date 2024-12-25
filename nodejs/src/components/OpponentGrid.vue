<template>
  <OpponentGrid1
    v-if="props.opponents == 1"
    :width="props.width"
    :height="props.height"
  />
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
  import { GameState } from '@/types/GameState';

  const props = defineProps({
    width: {
      type: Number,
      required: true
    },
    height: {
      type: Number,
      required: true
    },
    opponents: {
      type: Number,
      default: 1
    }
  });
</script>
