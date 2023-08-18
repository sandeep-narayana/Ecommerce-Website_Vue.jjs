import Home from "./components/Home.vue";
import About from "./components/About.vue"
import AddCategory from "./components/Category/AddCategory.vue"
import CategoryComponent from "./components/Category/Category.vue"


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
  {
    name: "CategoryComponent",
    component: CategoryComponent,
    path: "/admin/category",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;