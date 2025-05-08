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
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhbWFzaW1vQGdtYWlsLmNvbSIsImlkIjoiNjgxNmFlZTdhYjE3ZTFkZGJjZWFlZGM4Iiwicm9sZSI6Im1hbmdlciIsImlhdCI6MTc0NjYyNzk4MSwiZXhwIjoxNzQ2ODAwNzgxfQ.Dla9CdBspmv9T9vpz0D7seuC--7b6QTNtveaIvLm9p8";

//for all data
  const Product_data = ref([]);
  //for data by id 
  const Product_data1 = ref([]);
//filter and get all data
  const fetchproduct = async (filter={}) => {
     const params=new URLSearchParams()
    if (filter.category) params.append('category', filter.category)
       const queryString=params.toString()
      const url=queryString?`/api/products?${queryString}`:`/api/products`
          // onsole.log(url);
       const response = await axios.get(url);
    Product_data.value = response.data.data.products.filter(p=> p.isDeleted===false)
    return response
  };
  // 

  // by id get product
   const fetchproductbyid= async(id)=>{
const response=await axios.get(`/api/products/${id}`)
Product_data1.value=response.data.data.product
return response
}
// 
// by id update product 
const updateproductdata= async(id,product)=> {
const response =await axios.patch(`/api/products/${id}`,product,  {
  headers: {
    'Authorization': `Bearer ${token}`
  }
})
//  resp is object return product update and stautus 
//store  product update 
const update =response.data.data.product
//  هنلف علي  المنتجات بتاعتي اللي عندي اصلا ونجيب المنتج بتاعنا القديم 
// هنجيب ال  index  بتاعه
const  indexoldproduct=Product_data.value.findIndex(p=> p.id===id)
if(indexoldproduct!==-1){
  Product_data.value[indexoldproduct]=update
}
return response



}
// 
//by id delete product 
const deleteproduct= async(id)=> {
  const response =await axios.delete(`/api/products/${id}`,{
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })
console.log(response.data);
if(response.data.status==="success"){
  console.log("Product deleted successfully");
  Product_data.value = Product_data.value.filter(product => product._id !== id);}
  return response
  }
  // 

//add product 
  const addproduct = async (product) => {

    const response = await axios.post(
      '/api/products',
      product,
      {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }
    );

    if (response.status === 201) {
      console.log('Product added successfully');
      console.log(response.data);
      Product_data.value.push(response.data.product);
    }
    return response;
  };
  // 

  return {
    PoducrcolumnsName,
    Product_data,
    fetchproduct,
    addproduct,
    fetchproductbyid,
    Product_data1,
    updateproductdata,
    deleteproduct
  };
});
