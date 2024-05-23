<script lang="ts">
</script>

<template>
  <div class="main-content">
    <div class="container-content">
      <div class="main-info">
        <h1 class="main-title">Путешествие в Узбекистан: <br>Билеты на достопримечательности и уникальные впечатления
        </h1>
        <p class="main-text">
          Откройте для себя магию Узбекистана<br> через наши билеты на достопримечательности!<br>
          Путешествуйте во времени, гуляя по узким улочкам Старого города Хивы, исследуйте древние мавзолеи и мечети
          Бухары, наслаждайтесь великолепием архитектуры Самарканда и не забудьте заглянуть в столицу - город Ташкент!
        </p>
      </div>
      <div class="main-image">
        <img src="/assets/monument-uz.png" alt="monument">
      </div>
    </div>
  </div>
</template>

<style scoped lang="css">
.container-content {
  display: flex;
  max-width: 1200px;
  margin: 2em 2em;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
}

.main-content {
  box-sizing: border-box;
  padding-top: 10px;
  padding-bottom: 10px;
  text-align: left;
}

.main-info {
  margin: 0 auto;
  max-width: 811px;
}

.main-title {
  font-family: 'Steppe-ExtraBold', sans-serif;
  font-size: 40px;
  line-height: 100%;
  margin-bottom: 30px;
}

.main-text {
  max-width: 697px;
  font-size: 18px;
  line-height: 130%;
  margin-bottom: 40px;
}

.main-image {
  z-index: 1;
  margin: 1em 1em;
}

.main-image img {
  position: relative;
  padding-left: 1em;
  transition: transform 0.3s ease;
}

.main-image img:hover {
  transform: scale(1.1);
}
</style>