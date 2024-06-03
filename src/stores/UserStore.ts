import {defineStore} from 'pinia'
import axios from 'axios';
import {IUser} from "../models/IUser";

export const useUserStore = defineStore('user', {
    state: () => ({
        activeUser: sessionStorage.getItem('loginUser'),
        loading: false,

        getters: {
            isAuthenticated: () => {
                return !!useUserStore().activeUser
            },
        },
    }),

    actions: {
        async login(user: IUser) {
            try {
                const response
                    = await axios.post<IUser>('http://localhost/api/v1/family-auth/login', user);
                this.activeUser = response.data as IUser;
                window.sessionStorage.setItem('loginUser', JSON.stringify(response.data));
            } catch (error: any) {
                alert('Что-то пошло не так с вашим запросом. ' +
                    'Пожалуйста, убедитесь, что вы правильно заполнили все обязательные поля.');
                this.loading = false;
            }

        },

        logout() {
            this.activeUser = null;
            sessionStorage.removeItem('loginUser')
            useUserStore().$reset();
        },

        async register(user: IUser) {
            try {
                await axios.post<IUser>('http://localhost/api/v1/family-auth/registration', user);
            } catch (error: any) {
                alert('Извините, на сервере произошла внутренняя ошибка.' +
                    'Мы уже работаем над её устранением.');
            }
        },
    },
});
