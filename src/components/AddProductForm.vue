<script setup>
import Secondarybutton from "../components/Secondarybutton.vue";
import Primarybutton from "../components/Primarybutton.vue";
import { computed, ref, toRaw, watch, watchEffect } from "vue";
import ImageuploadProduct from "../Pages/ImageuploadProduct.vue";
import { useImageUploadStore } from "../Store/ImageUploadStore.js";
import { useProductStore } from "../Store/ProductStore.js";

// start

const sizes = ["S", "M", "L", "XL", "XXL"];
const genders = ["Male", "Female"];
const colors = ref([]);
const Product_Name = ref("");
const Brand_Name = ref("");
const Product_Material = ref("");
const selectedSizes = ref([]);
const selectedGenders = ref([]);
const SelectedCategory = ref("Choose a category");
const Product_Price = ref("");
const Stock = ref("");

const formRef = ref(null);
const formdata = ref(null)
const images = ref([]);
const productadd = useProductStore()
 const checkimagetrue=ref('')


 function handleUpdatedImages(updatedImages) {
  images.value = Array.isArray(updatedImages) ? updatedImages : []
  console.log('🖼 images:', images.value)
}
const hasImage = computed(() =>
  images.value.some(img => img != null)
)
const nameValid = computed(() =>
  Product_Name.value.trim() !== '' &&
  /^[A-Za-z\s-]+$/.test(Product_Name.value)
)
const brandValid = computed(() =>
  Brand_Name.value.trim() !== '' &&
  /^[A-Za-z\s-]+$/.test(Brand_Name.value)
)
const materialValid = computed(() =>
  Product_Material.value.trim() !== '' &&
  /^[A-Za-z\s-]+$/.test(Product_Material.value)
)
const colorsValid = computed(() =>
  colors.value.length > 0 &&
  colors.value.every(c => /^[A-Za-z\s]+$/.test(c))
)
const sizesValid = computed(() =>
  selectedSizes.value.length > 0
)
const gendersValid = computed(() =>
  selectedGenders.value.length > 0
)
const categoryValid = computed(() =>
  SelectedCategory.value !== 'Choose a category'
)
const priceValid = computed(() =>
  Product_Price.value !== ''
)
const stockValid = computed(() =>
  Stock.value !== ''
)

const isFormValid = computed(() =>
  nameValid.value &&
  brandValid.value &&
  materialValid.value &&
  colorsValid.value &&
  sizesValid.value &&
  gendersValid.value &&
  categoryValid.value &&
  priceValid.value &&
  stockValid.value &&
  hasImage.value
)

watchEffect(() => {
  console.log({
    nameValid: nameValid.value,
    brandValid: brandValid.value,
    materialValid: materialValid.value,
    colorsValid: colorsValid.value,
    sizesValid: sizesValid.value,
    gendersValid: gendersValid.value,
    categoryValid: categoryValid.value,
    priceValid: priceValid.value,
    stockValid: stockValid.value,
    hasImage: hasImage.value,
    isFormValid: isFormValid.value
  })
})

function sumbitform() {
  if (!isFormValid.value) {
    console.warn('Form is not valid yet')
    return
  }

  const fd = new FormData()

  // حقول نصّية
  fd.append('name', Product_Name.value)
  fd.append('brand', Brand_Name.value)
  fd.append('material', Product_Material.value)
  fd.append('category', SelectedCategory.value)
  fd.append('price', Product_Price.value)
  fd.append('inStock', Stock.value)

  // مصفوفات كـ JSON
  selectedSizes.value.map(i => sizes[i]).forEach(s => fd.append('sizeRange[]', s))
colors.value.forEach(c => fd.append('color[]', c))
selectedGenders.value.map(i => genders[i]).forEach(g => fd.append('gender[]', g))

  // الصور
  images.value
    .filter(img => img != null)
    .forEach((file, idx) => {
      fd.append('images[]', file)
    })

  // طباعة الـ FormData للتأكد
  for (let pair of fd.entries()) {
    console.log(pair[0], ':', pair[1])
  }

  // إرسال الداتا
  productadd.addproduct(fd)
    .then(res => {
      console.log('Product added successfully:', res)
      // إعادة تهيئة الفورم
      Product_Name.value = ''
      Brand_Name.value = ''
      Product_Material.value = ''
      SelectedCategory.value = 'Choose a category'
      Product_Price.value = ''
      Stock.value = ''
      selectedSizes.value = []
      selectedGenders.value = []
      colors.value = []
      images.value = []
    })
    .catch(err => {
      console.error('Error adding product:', err.response?.data || err.message)
    })
}



// async function sumbitform() {
//   if (!isFormValid.value ) return;

//   const formData = new FormData();

//   formData.append('name', Product_Name.value);
//   formData.append('brand', Brand_Name.value);
//   formData.append('material', Product_Material.value);
//   formData.append('category', SelectedCategory.value);
//   formData.append('price', Product_Price.value);
//   formData.append('inStock', Stock.value);


//   images.value.forEach((img) => {
//     formData.append('images[]', img); 
//   });

//   // إضافة القيم الأخرى
//   formData.append('colors', JSON.stringify(colors.value)); // إرسال الألوان كـ JSON
//   formData.append('sizes', JSON.stringify(selectedSizes.value.map(i => sizes[i]))); // إرسال الأحجام كـ JSON
//   formData.append('genders', JSON.stringify(selectedGenders.value.map(i => genders[i]))); // إرسال الجندر كـ JSON

//   // إرسال البيانات عبر Axios باستخدام POST
//   console.log("Sending FormData:", formData);
//   try {
//     await productStore.addproduct(formData); // إرسال البيانات كـ FormData
//     // إعادة ضبط النموذج بعد النجاح
//     formRef.value.reset();
//     colors.value = [];
//     selectedSizes.value = [];
//     selectedGenders.value = [];
//     images.value = [];
//     SelectedCategory.value = "";
//     Product_Name.value = "";
//     Brand_Name.value = "";
//     Product_Material.value = "";
//     Product_Price.value = "";
//     Stock.value = "";
//     console.log("Product successfully sent to backend");
//   } catch (err) {
//     console.error("Error sending product:", err);
//   }
// }
</script>
<template>
  <form
    ref="formRef"
    @submit.prevent="sumbitform"
    id="myform"
    class="my-6 d-flex"
    style="margin-left: 88px; margin-right: 88px; gap: 16px"
  >
    <!-- General Information -->
    <div class="d-flex flex-column" style="width: 50%; gap: 16px">
      <div style="width: 100%">
        <div
          width="100%"
          class="text-start py-2 pl-5 pr-5 rounded-lg"
          style="border: solid 1px #80ccf9"
        >
          <v-card-text class="pa-0">
            <div class="d-flex flex-column">
              <h1
                class="text-primary font-weight-regular mb-4"
                style="font-size: 24px"
              >
                General Information
              </h1>
              <!-- product name -->
              <label
                for="ProductName"
                class="font-weight-semibold text-neutral text-body-1 mb-3"
                >Product Name</label
              >
              <v-text-field
                v-model="Product_Name"
                id="ProductName"
                :rules="[
               v => !!v || 'This field is required',
    v => (typeof v === 'string' && /^[A-Za-z\s-]+$/.test(v)) || 'Only letters, spaces and hyphens allowed'
  
                ]"
                variant="outlined"
                placeholder="Enter product Name"
                style="height: 56px"
                class="mb-6"
              />
            </div>
            <!-- brand name -->
            <div class="d-flex flex-column">
              <label
                for="Brand_Name"
                class="font-weight-semibold text-neutral text-body-1 mb-3"
                >Brand Name</label
              >
              <v-text-field
                v-model="Brand_Name"
                id="Brand_Name"
                :rules="[
                  (v) => !!v || 'This field is required',
                  (v) =>
                    /^[A-Za-z\s]+$/.test(v) ||
                    'Only letters and spaces are allowed',
                ]"
                variant="outlined"
                placeholder="Enter Brand Name"
                style="height: 56px"
                class="mb-6"
              />
            </div>
            <div class="d-flex flex-column">
              <label
                for="colors"
                class="font-weight-semibold text-neutral text-body-1 mb-3"
                >Product Color</label
              >

              <div class="d-flex" style="gap: 10px">
                <VCombobox
                  v-model="colors"
                  :items="[
                    'Red',
                    'Blue',
                    'Green',
                    'Yellow',
                    'Black',
                    'White',
                    'Purple',
                    'Pink',
                    'Orange',
                    'Brown',
                    'Gray',
                    'Cyan',
                    'Magenta',
                  ]"
                  multiple
                  :rules="[
                    () => colors.length > 0 || 'This field is required',
                    (v) =>
                      v.every((c) => /^[A-Za-z\s]+$/.test(c)) ||
                      'Only letters and spaces are allowed',
                  ]"
                  :menu-props="{ maxHeight: '400' }"
                  variant="outlined"
                  chips
                  clearable
                  hide-selected
                  solo
                  placeholder="Choose a color"
                />

              </div>
            </div>

            <div class="d-flex flex-column">
              <label
                for="Product_Material"
                class="font-weight-semibold text-neutral text-body-1 mb-3"
                >Product Material</label
              >
              <v-text-field
                id="Product_Material"
                v-model="Product_Material"
                :rules="[
                  (v) => !!v || 'This field is required',
                  (v) =>
                    /^[A-Za-z\s]+$/.test(v) ||
                    'Only letters and spaces are allowed',
                ]"
                variant="outlined"
                placeholder="Enter Product Material"
                style="height: 56px"
                class="mb-6"
              />
            </div>
          </v-card-text>
        </div>
      </div>
      <!-- Size -->
      <div
        width="100%"
        class="text-start py-4 pl-5 pr-5 rounded-lg d-flex"
        style="border: solid 1px #80ccf9"
      >
        <v-card-text class="pa-0 d-flex align-center">
          <div class="d-flex align-center" style="gap: 20px">
            <div class="d-flex align-center" style="width: 100%">
              <h1
                class="text-primary font-weight-regular mx-2"
                style="font-size: 24px"
              >
                Sizes :
              </h1>

              <v-item-group
                selected-class="bg-primary"
                multiple
                v-model="selectedSizes"
              >
                <v-item
                  v-for="(size, index) in sizes"
                  :key="n"
                  v-slot="{ selectedClass, toggle }"
                >
                  <v-chip
                  v-model="selectedSizes"
                  
                    :class="selectedClass"
                    :style="{
                      marginLeft: '5px',
                      color: '#0E4267',
                      fontWeight: '600',
                      border: selectedClass ? 'none' : '2px solid #C0C0C0,',
                    }"
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
        <!-- gender -->
        <v-card-text class="pa-0 d-flex align-center">
          <div class="d-flex align-center" style="gap: 20px">
            <div class="d-flex align-center" style="width: 100%">
              <h1
                class="text-primary font-weight-regular mx-2"
                style="font-size: 24px"
              >
                Gender:
              </h1>

              <v-item-group
                selected-class="bg-primary"
                
                v-model="selectedGenders"
              >
                <v-item
                  v-for="(gender, index) in genders"
                  :key="n"
                  v-slot="{ selectedClass, toggle }"
                >
                  <v-chip
                    :class="selectedClass"
                    :style="{
                      color: '#0E4267',
                      fontWeight: '600',
                      marginLeft: '5px',
                      border: selectedClass ? 'none' : '2px solid #C0C0C0',
                    }"
                    @click="toggle"
                    variant="outlined"
                    rounded="lg"
                  >
                    {{ gender }}
                  </v-chip>
                </v-item>
              </v-item-group>
            </div>
          </div>
        </v-card-text>
      </div>
    </div>

    <!-- section two -->
    <div class="d-flex flex-column" style="width: 50%; gap: 16px">
      <!-- Product Img  -->
      <!-- <div ref="form" width="100%" class="text-start py-2 pl-5 pr-5 rounded-lg" style="border:solid 1px #80CCF9">
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
            @change="handleFileUpload"

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
      </div> -->

      <ImageuploadProduct @update:images="handleUpdatedImages" />
      <!-- // بستقبل الايميت في داله  -->

      <!-- Category and Subcategory -->
      <div
        width="100%"
        class="text-start py-2 pl-5 pr-5 rounded-lg"
        style="border: solid 1px #80ccf9"
      >
        <v-card-text class="pa-0 d-flex flex-column mb-4">
          <h1
            class="text-primary font-weight-regular mb-4"
            style="font-size: 24px"
          >
            Category
          </h1>
          <v-autocomplete
            v-model="SelectedCategory"
            :items="['cloth', 'shoes', 'glasses', 'bags']"
            variant="outlined"
            :rules="[(v) => !!v || 'This field is required']"
            hide-no-data
            style="height: 56px"
          />
        </v-card-text>
      </div>

      <!-- pricing and stock -->
      <div
        width="100%"
        class="text-start py-2 pl-5 pr-5 rounded-lg"
        style="border: solid 1px #80ccf9"
      >
        <v-card-text class="pa-0 d-flex flex-column mb-4">
          <h1
            class="text-primary font-weight-regular mb-4"
            style="font-size: 24px"
          >
            Pricing and Stock
          </h1>
          <div class="d-flex justify-space-between" style="gap: 20px">
            <div class="d-flex flex-column" style="width: 50%; gap: 4px">
              <label
                class="my-label text-body-1 font-weight-semibold"
                style="margin-bottom: -16px"
                >Product Price</label
              >
              <v-text-field
                v-model="Product_Price"
                :rules="[() => !!Product_Price || 'This field is required']"
                variant="outlined"
                placeholder=" Enter Product Price"
                suffix="EGP"
                persistent-suffix
                type="number"
                style="height: 56px"
                required
              />
            </div>

            <div class="d-flex flex-column" style="width: 50%; gap: 4px">
              <label
                class="my-label text-body-1 font-weight-semibold"
                style="margin-bottom: -16px"
                >Stock</label
              >
              <v-text-field
                v-model="Stock"
                :rules="[() => !!Stock || 'This field is required']"
                variant="outlined"
                suffix="Items"
                persistent-suffix
                type="number"
                style="height: 56px"
                placeholder=" Enter the number of items"
                required
              />
            </div>
          </div>
        </v-card-text>
      </div>

      <!-- Buttons -->
      <div
        class="d-flex text-start pl-1 pr-4 rounded-lg"
        style="width: 100%; gap: 16px"
      >
        <Secondarybutton title="Cancel" width="50%" height="56px" />
        <Primarybutton
          from="myform"
          title="Add Product"
          width="50%"
          height="56px"
           :disabled="!isFormValid"
  />
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

.my-label {
  padding-bottom: 20px;
}
</style>
