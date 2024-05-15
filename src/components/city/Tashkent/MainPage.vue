<script lang="ts">
import {TashkentTickets} from "../../../data/TashkentTickets";
import BottomButton from "@/components/cart/BottomButton.vue";
import TicketGroup from "@/components/city/shared/TicketGroup.vue";

export default {
  components: {TicketGroup, BottomButton},
  data() {
    return {
      TashkentTickets,
    };
  },
};
</script>

<template>
  <div class="container">
    <h1 class="title">Билеты на достопримечательности Ташкента</h1>
    <v-expansion-panels multiple>

      <v-expansion-panel class="panel" :title="itemList.name" v-for="(itemList, index) in TashkentTickets.data">
        <TicketGroup :tickets="itemList.tickets"></TicketGroup>
      </v-expansion-panel>

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
}

input {
  outline: none;
  border: 1px solid black;
  margin-left: 1em;
  width: 3rem;
}

.panel {
  margin-bottom: 1em;
}
</style>