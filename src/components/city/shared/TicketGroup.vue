<script lang="ts">
import {defineComponent} from "vue";
import BottomButton from "@/components/cart/BottomButton.vue";
import {TashkentTickets} from "@/data/TashkentTickets.ts";
import TicketPage from "@/components/ticket/TicketPage.vue";
import TicketChoice from "@/components/sharedAll/TicketChoice.vue"

export default defineComponent({
  components: {TicketPage, BottomButton, TicketChoice},
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

        <TicketChoice :ticket.sync="ticket"></TicketChoice>
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