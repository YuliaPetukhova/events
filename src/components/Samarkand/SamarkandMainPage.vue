<script lang="ts">
import ShowCalendar from "../../components/Samarkand/ShowCalendar.vue"
import {SamarkandTickets} from "../../data/SamarkandTickets";

export default {
  components: {ShowCalendar},
  data() {
    return {
      SamarkandTickets,
      inputValues: [
        {value: 0},
      ],
      gurEmirNumber: 0,
      gurEmirNumber2: 0,
    };
  },
  methods: {
    increment() {
      this.gurEmirNumber++;
    },
    decrement() {
      if (this.gurEmirNumber > 0) {
        this.gurEmirNumber--;
      }
    },
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

      <v-expansion-panel title="Памятники">
        <v-expansion-panel-text class="panel-text" v-for="(itemList, index) in SamarkandTickets.data">
          <div class="panel-content">
            {{ itemList.name }}
            {{ itemList.priceAdult }} сум
            {{ itemList.priceChild }} сум
            <div>
              Взрослые
              <button @click="decrement()">-</button>
              <input type="number" v-model="itemList.adultTicketsNumber" min="0">
              <button @click="increment()" class="counter">+</button>
            </div>
            <div>
              Детские
              <button @click="decrement()">-</button>
              <input type="number" v-model="itemList.childTicketsNumber" min="0">
              <button @click="increment()" class="counter">+</button>
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