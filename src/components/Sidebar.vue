<template >
  <v-card >
    <v-layout>
      <v-navigation-drawer expand-on-hover rail color="primary"  class=" py-8  app-drawer " >
        <div class="iconright-section">
        <v-icon class="mx-auto ">mdi-chevron-double-right</v-icon> 
        </div>
        <v-list class="profile-section">
            <div class="d-flex flex-column pr-6">
                <v-icon class="ml-auto ">mdi-chevron-double-left</v-icon>
            </div>
          <v-list-item class="d-flex flex-column gap-6" 
          >
          <v-list-item-avatar>
            <v-img src="public/profile.jpg" class=" rounded-circle mx-auto mb-4  "   cover width="100"
  height="100"  ></v-img>
        
          </v-list-item-avatar>
          <v-list-item-title class="mb-4 font-weight-semibold text-h6">
            Ahmed Hamada
          </v-list-item-title>
        </v-list-item>
        </v-list>
        <v-divider class="profile-section" color="info  "></v-divider>
        <v-list density="compact" nav>
          <!-- home -->
          <v-list-item value="Dashboard" class="mt-4 justify-center align-center pa-0 ">
            <template #prepend>
              <v-list-item-icon class="px-4 ">
                <v-icon color="secondary" size="32" >mdi-home-outline</v-icon>
              </v-list-item-icon>
            </template>
            <v-list-item-title color="secondary" class="text-body-2" > Dashboard </v-list-item-title>
          </v-list-item>
          <!-- Customer Management -->
          <v-list-item value="Customer Management" class="mt-4 justify-center align-center pa-0 ">
            <template #prepend>
              <v-list-item-icon class="px-4">
                <v-icon color="secondary" size="32" >mdi-account-outline</v-icon>
              </v-list-item-icon>
            </template>
            <v-list-item-title color="secondary" class="text-body-2"> Customer Management </v-list-item-title>
          </v-list-item>
          <!-- Order Management -->
          <v-list-item value="Order Management" class="mt-4 justify-center align-center pa-0 ">
            <template #prepend>
              <v-list-item-icon class="px-4">
                <v-icon color="secondary" size="32" >mdi-cart-outline</v-icon>
              </v-list-item-icon>
            </template>
            <v-list-item-title color="secondary" class="text-body-2"> Order Management</v-list-item-title>
          </v-list-item>
           <!-- Product Management -->
           <v-list-item value="Product Management" class="mt-4 justify-center align-center pa-0 ">
            <template #prepend>
              <v-list-item-icon class="px-4">
                <v-icon color="secondary" size="32" >mdi-cube-outline</v-icon>
              </v-list-item-icon>
            </template>
            <v-list-item-title color="secondary" class="text-body-2">Product Management</v-list-item-title>
          </v-list-item>
            <!-- Admins -->
            <v-list-item value="dmins " class="mt-4 justify-center align-center pa-0 ">
            <template #prepend>
              <v-list-item-icon class="px-4">
                <v-icon color="secondary" size="32" >mdi-shield-account-outline</v-icon>
              </v-list-item-icon>
            </template>
            <v-list-item-title color="secondary" class="text-body-2">Admins </v-list-item-title>
          </v-list-item>
        <!-- profile -->
        <v-list-item value="Profile" class="mt-4 justify-center align-center pa-0 ">
            <template #prepend>
              <v-list-item-icon class="px-4">
                <v-icon color="secondary" size="32" >mdi-account-circle-outline</v-icon>
              </v-list-item-icon>
            </template>
            <v-list-item-title color="secondary" class="text-body-2">Profile </v-list-item-title>
          </v-list-item>
         <!-- log out -->
         <v-list-item value="log out" class="mt-4 justify-center align-center pa-0 ">
            <template #prepend>
              <v-list-item-icon class="px-4">
                <v-icon color="secondary" size="32" >mdi-logout-variant</v-icon>
              </v-list-item-icon>
            </template>
            <v-list-item-title color="secondary" class="text-body-2">log out </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

    </v-layout>
  </v-card>
</template>

<script setup>



</script>

<style lang="scss" scoped>
.app-drawer.v-navigation-drawer--rail .profile-section {
  display: none;
}


.app-drawer.v-navigation-drawer--rail:hover .profile-section {
  display: flex; 
 flex-direction: column;
  justify-content: center;
} 



.app-drawer.v-navigation-drawer--rail .iconright-section {
  display: flex; 
 flex-direction: column;
} 


.app-drawer.v-navigation-drawer--rail:hover .iconright-section {
  display: none; 

}
</style>
