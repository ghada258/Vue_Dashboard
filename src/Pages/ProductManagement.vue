<!-- Parent.vue -->
<script setup>
import Templatepage from "../components/Templatepage.vue";
import { computed, nextTick, onBeforeMount, onMounted, ref, watch } from "vue";
import Paginationtable from "../components/Paginationtable.vue";
import Pagetitle from "../components/Pagetitle.vue";
import Primarybutton from "../components/Primarybutton.vue";
import Table from "../components/Table.vue";
import Filter from "../components/Filter.vue";
import { useProductStore } from "../Store/Productstore";
import Search from "../components/Search.vue";
import { useFilterCode } from "../Store/Searchcode";
import { usePagination } from "../Store/Pagination";
import router from "../Router";

const PoducrcolumnsName = ref([
  { name: "_id", label: "Id" },
  { name: "images", label: "Image" },
  { name: "name", label: "Product Name" },
  { name: "category", label: "Category" },
  { name: "brand", label: "Brand" },
  { name: "inStock", label: "Stock" },
  { name: "price", label: "Price" },
  { name: "Action", label: "Action" },
]);

const productStore = useProductStore();
const searchterm = ref("");


const Filterterm = ref("");
const filteroption = ref([
  { name: "", title: "All" },
  { name: "cloth", title: "cloth" },
  { name: "shoes", title: "shoes" },
  { name: "glasses", title: "glasses" },
  { name: "bags", title: "bags" },
]);

const fields = ["name", "category", "brand"];
const filteredData = useFilterCode(
  computed(() => productStore.productsdata),
  searchterm,
  fields
);

const paginationdata = usePagination(filteredData, 5);

// console.log(item.id)
function handleClick(id) {
  router.push({ name: "EditProduct", params: { id } });
}
function handeldelete(id) {
  // call functin delete from orderstore
  console.log("delete", id);
  productStore
    .deleteProduct(id)
    .then(() => console.log("deleted  from parent successfully"));
}

watch([searchterm, Filterterm], () => {
  productStore.fetchProducts({ category: Filterterm.value }).then(() => {
    paginationdata.page.value = 1;
  });
});

onBeforeMount(() => {
  productStore.fetchProducts();
});


</script>

<template >
  <div class="text-center">
    <Templatepage :statusfetch="productStore.status" :length="productStore.dataLength " 
>
      <template #partone>
        <Pagetitle title="Product Management" />
      </template>
      <template #parttwo>
        <div class="d-flex bg-success">
          <Filter :List="filteroption" v-model="Filterterm" />
          <Search v-model="searchterm" label="Search for products..." />
          <Primarybutton
            icon="mdi-plus"
            title="Add New Product"
            to="/AddProduct"
            @click="handleClickAddproduct"
          />
        </div>
      </template>
      <template #partthree>
        <Table
          :columns="PoducrcolumnsName"
          :tableData="paginationdata.paginationitem.value"
          icon1="mdi-pencil-outline"
          titleicon1="Edit"
          icon2="mdi-trash-can-outline"
          titleicon2="Delete"
        nofilterdata="/no product.svg"
        titlenodata=" No products available"
          @click="handleClick"
          @delete="handeldelete"
        />
      </template>
      <template #partfour>
        <Paginationtable
          :totalpage="paginationdata.totalpage"
          v-model:page="paginationdata.page"
          :itemperpage="paginationdata.itemperpage"
        />
      </template>
    </Templatepage>
  </div>
</template>