<script lang="ts">
import {TashkentTickets} from "../../../data/TashkentTickets";
import Cart from "@/components/cart/Cart.vue";

export default {
  components: {Cart},
  data() {
    return {
      TashkentTickets,
    };
  },
};
</script>

<template>
  <div class="container">
    <h1 class="title">Билеты на достопримечательности Ташкента</h1>
    <v-expansion-panels multiple>

      <v-expansion-panel class="panel" :title="itemList.name" v-for="(itemList, index) in TashkentTickets.data">
        <v-expansion-panel-text class="panel-text" v-for="(ticket, ticketsIndex) in itemList.tickets">
          <div class="panel-content">
            {{ ticket.name }}
            {{ ticket.priceAdult }} sum
            <div>
              Взрослые
              <button @click="ticket.adultTicketsNumber--">-</button>
              <input type="number" v-model="ticket.adultTicketsNumber" min="0">
              <button @click="ticket.adultTicketsNumber++" class="counter">+</button>
            </div>
            {{ ticket.priceChild }} sum
            <div>
              Детские
              <button @click="ticket.childTicketsNumber--">-</button>
              <input type="number" v-model="ticket.childTicketsNumber" min="0">
              <button @click="ticket.childTicketsNumber++" class="counter">+</button>
            </div>
          </div>

        </v-expansion-panel-text>

      </v-expansion-panel>

    </v-expansion-panels>

    <Cart></Cart>
  </div>

</template>

<style scoped lang="css">
.container {
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
}

.title {
  margin: 0.5em 0;
  color: rgb(255, 255, 255);
}

.panel-text {
  border: 1px solid grey;
  margin-top: 1em;
}

.panel-content {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-content: center;
  justify-content: space-between;
  align-items: center;
  margin: 1em;
}

input {
  outline: none;
  border: 1px solid black;
  margin-left: 1em;
  width: 3rem;
}

.panel {
  margin-bottom: 1em;
}

.counter {
  margin: 1em;
}
</style>