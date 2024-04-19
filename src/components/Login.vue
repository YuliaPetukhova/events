<script>
export default {
  name: 'Login',
  data: () => ({
    password: '',
    passwordRules: [
      value => {
        if (value?.length > 5) return true

        return 'Пароль должен содержать от 5 символов.'
      },
    ],
    email: '',
    emailRules: [
      value => {
        if (value) return true

        return ' Введите e-mail'
      },
      value => {
        if (/.+@.+\..+/.test(value)) return true

        return 'E-mail не соответсвует типу test@test.test'
      },
    ],
  }),
}
</script>

<template>
  <v-dialog max-width="500">
    <template v-slot:activator="{ props: activatorProps }">
      <v-btn
          class="login-btn"
          v-bind="activatorProps"
          text="Войти"
          variant="flat"
      ></v-btn>
    </template>

    <template v-slot:default="{ isActive }">

      <v-card title="Вход/Регистрация">

        <v-sheet width="300">
          <v-card-actions class="close-btn">
            <v-spacer></v-spacer>
            <v-btn
                text="Закрыть"
                @click="isActive.value = false"
            ></v-btn>
          </v-card-actions>
        </v-sheet>

          <v-form fast-fail @submit.prevent>
            <v-text-field
                class="form-field"
                v-model="email"
                :rules="emailRules"
                label="E-mail"
                required
            ></v-text-field>

            <v-text-field
                class="form-field"
                v-model="password"
                :rules="passwordRules"
                label="Пароль"
            ></v-text-field>

            <v-btn class="mt-2" type="submit" block>Зарегистрироваться</v-btn>
          </v-form>
      </v-card>
    </template>
  </v-dialog>
</template>

<style>
.close-btn {
  position: fixed;
  right: 0.3rem;
  top: 0.1rem;
  padding-bottom: 1em;
}

.form-field {
  padding-bottom: 1em;
}
.login-btn {
  background-color: white;
  cursor: pointer;
  display: flex;
  font-family: Quicksand, serif;
  justify-content: center;
  margin: 0;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
}

.login-btn:hover {
  background-image: linear-gradient(rgb(201, 25, 125), rgb(255, 255, 255) 70%);
}
</style>