<script setup>
  import Secondarybutton from '../components/Secondarybutton.vue';
  import Primarybutton from '../components/Primarybutton.vue';
</script>
<template>
 <div class="mt-3" style="margin-left: 88px;  margin-right: 44px; ">
   <div class="d-flex" style="gap: 12px;">
      <form  class=" mb-4 text-start py-2 pl-5 pr-5 rounded-lg" style="border:solid 1px #80CCF9; width: 55%;" >
        <div ref="form">
        <v-card-text class="pa-0 ">
        <div class="d-flex flex-column ">
          <h1 class="text-primary font-weight-regular mb-4 " style="font-size: 24px;">General Information</h1>
          <label class="my-label text-body-1 font-weight-semibold "style="margin-bottom: -16px;" >Product Name</label>
          <v-text-field
            ref="Product_Name"
            v-model="Product_Name"
            :rules="[() => !!Product_Name|| 'This field is required']"
            variant="outlined"
            class="h-44"
            placeholder="ADIDAS IF1402 Deportivo"
            height="30"
            required
          />
      </div>
      <div class="d-flex flex-column ">
          <label class="my-label text-body-1 font-weight-semibold "style="margin-bottom: -16px;">Brand Name</label>
          <v-text-field
            ref="Brand_Name"
            v-model="Brand_Name"
            :rules="[() => !!Brand_Name|| 'This field is required']"
            variant="outlined"
            placeholder="ADIDAS"
            required
          />
      </div>
      <div class="d-flex flex-column ">
          <label class="my-label text-body-1 font-weight-semibold "style="margin-bottom: -16px;">Product Color</label>
          <v-text-field
            ref="Product_Color"
            v-model="Product_Color"
            :rules="[() => !!Product_Color|| 'This field is required']"
            variant="outlined"
            placeholder="Black"
            required
          />
      </div>
      <div class="d-flex flex-column ">
          <label class="my-label text-body-1 font-weight-semibold "style="margin-bottom: -16px;">Product Material</label>
          <v-text-field
            ref="Product_Material"
            v-model="Product_Material"
            :rules="[() => !!Product_Material|| 'This field is required']"
            variant="outlined"
            placeholder="Cotton"
            required
          />
      </div>
      <div class="d-flex flex-column ">
          <label class="my-label text-body-1 font-weight-semibold "style="margin-bottom: -16px;">Product Description</label>
          <v-textarea
            ref="Product_Description"
            v-model="Product_Description"
            :rules="[() => !!Product_Description|| 'This field is required']"
            variant="outlined"
            placeholder="Write your description ..."
            required
          />
      </div>    
        </v-card-text>
      </div>

      <div class="d-flex flex-column" style="width: 50%;" >
        <div class="mb-4">
           <div ref="form">
      <v-card-text class="pa-0 ">
      <div class="d-flex flex-column ">
        <h1 class="text-primary font-weight-regular mb-4 " style="font-size: 24px;">Category and Subcategory </h1>
        <label class="my-label text-body-1 font-weight-semibold "style="margin-bottom: -16px;" >Product Name</label>
        <v-text-field
          ref="Product_Name"
          v-model="Product_Name"
          :rules="[() => !!Product_Name|| 'This field is required']"
          variant="outlined"
          class="h-44"
          placeholder="ADIDAS IF1402 Deportivo"
          height="30"
          required
        />
    </div>
    <div class="d-flex flex-column ">
        <label class="my-label text-body-1 font-weight-semibold "style="margin-bottom: -16px;">Brand Name</label>
        <v-text-field
          ref="Brand_Name"
          v-model="Brand_Name"
          :rules="[() => !!Brand_Name|| 'This field is required']"
          variant="outlined"
          placeholder="ADIDAS"
          required
        />
    </div>
    
       
      </v-card-text>
       <!-- <Primarybutton title="Update Change" width="100vw"  /> -->
        <v-spacer />

      </div>
        </div>
      </div>
      </form>
   </div>
  </div>  
  </template>
  
  <style scoped lang="scss">
  .my-label{
    padding-bottom: 20px;
  }
  </style>

  

  