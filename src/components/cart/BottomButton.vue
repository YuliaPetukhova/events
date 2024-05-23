<script setup lang="ts">
import Cart from "@/components/cart/Cart.vue";
</script>

<template>
  <v-btn class="byu-btn" to="/order" cl>Купить</v-btn>
  <Cart></Cart>
</template>

<style scoped lang="css">
.byu-btn {
  position: fixed;
  z-index: 1;
  right: 6rem;
  bottom: 1em;
  background-color: #98c9ab;
  color: #FFFFFF;
}
</style>