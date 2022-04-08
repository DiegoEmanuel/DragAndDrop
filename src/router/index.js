import { createRouter, createWebHashHistory } from "vue-router";
import SingIn from "../views/SingIn.vue";
import ListLeads from "../views/ListLeads.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: SingIn,
  },
  {
    path: "/cadLeads",
    name: "cadLeads",
    component: () => import("../views/cadLeads.vue"),
  },
  {
    path: "/ListLeads",
    name: "list",
    component: ListLeads,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
