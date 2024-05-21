<script lang="ts">
import TicketGroup from "../../components/city/shared/TicketGroup.vue";
import BottomButton from "@/components/cart/BottomButton.vue";
import {defineComponent} from "vue";
import {useTicketStore} from "@/stores/TicketStore.ts";

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
  components: {TicketGroup, BottomButton},
  setup() {
    const ticketStore = useTicketStore();

    return {
      tickets: ticketStore.tashkent.tickets,
    };
  },
});

</script>

<template>
  <div class="container">
    <h1>Выбранные билеты</h1>
    <v-expansion-panels multiple>
<!--      <TicketGroup :tickets="TashkentTickets.data"></TicketGroup>-->
      <TicketGroup :tickets="tickets"></TicketGroup>
    </v-expansion-panels>

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
</style>
