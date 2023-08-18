import Home from "./components/Home.vue";
import About from "./components/About.vue"


import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    name: "Home",
    component: Home,
    path: "/home",
  },
  {
    name: "About",
    component: About,
    path: "/about",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;