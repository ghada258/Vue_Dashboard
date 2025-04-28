<template>
   
       

    
    <div ref="form" >
      
      <v-card-text class="pa-0 ">
        <!-- First Name -->
         <div class="d-flex flex-column gap-0.5 ">
        <label class="my-label text-body-1 font-weight-semibold  ">First Name</label>
        <v-text-field
          ref="firstName"
          v-model="firstName"
          :rules="[() => !!firstName || 'This field is required']"
          variant="outlined"
          placeholder="Enter Your First Name"
          required
        />
    </div>
        <!-- Last Name -->
        <div class="d-flex flex-column gap-2">
        <label class="my-label text-body-1 font-weight-semibold">Last Name</label>
        <v-text-field
          ref="lastName"
          v-model="lastName"
          :rules="[() => !!lastName || 'This field is required']"
          variant="outlined"
          placeholder="Enter Your Last Name"
          required
        />
        </div>
  
        <!-- Phone -->
        <div class="d-flex flex-column gap-2">
        <label class="my-label text-body-1 font-weight-semibold">Phone</label>
        <v-text-field
          ref="phone"
          v-model="phone"
          :rules="[() => !!phone || 'This field is required']"
          variant="outlined"
          placeholder="Enter Your Phone"
          required
        />
        </div>
  
        <!-- Email (disabled) -->
        <div class="d-flex flex-column gap-2">
        <label class="my-label text-body-1font-weight-semibold">Email</label>
        <v-text-field
          ref="email"
          v-model="email"
          variant="outlined"
          placeholder="Enter Your Email"
          disabled
        />
        </div>
      </v-card-text>
  
  
  
        <Primarybutton title="Update Change" width="100vw"  />
    
        <v-spacer />

      </div>
   
  

  </template>
  
  <script setup>
import Secondarybutton from '../components/Secondarybutton.vue';
import Primarybutton from '../components/Primarybutton.vue';


  </script>
  <style scoped lang="scss">
  .my-label{
    padding-bottom: 22px;
  }
  </style>

  

  