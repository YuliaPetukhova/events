<script lang='ts'>
import {defineComponent} from 'vue'
import {CalendarOptions, EventApi, EventInput} from '@fullcalendar/core'
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import {INITIAL_EVENTS, createEventId} from '../event-utils'
import SelectLanguage from "../components/SelectLanguage.vue";

export default defineComponent({
  components: {
    SelectLanguage,
    FullCalendar,
  },
  data() {
    return {
      calendarOptions: {
        plugins: [
          dayGridPlugin,
          timeGridPlugin,
          interactionPlugin
        ],
        headerToolbar: {
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay'
        },
        initialView: 'dayGridMonth',
        events: INITIAL_EVENTS as EventInput[],
        selectable: true,
        select: this.handleDateSelect,
      } as CalendarOptions,
    }
  },
  methods: {
    handleDateSelect(model: EventApi) {
      let dateStartObj: Date = model.start!;
      let startMonth: string = ("0" + (dateStartObj.getMonth() + 1)).slice(-2);
      let startDate: string = ("0" + (dateStartObj.getDate())).slice(-2);
      let dateStartFormat: string = dateStartObj.getFullYear() + "-" + startMonth + "-" + startDate;

      const newEventIndex: number = (this.calendarOptions.events as EventInput[])
          .findIndex((e: EventInput) => e.start === dateStartFormat && e.isNew);

      if (newEventIndex > 0) {
        (this.calendarOptions.events as EventInput[]).splice(newEventIndex, 1);
      } else {
        (this.calendarOptions.events as EventInput[]).push({
          id: createEventId(),
          iconUrl: "japan.png",
          isNew: true,
          start: dateStartFormat,
          title: "Шоу",
          progress: '200$/2200$'
        });
      }
    },
    getSelectedEvents() {
      console.log('new события:',
          (this.calendarOptions.events as EventInput[]).filter(event => event.isNew));
    },
  },
})
</script>

<template>
  <div class='demo-app'>
    <div class='demo-app-main'>
      <select-language class="select-lang"></select-language>
      <FullCalendar
          class='demo-app-calendar'
          :options='calendarOptions'
      >
        <template v-slot:eventContent='arg'>
          <img class="icon" v-bind:src="'/assets/' + arg.event.extendedProps.iconUrl" alt="ipc">
          <i>{{ arg.event.title }}<br></i>
          <i>{{ arg.event.extendedProps.progress }}<br></i>
        </template>
      </FullCalendar>
    </div>
  </div>

  <div class="btn-pay">
    <button type="submit" @click="getSelectedEvents" class="pay-show">Оплатить шоу</button>
  </div>

</template>

<style lang='css'>

.icon {
  width: 2em;
  height: 2em;
  margin-right: 1em;
}

.select-lang {
  padding-top: 2em;
}

.demo-app {
  display: flex;
  min-height: 100%;
  font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
  font-size: 14px;
}

.demo-app-main {
  flex-grow: 1;
  padding: 1em;
}

.demo-app-calendar {
  cursor: pointer;
}

.btn-pay {
  display: flex;
  justify-content: center;
  padding: 1em 0;
}

.pay-show {
  background-color: initial;
  background-image: linear-gradient(rgba(201, 25, 125, 0.44), rgb(201, 25, 125) 50%);
  border-radius: 42px;
  border-width: 0;
  box-shadow: rgba(119, 19, 75, 0.93) 0 2px 2px, rgba(201, 25, 125, 0.44) 0 8px 12px;
  color: #FFFFFF!important;
  cursor: pointer;
  display: flex;
  font-family: Quicksand, sans-serif;
  font-size: 18px;
  font-weight: 700;
  justify-content: center;
  letter-spacing: .04em;
  line-height: 16px;
  margin: 0;
  padding: 18px 18px;
  text-decoration: none;
  text-shadow: rgba(255, 255, 255, 0.4) 0 0 4px, rgba(255, 255, 255, 0.2) 0 0 12px, rgba(57, 31, 91, 0.6) 1px 1px 4px, rgba(57, 31, 91, 0.32) 4px 4px 16px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
}

.pay-show:hover {
  background-image: linear-gradient(rgba(201, 25, 125, 0.44), rgb(73, 6, 44) 50%);
}
</style>