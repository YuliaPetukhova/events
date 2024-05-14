<script lang="ts">
import ShowCalendar from "../../components/Samarkand/ShowCalendar.vue"
import {SamarkandTickets} from "../../data/SamarkandTickets";

export default {
  components: {ShowCalendar},
  data() {
    return {
      SamarkandTickets,
    };
  },

};
</script>

<template>
  <div class="container">
    <h1 class="title">Билеты на все достопримечательности Самарканда</h1>
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

      <v-expansion-panel :title="itemList.name" v-for="(itemList, index) in SamarkandTickets.data">
        <v-expansion-panel-text class="panel-text" v-for="(ticket, ticketsIndex) in itemList.tickets">
          <div class="panel-content">
            {{ticket.name}}
            {{ticket.priceAdult}} sum
            <div>
              Взрослые
              <button @click="ticket.adultTicketsNumber--">-</button>
              <input type="number" v-model="ticket.adultTicketsNumber" min="0">
              <button @click="ticket.adultTicketsNumber++" class="counter">+</button>
            </div>
            {{ticket.priceChild}} sum
            <div>
              Детские
              <button @click="ticket.childTicketsNumber--">-</button>
              <input type="number" v-model="ticket.childTicketsNumber" min="0">
              <button @click="ticket.childTicketsNumber++" class="counter">+</button>
            </div>
          </div>

        </v-expansion-panel-text>

      </v-expansion-panel>

    </v-expansion-panels>

  </div>
</template>

<style scoped lang="css">
.container {
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  background: url("/assets/лазер.jpg") no-repeat center center fixed;
  background-size: cover;
}

.title {
  margin: 1em 0;
  color: #ffffff;
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

input {
  outline: none;
  border: 1px solid black;
  margin-left: 1em;
  width: 3rem;
}

.panel {
  margin-bottom: 1em;
}

.counter {
  margin: 1em;
}

@media (min-width: 768px) {
  .calendar {
    margin: 3em 0 0 0;
    color: rgba(0, 0, 0, 0.99);
  }
}
</style>