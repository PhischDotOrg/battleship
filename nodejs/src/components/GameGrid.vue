<template>
  <div
    v-for="row in Array.from({ length: height }, (_, i) => i)"
    id="`row-${row}`"
    :key="`row-${row}`"
    class="d-flex"
  >
    <!-- Create a container for each column in the row -->
    <div
      v-for="col in Array.from({ length: width }, (_, i) => i)"
      :key="`col-${col}`"
      class="d-flex"
    >
      <div
        v-if="row === 0 || row === height - 1 || col === 0 || col === width - 1"
        class="d-flex"
        align="center"
      >
        <!-- Top left corner -->
        <v-sheet
          v-if="row === 0 && col === 0"
          class="grid-cell"
        >
          &nbsp;
        </v-sheet>

        <!-- Top right corner -->
        <v-sheet
          v-else-if="row === 0 && col === width - 1"
          class="grid-cell"
        >
          &nbsp;
        </v-sheet>

        <!-- Bottom left corner -->
        <v-sheet
          v-else-if="row === height - 1 && col === 0"
          class="grid-cell"
        >
          &nbsp;
        </v-sheet>

        <!-- Bottom right corner -->
        <v-sheet
          v-else-if="row === height - 1 && col === width - 1"
          class="grid-cell"
        >
          &nbsp;
        </v-sheet>

        <!-- Top and Bottom Rows -->
        <v-sheet
          v-else-if="row === 0 || row === height - 1"
          class="grid-cell"
          :color="getColumnHeaderColor(col)"
        >
          {{ getColumnHeader(col) }}
        </v-sheet>

        <!-- Left and Right Columns -->
        <v-sheet
          v-else-if="col === 0 || col === width - 1"
          class="grid-cell"
          :color="getRowHeaderColor(row)"
        >
          {{ getRowHeader(row) }}
        </v-sheet>
      </div>
      <div
        v-else
        border
        rounded
        class="grid-cell"
      >
        {{ row }}, {{ col }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
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

  // Define local variables width and height that are two larger than the props
  const width = props.width + 2;
  const height = props.height + 2;

  // Define a method to get the column header
  const getColumnHeader = (col: number) => {
    return String.fromCharCode(65 + (col - 1));
  };

  // Define a method to get the column header color
  const getColumnHeaderColor = (col: number) => {
    return col % 2 === 0 ? 'grey-lighten-1' : 'grey-lighten-2';
  };

  const getRowHeader = (row: number) => {
    return row;
  };

  const getRowHeaderColor = (row: number) => {
    return row % 2 === 0 ? 'grey-lighten-1' : 'grey-lighten-2';
  };
</script>

<style scoped>
  .grid-cell {
    width: 2em; /* Set the width of each cell */
    height: 2em; /* Set the height of each cell */
  }
</style>
