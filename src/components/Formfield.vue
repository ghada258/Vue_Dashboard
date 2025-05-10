<script setup>
import Primarybutton from '../components/Primarybutton.vue';


  </script>
  <style scoped lang="scss">
  .my-label{
    padding-bottom: 22px;
  }
  </style>

<template>
  <v-form class=" d-flex flex-column bg-success" style="gap:24px;"> 
    <label for="firstname" class="font-weight-semibold  text-neutral text-body-1">First Name</label>
    <v-text-field
    id="firstname" 
    style="height: 56px;width: 400px;"
          ref="firstName"
          v-model="firstName"
          :rules="[() => !!firstName || 'This field is required']"
          variant="outlined"
          placeholder="Enter Your First Name"
          required
        />

    <label for="lastName" class="font-weight-semibold text-neutral text-body-1">Last Name</label>
    <v-text-field
          ref="lastName"
          style="height: 56px;width: 400px;"
          v-model="lastName"
          :rules="[() => !!lastName || 'This field is required']"
          variant="outlined"
          placeholder="Enter Your Last Name"
          required
        />
    <label for="Phone" class="font-weight-semibold text- text-body-1">Phone</label>
    <v-text-field
          ref="phone"
          v-model="phone"
          :rules="[() => !!phone || 'This field is required']"
          variant="outlined"
          placeholder="Enter Your Phone"
          required
          style="height: 56px;width: 400px;"
          />
        <label for="Email" class="font-weight-semibold text-neutral text-body-1">Email</label>
        <v-text-field
          ref="email"
          v-model="email"
          variant="outlined"
          placeholder="Enter Your Email"
          disabled
          style="height: 56px;width: 400px;"
          />
  </v-form>



</template>



  