<script setup lang="ts">

import Cart from "@/components/cart/Cart.vue";
</script>

<template>
  <v-btn class="byu-btn" color="green" to="/tickets">Купить сразу</v-btn>
  <Cart></Cart>
</template>

<style scoped lang="css">
.byu-btn {
  position: fixed;
  right: 6rem;
  bottom: 1em;
}
</style>