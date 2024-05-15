<script lang="ts">
import {TashkentTickets} from "../../../data/TashkentTickets";

export default {
  props: {
    tickets: Array,
  },
  data() {
    return {
      TashkentTickets,
    };
  },
};
</script>

<template>

  <v-expansion-panel-text class="panel-text" v-for="(ticket, ticketsIndex) in tickets" :key="ticketsIndex">
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
  align-content: center;
  justify-content: space-between;
  align-items: center;
  margin: 1em;
}

.counter {
  margin: 1em;
}

input {
  outline: none;
  border: 1px solid black;
  margin-left: 1em;
  width: 3rem;
}
</style>