import { createRouter, createWebHashHistory } from "vue-router";
import SingIn from "../views/SingIn.vue";
import ListLeads from "../views/ListLead.vue";
import CreateLead from "../views/CreateLead.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: SingIn,
  },
  {
    path: "/createlead",
    name: "CreateLead",
    component: CreateLead,
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
