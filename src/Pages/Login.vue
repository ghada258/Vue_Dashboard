<script setup>
   import adminLogin from '/images/admin_login.svg';
   import Logo from '/images/logo.svg';
</script>

<template>
    <v-container fluid class="background_img d-flex justify-center align-center pa-0">
       <v-container class=" text-center h-1/2 bg-white rounded-xl pa-10"style="width:32%">
        <v-container class=" d-flex flex-column justify-center align-center">
            <img :src="Logo" class="w-10 h-10 mb-4">
            <text-h1 class="mb-4 text-h6" style="color: #6A6A6A;">Login to your account </text-h1>
            <img :src="adminLogin" class="w-50 h-50">   
        </v-container>
        <v-text-field height="56" v-model="Email" :rules="nameRules" variant="outlined" label="Email" required></v-text-field>
        <v-text-field class="h-56" v-model="password" variant="outlined" label="Password"/>
        <v-btn height="56" class="pa-5 text-white w-100 d-flex justify-center align-center" color="#0A2C47">Log In</v-btn>
      </v-container>
    </v-container>
</template>

<style scoped>
 .background_img{
    background-image :url('images/log_In_img.svg');
    background-size: cover;
    background-position: center;
    width:100%;
    height:100vh;
    
  }
</style>