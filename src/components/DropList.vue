<template>
  <v-form>
    <v-label>Select Language</v-label>
    <v-autocomplete
      v-model="selected"
      :items="items"
      label="To"
      chips
      hide-details
      hide-no-data
      multiple
      single-line
    ></v-autocomplete>
    <v-autocomplete
      v-model="Select_Currency"
      :items="Currency"
      label="To"
      chips
      hide-details
      hide-no-data
      multiple
      single-line
    ></v-autocomplete>
  </v-form>
</template>
<script setup>
import { ref } from "vue";

const items = ["English", "Arabic"];
const Currency = ["EGP", "$"];
const selected = ref(["English"]);
const Select_Currency = ref(["EGP"]);
</script>
