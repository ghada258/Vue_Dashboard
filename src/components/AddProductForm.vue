<script setup>
  import Secondarybutton from '../components/Secondarybutton.vue';
  import Primarybutton from '../components/Primarybutton.vue';
  import { computed, ref } from 'vue'
  const sizes = [ 'S', 'M', 'L', 'XL', 'XXL', '3XL', '4XL'];
  const images = ref([null, null, null, null]) 
   
   const getImageUrl = (file) => {
   return file ? URL.createObjectURL(file) : ''
   }

  
</script>
<template>
 <form class="mt-3 d-flex" style="margin-left: 88px;  margin-right: 44px; gap: 16px;">
  <!-- General Information -->
     <div class="mb-4"  style="width: 55%;">
      <div ref="form" width="100%" class="text-start py-2 pl-5 pr-5 rounded-lg" style="border:solid 1px #80CCF9">
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
    </div>

    
  <!-- section two -->
  <div class="d-flex flex-column" style="width: 50%; gap: 12px;" >

     <!-- Product Img -->
  <div ref="form" width="100%" class="text-start py-2 pl-5 pr-5 rounded-lg" style="border:solid 1px #80CCF9">
    <v-card-text class="pa-0 d-flex flex-column">
      <h1 class="text-primary font-weight-regular mb-4 " style="font-size: 24px;">Product Images</h1>
       <div class="d-flex justify-space-between" style="gap:20px">
      <div class="d-flex " style="width: 100%; gap: 10px;">
        <div class="add-image-box" v-for="(img, index) in images" :key="index">
        
          <v-img
            v-if="img"
             :src="getImageUrl(img)"
            alt="Selected Image"
            class="image-placeholder"
            cover
            height="200"
          />

          <v-file-input
            v-else
            v-model="images[index]"
            accept="image/png, image/jpeg, image/bmp"
            :multiple="false"
            prepend-icon="mdi-plus"
            show-size
            variant="none"
            style="padding-left: 50px; padding-top: 25px;"
          />
        </div>
 
      </div>
    </div> 
  
  </v-card-text>
      </div>

      <!-- Category and Subcategory -->
    <div ref="form" width="100%" class="text-start py-2 pl-5 pr-5 rounded-lg" style="border:solid 1px #80CCF9">
    <v-card-text class="pa-0 d-flex flex-column">
      <h1 class="text-primary font-weight-regular mb-4 " style="font-size: 24px;">Category and Subcategory </h1>
       <div class="d-flex justify-space-between" style="gap:20px">

        <div class="d-flex flex-column" style="width: 50%;">
        <label class="my-label text-body-1 font-weight-semibold "style="margin-bottom: -16px;" >Category</label>
        <v-select
            label="Select"
            :items="['Men', 'Women']"
            variant="outlined"
            required
          
          />
      </div>

    </div> 
  
    </v-card-text>
      </div>
   
  <!-- pricing and stock -->
  <div ref="form" width="100%" class="text-start py-2 pl-5 pr-5 rounded-lg" style="border:solid 1px #80CCF9">
    <v-card-text class="pa-0 d-flex flex-column">
      <h1 class="text-primary font-weight-regular mb-4 " style="font-size: 24px;">Pricing and Stock</h1>
       <div class="d-flex justify-space-between" style="gap:20px">

        <div class="d-flex flex-column" style="width: 50%;">
        <label class="my-label text-body-1 font-weight-semibold "style="margin-bottom: -16px;" >Product Price</label>
        <v-text-field
            ref="Product_Price"
            v-model="Product_Price"
            :rules="[() => !!Product_Price|| 'This field is required']"
            variant="outlined"
            placeholder="$25"
            required
          />
      </div>

      <div class="d-flex flex-column" style="width: 50%;">
        <label class="my-label text-body-1 font-weight-semibold "style="margin-bottom: -16px;" >Stock</label>
        <v-text-field
            ref="Stock"
            v-model="Stock"
            :rules="[() => !!Stock|| 'This field is required']"
            variant="outlined"
            placeholder="120 Peice"
            required
          />
      </div>
    </div> 
  
    </v-card-text>
      </div>

       <!-- Size -->
  <div ref="form" width="100%" class="text-start py-2 pl-5 pr-5 rounded-lg" style="border:solid 1px #80CCF9">
    <v-card-text class="pa-0 d-flex align-center">
       <div class="d-flex align-center" style="gap:20px">
        <div class="d-flex align-center" style="width: 100%;">
          <h1 class="text-primary font-weight-regular mx-2 " style="font-size: 24px;">Sizes : </h1>

          <v-item-group selected-class="bg-primary" multiple>
            <v-item
               v-for="(size, index) in sizes"
              :key="n"
              v-slot="{ selectedClass, toggle }"
            >
              <v-chip
                :class="selectedClass"
                style="margin-left: 5px; border: 2px solid #C0C0C0; color:#0E4267; font-weight: 600;"
                @click="toggle"
                variant="outlined"
                rounded="lg"
              >
               {{ size }}
              </v-chip>
            </v-item>
        </v-item-group>
      </div>
    </div> 
    </v-card-text>
      </div>
  <!-- Buttons -->
      <div class=" d-flex text-start pl-1 pr-4 rounded-lg" style="width: 100%; gap: 16px;">
        <Secondarybutton  title="Cancel" width="50%"/>
        <Primarybutton  title="Add Product" width="50%"/>
        
      </div>
    </div>

  </form>  
  </template>
  
  <style scoped lang="scss">
  .add-image-box {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 120px;
  cursor: pointer;
  border: 2px dashed #ccc;
  border-radius: 8px;
  overflow: hidden;
}

.image-placeholder {
  width: 100%;
  height: 100%;
}


  .my-label{
    padding-bottom: 20px;
  }
  </style>

  

  