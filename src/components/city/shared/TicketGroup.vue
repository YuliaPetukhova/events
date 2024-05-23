<script lang="ts">

import {defineComponent} from "vue";
import BottomButton from "@/components/cart/BottomButton.vue";
import {TashkentTickets} from "@/data/TashkentTickets.ts";

export default defineComponent({
  components: {BottomButton},
  name: 'TicketComponent',
  props: {
    tickets: Array,
  },

  data() {
    return {
      TashkentTickets,
    };
  },
});
</script>

<template>

  <!--  <v-expansion-panel-->
  <!--      class="panel"-->
  <!--      :title="ticketGroup.name"-->
  <!--      v-for="ticketGroup in tickets"-->
  <!--      :key="ticketGroup.name">-->
  <v-expansion-panel
      class="panel"
      v-for="ticketGroup in tickets"
      :title="ticketGroup.name">

    <v-expansion-panel-text
        class="panel-text"
        v-for="ticket in ticketGroup.tickets"
        :key="ticket.name">

        <div class="panel-content">
          <div class="panel-content-name">
            {{ ticket.name }}
          </div>

          <div class="tickets-choice">
            <div>Взрослые {{ ticket.priceAdult }} sum</div>
            <div class="types-tickets">
              <button @click="ticket.adultTicketsNumber--" class="quantity-change">-</button>
              <input type="number" v-model="ticket.adultTicketsNumber" min="0">
              <button @click="ticket.adultTicketsNumber++" class="quantity-change">+</button>
            </div>

            <div>Детские {{ ticket.priceChild }} sum</div>
            <div class="types-tickets">
              <button @click="ticket.childTicketsNumber--" class="quantity-change">-</button>
              <input type="number" v-model="ticket.childTicketsNumber" min="0">
              <button @click="ticket.childTicketsNumber++" class="quantity-change">+</button>
            </div>
          </div>
        </div>
    </v-expansion-panel-text>
  </v-expansion-panel>

</template>

<style scoped lang="css">
.panel {
  margin-bottom: 1em;
}

.panel-text {
  border: 1px solid grey;
  margin-top: 1em;
}

.panel-content {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 1em;
}

.panel-content-name {
  display: flex;
  align-content: center;
  justify-content: center;
}

.types-tickets {
  margin: 0 2em 0 1em;
}

.tickets-choice {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
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