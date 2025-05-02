import { defineStore } from 'pinia'
import { ref } from 'vue';
export const useProductStore = defineStore('product', () => {
const PoducrcolumnsName = ref([
    { name: 'Id', label: 'Id' },
    { name: 'Image', label: 'Image' },
    { name: 'Product_Name', label: 'Product Name' },
    { name: 'Category', label: 'Category' },
    { name: 'Brand', label: 'Brand' },
    { name: 'Stock', label: 'Stock' },
    { name: 'Price', label: 'Price' },
    { name: 'Action', label: 'Action' },
  ]);
  
  const Product_data = ref([
    {
      'Id': 1,
      'Image': '/801453e0c5024ac15fc4b4caecaebb1e.jpg',
      'Product_Name': 'Floral Dress',
      'Category': 'Women',
      'Brand': 'Zara',
      'Stock': 25,
      'Price':150
    },
    {
      'Id': 2,
      'Image': '/801453e0c5024ac15fc4b4caecaebb1e.jpg',
      'Product_Name':'Men T-Shirt',
      'Category': 'Men',
      'Brand': 'H&M',
      'Stock': 40,
      'Price': 90
    },
    {
      'Id': 3,
      'Image': '/801453e0c5024ac15fc4b4caecaebb1e.jpg',
      'Product_Name':'Kids Jacket',
      'Category': 'Kids',
      'Brand': 'Gap',
      'Stock': 15,
      'Price': 200
    },
    {
      'Id': 4,
      'Image': '/801453e0c5024ac15fc4b4caecaebb1e.jpg',
      'Product_Name': 'Sneakers',
      'Category': 'Unisex',
      'Brand': 'Nike',
      'Stock': 30,
      'Price': 300
    },
    {
      'Id': 5,
      'Image': '/801453e0c5024ac15fc4b4caecaebb1e.jpg',
      'Product_Name': 'Handbag',
      'Category': 'Women',
      'Brand': 'Gucci',
      'Stock': 10,
      'Price': 500
    },
    {
      'Id': 6,
      'Image': '/801453e0c5024ac15fc4b4caecaebb1e.jpg',
      'Product_Name': 'Handbag',
      'Category': 'Women',
      'Brand': 'Gucci',
      'Stock': 10,
      'Price': 500
    },
    {
      'Id': 7,
      'Image': '/801453e0c5024ac15fc4b4caecaebb1e.jpg',
      'Product_Name': 'Handbag',
      'Category': 'Women',
      'Brand': 'Gucci',
      'Stock': 10,
      'Price': 500
    },
    {
      'Id': 8,
      'Image': '/801453e0c5024ac15fc4b4caecaebb1e.jpg',
      'Product_Name': 'Handbag',
      'Category': 'Women',
      'Brand': 'Gucci',
      'Stock': 10,
      'Price': 500
    }
  ]);
  
return {PoducrcolumnsName,Product_data}

})
