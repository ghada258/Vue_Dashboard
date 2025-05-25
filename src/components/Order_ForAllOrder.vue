<script setup>
const props = defineProps({
  item: Object
});
</script>

<template>
  <div class="rounded-xl" style="width: 100%; background-color: #F3F3F3; padding: 8px; border: 1px solid #80CCF9;">
    <h6 class="text-primary font-weight-regular ml-15 mb-1" style="font-size: 24px;">
      Date: {{ new Date(item.createdAt).toLocaleDateString() }}
    </h6>

    <v-slide-group show-arrows>
      <v-slide-group-item v-for="productItem in item.items" :key="productItem._id">
        <div class="rounded-lg pa-3 d-flex flex-column justify-center  align-center ml-3"
             style="background-color: #D7D7D7; gap: 8px; width: 250px;">
          <span style="font-weight: 400; font-size: 18px; color: #333333;">
            {{ productItem.product.name }}
          </span>
          <v-img
            :src="productItem.product.images[0]"
            alt="Product Image"
            class="image-placeholder rounded-xl"
            cover
            height="100"
            width="150"
          />
          <div class="d-flex" style="gap: 3px;">
            <v-chip variant="outlined" class="pa-3 bg-white" style="border: 2px solid #C0C0C0;">{{ productItem.size }}</v-chip>
            <v-chip variant="outlined" class="pa-3 bg-white" style="border: 2px solid #C0C0C0;">{{ productItem.color }}</v-chip>
            <v-chip variant="outlined" class="pa-3 bg-white" style="border: 2px solid #C0C0C0;">{{ productItem.quantity }}</v-chip>
            <v-chip variant="outlined" class="pa-3 bg-white" style="border: 2px solid #C0C0C0;">
              {{ productItem.totalPriceItems }}$
            </v-chip>
          </div>
        </div>
      </v-slide-group-item>
    </v-slide-group>

    <div class="d-flex justify-space-between mt-1 px-5">
      <h6 class="text-primary font-weight-regular ml-10" style="font-size: 24px;">
        Price: ${{ item.totalPriceOrder }}
      </h6>
      <h6 class="text-primary font-weight-regular mr-10" style="font-size: 24px;">
        {{ item.items.length }} Items
      </h6>
    </div>
  </div>
</template>
