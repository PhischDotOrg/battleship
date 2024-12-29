<template>
  <v-sheet
    :id="`cell-${x}-${y}`"
    :color="props.hovering ? 'secondary' : 'default'"
    v-bind="props"
    border
    rounded
    class="grid-cell"
    @contextmenu.prevent
  >
    <!--
    @click="handleClick(x, y)"
    @click.right="handleRightClick()"
    -->
    &nbsp;
  </v-sheet>
</template>

<script lang="ts" setup>
  const props = defineProps({
    x: {
      type: Number,
      required: true
    },
    y: {
      type: Number,
      required: true
    },
    hovering: {
      type: Boolean,
      required: true
    }
  });
</script>
