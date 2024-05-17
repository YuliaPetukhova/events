<script lang="ts">
import TicketGroup from "../../components/city/shared/TicketGroup.vue";
import {SamarkandTickets} from "../../data/SamarkandTickets";
import {TashkentTickets} from "../../data/TashkentTickets";

export default {
  data() {
    return {
      SamarkandTickets,
      TashkentTickets
    }
  },
  components: {TicketGroup},
}
</script>

<template>
  <div class="container">
    <h1>Выбранные билеты</h1>
    <v-expansion-panels multiple>
      <TicketGroup :tickets="TashkentTickets.data"></TicketGroup>
    </v-expansion-panels>
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
