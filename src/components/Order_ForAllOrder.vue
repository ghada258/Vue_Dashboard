<template>
    <div class="rounded-xl" style="width: 100%; background-color: #F3F3F3; padding: 8px;  border: 1px solid #80CCF9;">
      <h6 class="text-primary font-weight-regular ml-15 mb-1" style="font-size: 24px;">
        Date: 27/7/2024
      </h6>
  
      <v-slide-group show-arrows>
        <v-slide-group-item v-for="n in 6" :key="n">
          <div class="rounded-lg pa-3 d-flex flex-column justify-center align-center ml-3" style="background-color: #D7D7D7; gap: 8px; width: 250px;">
            <span style="font-weight: 400; font-size: 18px; color: #333333;"> ADIDAS IF1402 Deportivo</span>
            <v-img
              src="https://plus.unsplash.com/premium_photo-1718913931807-4da5b5dd27fa?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Selected Image"
              class="image-placeholder rounded-xl"
              cover
              height="100"
              width="150"
            />
            <div class="d-flex" style="gap: 3px;">
              <v-chip variant="outlined" class="pa-3 bg-white rounded-lg" style="border: 2px solid #C0C0C0; font-size: 18px; border-radius: 0;">XL</v-chip>
              <v-chip variant="outlined" class="pa-3 bg-white rounded-lg" style="border: 2px solid #C0C0C0; font-size: 18px; border-radius: 0;"> Blue</v-chip>
              <v-chip variant="outlined" class="pa-3 bg-white rounded-lg" style="border: 2px solid #C0C0C0; font-size: 18px; border-radius: 0;" >3</v-chip>
              <v-chip variant="outlined" class="pa-3 bg-white rounded-lg" style="border: 2px solid #C0C0C0; font-size: 18px; border-radius: 0;">250$</v-chip>
            </div>
          </div>
        </v-slide-group-item>
      </v-slide-group>
  
      <div class="d-flex justify-space-between mt-1 px-5">
        <h6 class="text-primary font-weight-regular ml-10" style="font-size: 24px;">Price: $1025</h6>
        <h6 class="text-primary font-weight-regular mr-10" style="font-size: 24px;">3 Items</h6>
      </div>
    </div>
  </template>
  