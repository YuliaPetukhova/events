<script lang="ts">
export default {
  methods: {
    updateActivePlan(e: any) {
      this.selectedButton = e.target.value
    },
    isActive(id: number): any {
      return +this.selectedButton === id;
    },
  },
  data: () => ({
    selectedButton: 1,
    buttons: [
      {
        id: 1,
        icon: require("/public/assets/china.png"),
        title: "China",
      },
      {
        id: 2,
        icon: require("/public/assets/eng.png"),
        title: "English",
      },
      {
        id: 3,
        icon: require("/public/assets/korean.png"),
        title: "Korean",
      },
      {
        id: 4,
        icon: require("/public/assets/uzb.png"),
        title: "UZ",
      },
      {
        id: 5,
        icon: require("/public/assets/russia.png"),
        title: "RU",
      },
      {
        id: 6,
        icon: require("/public/assets/japan.png"),
        title: "Japan",
      },
      {
        id: 7,
        icon: require("/public/assets/german.png"),
        title: "German",
      },
    ],
  }),
};
</script>

<template>
  <div class="lang">
    <div class="lang-item" v-for="(option, idx) in buttons" :key="`input-${idx}`">
      <input
          :id="`input-${idx}`"
          type="radio"
          name="iman"
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

<style scoped>
.v-radio-label {
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 3rem;
  border-radius: 3em 0;
  border: 1px solid rgba(44, 62, 80, 0.4);
  transition: all 200ms;
  background: rgb(255, 255, 255);
  color: rgb(44, 62, 80);
}

.v-radio-active {
  box-shadow: 3px 3px 5px 0 rgba(1, 11, 21, 0.9);
}

.lang {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 1em;
}

.lang-img {
  width: 2em;
}

.lang-item {
  padding-right: 1rem;
}

input[type="radio" i] {
  display: none;
}
</style>