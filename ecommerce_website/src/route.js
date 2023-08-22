import Home from "./components/Home.vue";
import About from "./components/About.vue";
import AddCategory from "./components/Category/AddCategory.vue";
import CategoryComponent from "./components/Category/Category.vue";
import AdminComponent from "./components/Admin.vue";
import ProductComponent from "./components/Products/Product.vue";
import AddProduct from "./components/Products/AddProduct.vue";
import EditCategory from "./components/Category/EditCategory.vue"
import ProductDetails from "./components/Products/ProductDetails.vue"


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
  {
    name: "AdminComponent",
    component: AdminComponent,
    path: "/admin",
  },
  {
    name: "ProductComponent",
    component: ProductComponent,
    path: "/admin/product",
  },
  {
    name: "AddProduct",
    component: AddProduct,
    path: "/admin/product/add",
  },
  {
    name: "EditCategory",
    component: EditCategory,
    path: "/admin/category/edit/:categoryId",
  },
  // show details of product
  {
    name:"ProductDetails",
    component:ProductDetails,
    path:"/product/show/:id"
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
