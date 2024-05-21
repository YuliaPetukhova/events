<script lang="ts">
import SvgIcon from '@jamescoyle/vue-icon';
import {mdiCartOutline} from '@mdi/js';
import {useTicketStore} from "@/stores/TicketStore.ts";

export default {
  components: {
    SvgIcon
  },
  setup() {
    const ticketStore = useTicketStore();

    return {
      tickets: ticketStore,
    };
  },
  data() {
    return {
      path: mdiCartOutline,
      cartDialog: false,
      cartItems: [
        {id: 1, name: 'Товар 1', price: 100},
        {id: 2, name: 'Товар 2', price: 200},
      ],
    }
  },
  methods: {
    openCart() {
      this.cartDialog = true;
    },
    closeCart() {
      this.cartDialog = false;
    },
  },
};
</script>

<template>
  <div class="bottom-cart">
    <v-btn @click="openCart">
      <svg-icon type="mdi" :path="path"></svg-icon>
    </v-btn>

    <v-dialog v-model="cartDialog" max-width="600">
      <v-card>
        <v-card-actions class="close-btn">
          <v-btn @click="closeCart">Закрыть</v-btn>
        </v-card-actions>
        <v-card-title>Ваша корзина</v-card-title>
        <v-card-text>
          <div v-for="item in cartItems" :key="item.id">
            {{ item.name }} - {{ item.price }} руб.
          </div>
        </v-card-text>
        <v-btn color="green" to="/order">Купить</v-btn>
      </v-card>
    </v-dialog>
  </div>
</template>

<style scoped lang="css">
.bottom-cart {
  position: fixed;
  bottom: 1em;
  right: 1em;
  z-index: 1;
}

.close-btn {
  position: fixed;
  right: 0.3rem;
  top: 0.1rem;
  padding-bottom: 1em;
}
</style>