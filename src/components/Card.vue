<script setup>
  import { ref } from 'vue'

  const cards =[
  { 
    variant: 'elevated',
    title: 'Total Revenue',
    description: 'Last 30 days',
    Price:'24,000 EGP',
    icon:'icons/card1_icon.svg'
  },
  { 
    variant: 'elevated',
    title: 'Total Order',
    description: 'Last 30 days',
    Price:'24,000 EGP',
    icon:'icons/card2_icon.svg'
  },
  { 
    variant: 'elevated',
    title: 'Total Product',
    description: 'Last 30 days',
    Price:'24,000 EGP',
    icon:'icons/card3_icon.svg'
  },
  { 
    variant: 'elevated',
    title: 'Total Customer',
    description: 'Last 30 days',
    Price:'24,000 EGP',
    icon:'icons/card4_icon.svg'
  },
  ]
  const color = ref('white')
</script>

<template>
  <v-row justify="center" no-gutters>
    <v-col cols="auto">
      <v-radio-group
        v-model="color"
        hide-details
        inline >
      </v-radio-group>
    </v-col>

    <v-col
      v-for="(card, i) in cards"
      :key="i"
      cols="10"
      md="3"
      class="pa-2"
      style="width:25%"
    >
      <v-card
        :color="color"
        :variant="card.variant"
        class="mx-auto"
        style="border-radius: 10px;"
        elevation="4" 

      >
      <v-card-item>
      <div class="pa-3">
        <div class="text-h6 mb-1 d-flex align-center justify-space-between " style="font-weight: 600; font-size: 24px;">
          {{ card.title }}
          <div> <img :src="card.icon" alt=""></div>
          
        </div>
        <div class="text-caption pl-1" style="color:#AAAAAA;">
          {{ card.description }}
        </div>
        <div class="text-h6 mt-5" style="font-weight: 600;">
          {{ card.Price }}
        </div>
        
      </div>
    </v-card-item>

      </v-card>
    </v-col>
  </v-row>
</template>
<style lang="scss" scoped>

</style>