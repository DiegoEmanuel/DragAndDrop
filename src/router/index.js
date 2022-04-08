import { createRouter, createWebHashHistory } from "vue-router";
import SingIn from "../views/SingIn.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: SingIn,
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
