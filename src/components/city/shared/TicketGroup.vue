<script lang="ts">

// import {ITicketGroup} from "@/models/ITicketGroup.ts";

// import {defineComponent} from "vue";
// import {useTicketStore} from "@/stores/TicketStore.ts";

// export default defineComponent({
//   name: 'TicketComponent',
  // props: {
  //   tickets: Array,
  // },
//   setup() {
//     const ticketStore = useTicketStore();
//
//     return {
//       tickets: ticketStore.tickets,
//     };
//   },
// });

import {defineComponent} from "vue";
import BottomButton from "@/components/cart/BottomButton.vue";
import {useTicketStore} from "@/stores/TicketStore.ts";
import {TashkentTickets} from "@/data/TashkentTickets.ts";

// export default {
//   props: {
//     tickets: Array,
//   },
//   data() {
//     return {};
//   },
// };

export default defineComponent({
  components: { BottomButton},
  name: 'TicketComponent',
  props: {
    tickets: Array,
  },
  // setup() {
  //   const ticketStore = useTicketStore();
  //
  //   return {
  //     tickets: ticketStore.tashkent.tickets,
  //   };
  // },
  data() {
    return {
      TashkentTickets,
    };
  },
});
</script>

<template>

<!--  <v-expansion-panel
          class="panel"
          :title="itemList.name"
          v-for="(itemList, index) in tickets">-->

  <v-expansion-panel
      class="panel"
      :title="ticketGroup.name"
      v-for="ticketGroup in tickets"
      :key="ticketGroup.name">

<!--    <v-expansion-panel-text
          class="panel-text"
          v-for="(ticket, ticketsIndex) in itemList.tickets"
          :key="ticketsIndex">-->
    <v-expansion-panel-text
        class="panel-text"
        v-for="ticket in ticketGroup.tickets"
        :key="ticket.name">

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