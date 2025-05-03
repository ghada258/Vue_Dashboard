<script setup>
  import Order from './Order.vue';
</script>
<template>
 <form class="mt-2 d-flex" style="margin-left: 88px;  margin-right: 44px; gap: 16px;">
  <!-- General Information -->
     <div class="mb-4"  style="width: 55%;">
      <div ref="form" width="100%" class="text-start py-2 pl-5 pr-5 rounded-lg" style="border:solid 1px #80CCF9">
        <v-card-text class="pa-0 ">
        <div class="d-flex flex-column ">
          <h1 class="text-primary font-weight-regular mb-4 " style="font-size: 24px;">Customer Information</h1>
          <label class="my-label text-body-1 font-weight-semibold "style="margin-bottom: -16px;" >Customer Name</label>
          <v-text-field
            ref="Customer_Name"
            v-model="Customer_Name"
            variant="outlined"
            class="h-44"
            value="Mohammed Ahmed"
            height="30"
            style="font-weight: 600;"
            disabled
            required
          />
      </div>
      <div class="d-flex flex-column ">
          <label class="my-label text-body-1 font-weight-semibold "style="margin-bottom: -16px;">Address</label>
          <v-text-field
            ref="Address"
            v-model="Address"
            variant="outlined"
            value="Ismailia 123"
            style="font-weight: 600;"
            disabled
            required
          />
      </div>
    
      <div class="d-flex flex-column ">
          <label class="my-label text-body-1 font-weight-semibold "style="margin-bottom: -16px;">Payment Method</label>
          <v-text-field
            ref="Payment_Method"
            v-model="Payment_Method"
            style="font-weight: 600;"
            disabled
            variant="outlined"
            value="Credit Card"
            required
          />
      </div>
      <div class="d-flex flex-column ">
          <label class="my-label text-body-1 font-weight-semibold "style="margin-bottom: -16px;">Customer Email</label>
          <v-text-field
            ref="Customer_Email"
            v-model="Customer_Email"
            style="font-weight: 600;"
            disabled
            variant="outlined"
            value="Ghada@gmail.com"
            required
          />
      </div>    
      <div class="d-flex flex-column ">
          <label class="my-label text-body-1 font-weight-semibold "style="margin-bottom: -16px;">Phone Number</label>
          <v-text-field
            ref="Phone_Number"
            v-model="Phone_Number"
            style="font-weight: 600;"
            disabled
            variant="outlined"
            value="01026985545"
            required
          />
      </div> 
      <div class="d-flex flex-column ">
          <label class="my-label text-body-1 font-weight-semibold "style="margin-bottom: -16px;">Number Of Items</label>
          <v-text-field
            ref="Number_Of_Items"
            v-model="Number_Of_Items"
            style="font-weight: 600;"
            disabled
            variant="outlined"
            value="5 Items"
            required
          />
      </div> 

        </v-card-text>
      </div>
    </div>

    
  <!-- section two -->
  <div class="d-flex flex-column" style="width: 50%; gap: 12px;" >

    <div ref="form" width="100%" class="text-start py-2 pl-5 pr-5 rounded-lg d-flex justify-center" style="border:solid 1px #80CCF9; ">
        <v-card-text class="pa-0 d-flex flex-column" style="gap:10px; height: 500px; overflow:scroll">
            <div class="d-flex justify-space-between" style="gap: 30px;">
                <h1 class="text-primary font-weight-regular" style="font-size: 24px;">Order Items</h1>
                <h1 class="text-primary font-weight-regular mr-16" style="font-size: 24px;">3 Items</h1>
            </div> 
            <Order/>
            <Order/>
            <Order/>
        </v-card-text>
      </div>
  <!-- pricing and stock -->
  <div ref="form" width="100%" class="text-start py-2 pl-5 pr-5 rounded-lg" style="border:solid 1px #80CCF9">
    <v-card-text class="pa-0 d-flex flex-column">
      <h1 class="text-primary font-weight-regular mb-4 " style="font-size: 24px;">Pricing and Status</h1>
       <div class="d-flex justify-space-between" style="gap:20px">

        <div class="d-flex flex-column" style="width: 50%;">
        <label class="my-label text-body-1 font-weight-semibold "style="margin-bottom: -16px;" >Order Price</label>
        <v-text-field
            ref="Order_Price"
            v-model="Order_Price"
            style="font-weight: 600;"
            disabled
            variant="outlined"
            value="$250"
            required
          />
      </div>

      <div class="d-flex flex-column" style="width: 50%;">
        <label class="my-label text-body-1 font-weight-semibold "style="margin-bottom: -16px;" >Status</label>
        <v-text-field
            ref="Status"
            v-model="Status"
            disabled
            style="font-weight: 600;"
            variant="outlined"
            value="Shipped"
            required
          />
      </div>
    </div> 
    </v-card-text>
      </div>
     
      

    </div>

  </form>  
  </template>
  
  <style scoped lang="scss">
  ::v-deep(.v-field__field) {
  background-color: #dad9d9;
}
  .my-label{
    padding-bottom: 20px;
  }
  </style>

  

  