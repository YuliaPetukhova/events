<script lang="ts">
import {mergeProps} from 'vue'
import router from '../router/router'

export default {
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
  <div class="text-center">
    <v-menu>
      <template v-slot:activator="{ props: menu }">
        <v-tooltip location="top">
          <template v-slot:activator="{ props: tooltip }">
            <v-btn
                color="white"
                v-bind="mergeProps(menu, tooltip)"
            >
              Города
            </v-btn>
            <v-btn color="pink">Билеты</v-btn>
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
</template>

<style scoped lang="css">

</style>