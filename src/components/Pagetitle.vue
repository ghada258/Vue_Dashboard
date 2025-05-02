<template>
<v-title class=" full-width text-primary bg-success font-weight-semibold  cursor-default"style="font-size: 32px;">{{ title }}</v-title>
</template>

<script setup>
const props=defineProps({
    title:{
        type:String,
        required:true
    }
})
</script>

<style lang="scss" scoped>

</style>