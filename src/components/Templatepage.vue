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
          class="text-start bg-success"
        >
          <slot name="partthree">TITLE THREE PART</slot>
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

<script setup></script>

<style lang="scss" scoped></style>
