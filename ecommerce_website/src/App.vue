<template>
  <Navbar :user="user" />
  <!-- first let the fetch work and then only send the category and product -->
  <router-view
    v-if="categoreis && products"
    style="min-height: 60vh"
    :baseUrl="baseUrl"
    :categoreis="categoreis"
    :products="products"
    @fetchData="fetchData"
    @updateUser="updateUser"
  />
  <!-- put a footer below router view so it will be visible to all the pages -->
  <FooterComponent />
</template>

<script>
import axios from "axios";
import FooterComponent from "./components/Footer.vue";
import Navbar from "./components/Navbar.vue";
export default {
  name: "App",
  components: {
    FooterComponent,
    Navbar,
  },
  data() {
    return {
      baseUrl: "http://localhost:3000/",
      products: null,
      categoreis: null,
      user: null,
    };
  },
  methods: {
    async fetchData() {
      try {
        var res = await axios.get(this.baseUrl + "category");
        this.categoreis = res.data;

        // Collect all products from categories
        this.products = this.categoreis
          .map((category) => category.products)
          .flat();
      } catch (error) {
        console.log(error);
      }
    },
    updateUser() {
      this.user = JSON.parse(localStorage.getItem("User-Info"))[0];
    },
  },
  mounted() {
    //mount data on page load
    this.fetchData();
    this.updateUser();
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
