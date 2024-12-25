<template>
  <v-container>
    <!-- Header Row -->
    <v-row no-gutters>
      <v-col cols="12">
        <Header />
      </v-col>
    </v-row>

    <!-- Main Content -->
    <v-row>
      <v-spacer cols="1" />
      <v-col cols="4">
        <GameGrid
          width="10"
          height="10"
        />
      </v-col>
      <v-spacer cols="2" />
      <v-col cols="4">
        <OpponentGrid opponents="1" />
      </v-col>
      <v-spacer cols="1" />
    </v-row>

    <!-- Footer Row -->
    <v-row>
      <v-col cols="12">
        Bottom
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
  //
</script>
