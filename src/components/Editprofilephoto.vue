
<script setup>
   

  const props=defineProps({
image:{
    default:"user (2).png",
    type:String,
}
   
  })
</script>


<template>
    <div class="text-center  ">
        <div class="img">
            <v-avatar size="150" >
    <v-img :src='props.image'/>
 </v-avatar>
 <!-- <v-btn  icon
 small color="primary" class="edit" 
 >
    <v-icon size="18">mdi-pencil</v-icon>
 </v-btn> -->
    </div>
        </div>
 
</template>

<style lang="scss" scoped>
.img{
    position:absolute;
    display: inline-block;    

}
.edit{
    position: relative;
    right: 20px;
    bottom: -30px;
}
</style>
     