import {createWebHistory, createRouter, Router} from 'vue-router'
import HomePage from "../components/HomePage.vue";
import SamarkandMainPage from "../components/city/Samarkand/MainPage.vue";
import TashkentMainPage from "../components/city/Tashkent/MainPage.vue";
import BukharaMainPage from "../components/city/Bukhara/MainPage.vue";
import KhivaMainPage from "../components/city/Khiva/MainPage.vue";
import TicketPage from "../components/ticket/TicketPage.vue";
import {useUserStore} from "../stores/UserStore";

const routes = [
    {
        path: '/',
        component: HomePage,
        name: 'HomePage',
    },
    {
        path: '/tickets',
        name: 'TicketPage',
        meta: {isLogged: true},
        component: () =>
            import("../components/ticket/TicketPage.vue"),
    },
    {
        path: '/order',
        name: 'Order',
        component: () =>
            import("../components/ticket/OrderPage.vue"),
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
    {
        path: '/bukhara',
        component: BukharaMainPage,
        name: 'Bukhara',
    },
    {
        path: '/khiva',
        component: KhivaMainPage,
        name: 'Khiva',
    },
]

const router: Router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router;

router.beforeEach((to, from, next) => {
    if (to.matched.some((record) => record.meta.isLogged)) {
        if (!useUserStore().getters.isAuthenticated()) {
            next({name: 'HomePage'});
        } else {
            next();
        }
    } else {
        next();
    }
});

// function isAuthenticated() {
//     const accessToken = sessionStorage.getItem('loginUser'); // Получение токена из localStorage
//     return !!accessToken;
// }
