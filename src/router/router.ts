import {createWebHistory, createRouter, Router} from 'vue-router'
import HomePage from "../components/HomePage.vue";
import TicketPage from "../components/TicketPage.vue";
import login from "../components/Login.vue";
import SamarkandMainPage from "../components/city/Samarkand/MainPage.vue";
import TashkentMainPage from "../components/city/Tashkent/MainPage.vue";

const routes = [
    {
        path: '/',
        component: HomePage,
        name: 'HomePage',
        meta: { isLogged: false },
    },
    {
        path: '/tickets',
        component: TicketPage,
        name: 'Login',
        meta: { isLogged: true },
    },
    {
        path: '/samarkand',
        component: SamarkandMainPage,
        name: 'Samarkand',
    },
    {
        path: '/tashkent',
        component: TashkentMainPage,
        name: 'Tashkent',
    },
]

const router: Router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router;
// router.js
router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.isLogged)) {
        // этот путь требует авторизации, проверяем залогинен ли
        // пользователь, и если нет, перенаправляем на страницу логина
        if (!login.methods.login()) {
            next({
                path: '/',
            })
        } else {
            next()
        }
    } else {
        next() // всегда так или иначе нужно вызвать next()!
    }
})


// function checkUserAuthentication() {
//     // Здесь вы можете реализовать свою собственную логику проверки аутентификации
//     // Например, проверка наличия токена доступа или проверка сессии пользователя
//
//     // Предположим, что у вас есть некий токен доступа
//     const accessToken = localStorage.getItem('access_token'); // Получение токена из localStorage
//
//     return !!accessToken;
// }