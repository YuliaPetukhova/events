<script lang="ts">
import {mergeProps} from 'vue'
import router from '../../router/router'
import Login from "@/components/auth/Login.vue";
import {useUserStore} from "@/stores/UserStore.ts";

export default {
  components: {Login},
  setup() {
    const userStore = useUserStore();

    const logout = () => {
      userStore.logout();
      router.push('/');
    };
    return {
      logout,
      useUserStore: useUserStore(),
    };
  },

  data: () => ({
    items: [
      {title: 'Ташкент', url: '/tashkent'},
      {title: 'Самарканд', url: '/samarkand'},
      {title: 'Бухара', url: '/bukhara'},
      {title: 'Хива', url: '/khiva'},
    ],
  }),

  computed: {
    isAuthenticated() {
      const userStore = useUserStore();
      return userStore.getters.isAuthenticated();
    },
  },

  methods: {
    useUserStore,
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
                  v-bind="menu"
              >
                Города
              </v-btn>
              <v-btn
                  class="ticket-btn"
                  v-if="isAuthenticated"
                  :to="{name:'TicketPage'}"
              >
                Билеты
              </v-btn>
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

    <div v-if="!isAuthenticated">
      <Login/>
    </div>

    <v-btn @click="logout" v-if="isAuthenticated" class="logout">
      Выход
    </v-btn>
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

.logout {
  cursor: pointer;
  background-color: rgba(128, 128, 128, 0.66);
  color: white;
}
</style>