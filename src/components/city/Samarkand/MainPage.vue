<script lang="ts">
import ShowCalendar from "./ShowCalendar.vue"
import {SamarkandTickets} from "../../../data/SamarkandTickets";
import TicketGroup from "@/components/city/shared/TicketGroup.vue";
import BottomButton from "@/components/cart/BottomButton.vue";

export default {
  components: {BottomButton, TicketGroup, ShowCalendar},
  data() {
    return {
      SamarkandTickets,
    };
  },
};
</script>

<template>
  <div class="container">
    <h1 class="title">Билеты на достопримечательности Самарканда</h1>
    <v-expansion-panels multiple>

      <v-expansion-panel
          title="Лазерное шоу на плoщади Регистан"
          class="panel"
      >
        <v-expansion-panel-text>
          Лазерное шоу на плoщади Регистан в Самарканде ‒ это уникальная уcлуга,
          которая предлагает посетителям возможность окунуться в атмосферу древнего города и насладиться его
          великолепием. Лазерное шоу ‒ это цветомузыкальная подсветка и проекции на
          фасадах зданий и архитектурных сооружений площади.
          Музыкальное cопровождение, соответствующее каждому моменту шоу, создает aтмосферy волшебства.
          <div class="calendar">
            <Show-Calendar></Show-Calendar>
          </div>
        </v-expansion-panel-text>
      </v-expansion-panel>

      <v-expansion-panel class="panel" :title="itemList.name" v-for="(itemList, index) in SamarkandTickets.data">
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
  margin: 1em 0;
  color: #ffffff;
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

@media (min-width: 768px) {
  .calendar {
    margin: 3em 0 0 0;
    color: rgba(0, 0, 0, 0.99);
  }
}
</style>