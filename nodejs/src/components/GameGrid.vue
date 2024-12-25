<template>
  <v-container>
    <v-row>
      <v-col />
      <v-col>
        <table>
          <tr
            v-for="row in Array.from({ length: height }, (_, i) => i)"
            :key="`row-${row}`"
          >
            <td
              v-for="col in Array.from({ length: width }, (_, i) => i)"
              :key="`col-${col}`"
            >
              <!-- Corners -->
              <v-sheet
                v-if="(row === 0 && col === 0) || (row === 0 && col === width - 1) || (row === height - 1 && col === 0) || (row === height - 1 && col === width - 1)"
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

              <!-- Inner Cells -->
              <v-sheet
                v-else
                border
                rounded
                class="grid-cell player-cell"
                :elevation="hoveredCell === `${row}-${col}` ? 1 : 0"
                @mouseover="hoveredCell = `${row}-${col}`"
                @mouseleave="hoveredCell = null"
                @click="handleCellClick(row, col)"
              >
                &nbsp;
              </v-sheet>
            </td>
          </tr>
        </table>
      </v-col>
      <v-col />
    </v-row>
  </v-container>
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

  // Define a reactive variable to track the hovered cell
  const hoveredCell = ref<string | null>(null);

  // Define a method to handle the click event
  const handleCellClick = (row: number, col: number) => {
    console.log(`Cell clicked: Row ${row}, Column ${col}`);
  };
</script>

<style scoped>
  .grid-cell {
    width: 2em; /* Set the width of each cell */
    height: 2em; /* Set the height of each cell */
    text-align: center; /* Center the text horizontally */
    vertical-align: middle; /* Center the text vertically */
  }

  .player-cell:hover {
    cursor: pointer; /* Change the cursor to a pointer on hover */
  }
</style>
