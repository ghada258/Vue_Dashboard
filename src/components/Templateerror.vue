<template>
  <template v-if="productStore.status==='loading'"><slot name="Loading">LOADING.............</slot></template>
    <template v-else-if="productStore.status==='success'">
        <template v-if="length>0">
            <slot name="sucess"></slot>
        </template>
        <template v-else> <slot name="empty">EMPTY............. </slot>
</template>
    </template>
    <template v-else>
        <slot name="error">ERROR...............</slot>
    </template>

</template>

<script setup>
</script>

<style lang="scss" scoped>

</style>