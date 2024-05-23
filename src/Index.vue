<script setup lang="ts">
import TopMenu from "@/components/topMenu/TopMenu.vue";
import Cart from "@/components/cart/Cart.vue";
</script>

<template>
  <div class="container">
    <img src="/assets/plane.png" alt="plane" class="plane">
    <TopMenu></TopMenu>
    <router-view></router-view>
    <Cart></Cart>
  </div>
</template>

<style scoped lang='css'>
.container {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: absolute;
}

.plane {
  position: absolute;
  box-sizing: border-box;
  z-index: -1;
  max-width: 1000px;
  max-height: 770px;
  top: -6em;
  left: 3em;
  opacity: 0.2;
}
</style>
