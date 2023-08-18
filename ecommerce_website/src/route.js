import Home from "./components/Home.vue";
import About from "./components/About.vue"
import AddCategory from "./components/Category/AddCategory.vue"


import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    name: "Home",
    component: Home,
    path: "/",
  },
  {
    name: "About",
    component: About,
    path: "/about",
  },
  {
    name: "AddCategory",
    component: AddCategory,
    path: "/admin/category/add",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;