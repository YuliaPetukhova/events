<script>
import * as vm from "vm";
import axios from "axios";
import {useUserStore} from "@/stores/UserStore.ts";

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

        return "Пароль должен содержать не менее 5 символов."
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

  computed: {
    toggleMessage: function () {
      return this.isLogged ? this.stateObj.register.message : this.stateObj.login.message
    }
  },

  methods: {
    useUserStore,
    async login() {
      this.loading = true;

      await useUserStore().login({
        email: this.email,
        password: this.password,
      });

      this.isLogged = true;
      this.loading = false;
      this.$router.push('/tickets');
    },

    async register() {

      if (this.password === this.confirmPassword) {
        await useUserStore().register({
          email: this.email,
          password: this.password,
        });
        this.isLogged = false;
        this.errorMessage = "";
        this.$refs.form.reset();
      } else {
        this.errorMessage = "Пароли не совпадают"
      }
    }
  },
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
          <div class="red-text"> {{ errorMessage }}</div>

          <v-btn
              :loading="loading"
              class="mt-2 login-btn"
              type="submit"
              block
              value="log in"
          >
            {{ isLogged ? stateObj.register.name : stateObj.login.name }}
          </v-btn>
          <div class="grey--text mt-4 auth" @click="isLogged = !isLogged;">
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
  background-color: #38c56e !important;
  color: #FFFFFF !important;
  font-family: 'Steppe-ExtraBold', sans-serif;
}

.auth {
  cursor: pointer;
}
</style>