import { defineStore } from "pinia";
import { ref } from "vue";
export const useOrder=defineStore('order',()=>{

    const OrdercolumnsName = ref([
        {name:'Id',label:'Id'},
          { name: 'Customer_Name', label: 'Customer Name'},
          { name: 'Phone_Number', label: 'Phone Number'},
          { name: 'Number_of_Items', label: 'Number of Items' },
          { name: 'Total_Price', label: 'Total Price' },
          { name: 'Status', label: 'Status' },
          { name: 'Set Status', label: 'Set Status' },

          { name:'Order',label:'Order'},
        
        
        ]);
        
        // const Order_data=ref([])
        const Order_data = ref([
          {
            'Id':998,
            'Customer_Name': 'Donia Ahmed',
            'Phone_Number': '121-456-7890',
            'Number_of_Items': 2,
            'Total_Price':450,
            'Status': 'Canceled',
          },
          {
            'Id': 999,
            'Customer_Name': 'sara Ahmed',
            'Phone_Number': '120-456-7890',
            'Number_of_Items': 4,
            'Total_Price':450,
            'Status': 'Arrived',
        
          },
          {
            'Id':1000,
            'Customer_Name': 'Mohamed Ahmed',
            'Phone_Number': '123-456-7890',
            'Number_of_Items': 5,
            'Total_Price':450,
            'Status': 'Arrived',
        
          },
          {
            'Id':10001,
            'Customer_Name': 'Mohamed Ahmed',
            'Phone_Number': '123-456-7890',
            'Number_of_Items': 6,
            'Total_Price':450,
            'Status': 'Arrived',
        
          },
          {
            'Id':10002,
            'Customer_Name': 'Mohamed Ahmed',
            'Phone_Number': '123-456-7890',
            'Number_of_Items': 10,
            'Total_Price':450,
            'Status': 'Arrived',
        
          },
          {
            'Id':10003,
            'Customer_Name': 'Mohamed Ahmed',
            'Phone_Number': '123-456-7890',
            'Number_of_Items': 7,
            'Total_Price':450,
            'Status': 'Arrived',
        
          },
          {
            'Id':10004,
            'Customer_Name': 'Mohamed Ahmed',
            'Phone_Number': '123-456-7890',
            'Number_of_Items': 7,
            'Total_Price':450,
            'Status': 'Canceled',
        
          },
          {
            'Id':10005,
            'Customer_Name': 'Mohamed Ahmed',
            'Phone_Number': '123-456-7890',
            'Number_of_Items' :5,
            'Total_Price':450,
            'Status': 'Canceled',
        
          }
          ,
          {
            'Id':10006,
            'Customer_Name': 'Mohamed Ahmed',
            'Phone_Number': '123-456-7890',
            'Number_of_Items' :5,
            'Total_Price':450,
            'Status': 'Canceled',
        
          }
          ,
          {
            'Id':10007,
            'Customer_Name': 'Mohamed Ahmed',
            'Phone_Number': '123-456-7890',
            'Number_of_Items' :5,
            'Total_Price':45,
            'Status': 'Canceled',
        
          }
          ,
          {
            'Id':10008,
            'Customer_Name': 'Mohamed Ahmed',
            'Phone_Number': '123-456-7890',
            'Number_of_Items' :5,
            'Total_Price':490,
            'Status': 'Arrived',
        
          }
          ,
          {
            'Id':10009,
            'Customer_Name': 'Mohamed Ahmed',
            'Phone_Number': '123-456-7890',
            'Number_of_Items' :5,
            'Total_Price':460,
            'Status': 'Canceled',
        
          }
          ,
          {
            'Id':10010,
            'Customer_Name': 'Mohamed Ahmed',
            'Phone_Number': '123-456-7890',
            'Number_of_Items' :5,
            'Total_Price':950,
            'Status': 'Arrived',
        
          }, {
            'Id':10011,
            'Customer_Name': 'Mohamed Ahmed',
            'Phone_Number': '123-456-7890',
            'Number_of_Items' :5,
            'Total_Price':950,
            'Status': 'Arrived',
        
          }, {
            'Id':10012,
            'Customer_Name': 'Mohamed Ahmed',
            'Phone_Number': '123-456-7890',
            'Number_of_Items' :5,
            'Total_Price':950,
            'Status': 'Arrived',
        
          }, {
            'Id':10013,
            'Customer_Name': 'Mohamed Ahmed',
            'Phone_Number': '123-456-7890',
            'Number_of_Items' :5,
            'Total_Price':950,
            'Status': 'Canceled',
        
          },{
            'Id':10014,
            'Customer_Name': 'Mohamed Ahmed',
            'Phone_Number': '123-456-7890',
            'Number_of_Items' :5,
            'Total_Price':950,
            'Status': 'Arrived',
        
          },{
            'Id':10015,
            'Customer_Name': 'Mohamed Ahmed',
            'Phone_Number': '123-456-7890',
            'Number_of_Items' :5,
            'Total_Price':950,
            'Status': 'Arrived',
        
          },{
            'Id':10016,
            'Customer_Name': 'Mohamed Ahmed',
            'Phone_Number': '123-456-7890',
            'Number_of_Items' :5,
            'Total_Price':950,
            'Status': 'Arrived',
        
          },
        
        ]);

return {OrdercolumnsName,Order_data}


})