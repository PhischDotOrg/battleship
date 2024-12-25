<template>
  <v-container>
    <v-row>
      <v-col cols="5">
        <v-text-field
          label="Host"
          prepend-icon="mdi-server"
          variant="outlined"
        />
      </v-col>

      <v-col cols="5">
        <v-text-field
          label="Port"
          prepend-icon="mdi-numeric"
          variant="outlined"
        />
      </v-col>

      <v-col cols="2">
        <v-btn
          color="primary"
          @click="connect"
        >
          Connect
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>

</script>