import axios from 'axios';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useProductStore = defineStore('CRUD', () => {
  const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhbWFzaW1vQGdtYWlsLmNvbSIsImlkIjoiNjgxNmFlZTdhYjE3ZTFkZGJjZWFlZGM4Iiwicm9sZSI6Im1hbmdlciIsImlhdCI6MTc0Njg0MzQzOCwiZXhwIjoxNzQ3MDE2MjM4fQ.ZXrBFN7_zIaQxo4qjz9S7QTrzHt0YIyWhyYDVo6m3s8";
  //variable for all data
  
  const alldata = ref([]);
  // variable for data by id
  const dataitem = ref([]);
    const status=ref("idel");
  const datalength=ref(0)
  //filter and get all data
  const fetchproduct = async (filter = {}) => {
    try{

    status.value="loading"
    
    const params = new URLSearchParams();
    if (filter.category) params.append('category', filter.category);
    // Add more filters as needed here
    const queryString = params.toString();
    const url = queryString ? `/api/products?${queryString}` : `/api/products`;
    //condition admin or manager .........................
    const response = await axios.get(url, {
      headers: { Authorization: `Bearer ${token}` },
    });
    // to get the first key of the data object

    alldata.value = response.data.data.products.filter(
      p => p.isDeleted === false)
          datalength.value=response.data.data.products.length

        status.value="success"
            return response;


    }catch(error){
     console.error('Error fetching admins:', error);
            status.value="error"
    }
  
  };
  // by id get product
  const fetchdataitem = async id => {
    const response = await axios.get(`/api/products/${id}`);
    dataitem.value = response.data.data.product;
    return response;
  };
  //
  // by id update product
  const updatedataitem = async (id, product) => {
    const response = await axios.patch(`/api/products/${id}`, product, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
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
    const response = await axios.delete(`/api/products/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,

      },
    });
    console.log(response.data);
    if (response.data.status === 'success') {
      console.log('Product deleted successfully');
      alldata.value = alldata.value.filter(product => product._id !== id);
    }
    return response;
  };
  //

  //add product
  const adddataitem = async (product) => {
    try {
      const response = await axios.post(
        '/api/products',
        product,
        { headers: { Authorization: `Bearer ${token}`
 } }
      );
        console.log('Product added successfully');
        alldata.value.push(response.data.data.product);
      
      return response;
    } catch (error) {
      console.error('Error adding product:', error.response?.data || error.message);
      throw error;
    }
  };

  //

  return {
    Product_data: alldata,
    fetchproduct,adddataitem, fetchdataitem,dataitem,updatedataitem, deletedataitem,status,datalength
  };
});
