import { defineStore } from "pinia";
import { ref } from "vue";
export const useCustomer=defineStore('customer',()=>{
    
const Customercolumns = ref([
    {name:'Id',label:'Id'},
    { name: 'Customer_Name', label: 'Customer Name'},
    { name: 'Email', label: 'Email' },
    { name: 'Phone_Number', label: 'Phone Number'},
    { name: 'Status', label: 'Status' },
    // { name:'Role',label:'Role'},
    { name:'Orders',label:'Orders'},
    { name: 'Action', label: 'Action' },
  
  
    
  ]);
  
  
  const Customer_data = ref([
    {
      'Id':1,
      'Customer_Name': 'John Doe',
      'Phone_Number': '123-456-7890',
      'Email': 'ghada@gmail.com',
      'Status': 'Inactive',
      'Role': 'Customer',
    
    },
    {
      'Id':2,
      'Customer_Name': 'John Doe',
      'Phone_Number': '123-456-7890',
      'Email': 'ghada@gmail.com',
      'Status': 'Active',
      'Role': 'Customer',
  
    },  {
      'Id':3,
      'Customer_Name': 'John Doe',
      'Phone_Number': '123-456-7890',
      'Email': 'ghada@gmail.com',
      'Status': 'Active',
      'Role': 'Customer',
    },  {
      'Id':4,
      'Customer_Name': 'John Doe',
      'Phone_Number': '123-456-7890',
      'Email': 'ghada@gmail.com',
      'Status': 'Vip',
      'Role': 'Customer',
    },  {
      'Id':5,
      'Customer_Name': 'Donia Saad',
      'Phone_Number': '123-456-7890',
      'Email': 'ghada@gmail.com',
      'Status': 'Active',
      'Role': 'Customer',
    },  {
      'Id':6,
      'Customer_Name': 'John Doe',
      'Phone_Number': '123-456-7890',
      'Email': 'ghada@gmail.com',
      'Status': 'Inactive',
      'Role': 'Customer',
    },  {
      'Id':7,
      'Customer_Name': 'John Doe',
      'Phone_Number': '123-456-7890',
      'Email': 'ghada@gmail.com',
      'Status': 'Active',
      'Role': 'Customer',
    },  {
      'Id':9,
      'Customer_Name': 'John Doe',
      'Phone_Number': '123-456-7890',
      'Email': 'ghada@gmail.com',
      'Status': 'Vip',
      'Role': 'Customer',
    }
    ,  {
      'Id':10,
      'Customer_Name': 'John Doe',
      'Phone_Number': '123-456-7890',
      'Email': 'ghada@gmail.com',
      'Status': 'Vip',
      'Role': 'Customer',
    }
    ,  {
      'Id':11,
      'Customer_Name': 'John Doe',
      'Phone_Number': '123-456-7890',
      'Email': 'ghada@gmail.com',
      'Status': 'Vip',
      'Role': 'Customer',
    }
    ,  {
      'Id':12,
      'Customer_Name': 'John Doe',
      'Phone_Number': '123-456-7890',
      'Email': 'ghada@gmail.com',
      'Status': 'Vip',
      'Role': 'Customer',
    }
  ]);
  return {Customercolumns,Customer_data,}
})