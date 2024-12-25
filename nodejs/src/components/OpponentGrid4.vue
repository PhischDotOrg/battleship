<template>
  Opponent Grid {{ props.opponents }}
</template>

<script lang="ts" setup>
  import { defineProps } from 'vue';

  const props = defineProps({
    opponents: {
      type: Number,
      default: 4
    }
  });
</script>
