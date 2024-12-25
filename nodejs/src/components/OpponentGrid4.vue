<template>
  Opponent Grid {{ props.opponents }}
</template>

<script lang="ts" setup>
  const props = defineProps({
    opponents: {
      type: Number,
      default: 4
    }
  });
</script>
