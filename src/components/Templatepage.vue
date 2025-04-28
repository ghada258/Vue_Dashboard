<template>
    <div class="mt-4  " style="margin-left: 88px; margin-right: 88px;">

   
  <div
      class=" mb-4 "
    >
    
          <v-sheet width="100%" class="text-start" >
            <slot name="partone">TITLE ONE PART</slot>
          </v-sheet>

    </div>
    <div
      class=" mb-4"
    >
    
          <v-sheet width="100%" class="text-start" >
            <slot name="parttwo">TITLE TWO PART</slot>
          </v-sheet>

    </div>
    <div
      class=" mb-4"
    >
    
          <v-sheet width="100%" class="text-start" >
            <slot name="partthree">TITLE THREE PART</slot>
          </v-sheet>

    </div>
    <div
      class="mb-4 "
    >
    
          <v-sheet width="100%" class="text-start" >
            <slot name="partfour">TITLE FOUR PART</slot>
          </v-sheet>

    </div>
</div>
</template>

<script setup>
  
</script>

<style lang="scss" scoped>

</style>