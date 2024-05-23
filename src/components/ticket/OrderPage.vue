<script lang="ts">
import TicketGroup from "../../components/city/shared/TicketGroup.vue";
import BottomButton from "@/components/cart/BottomButton.vue";
import {defineComponent} from "vue";
import {useTicketStore} from "@/stores/TicketStore.ts";
import ticketGroup from "@/components/city/shared/TicketGroup.vue";

// export default {
//   data() {
//     return {
//       SamarkandTickets,
//       TashkentTickets
//     }
//   },
//   components: {BottomButton, TicketGroup},
// }

export default defineComponent({
  computed: {
    ticketGroup() {
      return ticketGroup
    }
  },
  components: {TicketGroup, BottomButton},
  setup() {
    return {
      useTicketStore: useTicketStore(),
    };
  },
});

</script>

<template>
  <div class="container">
    <h1 class="title">Выбранные билеты</h1>
    <v-card-text class="all-tickets">
      <div v-for="(city, index) in useTicketStore.getters.filteredTickets(useTicketStore)">
        <h2 class="title">Город: {{ city.name }}</h2>

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

    <BottomButton></BottomButton>

  </div>
</template>

<style scoped lang="css">
.container {
  color: white;
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
  border: 1px solid #ffffff;
  background-color: #2b413d;
}

.item-name {
  display: block;
  box-sizing: border-box;
  width: 200px;
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
  border: 1px solid #ffffff;
}

input {
  outline: none;
  color: #FFFFFF;
  border: 1px solid #ffffff;
  width: 3rem;
}

.total-amount {
  text-align: end;
  background-color: #2b413d;
  margin-top: 1em;
  font-size: 20px;
}
</style>
