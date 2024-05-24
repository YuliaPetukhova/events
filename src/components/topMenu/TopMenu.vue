<script lang="ts">
import {mergeProps} from 'vue'
import router from '../../router/router'
import Login from "@/components/auth/Login.vue";

export default {
  components: {Login},
  data: () => ({
    items: [
      {title: 'Ташкент', url: '/tashkent'},
      {title: 'Самарканд', url: '/samarkand'},
      {title: 'Бухара', url: '/bukhara'},
      {title: 'Хива', url: '/khiva'},
    ],
  }),
  methods: {
    mergeProps,
    selectSection(item) {
      switch (item.title) {
        case 'Ташкент':
          router.push(item.url)
          break
        case 'Самарканд':
          router.push(item.url)
          break
        case 'Бухара':
          router.push(item.url)
          break
        case 'Хива':
          router.push(item.url)
      }
    },
  },
}
</script>

<template>
  <div class="top-menu">

    <div>
      <v-menu>
        <template v-slot:activator="{ props: menu }">
          <v-tooltip location="top">
            <template v-slot:activator="{ props: tooltip }">
              <v-btn
                  class="city-btn"
                  v-bind="mergeProps(menu, tooltip)"
              >
                Города
              </v-btn>
              <v-btn class="ticket-btn" to="/tickets">Билеты</v-btn>
            </template>
          </v-tooltip>
        </template>
        <v-list>
          <v-list-item
              v-for="(item, index) in items"
              :key="index"
              :value="index"
              @click="selectSection(item)">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>

    <div><Login></Login></div>
  </div>
</template>

<style scoped lang="css">
.top-menu {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: space-between;
  margin: 0.5em 1em;
}

.city-btn {
  background-color: #3ca48c;
  color: white;
}

.ticket-btn {
  color: #3ca48c;
}
</style>