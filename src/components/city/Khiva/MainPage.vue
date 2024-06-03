<script lang="ts">
import BottomButton from "@/components/cart/BottomButton.vue";
import TicketGroup from "@/components/city/shared/TicketGroup.vue";
import {useTicketStore} from '@/stores/TicketStore'
import {defineComponent} from "vue";

export default defineComponent({
  components: {TicketGroup, BottomButton},

  setup() {
    const khivaTickets = useTicketStore().data.find((city: any) => city.name === 'khiva');

    return {
      tickets: khivaTickets?.tickets,
    };
  },
});
</script>

<template>

  <div class="container">
    <h1 class="title">Билеты на достопримечательности Хивы</h1>
    <v-expansion-panels multiple>

      <TicketGroup :tickets.sync="tickets"></TicketGroup>

    </v-expansion-panels>

    <BottomButton></BottomButton>
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
  font-size: 25px;
}

input {
  outline: none;
  border: 1px solid black;
  margin-left: 1em;
  width: 3rem;
}
</style>