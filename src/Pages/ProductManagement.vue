<!-- Parent.vue -->
<script setup>
import Templatepage from '../components/Templatepage.vue';
import { computed, ref, watch} from 'vue'; 
import Paginationtable from '../components/Paginationtable.vue';
import Pagetitle from '../components/Pagetitle.vue';
import Primarybutton from '../components/Primarybutton.vue';
import Table from '../components/Table.vue';
import Filter from '../components/Filter.vue';
import {useProductStore} from '../Store/ProductStore'
import Search from '../components/Search.vue';
import {useFilterCode} from '../Store/Searchcode'
import {pagination} from '../Store/Pagination'

const productStore=useProductStore()
const searchterm=ref('')
const Filterterm=ref('')

const filteroption = ref([
{ name: '', title: 'All' },

  {name:'Women',title:'Women'},
  {name:'Men',title:'Men'},
  {name:'Kids',title:'Kids'},
 
]);
const fields = ['Product_Name', 'Category', 'Brand']

const filterdata=useFilterCode(productStore.Product_data,searchterm,fields,Filterterm)
const paginationdata=pagination(filterdata,5)
watch([searchterm,Filterterm],()=>{
  paginationdata.page.value=1
})
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
            <Primarybutton icon="mdi-plus" title="Add New Product"/>
        </div>
        </template>
      <template #partthree>
        <Table :columns="productStore.PoducrcolumnsName" :tableData="paginationdata.paginationitem.value" icon1="mdi-pencil-outline" titleicon1="Edit" icon2="mdi-trash-can-outline" titleicon2="Delete" nofilterdata="/no product.svg" titlenodata=" No products match your search....."/>
      </template>
      <template #partfour>

        <Paginationtable :totalpage="paginationdata.totalpage.value" v-model:page="paginationdata.page.value" :itemperpage="paginationdata.itemperpage"/>

      </template>
    </Templatepage>
  </div>
</template>
