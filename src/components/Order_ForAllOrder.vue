<template>
  <div v-if="item.orders && item.orders.length > 0">
    <div
      v-for="(order, index) in item.orders"
      :key="order._id || index"
      class="rounded-xl mb-5"
      style="width: 100%; background-color: #F3F3F3; padding: 8px; border: 1px solid #80CCF9;"
    >
      <h6 class="text-primary font-weight-regular ml-15 mb-1" style="font-size: 24px;">
        Date: {{ new Date(order.createdAt).toLocaleDateString() }}
      </h6>

      <div v-if="order.items && order.items.length > 0">
        <v-slide-group show-arrows>
          <v-slide-group-item
            v-for="productItem in order.items"
            :key="productItem._id"
          >
            <div class="rounded-lg pa-3 d-flex flex-column justify-center align-center ml-3"
                 style="background-color: #D7D7D7; gap: 8px; width: 250px;">
              <span style="font-weight: 400; font-size: 18px; color: #333333;">
                {{ productItem.product.name || 'No Product Name' }}
              </span>
              <v-img
                :src="productItem.product.images?.[0] || ''"
                alt="Product Image"
                class="image-placeholder rounded-xl"
                cover
                height="100"
                width="150"
              />
              <div class="d-flex" style="gap: 3px;">
                <v-chip variant="outlined" class="pa-3 bg-white" style="border: 2px solid #C0C0C0;">{{ productItem.size || 'N/A' }}</v-chip>
                <v-chip variant="outlined" class="pa-3 bg-white" style="border: 2px solid #C0C0C0;">{{ productItem.color || 'N/A' }}</v-chip>
                <v-chip variant="outlined" class="pa-3 bg-white" style="border: 2px solid #C0C0C0;">{{ productItem.quantity || 0 }}</v-chip>
                <v-chip variant="outlined" class="pa-3 bg-white" style="border: 2px solid #C0C0C0;">
                  {{ productItem.totalPriceItems || 0 }}$
                </v-chip>
              </div>
            </div>
          </v-slide-group-item>
        </v-slide-group>

        <div class="d-flex justify-space-between mt-1 px-5">
          <h6 class="text-primary font-weight-regular ml-10" style="font-size: 24px;">
            Price: ${{ order.totalPriceOrder || 0 }}
          </h6>
          <h6 class="text-primary font-weight-regular mr-10" style="font-size: 24px;">
            {{ order.items.length }} Items
          </h6>
        </div>
      </div>
    </div>
  </div>

  <div v-else class="text-center py-5">
    <h6 class="text-secondary" style="font-size: 20px;">There are no orders for this customer.</h6>
  </div>
</template>
