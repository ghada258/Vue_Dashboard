<template>
  <v-form class="d-flex " style="gap:20px">
    <v-label>Select Language</v-label>
    <v-autocomplete
      v-model="selected"
      :items="items"
      label="To"
       variant="outlined"

      hide-details
      hide-no-data
   
      single-line
    ></v-autocomplete>
    <v-label >Select Currency</v-label>
    <v-autocomplete
      v-model="Select_Currency"
      :items="Currency"
      label="To"
       variant="outlined"
      hide-details
      hide-no-data
     
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
