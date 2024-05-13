<script lang="ts">
import {defineComponent} from "vue";
// import ShowCalendar from "./Samarkand/ShowCalendar.vue";
import Login from "../components/Login.vue";
import MainPageMenu from "../components/MainPageMenu.vue";
import SamarkandMainPage from "../components/Samarkand/SamarkandMainPage.vue";

export default defineComponent({
  components: {SamarkandMainPage, MainPageMenu, Login,},
})
</script>

<template>
  <div class="container">
    <MainPageMenu></MainPageMenu>

    <div class="login-btn-container">
      <Login></Login>
    </div>
  </div>

</template>

<style scoped lang="css">
.container {
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  background: url("/assets/лазер.jpg") no-repeat center center fixed;
  background-size: cover;
}

.login-btn-container {
  display: flex;
  justify-content: end;
  margin: 1.5em 1.5em;
}
</style>