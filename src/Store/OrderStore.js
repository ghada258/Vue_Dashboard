import axios from 'axios';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useOrderStore = defineStore('CRUD', () => {
  const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhbWFzaW1vQGdtYWlsLmNvbSIsImlkIjoiNjgxNmFlZTdhYjE3ZTFkZGJjZWFlZGM4Iiwicm9sZSI6Im1hbmdlciIsImlhdCI6MTc0Njg0MzQzOCwiZXhwIjoxNzQ3MDE2MjM4fQ.ZXrBFN7_zIaQxo4qjz9S7QTrzHt0YIyWhyYDVo6m3s8";
  //variable for all data
  
  const alldata = ref([]);
 
  // variable for data by id
  const dataitem = ref([]);
    const status=ref("idel");
  const datalength=ref(0)
  //filter and get all data
  const fetchOrders = async (filter = {}) => {
  try {
    status.value = "loading";
    const response = await axios.get('/api/orders', {
      headers: { Authorization: `Bearer ${token}` },
    });

    alldata.value = response.data.data.map(order => ({
      _id: order._id,
      firstName: order.user?.firstName,
      lastName: order.user?.lastName,
      email: order.user?.email,
      itemsCount: order.items.length,
      totalPriceOrder: order.totalPriceOrder,
      status: order.status,
    }));

    datalength.value = alldata.value.length;
    status.value = "success";
    return response;
  } catch (error) {
    console.error('Error fetching orders:', error);
    status.value = "error";
  }
};

 const fetchOrderById = async (_id) => {
  try {
    const response = await axios.get(`/api/orders/${_id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    status.value = "success";
    console.log(response.data.result);
    return response.data.result;
  } catch (err) {
    console.error('Failed to fetch order by ID:', err);
    status.value = "error";
  }
};

  return {
    fetchOrders,status,datalength,alldata,fetchOrderById
  };
});

  


