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
                :id="`cell-${row}-${col}`"
              >
                &nbsp;
              </v-sheet>

              <!-- Top and Bottom Rows -->
              <v-sheet
                v-else-if="row === 0 || row === height - 1"
                class="grid-cell"
                :color="getColumnHeaderColor(col)"
                :id="`cell-${row}-${col}`"
              >
                {{ getColumnHeader(col) }}
              </v-sheet>

              <!-- Left and Right Columns -->
              <v-sheet
                v-else-if="col === 0 || col === width - 1"
                class="grid-cell"
                :color="getRowHeaderColor(row)"
                :id="`cell-${row}-${col}`"
              >
                {{ getRowHeader(row) }}
              </v-sheet>

              <!-- Inner Cells -->
              <v-hover
                v-else
                @update:model-value="handleHover(col, row, $event)"
              >
                <template
                  #default="{ isHovering, props }"
                >
                  <v-sheet
                    v-bind="props"
                    border
                    rounded
                    class="grid-cell"
                    :id="`cell-${row}-${col}`"
                    :color="isHovering ? 'secondary' : 'default'"
                    @click="handleClick(col, row)"
                    @click.right="handleRightClick(col, row)"
                    @contextmenu.prevent
                  >
                    &nbsp;
                  </v-sheet>
                </template>
              </v-hover>
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

  // Load game store
  import { useGameStore } from '@/stores/game';
  const gameStore = useGameStore();

  // Define local variables width and height that are two larger than the props
  const width = props.width + 2;
  const height = props.height + 2;
  const horizontal = ref(true);

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

  const handleClick = (col: number, row: number) => {
    console.log(`Clicked on cell x=${col}, y=${row}`);
  };

  const handleRightClick = (col: number, row: number) => {
    horizontal.value = !horizontal.value;
  };

  const handlePlacement = (col: number, row: number, ship: number, horizontal: boolean, isHovering: boolean) => {
    console.log(`Placing ship of length ${ship} at x=${col}, y=${row} ${horizontal ? 'horizontally' : 'vertically'}`);

    if (horizontal) {
      for (let i = 0; i < ship; i++) {
        const cell = document.getElementById(`cell-10-1`);
        if (cell) {
          cell.style.backgroundColor = isHovering ? 'secondary' : '';
        } else {
          console.log('Cell not found');
        }
      }
    } else {
      for (let i = 0; i < ship; i++) {
        const cell = document.getElementById(`cell-${row + i}-${col}`);
        if (cell) {
          cell.style.backgroundColor = isHovering ? 'secondary' : '';
        }
      }
    }
  };

  const handleHover = (col: number, row: number, isHovering: boolean) => {
    if (gameStore.state === 'placing') {
      handlePlacement(col, row, gameStore.selection, horizontal.value, isHovering);
    } else if (isHovering) {
      console.log(`Hovering over cell x=${col}, y=${row}`);
    } else {
      console.log(`No longer hovering over cell x=${col}, y=${row}`);
    }
  };
</script>

<style scoped>
  .grid-cell {
    width: 2em; /* Set the width of each cell */
    height: 2em; /* Set the height of each cell */
    text-align: center; /* Center the text horizontally */
    vertical-align: middle; /* Center the text vertically */
  }
</style>
