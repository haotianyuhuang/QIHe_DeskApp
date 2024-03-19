import { createRouter, createWebHistory } from "vue-router";

export const router = createRouter({
    history: createWebHistory(),
    routes: [{
        path: "/",
        name: "Home",
        component: () => import("../pages/Home.vue")
    }, {
        path: "/write",
        name: "Write",
        component: () => import("../pages/Write.vue")
    }]
})

router.beforeEach((to, from, next) => {
    next()
})