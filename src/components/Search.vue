<template>
    <div
      class="mx-auto"
    style="width: 600px;    
    "
    
    >
    
        <v-text-field
          :loading="loading"
             density="comfortable"
          append-inner-icon="mdi-magnify"
          label="Search templates"
          variant="solo"
          hide-details
          single-line
          @click:append-inner="onClick"
        ></v-text-field>
    </div>
 
  </template>
  <script setup>
    import { ref } from 'vue'
  
    const loaded = ref(false)
    const loading = ref(false)
  
    function onClick () {
      loading.value = true
      setTimeout(() => {
        loading.value = false
        loaded.value = true
      }, 2000)
    }
  </script>