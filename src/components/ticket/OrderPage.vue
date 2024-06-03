<script lang="ts">
import TicketGroup from "../../components/city/shared/TicketGroup.vue";
import BottomButton from "@/components/cart/BottomButton.vue";
import {defineComponent} from "vue";
import {useTicketStore} from "@/stores/TicketStore.ts";
import ticketGroup from "@/components/city/shared/TicketGroup.vue";
import TicketChoice from "@/components/sharedAll/TicketChoice.vue";

export default defineComponent({
  components: {TicketChoice, TicketGroup, BottomButton},

  setup() {
    return {
      useTicketStore: useTicketStore(),
    };
  },

  computed: {
    ticketGroup() {
      return ticketGroup;
    },
  },
});

</script>

<template>
  <div class="container">
    <h1 class="title">Выбранные билеты</h1>
    <v-card-text class="all-tickets">
      <div v-for="(city, index) in useTicketStore.getters.filteredTickets(useTicketStore)" :key="index">
        <h2 class="title">Город: {{ city.name }}</h2>

        <div v-for="ticketGroup in city.tickets">

          <div v-for="ticket in ticketGroup.tickets">

            <div v-if="ticket.adultTicketsNumber > 0 || ticket.childTicketsNumber > 0">

              <div class="item">
                <div class="item-name">
                  {{ ticket.name }}
                </div>

                <div>
                  <TicketChoice :ticket="ticket"></TicketChoice>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </v-card-text>

    <BottomButton/>

  </div>
  <div class="total-amount">
    <p>Общая сумма: {{ totalAmount }} sum</p>
  </div>
</template>

<style scoped lang="css">
.container {
  color: rgb(255, 255, 255);
}

h1 {
  margin-bottom: 1em;
}

.all-tickets {
  display: block;
  max-width: 600px;
  box-sizing: border-box;
}

.title {
  font-size: 20px;
}

.item {
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0.5em 0;
  border: 1px solid rgb(255, 255, 255);
  background-color: #3ca48c;
  box-shadow: 0 2px 4px rgb(255, 255, 255);
}

.item-name {
  display: block;
  box-sizing: border-box;
  width: 200px;
  height: auto;
}

.tickets-choice {
  flex-wrap: wrap;
  justify-content: flex-end;
  align-items: center;
  box-sizing: border-box;
  flex-direction: row;
}

.total-amount {
  text-align: end;
  position: fixed;
  bottom: 0;
  right: 10em;
  background-color: #2b413d;
  margin-right: 1em;
  margin-bottom: 1em;
  font-size: 20px;
}
</style>
