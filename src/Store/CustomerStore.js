import axios from 'axios';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useCustomerStore = defineStore('CRUD', () => {
  const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhbWFzaW1vQGdtYWlsLmNvbSIsImlkIjoiNjgxNmFlZTdhYjE3ZTFkZGJjZWFlZGM4Iiwicm9sZSI6Im1hbmdlciIsImlhdCI6MTc0Njg0MzQzOCwiZXhwIjoxNzQ3MDE2MjM4fQ.ZXrBFN7_zIaQxo4qjz9S7QTrzHt0YIyWhyYDVo6m3s8";
  //variable for all data
  
  const alldata = ref([]);
  // variable for data by id
  const dataitem = ref([]);
    const status=ref("idel");
  const datalength=ref(0)
  //filter and get all data
  const fetchUsers = async (filter = {}) => {
     try{
    status.value="loading"
    const response = await axios.get('/api/users', {
      headers: { Authorization: `Bearer ${token}` },
    });

    alldata.value = response.data.data.users
    datalength.value=response.data.data.users.length
        status.value="success"
                    return response;


  }catch(error){
    console.error('Error fetching admins:', error);
            status.value="error"
  }   
  };
  
 const fetchCustomerById = async (_id) => {
  try {
    const response = await axios.get(`/api/users/${_id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    status.value = "success";
    console.log("Fetched user:", response.data.data.user);
    return response.data.data.user;
  } catch (err) {
    console.error('Failed to fetch user by ID:', err);
    status.value = "error";
    return null; 
  }
};

  // by id update product
  // const updatedataitem = async (id, user) => {
  //   const response = await axios.patch(`/api/Users/${id}`, user, {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   });
  //   //  resp is object return product update and stautus
  //   //store  product update
  //   const update = response.data.data.users;
  //   //  هنلف علي  المنتجات بتاعتي اللي عندي اصلا ونجيب المنتج بتاعنا القديم
  //   // هنجيب ال  index  بتاعه
  //   const indexoldproduct = alldata.value.findIndex(p => p.id === id);
  //   if (indexoldproduct !== -1) {
  //     alldata.value[indexoldproduct] = update;
  //   }
  //   return response;
  // };
  //
  //by id delete product
  // const deletedataitem = async id => {
  //   const response = await axios.delete(`/api/Users/${id}`, {
  //     headers: {
  //       Authorization: `Bearer ${token}`,

  //     },
  //   });
  //   console.log(response.data);
  //   if (response.data.status === 'success') {
  //     console.log('Product deleted successfully');
  //     alldata.value = alldata.value.filter(user => user._id !== id);
  //   }
  //   return response;
  // };
  //

 
  //

  return {
    fetchUsers,status,datalength,alldata,fetchCustomerById 
  };
});

  