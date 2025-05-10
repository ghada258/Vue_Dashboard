<template>
  <div class="bg-success">
    <div
      class="pt-4"
      style="padding-left: 88px; padding-right: 88px; height: 100vh"
    >
      <div class="mb-4">
        <v-sheet class="text-start bg-success">
          <slot name="partone">TITLE ONE PART</slot>
        </v-sheet>
      </div>
      <div class="mb-4">
        <v-sheet width="100%" class="text-start">
          <slot name="parttwo">TITLE TWO PART</slot>
        </v-sheet>
      </div>
      <div class="mb-1">

        <v-sheet
          width="100%"
          style="height: 470px"
          class="text-start bg-success "
        >
          <template v-if="statusfetch==='loading'">
                        <slot name="Loading">  

    <div style="height: 100%; display: flex; justify-content: center; align-items: center; flex-direction: column;">

              <div style="height: 100%; display: flex; justify-content: center; align-items: center;" >
                       <v-progress-circular indeterminate color="primary" size="50" width="5" />
                   </div>
                             </div>

                            </slot>
        </template>
            <template v-else-if="statusfetch==='success'">
        <template v-if="length>0">
         <slot name="partthree">TITLE THREE PART</slot>

        </template>
        <template v-else>
              <div style="height: 100%; display: flex; justify-content: center; align-items: center;">

          <slot name="empty">  <img  :src="nofilterdata" class="pt-10"/>
        <v-item-title class="d-block text-primary font-weight-bold text-h5 pt-5" style="cursor:default;">
{{ titlenodata}}    
        </v-item-title>
      </slot>
          </div>
        </template>
        </template>
        <template v-else>
              <div style="height: 100%; display: flex; justify-content: center; align-items: center;">
           <slot name="error">
           </slot>
              </div>
          </template>
        </v-sheet>
      </div>
      <div class="pb-4">
        <v-sheet class="text-start bg-success">
          <slot name="partfour">TITLE FOUR PART</slot>
        </v-sheet>
      </div>
    </div>
  </div>
</template>

<script setup>
const props=defineProps({
  statusfetch:{
    type: String,
        default: 'loading', 

  },length:{
        type: Number,
            default: 0, 


  },  nofilterdata:{
    type: String,
required:true
  },titlenodata:{
    type: String,
    required:true
  }
  
})
</script>

<style lang="scss" scoped></style>
