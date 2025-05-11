<script setup>
import { onBeforeMount, watch, ref } from 'vue';
import { useOrderStore } from '../Store/OrderStore';

const color = ref('white');

const totalRevenue = ref(0);
const totalOrders = ref(0);
const newProducts = ref(0);
const newCustomers = ref(0);

const ordertStore = useOrderStore();

onBeforeMount(async () => {
  console.log('Fetching orders...');
  await ordertStore.fetchOrders();
});

watch(
  () => ordertStore.status,
  (newStatus) => {
    if (newStatus === "success") {
      console.log("Updating card data from store:");
      totalRevenue.value = ordertStore.totalRevenue;
      totalOrders.value = ordertStore.totalOrders;
      newProducts.value = ordertStore.newProducts;
      newCustomers.value = ordertStore.newCustomers;

      console.log('Updated values:', {
        totalRevenue: totalRevenue.value,
        totalOrders: totalOrders.value,
        newProducts: newProducts.value,
        newCustomers: newCustomers.value,
      });
    }
  },
  { immediate: true }
);
</script>

<template>
  <v-row justify="center" no-gutters>
    <v-col cols="auto">
      <v-radio-group
        v-model="color"
        hide-details
        inline>
      </v-radio-group>
    </v-col>

    <v-col cols="10" md="3" class="pa-2" style="width:25%">
      <v-card
        :color="color"
        variant="elevated"
        class="mx-auto"
        style="border-radius: 10px;"
        elevation="4"
      >
        <v-card-item>
          <div class="pa-3">
            <div class="text-h6 mb-1 d-flex align-center justify-space-between" style="font-weight: 600; font-size: 24px;">
              Total Revenue
              <div><img src="/public/icons/card1_icon.svg" alt=""></div>
            </div>
            <div class="text-caption pl-1" style="color:#AAAAAA;">
              Last 30 days
            </div>
            <div class="text-h6 mt-5" style="font-weight: 600;">
              {{ totalRevenue }} EGP
            </div>
          </div>
        </v-card-item>
      </v-card>
    </v-col>

    <!-- Card for Total Orders -->
    <v-col cols="10" md="3" class="pa-2" style="width:25%">
      <v-card
        :color="color"
        variant="elevated"
        class="mx-auto"
        style="border-radius: 10px;"
        elevation="4"
      >
        <v-card-item>
          <div class="pa-3">
            <div class="text-h6 mb-1 d-flex align-center justify-space-between" style="font-weight: 600; font-size: 24px;">
              Total Order
              <div><img src="/public/icons/card2_icon.svg" alt=""></div>
            </div>
            <div class="text-caption pl-1" style="color:#AAAAAA;">
              Last 30 days
            </div>
            <div class="text-h6 mt-5" style="font-weight: 600;">
              {{ totalOrders }} Orders
            </div>
          </div>
        </v-card-item>
      </v-card>
    </v-col>

    <!-- Card for Total Products -->
    <v-col cols="10" md="3" class="pa-2" style="width:25%">
      <v-card
        :color="color"
        variant="elevated"
        class="mx-auto"
        style="border-radius: 10px;"
        elevation="4"
      >
        <v-card-item>
          <div class="pa-3">
            <div class="text-h6 mb-1 d-flex align-center justify-space-between" style="font-weight: 600; font-size: 24px;">
              New Products
              <div><img src="/public/icons/card3_icon.svg" alt=""></div>
            </div>
            <div class="text-caption pl-1" style="color:#AAAAAA;">
              Last 30 days
            </div>
            <div class="text-h6 mt-5" style="font-weight: 600;">
              {{ newProducts }} Products
            </div>
          </div>
        </v-card-item>
      </v-card>
    </v-col>

    <v-col cols="10" md="3" class="pa-2" style="width:25%">
      <v-card
        :color="color"
        variant="elevated"
        class="mx-auto"
        style="border-radius: 10px;"
        elevation="4"
      >
        <v-card-item>
          <div class="pa-3">
            <div class="text-h6 mb-1 d-flex align-center justify-space-between" style="font-weight: 600; font-size: 24px;">
              New Customers
              <div><img src="/public/icons/card4_icon.svg" alt=""></div>
            </div>
            <div class="text-caption pl-1" style="color:#AAAAAA;">
              Last 30 days
            </div>
            <div class="text-h6 mt-5" style="font-weight: 600;">
              {{ newCustomers }} Customers
            </div>
          </div>
        </v-card-item>
      </v-card>
    </v-col>
  </v-row>
</template>

<style lang="scss" scoped>
</style>
