<script lang="ts">
export default {
  data: () => ({
    selectedButton: 1 as number,
    buttons: [
      {
        id: 1,
        icon: new URL("/public/assets/china.png", import.meta.url).href,
        title: "China",
      },
      {
        id: 2,
        icon: new URL("/public/assets/eng.png", import.meta.url).href,
        title: "English",
      },
      {
        id: 3,
        icon: new URL("/public/assets/korean.png", import.meta.url).href,
        title: "Korean",
      },
      {
        id: 4,
        icon: new URL("/public/assets/uzb.png", import.meta.url).href,
        title: "UZ",
      },
      {
        id: 5,
        icon: new URL("/public/assets/russia.png", import.meta.url).href,
        title: "RU",
      },
      {
        id: 6,
        icon: new URL("/public/assets/japan.png", import.meta.url).href,
        title: "Japan",
      },
      {
        id: 7,
        icon: new URL("/public/assets/german.png", import.meta.url).href,
        title: "German",
      },
    ],
  }),

  methods: {
    updateActivePlan(e: Event): void {
      this.selectedButton = +(<HTMLInputElement>e.target).value;
    },
    isActive(id: number): boolean {
      return this.selectedButton === id;
    },
  },
};
</script>

<template>
  <div class="select-language">Выбор языка шоу</div>
  <div class="lang">
    <div class="lang-item" v-for="(option, idx) in buttons" :key="`input-${idx}`">
      <input
          :id="`input-${idx}`"
          type="radio"
          name="button-language"
          :value="option.id"
          :checked="isActive(option.id)"
          @input="updateActivePlan"
      />
      <label
          :for="`input-${idx}`"
          class="v-radio-label"
          :class="isActive(option.id) ? 'v-radio-active' : ''"
      >
        <img :src="option.icon" class="lang-img" alt="icon"/>
      </label>
    </div>
  </div>
</template>

<style scoped lang='css'>
.select-language {
  font-size: 20px;
}
.v-radio-label {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 6rem;
  height: 5rem;
  border-radius: 2em;
  border: 1px solid rgba(111, 140, 169, 0.5);
  transition: all 200ms;
  background: rgb(255, 255, 255);
  color: rgb(44, 62, 80);
}

.v-radio-active {
  cursor: pointer;
  box-shadow: 3px 3px 15px 15px rgba(201, 25, 188, 0.21);
  will-change: filter;
  transition: filter 300ms;
}

.lang {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
}

.lang-img {
  width: 3em;
}

.lang-item {
  padding: 1rem 0;
}

input[type="radio" i] {
  display: none;
}
</style>