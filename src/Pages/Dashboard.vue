<script setup>
import Card      from '../components/Card.vue';
import Chart     from '../components/Chart.vue';
import Pagetitle from '../components/Pagetitle.vue';
import { onMounted, ref, computed } from 'vue';
import { useCustomerStore } from '../store/CustomerStore';
import { useOrderStore }    from '../store/OrderStore';

const userstotal    = ref(0);
const usersactive   = ref(0);
const usersinactive = ref(0);
const uservip       = ref(0);

const customerStore = useCustomerStore();
const orderSt       = useOrderStore();

const data     = ref(null);
const carddata = ref(null);

const totalRevenue = ref(0);
const totalOrders  = ref(0);
const newProducts  = ref(0);
const newCustomers = ref(0);

onMounted(async () => {

    const usersResult = await customerStore.fetchUsers();
    data.value = usersResult.data;
    userstotal.value    = data.value.userCount;
    usersactive.value   = data.value.userActive;
    usersinactive.value = data.value.userInActive;
    uservip.value       = data.value.userVip;

    console.log('قبل fetchOrders');
      try {
    // … fetchUsers
    carddata.value = await orderSt.fetchOrders();

    totalRevenue.value = carddata.value.totalRevenue;
    totalOrders.value  = carddata.value.totalOrders;
    newProducts.value  = carddata.value.newProducts;
    newCustomers.value = carddata.value.newCustomers;
  } catch (err) {
    console.error(err);
  }

});

const activechart   = computed(() => [usersactive.value,   userstotal.value - usersactive.value]);
const inactivechart = computed(() => [usersinactive.value, userstotal.value - usersinactive.value]);
const vipchart      = computed(() => [uservip.value,       userstotal.value - uservip.value]);


const card = computed(() => [
  { title: 'Total Revenue',  datafetch: `${totalRevenue.value} EGP`, img: '/icons/card1_icon.svg' },
  { title: 'Total Orders',   datafetch: `${totalOrders.value} Orders`, img: '/icons/card2_icon.svg' },
  { title: 'New Products',   datafetch: `${newProducts.value} Products`, img: '/icons/card3_icon.svg' },
  { title: 'New Customers',  datafetch: `${newCustomers.value} Customers`, img: '/icons/card4_icon.svg' },
]);
</script>


<template>
 
  <div class="bg-success">
    <div
      class="pt-4"
      style="padding-left: 88px; padding-right: 88px; height: 100vh"
    >
        <v-sheet class="text-start bg-success mb-4">
          <Pagetitle title="Dashboard"/>
        </v-sheet>
<v-row justify="center" no-gutters style="margin-bottom: 40px;">
  <Card
    v-for="(item, index) in card"
    :key="index"
    :title="item.title"
    :datafetch="item.datafetch"
    :img="item.img"
  />
</v-row>
        <v-sheet width="100%"   class="text-start bg-success" >
            <div class="d-flex">
      <Chart :data="[60,40]":title="'Available Products'"/>
      <Chart :data="activechart":title="'Active Customer'"/>
      <Chart :data="inactivechart":title="'InActive customer'"/>
      <Chart :data="vipchart":title="'Vip customer'"/>
    </div>              
   </v-sheet>
   
    </div>
  </div>

 

</template>

<style lang="scss" scoped>
</style>
