<script setup lang="ts">
import TopMenu from "@/components/topMenu/TopMenu.vue";
import Cart from "@/components/cart/Cart.vue";
import TicketPage from "@/components/ticket/TicketPage.vue";
</script>

<template>
  <div class="container">
    <TopMenu></TopMenu>
    <router-view></router-view>
    <Cart></Cart>
  </div>
</template>

<style scoped lang='css'>
.container {
  width: 100%;
  height: 100%;
  position: absolute;
  background: url("/assets/tash.jpg") no-repeat center center fixed;
}
</style>
