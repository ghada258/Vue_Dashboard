<!-- Parent.vue -->
<script setup>
import Templatepage from '../components/Templatepage.vue';
import Table from '../components/Table.vue';
import { computed, onBeforeMount, onMounted, ref, watch} from 'vue'; 
import Paginationtable from '../components/Paginationtable.vue';
import Pagetitle from '../components/Pagetitle.vue';
import Filter from '../components/Filter.vue';
import { useOrderStore } from '../Store/OrderStore';
import Search from '../components/Search.vue';
import {useFilterCode} from '../Store/Searchcode'
import {usePagination} from '../Store/Pagination'
const searchterm=ref('')
const Filterterm=ref('')
 const OrdercolumnsName = ref([
          {name:'_id',label:'Id'},
          { name: 'firstName', label: 'First Name'},
          { name: 'lastName', label: 'Last Number'},
          { name: 'email', label: 'Email' },
          { name: 'itemsCount', label:'Number of Items'},
          { name: 'totalPriceOrder', label: 'Total Price' },
          { name: 'status', label: 'Status' },   
          { name:'Order',label:'Order'},
]);
const ordertStore=useOrderStore()
// const filteroption = ref([
// { name: '', title: 'All' },
//   { name: 'Arrived',  title: 'Arrived' },
//   { name: 'Canceled', title: 'Canceled' },
// ])

// const field=['Status','Customer_Name','Phone_Number']
// const filterorder=useFilterCode(ordertStore.Order_data,searchterm,field,Filterterm)

// const paginationdata=pagination(filterorder,8)
// //tommorrow
// watch([searchterm,Filterterm],()=>{
//   paginationdata.page.value = 1;
// })
 onBeforeMount(() => {
  console.log('fetched');
  ordertStore.fetchOrders();
});
onMounted(() => {
  console.log('Data fetched on mount:');
});
</script>

<template>
  <div class="text-center ">
        <Templatepage :statusfetch="ordertStore.status" :length="ordertStore.datalength " nofilterdata="/no product.svg"  titlenodata=" No Orders available">

        <template #partone>
            <Pagetitle title="Order Management"/>
        </template>
        <template #parttwo>
          
            <div class="d-flex bg-success">
              <Filter :List="filteroption" v-model="Filterterm" />
              <Search v-model="searchterm" label='Search for order...'/>
        </div>

          </template>
      <template #partthree>
        <Table :columns="OrdercolumnsName" :tableData="ordertStore.alldata"nofilterdata="/no-order.svg" titlenodata=" No order match your search....."/>
      </template>
      <template #partfour>
        
        <!-- <Paginationtable :totalpage="paginationdata.totalpage.value" v-model:page="paginationdata.page.value" :itemperpage="paginationdata.itemperpage"/> -->
      </template>
    </Templatepage>
  </div>
</template>
