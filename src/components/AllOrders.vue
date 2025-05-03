<script setup>
  import Order_ForAllOrder from './Order_ForAllOrder.vue';
</script>
<template>
    <div class="mt-2 d-flex justify-center align-center " style="gap: 16px;">
      <div class="d-flex flex-column ml-15" style="width: 90%; gap: 12px;">
        <div ref="form" class="text-start m-auto py-2 px-8 rounded-lg d-flex justify-center" style="border: 1px solid #80CCF9; width: 100%;">
          <v-card-text class="pa-0 d-flex flex-column" style="gap: 10px; height: 680px; overflow:scroll; ">
            <div class="d-flex justify-space-between" style="gap: 30px;">
              <h1 class="text-primary font-weight-regular" style="font-size: 24px;">Orders and Dates</h1>
              <h1 class="text-primary font-weight-regular mr-16" style="font-size: 24px;"> 3 Orders</h1>
            </div>
            <div class="d-flex flex-column" style="gap: 10px;">
              <Order_ForAllOrder/>
              <Order_ForAllOrder/>
              <Order_ForAllOrder/>
            </div>
            
           
          </v-card-text>
        </div>
      </div>
    </div>
  </template>
  
  
  <style scoped lang="scss">
  ::v-deep(.v-field__field) {
  background-color: #dad9d9;
}
  .my-label{
    padding-bottom: 20px;
  }
  </style>

  

  