<template>
    <v-btn  variant="outlined" height="56" width="220" class="d-flex flex-row justify-center align-center text-h5  font-weight-semibold  border-primary text-primary">
     <v-icon v-if="icon" color="success" size="32" class="pr-4" >
         {{ icon }}
     </v-icon>
  {{ title}}
 </v-btn>
 </template>
 
 
 <script setup>
   const {title,icon}=defineProps({
     title:{
         type:String,
     required:true
  
     },icon:{
         type:String,
         required:false
     }
 })
   
 </script>
 
 <style lang="scss" scoped>
 
 </style>
 
 
 
 