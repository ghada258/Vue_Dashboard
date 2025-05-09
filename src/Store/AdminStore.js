import axios from 'axios';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useStore = defineStore('CRUD', parameter => {
  const endpoint = ref('products');
  const resourse = param => {
    endpoint.value = param;
  };
  // token for authentication
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhbWFzaW1vQGdtYWlsLmNvbSIsImlkIjoiNjgxNmFlZTdhYjE3ZTFkZGJjZWFlZGM4Iiwicm9sZSI6Im1hbmdlciIsImlhdCI6MTc0NjgwNzg3NywiZXhwIjoxNzQ2OTgwNjc3fQ.jPoHmbDNC1MUnvf6JazIA_LCvsPGdxUhcUfLEqSDrA8';
  //variable for all data 
  const alldata = ref([]);
  // variable for data by id
  const dataitem = ref([]);
  //filter and get all data
  const fetchproduct = async (filter = {}) => {    
    const params = new URLSearchParams();
    if (filter.category) params.append('category', filter.category);
    // Add more filters as needed here 
    const queryString = params.toString();
    const url = queryString ? `/api/${endpoint.value}?${queryString}`: `/api/${endpoint.value}`;
    const response = await axios.get(url, {headers: { Authorization: `Bearer ${token}`,
},
    });
    const firstKey = Object.keys(response.data.data)[0];
    const dataArray = response.data.data[firstKey];
    alldata.value = Array.isArray(dataArray)
      ? dataArray.filter(p => !p.isDeleted)
      : [];
    // Product_data.value = response.data.data.products.filter(p=> p.isDeleted===false)
    return response;
  };
  //

  // by id get product
  const fetchdataitem = async id => {
    const response = await axios.get(`/api/${endpoint.value}/${id}`);
    dataitem.value = `response.data.data.${dataArray}`;
    return response;
  };
  //
  // by id update product
  const updatedataitem = async (id, product) => {
    const response = await axios.patch(
      `/api/${endpoint.value}/${id}`,
      product,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    //  resp is object return product update and stautus
    //store  product update
    const update = response.data.data.product;
    //  هنلف علي  المنتجات بتاعتي اللي عندي اصلا ونجيب المنتج بتاعنا القديم
    // هنجيب ال  index  بتاعه
    const indexoldproduct = alldata.value.findIndex(p => p.id === id);
    if (indexoldproduct !== -1) {
      alldata.value[indexoldproduct] = update;
    }
    return response;
  };
  //
  //by id delete product
  const deletedataitem = async id => {
    const response = await axios.delete(`/api/${endpoint.value}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response.data);
    if (response.data.status === 'success') {
      console.log('Product deleted successfully');
      alldata.value = alldata.value.filter(
        product => product._id !== id
      );
    }
    return response;
  };
  //

  //add product
  const adddataitem = async product => {
    const response = await axios.post(`/api/${endpoint.value}`, product, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.status === 201) {
      console.log('Product added successfully');
      console.log(response.data);
      alldata.value.push(response.data.product);
    }
    return response;
  };
  //

  return {
    Product_data: alldata,
    fetchproduct,
    addproduct: adddataitem,
    fetchproductbyid: fetchdataitem,
    Product_data1: dataitem,
    updateproductdata: updatedataitem,
    deleteproduct: deletedataitem,
    resourse,
  };
});
