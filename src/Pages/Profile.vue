<!-- <template>
  <row justify="center">

<v-col class=" mx-auto">

</v-col>

  </row>
</template> -->

<script setup>
import Formfield from '../components/Formfield.vue';
import Editprofilephoto from '../components/Editprofilephoto.vue';
import DropList from '../components/DropList.vue';



</script>

<style lang="scss" scoped>

</style>
<template>
<div class="contentTitle">
  <v-item-title class="text-primary ">Admin</v-item-title>
</div>

  <div class=" content">
 
    <v-row no-gutters>
      <v-col order="6" cols="4" color="primary">
        <v-sheet class=" pa-0 ma-0 ">
          <Formfield/>
        </v-sheet>
      </v-col>
      <v-col order="12"  cols="5" color="primary">
        <v-sheet class=" ma-2 pa-0">
       <DropList/>
        </v-sheet>
      </v-col>
      <v-col order="1"  cols="2"    class="d-flex  ">
        <v-sheet >
          <Editprofilephoto image="profile.jpg" />
        </v-sheet>
      </v-col>
    </v-row>
  </div>
</template>
<style scoped lang="scss">
.content{
  margin: 0px 88px;
}
.contentTitle{
  margin: 22px 88px 22px 88px ;
}
</style>