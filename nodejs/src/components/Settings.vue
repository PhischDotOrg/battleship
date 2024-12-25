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
          />
        </v-col>
      </v-row>
    </v-radio-group>
  </v-container>
</template>

<script lang="ts" setup>
  const ships = ref('5');
  const numShips2 = ref(1);
  const numShips3 = ref(2);
  const numShips4 = ref(1);
  const numShips5 = ref(1);
</script>
