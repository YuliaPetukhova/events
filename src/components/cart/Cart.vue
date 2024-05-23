<script lang="ts">
import SvgIcon from '@jamescoyle/vue-icon';
import {mdiCartOutline} from '@mdi/js';
import {useTicketStore} from "@/stores/TicketStore.ts";

export default {
  components: {
    SvgIcon
  },
  setup() {

    return {
      useTicketStore: useTicketStore(),
    };
  },
  data() {
    return {
      path: mdiCartOutline,
      cartDialog: false,
    }
  },
  computed: {
    TicketService() {
      return TicketService
    },
    totalAmount() {
      let sum = 0;
      // for (const ticketGroup of this.tickets) {
      //   for (const ticket of ticketGroup.tickets) {
      //     sum += ticket.priceAdult * ticket.adultTicketsNumber;
      //     sum += ticket.priceChild * ticket.childTicketsNumber;
      //   }
      // }
      return sum;
    },
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
          <div v-for="(city, index) in useTicketStore.getters.filteredTickets(useTicketStore)">
            {{ city.name }}

            <div v-for="ticketGroup in city.tickets">

              <div v-for="ticket in ticketGroup.tickets">

                <div v-if="ticket.adultTicketsNumber > 0 || ticket.childTicketsNumber > 0">

                  <div class="item">
                    <div class="item-name">
                      {{ ticket.name }}
                    </div>

                    <div>
                      <div class="adult">
                        Взрослые
                        <div class="tickets-choice">
                          <div class="types-tickets">
                            {{ ticket.priceAdult }} sum
                            <button @click="ticket.adultTicketsNumber--" class="quantity-change">-</button>
                            <input type="number" v-model="ticket.adultTicketsNumber" min="0">
                            <button @click="ticket.adultTicketsNumber++" class="quantity-change">+</button>
                          </div>
                        </div>
                      </div>

                      <div class="child">
                        Детские
                        <div class="tickets-choice">
                          <div class="types-tickets">
                            {{ ticket.priceChild }} sum
                            <button @click="ticket.childTicketsNumber--" class="quantity-change">-</button>
                            <input type="number" v-model="ticket.childTicketsNumber" min="0">
                            <button @click="ticket.childTicketsNumber++" class="quantity-change">+</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="total-amount">
            <p>Общая сумма: {{ totalAmount }} sum</p>
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
  position: absolute;
  right: 0.3rem;
  top: 0.1rem;
  padding-bottom: 1em;
}

.item {
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0.5em 0;
  border: 1px solid black;
}

.item-name {
  display: block;
  width: 300px;
  height: auto;
}

.tickets-choice {
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
  flex-direction: row;
}

.quantity-change {
  margin: 0.5em;
  cursor: pointer;
  width: 30px;
  height: 30px;
  border-radius: 20px;
  position: relative;
  border: 1px solid #000000;
}

input {
  outline: none;
  border: 1px solid black;
  width: 3rem;
}
</style>