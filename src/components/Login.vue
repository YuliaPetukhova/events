<script>
import * as vm from "vm";
import axios from "axios";

export default {
  name: 'Login',
  data: () => ({
    urlLogin: 'http://localhost/api/v1/family-auth/login',
    urlRegistration: 'http://localhost/api/v1/family-auth/registration',
    loading: false,
    rules: [value => vm.checkApi(value)],
    timeout: null,
    isLogged: false,
    stateObj: {
      register: {
        name: "Регистрация",
        message: "У меня уже есть аккаунт. Войти."
      },
      login: {
        name: "Войти",
        message: "Регистрация"
      }
    },
    errorMessage: "",
    confirmPassword: "",
    password: "",
    passwordRules: [
      value => {
        if (value?.length > 5) return true

        return "Пароль должен содержать от 5 символов."
      },
    ],
    email: "",
    emailRules: [
      value => {
        if (value) return true

        return "Введите e-mail"
      },
      value => {
        if (/.+@.+\..+/.test(value)) return true

        return "E-mail не соответсвует типу test@test.test"
      },
    ],

  }),
  methods: {
    async login() {
      // this.loading = true;

      // await axios.post(this.urlLogin, {
      //   email: this.email,
      //   password: this.password,
      // }).then(({data}) => {
      //       this.user = data.user;
      //       this.isRegister = true;
      //       window.localStorage.setItem('loginUser', JSON.stringify(this.user));
      //       this.loading = false;
      //       this.$refs.form.reset();
      //       this.$router.push('/tickets');
      //     }
      // );

      try {
        // Отправка запроса на сервер
        const response = await axios.post(this.urlLogin, {
          email: this.email,
          password: this.password,
        });

        // Обработка успешного ответа
        const {data} = response;
        this.user = data.user;
        this.isLogged = true;
        window.localStorage.setItem('loginUser', JSON.stringify(this.user));
        this.loading = false;
        this.$refs.form.reset();
        this.$router.push('/tickets');
      } catch (error) {
        // Обработка ошибки
        console.error('Ошибка входа:', error.message);
        // Здесь вы можете показать сообщение об ошибке пользователю
        // Например: this.errorMessage = 'Неверный логин или пароль';
      }
    },

  register() {
    const user = {
      email: this.email,
      password: this.password,
    };

    if (this.password === this.confirmPassword) {
      this.isLogged = false;
      this.errorMessage = "";
      this.$refs.form.reset();
      axios.post(this.urlRegistration, user);
    } else {
      this.errorMessage = "Пароли не совпадают"
    }
  }
}
,
computed: {
  toggleMessage: function () {
    return this.isLogged ? this.stateObj.register.message : this.stateObj.login.message
  }
}
,

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

        <v-form ref="form" fast-fail validate-on="submit lazy" @submit.prevent="isLogged ? register() : login()">
          <v-text-field
              class="form-field"
              v-model="email"
              name="email"
              type="text"
              :rules="emailRules"
              label="E-mail"
              required
          ></v-text-field>

          <v-text-field
              class="form-field"
              v-model="password"
              name="password"
              type="password"
              :rules="passwordRules"
              label="Пароль"
              required
          ></v-text-field>

          <v-text-field
              v-if="isLogged"
              v-model="confirmPassword"
              name="confirmPassword"
              label="Повторите пароль"
              type="password"
              placeholder="Введите пароль"
              required
          ></v-text-field>
          <div class="red--text"> {{ errorMessage }}</div>

          <v-btn
              :loading="loading"
              class="mt-2"
              type="submit"
              block
              value="log in"
          >
            {{ isLogged ? stateObj.register.name : stateObj.login.name }}
          </v-btn>
          <div class="grey--text mt-4" @click="isLogged = !isLogged;">
            {{ toggleMessage }}
          </div>

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