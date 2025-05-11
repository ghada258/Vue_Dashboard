<script setup>
import Paginationtable from '../components/Paginationtable.vue';
import Table from '../components/Table.vue';
import { onBeforeMount, onMounted, ref, watch,computed} from 'vue'; 
import Templatepage from '../components/Templatepage.vue';
import Pagetitle from '../components/Pagetitle.vue';
import Search from '../components/Search.vue';
import Primarybutton from '../components/Primarybutton.vue';
import Filter from '../components/Filter.vue';
import { useCustomerStore } from '../Store/CustomerStore';
import {useFilterCode} from '../Store/Searchcode'
import { usePagination } from '../Store/Pagination';
const customerstore=useCustomerStore()
const fields = ["firstName", "lastName", "status"];

const searchterm=ref('')
const Filterterm=ref('')
// const container = ref(null)
    const filteredData=useFilterCode(
  computed(() => customerstore.alldata),
  searchterm,
  fields,Filterterm

);


const paginationdata = usePagination(filteredData, 5);

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
  const filteroption = ref([
  { name: "", title: "All" },
  { name: "vip", title: "vip" },
  { name: "inactive", title: "inactive" },
  { name: "active", title: "active" },
  { name: "Blocked", title: "Blocked" },
]);


onBeforeMount(() => {
  console.log('fetched');
  customerstore.fetchUsers();
});
onMounted(() => {
  console.log('Data fetched on mount:', customerstore.alldata);
});

watch([searchterm, Filterterm], () => {
    paginationdata.page.value = 1;
});
function handleClick(id) {
  const user = customerstore.alldata.find(c => c._id === id);
  if (!user) return;
  customerstore.updateadminIdm(id, admin);
    customerstore.fetchproduct();

}

</script>

<template >
  
    <Templatepage :statusfetch="customerstore.status" :length="customerstore.datalength ":title="'No Customer found.' ">
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
     
        <Table :columns="Customercolumns" :tableData="paginationdata.paginationitem.value" icon1="mdi-account-lock-outline" titleicon1="Make Admin" nosearch="No Customer match your search"
        icon2="mdi-block-helper" titleicon2="Block" imgsearch="/no-order 1.svg" @click="handleClick"/>
       
      </template>
      <template #partfour>
        <Paginationtable :totalpage="paginationdata.totalpage.value" v-model:page="paginationdata.page.value" :itemperpage="paginationdata.itemperpage" />
      </template>
    </Templatepage>

   
   
</template>

<style lang="scss" scoped>

</style>