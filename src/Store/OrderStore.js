// src/store/OrderStore.js
import axios from 'axios';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useOrderStore = defineStore('CRUD', () => {
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhbWFzaW1vQGdtYWlsLmNvbSIsImlkIjoiNjgxNmFlZTdhYjE3ZTFkZGJjZWFlZGM4Iiwicm9sZSI6Im1hbmdlciIsImlhdCI6MTc0Njg0MzQzOCwiZXhwIjoxNzQ3MDE2MjM4fQ.ZXrBFN7_zIaQxo4qjz9S7QTrzHt0YIyWhyYDVo6m3s8";

  const alldata      = ref([]);
  const status       = ref('idle');
  const datalength   = ref(0);
  const totalRevenue = ref(0);
  const totalOrders  = ref(0);
  const newProducts  = ref(0);
  const newCustomers = ref(0);

  const fetchOrders = async () => {
    try {
      status.value = 'loading';
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

      
      const payload = {
        data:         response.data.data,
        totalRevenue: response.data.totalRevenue,
        totalOrders:  response.data.NumberOfOrders,
        newProducts:  response.data.newProduct,
        newCustomers: response.data.newCustomers,
      };

      
      totalRevenue.value = payload.totalRevenue;
      totalOrders.value  = payload.totalOrders;
      newProducts.value  = payload.newProducts;
      newCustomers.value = payload.newCustomers;
      datalength.value   = payload.data.length;
      status.value       = 'success';

      return payload;
    } catch (error) {
      console.error('Error fetching orders:', error);
      status.value = 'error';
      throw error;
    }
  };

  const fetchOrderById = async (_id) => {
    try {
      const response = await axios.get(`/api/orders/${_id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      status.value = 'success';
      return response.data.result;
    } catch (err) {
      console.error('Failed to fetch order by ID:', err);
      status.value = 'error';
      throw err;
    }
  };

  return {
    fetchOrders,
    fetchOrderById,
    alldata,
    datalength,
    status,
    totalRevenue,
    totalOrders,
    newProducts,
    newCustomers,
  };
});
