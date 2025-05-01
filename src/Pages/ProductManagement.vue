<!-- Parent.vue -->
<script setup>
import Templatepage from '../components/Templatepage.vue';
import Table from '../components/Table.vue';
import { ref} from 'vue'; 
import Paginationtable from '../components/Paginationtable.vue';
import Pagetitle from '../components/Pagetitle.vue';
import Primarybutton from '../components/Primarybutton.vue';

const Customercolumns = ref([
  { name: 'Image', label: 'Image'},
  { name: 'Product Name', label: 'Product Name'},
  { name: 'Category', label: 'Category' },
  { name: 'Brand', label: 'Brand' },
  { name: 'Stock', label: 'Stock' },
  { name: 'Price', label: 'Price' },

]);


const Customer_data = ref([
  {
    'Image': '/801453e0c5024ac15fc4b4caecaebb1e.jpg',
    'Product Name': '123-456-7890',
    'Category': 'Women',
    'Brand':'Zara',
    'Stock': '20',
    'Price':'100'


  },
  {
    'Image': 'public/801453e0c5024ac15fc4b4caecaebb1e.jpg',
    'Product Name': '123-456-7890',
    'Category': 'Women',
    'Brand':'Zara',
    'Stock': '20',
    'Price':'100'


  },
  {
    'Image': 'public/801453e0c5024ac15fc4b4caecaebb1e.jpg',
    'Product Name': '123-456-7890',
    'Category': 'Women',
    'Brand':'Zara',
    'Stock': '20',
    'Price':'100'


  },
  {
    'Image': 'public/801453e0c5024ac15fc4b4caecaebb1e.jpg',
    'Product Name': '123-456-7890',
    'Category': 'Women',
    'Brand':'Zara',
    'Stock': '20',
    'Price':'100'


  },
  {
    'Image': 'public/801453e0c5024ac15fc4b4caecaebb1e.jpg',
    'Product Name': '123-456-7890',
    'Category': 'Women',
    'Brand':'Zara',
    'Stock': '20',
    'Price':'100'


  },
  {
    'Image': 'public/801453e0c5024ac15fc4b4caecaebb1e.jpg',
    'Product Name': '123-456-7890',
    'Category': 'Women',
    'Brand':'Zara',
    'Stock': '20',
    'Price':'100'


  },
  {
    'Image': 'public/801453e0c5024ac15fc4b4caecaebb1e.jpg',
    'Product Name': '123-456-7890',
    'Category': 'Women',
    'Brand':'Zara',
    'Stock': '20',
    'Price':'100'


  },
  {
    'Image': 'public/801453e0c5024ac15fc4b4caecaebb1e.jpg',
    'Product Name': '123-456-7890',
    'Category': 'Women',
    'Brand':'Zara',
    'Stock': '20',
    'Price':'100'


  },
]);
</script>

<template>
  <div class="text-center">
    <Templatepage>
        <template #partone>
            <Pagetitle title="Product Management"/>
        </template>
        <template #parttwo>
            <div class="d-flex justify-space-between	">
                <div>
                    <v-icon size="32" color="primary">mdi-filter-variant</v-icon><span class="font-weight-semibol text-h5 pl-1 text-primary">Filter</span>

                </div>
            <Primarybutton icon="mdi-plus" title="Add New Product"/>
            </div>
        </template>
      <template #partthree>
        <Table :columns="Customercolumns" :tableData="Customer_data" icon2="mdi-menu-right"/>
      </template>
      <template #partfour>
        <Paginationtable/>
      </template>
    </Templatepage>
  </div>
</template>
