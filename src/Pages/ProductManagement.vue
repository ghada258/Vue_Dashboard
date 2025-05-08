<!-- Parent.vue -->
<script setup>
import Templatepage from '../components/Templatepage.vue';
import { computed, onBeforeMount, ref, watch} from 'vue'; 
import Paginationtable from '../components/Paginationtable.vue';
import Pagetitle from '../components/Pagetitle.vue';
import Primarybutton from '../components/Primarybutton.vue';
import Table from '../components/Table.vue';
import Filter from '../components/Filter.vue';
import {useProductStore} from '../Store/ProductStore'
import Search from '../components/Search.vue';
import {useFilterCode} from '../Store/Searchcode'
import {pagination} from '../Store/Pagination'
import AddProductForm from '../components/AddProductForm.vue';
import router from '../Router';



const productStore=useProductStore()
const searchterm=ref('')
console.log(searchterm.value)

const Filterterm=ref('')
const filteroption = ref([
{ name: '', title: 'All' },

  {name:'cloth',title:'cloth'},
  {name:'shoes',title:'shoes'},
  {name:'glasses',title:'glasses'},
  {name:'bags',title:'bags'},

 
]);

const fields = ['name', 'category', 'brand']
const filteredData = useFilterCode(
  computed(() => productStore.Product_data),
  searchterm,
  fields
);

const paginationdata = pagination(
  filteredData,
  5
);

// console.log(item.id)
function handleClick(item) {
  console.log("click", item)
  router.push({
    name: 'EditProduct',
    params: { id: item},
  });

}
function handeldelete(id)
{
  // call functin delete from orderstore 
  console.log("delete", id)
  productStore.deleteproduct(id).then(()=>
console.log( "deleted  from parent successfully")) 

}

watch([searchterm, Filterterm], () => {
  productStore.fetchproduct({ category: Filterterm.value }).then(() => {
    paginationdata.page.value = 1;
    console.log('Fetched Data:', productStore.Product_data); 
     console.log(searchterm.value)

  });
});

    onBeforeMount(()=>
    productStore.fetchproduct()
        
    )

</script>

<template>
  <div class="text-center">
    <Templatepage>
        <template #partone>
            <Pagetitle title="Product Management"/>
        </template>
        <template #parttwo>
            <div class="d-flex bg-success">
              <Filter :List="filteroption" v-model="Filterterm" />
            <Search v-model="searchterm" label='Search for products...'/>
            <Primarybutton icon="mdi-plus" title="Add New Product"  to="/AddProduct" @click="handleClickAddproduct"/>
        </div>
        </template>
      <template #partthree>
        <Table :columns="productStore.PoducrcolumnsName" :tableData=" paginationdata.paginationitem.value" icon1="mdi-pencil-outline" titleicon1="Edit" icon2="mdi-trash-can-outline" titleicon2="Delete" nofilterdata="/no product.svg" titlenodata=" No products match your search....."@click="handleClick" @delete="handeldelete" />
      </template>
      <template #partfour>

        <Paginationtable :totalpage="paginationdata.totalpage.value" v-model:page="paginationdata.page.value" :itemperpage="paginationdata.itemperpage"/>

      </template>
    </Templatepage>
  </div>
</template>
