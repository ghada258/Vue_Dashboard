<script setup>
import Paginationtable from '../components/Paginationtable.vue';
import Table from '../components/Table.vue';
import { onBeforeMount, onMounted, ref, watch} from 'vue'; 
import Templatepage from '../components/Templatepage.vue';
import Pagetitle from '../components/Pagetitle.vue';
import Search from '../components/Search.vue';
import Primarybutton from '../components/Primarybutton.vue';
import Filter from '../components/Filter.vue';
import { useCustomerStore } from '../Store/CustomerStore';
import {useFilterCode} from '../Store/Searchcode'
import { pagination } from '../Store/Pagination';
const searchterm=ref('')
const Filterterm=ref('')
// const container = ref(null)
    
const Customercolumns = ref([
    {name:'_id',label:'Id'},
    { name: 'firstName', label: 'First Name'},
    { name: 'lastName', label: 'Last Name'},
    { name: 'email', label: 'Email' },
    { name:'role',label:'Role'},
    { name: 'status', label: 'Status' },
    { name:'Orders',label:'Orders'},
    { name:'Action',label:'Action'},
    
  ]);

const customerstore=useCustomerStore()

onBeforeMount(() => {
  console.log('fetched');
  customerstore.fetchUsers();
});
onMounted(() => {
  console.log('Data fetched on mount:', customerstore.Product_data);
});

// const field=['Status','Customer_Name','Email','Phone_Number']
// const  filtercustomer=useFilterCode(customerstore.Customer_data,searchterm,field,Filterterm)
// const  paginationdata=pagination(filtercustomer,8)
// watch([searchterm,Filterterm],()=>{
//   paginationdata.page.value = 1;
// })
 
// const filteroption = ref([
// { name: '', title: 'All' },
//   {name:'Vip',title:'Vip'},
//   {name:'Active',title:'Active'},
//   {name:'Inactive',title:'Inactive'},
//   {name:'Blocked',title:'Blocked'},
// ]);
</script>

<template >
  
    <Templatepage :statusfetch="customerstore.status" :length="customerstore.datalength " nofilterdata="/no product.svg"  titlenodata=" No Customers available">
        <template #partone>
            <Pagetitle title="Customer Management"/>
        </template>
        <template #parttwo>
            <div class="d-flex bg-success">
              <Filter :List="filteroption" v-model="Filterterm" />
            <Search v-model="searchterm" label='Search for customer...'/>
          
        </div>
        </template>
      <template #partthree>
     
        <Table :columns="Customercolumns" :tableData="customerstore.alldata" icon1="mdi-account-lock-outline" titleicon1="Make Admin" nofilterdata="/no-order 1.svg" titlenodata=" No Customer match your search....."
        icon2="mdi-block-helper" titleicon2="Block" />
       
      </template>
      <template #partfour>
        <!-- <Paginationtable :totalpage="paginationdata.totalpage.value" v-model:page="paginationdata.page.value" :itemperpage="paginationdata.itemperpage" /> -->
      </template>
    </Templatepage>

   
   
</template>

<style lang="scss" scoped>

</style>