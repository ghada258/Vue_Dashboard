import axios from 'axios';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useAdminStore = defineStore('CRUD', () => {
   const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhbWFAZ21haWwuY29tIiwiaWQiOiI2ODFmODY0MTk0ODQ2NTcyMmRmNTIyNzUiLCJyb2xlIjoibWFuZ2VyIiwiaWF0IjoxNzQ3Mjc2MDQzLCJleHAiOjE3NDc0NDg4NDN9.MvrzzJejWnqe6qnzwQwtQSZ8mfJOGt7uYpwAyB_uZYU";
  
  const alladmins = ref([]);
  const adminId = ref([]);
  const status=ref("idel");
  const datalength=ref(0)
  //get admin
  const fetchproduct = async () => {
    status.value = 'loading';
    try {
      const res = await axios.get('/api/admins', {
        headers: { Authorization: `Bearer ${token}` }
      });
      const list = res.data.data.Admins;
      alladmins.value = list.filter(c => c.role !== 'manager');
      datalength.value = list.length;
      status.value = 'success';
    } catch {
      status.value = 'error';
    }
  };
//update admin
  const updateadminIdm = async (id) => {

    try {
      await axios.delete(
        `/api/admins/${id}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );

    } catch (err) {
      console.error(err);
    }
  };

  // add product
  const addadminIdm = async product => {
    const response = await axios.post(`/api/admins`, product, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.status === 201) {
      console.log('Product added successfully');
      alladmins.value.push(response.data.data.Admins);
            console.log(response.data);


    }
    return response;
  };
  

  return {
   alladmins,
    fetchproduct,status,datalength,updateadminIdm,addadminIdm
  
  };
});