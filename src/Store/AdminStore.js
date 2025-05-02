import { defineStore } from "pinia";
import { ref } from "vue";
export const useAdminStore=defineStore('admin',()=>{
    const admin_data = ref([
        {
          'Id':"Admin-001",
          'Image': '/801453e0c5024ac15fc4b4caecaebb1e.jpg',
          'First Name': 'John',
          'Last Name':'Doe',
          'Phone Number': '123-456-7890',
          'Email': 'ghada@gmail.com',
        
        },
        {
          'Id':"Admin-001",
          'Image': '/801453e0c5024ac15fc4b4caecaebb1e.jpg',
          'First Name': 'John Doe',
          'Last Name':'Doe',
          'Phone Number': '123-456-7890',
          'Email': 'ghada@gmail.com',
        
        },
        {
          'Id':"Admin-001",
          'Image': '/801453e0c5024ac15fc4b4caecaebb1e.jpg',
          'First Name': 'John',
          'Last Name':'Doe',
          'Phone Number': '123-456-7890',
          'Email': 'ghada@gmail.com',
        
        },
        {
          'Id':"Admin-001",
          'Image': '/801453e0c5024ac15fc4b4caecaebb1e.jpg',
          'First Name': 'John',
          'Last Name':'Doe',
          'Phone Number': '123-456-7890',
          'Email': 'ghada@gmail.com',
        
        },
        {
          'Id':"Admin-001",
          'Image': '/801453e0c5024ac15fc4b4caecaebb1e.jpg',
          'First Name': 'John',
          'Last Name':'Doe',
          'Phone Number': '123-456-7890',
          'Email': 'ghada@gmail.com',
        
        }, {
            'Id':"Admin-001",
            'Image': '/801453e0c5024ac15fc4b4caecaebb1e.jpg',
            'First Name': 'John',
            'Last Name':'Doe',
            'Phone Number': '123-456-7890',
            'Email': 'ghada@gmail.com',
          
          }, {
            'Id':"Admin-001",
            'Image': '/801453e0c5024ac15fc4b4caecaebb1e.jpg',
            'First Name': 'John',
            'Last Name':'Doe',
            'Phone Number': '123-456-7890',
            'Email': 'ghada@gmail.com',
          
          },
      ]);
      const admincolumnsName = ref([
        { name: 'Id', label: 'Id' },
        { name: 'Image', label: 'Image' },
        { name: 'First Name', label: 'First Name' },
        { name: 'Last Name', label: 'Last Name' },
        { name: 'Phone Number', label: 'Phone Number' },
        { name: 'Email', label: 'Email' },
        { name: 'Action', label: 'Action' }
      ]);
return {admincolumnsName,admin_data}
})