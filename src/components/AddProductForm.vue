<template>
  <v-form
    @submit.prevent="submitForm"
    class="py-6 d-flex bg-success"
    style="gap: 16px; padding: 0 88px"
  >
    <!-- القسم الأيمن: بيانات عامة وأحجام ولون -->
    <div class="d-flex flex-column" style="width: 50%; gap: 10px">
      <div
        class="text-start py-2 pl-5 pr-5 rounded-lg bg-white"
        style="border: solid 1px #80ccf9"
      >
        <Pagetitle :title="titlepage" />
      </div>

      <!-- General Information -->
      <div
        class="text-start py-2 pl-5 pr-5 rounded-lg bg-white"
        style="border: solid 1px #80ccf9"
      >
        <v-card-text class="pa-0 d-flex flex-column">
          <h1
            class="text-primary font-weight-regular mb-4"
            style="font-size: 24px"
          >
            General Information
          </h1>
          <!-- Product Name -->
          <label
            for="ProductName"
            class="font-weight-semibold text-neutral text-body-1 mb-2"
            >Product Name</label
          >
          <v-text-field
            v-model="Product_Name"
            id="ProductName"
            :rules="[
              (v) => !!v || 'This field is required',
              (v) =>
                /^[A-Za-z\s&\-]+$/.test(v) ||
                'Only letters, spaces and hyphens allowed',
            ]"
            variant="outlined"
            placeholder="Enter product Name"
            class="mb-4"
            style="height: 56px"
          />
          <!-- Brand Name -->
          <label
            for="Brand_Name"
            class="font-weight-semibold text-neutral text-body-1 mb-2"
            >Brand Name</label
          >
          <v-text-field
            v-model="Brand_Name"
            id="Brand_Name"
            :rules="[
              (v) => !!v || 'This field is required',
              (v) =>
                /^[A-Za-z\s&\-]+$/.test(v) ||
                'Only letters and spaces are allowed',
            ]"
            variant="outlined"
            placeholder="Enter Brand Name"
            class="mb-4"
            style="height: 56px"
          />
          <!-- Colors -->
          <label
            for="colors"
            class="font-weight-semibold text-neutral text-body-1 mb-2"
            >Product Color</label
          >
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
            chips
            clearable
            hide-selected
            solo
            placeholder="Choose a color"
            :rules="[
              () => colors.length > 0 || 'This field is required',
              (v) =>
                v.every((c) => /^[A-Za-z\s]+$/.test(c)) ||
                'Only letters and spaces are allowed',
            ]"
            :menu-props="{ maxHeight: '400' }"
            variant="outlined"
          />
          <!-- Material -->
          <label
            for="Product_Material"
            class="font-weight-semibold text-neutral text-body-1 mb-2"
            >Product Material</label
          >
          <v-text-field
            v-model="Product_Material"
            id="Product_Material"
            :rules="[
              (v) => !!v || 'This field is required',
              (v) =>
                /^[A-Za-z\s]+$/.test(v) ||
                'Only letters and spaces are allowed',
            ]"
            variant="outlined"
            placeholder="Enter Product Material"
            style="height: 56px"
            class="mb-4"
          />
        </v-card-text>
      </div>

      <!-- Sizes & Genders -->
      <div
        class="text-start py-4 pl-5 pr-5 rounded-lg d-flex bg-white"
        style="border: solid 1px #80ccf9"
      >
        <v-card-text class="pa-0 d-flex align-center" style="gap: 40px">
          <!-- Sizes -->
          <div class="d-flex align-center" style="gap: 20px">
            <h1
              class="text-primary font-weight-regular"
              style="font-size: 24px"
            >
              Sizes:
            </h1>
            <v-item-group
              multiple
              selected-class="bg-primary"
              v-model="selectedSizes"
            >
              <v-item
                v-for="(size, idx) in sizes"
                :key="idx"
                v-slot="{ selectedClass, toggle }"
              >
                <v-chip
                  :class="selectedClass"
                  @click="toggle"
                  variant="outlined"
                  rounded="lg"
                  :style="{
                    marginLeft: '5px',
                    color: '#0E4267',
                    fontWeight: '600',
                    border: Boolean(selectedClass)
                      ? 'none'
                      : '1px solid #C0C0C0',
                  }"
                >
                  {{ size }}
                </v-chip>
              </v-item>
            </v-item-group>
          </div>
          <!-- Genders -->
          <div class="d-flex align-center" style="gap: 20px">
            <h1
              class="text-primary font-weight-regular"
              style="font-size: 24px"
            >
              Gender:
            </h1>
            <v-item-group
              multiple
              selected-class="bg-primary"
              v-model="selectedGenders"
            >
              <v-item
                v-for="(g, idx) in genders"
                :key="idx"
                v-slot="{ selectedClass, toggle }"
              >
                <v-chip
                  :class="selectedClass"
                  @click="toggle"
                  variant="outlined"
                  rounded="lg"
                  :style="{
                    marginLeft: '5px',
                    color: '#0E4267',
                    fontWeight: '600',
                    border: Boolean(selectedClass)
                      ? 'none'
                      : '1px solid #C0C0C0',
                  }"
                >
                  {{ g }}
                </v-chip>
              </v-item>
            </v-item-group>
          </div>
        </v-card-text>
      </div>
    </div>

    <!-- القسم الأيسر: الصور، الفئة، السعر والمخزون -->
    <div class="d-flex flex-column" style="width: 50%; gap: 10px">
      <!-- Product Images -->
      <div
        class="text-start py-4 pl-5 pr-5 rounded-lg bg-white"
        style="border: solid 1px #80ccf9"
      >
        <v-card-text class="pa-0 d-flex flex-column">
          <h1
            class="text-primary font-weight-regular mb-4"
            style="font-size: 24px"
          >
            Product Images
          </h1>
          <div class="d-flex" style="gap: 10px">
            <div
              class="add-image-box"
              v-for="(_, index) in placeholders"
              :key="index"
            >
              <div
                v-if="store.Statuses[index] === 'Loading'"
                class="image-placeholder"
              >
                <v-progress-circular indeterminate color="primary" />
              </div>
              <div
                v-else-if="store.Statuses[index] === 'error'"
                class="image-placeholder"
              >
                <v-icon size="36" @click="retryUploadHandler(index)"
                  >mdi-reload</v-icon
                >
                <span>try again</span>
              </div>
              <div
                v-else-if="store.Statuses[index] === 'Success'"
                class="image-placeholder"
              >
                <v-img
                  :src="store.images[index]"
                  alt="Selected Image"
                  cover
                  width="100%"
                  height="100%"
                />

                <v-icon
                  size="24"
                  @click="deleteImageHandler(index)"
                  style="
                    position: absolute;
                    top: 2px;
                    right: 2px;
                    cursor: pointer;
                  "
                >
                  mdi-close-circle
                </v-icon>
              </div>
              <v-file-input
                v-else
                accept="image/png, image/jpeg, image/bmp"
                hide-input
                prepend-icon="mdi-plus"
                class="icon-only-file-input"
                @change="(e) => onFileChange(e, index)"
              />
            </div>
          </div>
        </v-card-text>
      </div>

      <!-- Category -->
      <div
        class="text-start py-2 pl-5 pr-5 rounded-lg bg-white"
        style="border: solid 1px #80ccf9"
      >
        <v-card-text class="pa-0 d-flex flex-column">
          <h1
            class="text-primary font-weight-regular mb-2"
            style="font-size: 24px"
          >
            Category
          </h1>
          <V-Select
            v-model="SelectedCategory"
            :items="categories"
            variant="outlined"
            placeholder="Choose a category"
            persistent-placeholder
            clearable
            style="width: 100%"
            class="pa-0"
          />
        </v-card-text>
      </div>

      <!-- Pricing and Stock -->
      <div
        class="text-start py-2 pl-5 pr-5 rounded-lg bg-white"
        style="border: solid 1px #80ccf9"
      >
        <v-card-text class="pa-0 d-flex flex-column mb-4">
          <h1
            class="text-primary font-weight-regular mb-4"
            style="font-size: 24px"
          >
            Pricing and Stock
          </h1>
          <div class="d-flex" style="gap: 20px">
            <div class="d-flex flex-column" style="width: 50%">
              <label class="font-weight-semibold text-neutral text-body-1 mb-2"
                >Product Price</label
              >
              <v-text-field
                v-model="Product_Price"
                variant="outlined"
                placeholder="Enter Product Price"
                suffix="EGP"
                persistent-suffix
                type="number"
                style="height: 56px"
                :rules="[(v) => !!v || 'This field is required']"
                required
              />
            </div>
            <div class="d-flex flex-column" style="width: 50%">
              <label class="font-weight-semibold text-neutral text-body-1 mb-2"
                >Stock</label
              >
              <v-text-field
                v-model="Stock"
                variant="outlined"
                suffix="Items"
                persistent-suffix
                type="number"
                placeholder="Enter the number of items"
                style="height: 56px"
                :rules="[(v) => !!v || 'This field is required']"
                required
              />
            </div>
          </div>
        </v-card-text>
      </div>

      <!-- Buttons -->
      <div
        class="d-flex mt-2"
        style="gap: 10px; justify-content: space-between"
      >
        <Secondarybutton title="Cancel" width="48%" height="56px" />
        <Primarybutton
          from="myform"
          :title="buttontitle"
          width="48%"
          height="56px"
          :disabled="!isFormValid"
        />
      </div>
    </div>
  </v-form>
</template>

<script setup>
import { ref, computed, onMounted, watchEffect } from "vue";
import { useImageUploadStore } from "../Store/ImageUploadStore.js";
import Pagetitle from "../components/Pagetitle.vue";
import { useProductStore } from "../Store/ProductStore.js";
import { useRoute } from "vue-router";
import Secondarybutton from "../components/Secondarybutton.vue";
import Primarybutton from "../components/Primarybutton.vue";
const sizes = ["S", "M", "L", "XL", "XXL"];
const genders = ["women", "men"];
const categories = ref(["cloth", "shoes", "glasses", "bags"]);
const SelectedCategory = ref(null);
const Product_Name = ref("");
const Brand_Name = ref("");
const Product_Material = ref("");
const colors = ref([]);
const selectedSizes = ref([]);
const selectedGenders = ref([]);
const Product_Price = ref("");
const Stock = ref("");
const productStore = useProductStore();
const route = useRoute();
const initialData = ref({});
const mood = ref("add");
//  change name of button
const buttontitle = computed(() =>
  mood.value === "edit" ? "Update changes" : "Add Product"
);
//change name of page title
const titlepage = computed(() =>
  mood.value === "edit" ? "Edit Product" : "Add New Product"
);

// call store to upload image and return url
const store = useImageUploadStore();

//  number of square photo place
const placeholders = Array.from({ length: 4 });

// computed validations
const hasImage = computed(() => store.images.some((img) => img != null));
const nameValid = computed(
  () =>
    Product_Name.value.trim() !== "" &&
    /^[A-Za-z\s&\-]+$/.test(Product_Name.value)
);
const brandValid = computed(
  () =>
    Brand_Name.value.trim() !== "" && /^[A-Za-z\s&\-]+$/.test(Brand_Name.value)
);
const materialValid = computed(
  () =>
    Product_Material.value.trim() !== "" &&
    /^[A-Za-z\s]+$/.test(Product_Material.value)
);
const colorsValid = computed(
  () =>
    colors.value.length > 0 &&
    colors.value.every((c) => /^[A-Za-z\s]+$/.test(c))
);
const sizesValid = computed(() => selectedSizes.value.length > 0);
const gendersValid = computed(() => selectedGenders.value.length > 0);
const categoryValid = computed(() => !!SelectedCategory.value);
const priceValid = computed(() => Product_Price.value !== "");
const stockValid = computed(() => Stock.value !== "");

//return true false depend on validation
const isFormValid = computed(
  () =>
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
);

watchEffect(() => {
  console.log("Form validity:", isFormValid.value);
});

// fetch product for edit
onMounted(() => {
  const id = route.params.id;

  if (id) {
    // حالة Edit
    productStore.fetchproductbyid(id).then(() => {
      initialData.value = productStore.Product_data1;
      mood.value = "edit";

      // تعيين القيم
      Product_Name.value = initialData.value.name;
      Brand_Name.value = initialData.value.brand;
      Product_Material.value = initialData.value.material;
      colors.value = initialData.value.color;
      selectedSizes.value = initialData.value.sizeRange.map((s) =>
        sizes.indexOf(s)
      );
      selectedGenders.value = initialData.value.gender.map((g) =>
        genders.indexOf(g)
      );
      SelectedCategory.value = initialData.value.category.name;
      Product_Price.value = initialData.value.price;
      Stock.value = initialData.value.inStock;

      // إعداد الصور القديمة
      const urls = Array.isArray(initialData.value.images)
        ? initialData.value.images.map((x) =>
            typeof x === "string" ? x : x.url
          )
        : [];
      // امتلاء المصفوفات مع ملء الخانات الفارغة بـ null
      const fullImages = [...urls];
      while (fullImages.length < placeholders.length) fullImages.push(null);
      store.images.splice(0, placeholders.length, ...fullImages);

      const fullStatuses = urls.map(() => "Success");
      while (fullStatuses.length < placeholders.length) fullStatuses.push(null);
      store.Statuses.splice(0, placeholders.length, ...fullStatuses);
    }); // <-- نهاية then
  } else {
    // حالة Add: نفرغ الصور والحالات
    store.images.splice(
      0,
      store.images.length,
      ...Array(placeholders.length).fill(null)
    );
    store.Statuses.splice(
      0,
      store.Statuses.length,
      ...Array(placeholders.length).fill(null)
    );
  }
});

// handlers
function onFileChange(e, idx) {
  store.handleFileUpload(e, idx);
}
function deleteImageHandler(idx) {
  store.deleteimage(idx);
}
function retryUploadHandler(idx) {
  store.retryUpload(idx);
}
//function to check any change to update data
const hasproductchange = () => {
  //object data
  const newpayload = {
    name: Product_Name.value,
    brand: Brand_Name.value,
    price: Product_Price.value,
    color: [...colors.value],
    material: Product_Material.value,
    inStock: Stock.value,
    sizeRange: selectedSizes.value.map((i) => sizes[i]),
    category: SelectedCategory.value,
    gender: selectedGenders.value.map((i) => genders[i]),
    images: store.images.filter((img) => img != null),
  };
  //object data
  const oldpayload = initialData.value;
  // must change to  string
  //علشان مفارنه الاوبجيكت قيل التحويل هترجع عالطول  false
  // لما بتتحول بيرجع كده "{name: , age }"
  //كده رجعوا string  by use json.stringify

  return (
    JSON.stringify({
      name: oldpayload.name,
      brand: oldpayload.brand,
      price: oldpayload.price,
      color: oldpayload.color,
      material: oldpayload.material,
      inStock: oldpayload.inStock,
      sizeRange: oldpayload.sizeRange,
      category: oldpayload.category?.name,
      gender: oldpayload.gender,
      images: oldpayload.images?.map((x) =>
        typeof x === "string" ? x : x.url
      ),
    }) !== JSON.stringify(newpayload)
  );
  // لي عملت كده رغم اه اصلا كان  object  علشان ممكن يكون ال  object  اللي خزنته ورجعلي من الباك في ال  category:{id:  , name:}
  // وال  payload new  كان   قيمه واحده
};
//لو مش بيساوي بعض يعني حصل تغير يبعت بقا ساعتها  true

// submit
async function submitForm() {
  if (!isFormValid.value) return;

  const payload = {
    name: Product_Name.value,
    brand: Brand_Name.value,
    price: Product_Price.value,
    color: [...colors.value],
    material: Product_Material.value,
    inStock: Stock.value,
    sizeRange: selectedSizes.value.map((i) => sizes[i]),
    category: SelectedCategory.value,
    gender: selectedGenders.value.map((i) => genders[i]),
    images: store.images.filter((img) => img != null),
  };

  try {
    if (mood.value === "edit") {
      if (!hasproductchange()) {
        console.log("no data change to update");
        return;
      }

      await productStore.updateproductdata(route.params.id, payload);
      console.log("updated data sucessfully");
    } else {
      await productStore.addproduct(payload);
    }
    console.log("all data get");

    // return field empty after add new product
    Product_Name.value = "";
    Brand_Name.value = "";
    Product_Material.value = "";
    colors.value = [];
    selectedSizes.value = [];
    selectedGenders.value = [];
    SelectedCategory.value = null;
    Product_Price.value = "";
    Stock.value = "";
    store.images.splice(0);
    store.Statuses.splice(0);
  } catch (err) {
    console.error("Error adding product:", err.response?.data || err.message);
  }
}
</script>

<style scoped lang="scss">
.add-image-box {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;
  cursor: pointer;
  border: 2px dashed #ccc;
  border-radius: 8px;
  overflow: hidden;

  position: relative;
}
.image-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.icon-only-file-input {
  width: 100%;
  height: 100%;
}
.icon-only-file-input .v-input__control,
.icon-only-file-input .v-input__slot {
  justify-content: center;
  padding: 0;
}
</style>
