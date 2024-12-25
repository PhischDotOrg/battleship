<template>
  <GameGrid
    :width="props.width"
    :height="props.height"
  />
</template>

<script lang="ts" setup>
  // Define Props for width and height
  const props = defineProps({
    width: {
      type: Number,
      required: true
    },
    height: {
      type: Number,
      required: true
    }
  });
</script>
