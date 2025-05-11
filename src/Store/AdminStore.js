import axios from 'axios';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useAdminStore = defineStore('CRUD', () => {
  const token ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhbWFzaW1vQGdtYWlsLmNvbSIsImlkIjoiNjgxNmFlZTdhYjE3ZTFkZGJjZWFlZGM4Iiwicm9sZSI6Im1hbmdlciIsImlhdCI6MTc0NjgwNzg3NywiZXhwIjoxNzQ2OTgwNjc3fQ.jPoHmbDNC1MUnvf6JazIA_LCvsPGdxUhcUfLEqSDrA8';
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
  const updateadminIdm = async (id, admin) => {

    const currentRole = admin.role;
    const newRole = currentRole === 'admin' ? 'customer' : 'admin';

    try {
      await axios.patch(
        `/api/admins/${id}`,
        { role: newRole },
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
      console.log(response.data);
      alladmins.value.push(response.data.data.Admins);
    }
    return response;
  };
  

  return {
   alladmins,
    fetchproduct,status,datalength,updateadminIdm,addadminIdm
  
  };
});