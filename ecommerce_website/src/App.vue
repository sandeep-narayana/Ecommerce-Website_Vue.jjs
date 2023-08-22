<template>
  <router-link to="/">Home</router-link>
  <router-link to="/About">About</router-link>
  <!-- first let the fetch work and then only send the category and product -->
  <router-view
    v-if="categoreis && products" style="min-height: 60vh"
    :baseUrl="baseUrl"
    :categoreis="categoreis"
    :products="products"
    @fetchData="fetchData"
  />
  <!-- put a footer below router view so it will be visible to all the pages -->
  <FooterComponent/>
</template>

<script>
import axios from "axios";
import FooterComponent from "./components/Footer.vue"
export default {
  name: "App",
  components: {
    FooterComponent
  },
  data() {
    return {
      baseUrl: "http://localhost:3000/",
      products: null,
      categoreis: null,
    };
  },
  methods: {
    async fetchData() {
      try {
        var res = await axios.get(this.baseUrl + "category");
        this.categoreis = res.data;
        console.log(this.categoreis);

        // Collect all products from categories
        this.products = this.categoreis
          .map((category) => category.products)
          .flat();
        // or use flatMap directly
        // this.products = this.categoreis.flatMap(category => category.products);

        console.log(this.products);
      } catch (error) {
        console.log(error);
      }

      // change the url
    },
  },
  mounted() {
    //mount data on page load
    this.fetchData();
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
