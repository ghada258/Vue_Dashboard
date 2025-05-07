import axios from 'axios';
import { defineStore } from 'pinia';
import { ref } from 'vue';
export const useProductStore = defineStore('product', () => {
  const PoducrcolumnsName = ref([
    { name: '_id', label: 'Id' },
    { name: 'images', label: 'Image' },
    { name: 'name', label: 'Product Name' },
    { name: 'category', label: 'Category' },
    { name: 'brand', label: 'Brand' },
    { name: 'inStock', label: 'Stock' },
    { name: 'price', label: 'Price' },
    { name: 'Action', label: 'Action' },
  ]);

  const Product_data = ref([]);
  const fetchproduct = async () => {
    const response = await axios.get('/api/products');
    Product_data.value = response.data.data.products;
  };
  const addproduct = async (product) => {
      const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhbWFzaW1vQGdtYWlsLmNvbSIsImlkIjoiNjgxNmFlZTdhYjE3ZTFkZGJjZWFlZGM4Iiwicm9sZSI6Im1hbmdlciIsImlhdCI6MTc0NjYyNzk4MSwiZXhwIjoxNzQ2ODAwNzgxfQ.Dla9CdBspmv9T9vpz0D7seuC--7b6QTNtveaIvLm9p8"
    const response = await axios.post('/api/products', product,{
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'multipart/form-data'
    }})
    if (response.status === 201) {
      {
        console.log('Product added successfully');
        console.log(response.data);
        Product_data.value.push(response.data.product);
      }
    }
  };
  return { PoducrcolumnsName, Product_data, fetchproduct, addproduct };
});
