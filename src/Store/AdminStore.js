import axios from 'axios';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useAdminStore = defineStore('CRUD', () => {

  // token for authentication
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhbWFzaW1vQGdtYWlsLmNvbSIsImlkIjoiNjgxNmFlZTdhYjE3ZTFkZGJjZWFlZGM4Iiwicm9sZSI6Im1hbmdlciIsImlhdCI6MTc0NjgwNzg3NywiZXhwIjoxNzQ2OTgwNjc3fQ.jPoHmbDNC1MUnvf6JazIA_LCvsPGdxUhcUfLEqSDrA8';
  //variable for all data
  const alladmins = ref([]);
  // variable for data by id
  const adminId = ref([]);
  const status=ref("idel");
  const datalength=ref(0)
  //filter and get all data
  const fetchproduct = async () => {
  try{
    status.value="loading"
    const response = await axios.get('/api/admins', {
      headers: { Authorization: `Bearer ${token}` },
    });

    alladmins.value = response.data.data.Admins
    datalength.value=response.data.data.Admins.length
        status.value="success"
                    return response;


  }catch(error){
    console.error('Error fetching admins:', error);
            status.value="error"

  }   
  };
  // by id get product
  // const fetchadminIdm = async id => {
  //   const response = await axios.get(`/api/admins/${id}`);
  //   adminId.value = response.data.data.Admins;
  //   return response;
  // };///////////////////
  //
  // by id update product
  // const updateadminIdm = async (id, product) => {
  //   const response = await axios.patch(`/api/admins/${id}`, product, {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   });////////////////////////////////////////

  //by id delete product
  // const deleteadminIdm = async id => {
  //   const response = await axios.delete(`/api/admins/${id}`, {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   });////////////////////////
  //   console.log(response.data);
  //   if (response.data.status === 'success') {
  //     console.log('Product deleted successfully');
  //     alladmins.value = alladmins.value.filter(product => product._id !== id);
  //   }
  //   return response;
  // };/////////////////
  //

  //add product
  // const addadminIdm = async product => {
  //   const response = await axios.post(`/api/admins`, product, {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   });

  //   if (response.status === 201) {
  //     console.log('Product added successfully');
  //     console.log(response.data);
  //     alladmins.value.push(response.data.product);
  //   }
  //   return response;
  // };
  //

  return {
    Product_data: alladmins,
    fetchproduct,status,datalength
    // addproduct: addadminIdm,
    // fetchproductbyid: fetchadminIdm,
    // Product_data1: adminId,
    // updateproductdata: updateadminIdm,
    // deleteproduct: deleteadminIdm,
  };
});
