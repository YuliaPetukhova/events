<script lang="ts">
import ticketGroup from "@/components/city/shared/TicketGroup.vue";
import {defineComponent} from 'vue';
import {ITicket} from "@/models/ITicket";

export default defineComponent({
  props: {
    ticket: Object as ITicket,
  },

  computed: {
    ticketGroup() {
      return ticketGroup;
    },
  },

  methods: {
    decrementAdultTickets() {
      if (this.ticket.adultTicketsNumber > 0) {
        this.ticket.adultTicketsNumber--;
      }
    },
    incrementAdultTickets() {
      this.ticket.adultTicketsNumber++;
    },
    decrementChildTickets() {
      if (this.ticket.childTicketsNumber > 0) {
        this.ticket.childTicketsNumber--;
      }
    },
    incrementChildTickets() {
      this.ticket.childTicketsNumber++;
    },
  },
});
</script>

<template>
  <div class="tickets-choice">
    <div>Взрослые {{ ticket.priceAdult }} sum</div>
    <div class="tickets-choice">

      <div class="types-tickets">
        <button @click="decrementAdultTickets" class="quantity-change">-</button>
        <input type="number" v-model="ticket.adultTicketsNumber" min="0">
        <button @click="incrementAdultTickets" class="quantity-change">+</button>
      </div>
    </div>

    <div>Детские {{ ticket.priceChild }} sum</div>
    <div class="tickets-choice">

      <div class="types-tickets">
        <button @click="decrementChildTickets" class="quantity-change">-</button>
        <input type="number" v-model="ticket.childTicketsNumber" min="0">
        <button @click="incrementChildTickets" class="quantity-change">+</button>
      </div>
    </div>
  </div>

</template>

<style scoped lang="css">
.tickets-choice {
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
  flex-direction: row;
}

.types-tickets {
  margin: 0 0 0 1em;
}

.quantity-change {
  margin: 0.5em;
  cursor: pointer;
  width: 30px;
  height: 30px;
  border-radius: 20px;
  position: relative;
  border: 1px solid rgba(0, 0, 0, 0.99);
}

input {
  outline: none;
  border: 1px solid rgba(0, 0, 0, 0.99);
  width: 3rem;
  color: rgba(0, 0, 0, 0.99);
}
</style>