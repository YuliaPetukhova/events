<script setup lang="ts">
import Cart from "@/components/cart/Cart.vue";
</script>

<template>
  <v-btn class="byu-btn" :to="{name:'Order', params:{text:'order'}}">Купить</v-btn>
  <Cart></Cart>
</template>

<style scoped lang="css">
.byu-btn {
  position: fixed;
  z-index: 1;
  right: 6rem;
  bottom: 1em;
  background-color: #38c56e;
  color: #FFFFFF;
}
</style>