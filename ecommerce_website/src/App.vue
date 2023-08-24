<template>
  <Navbar :user="user" />
  <!-- first let the fetch work and then only send the category and product -->
  <router-view
    v-if="categoreis && products"
    style="min-height: 60vh"
    :baseUrl="baseUrl"
    :categoreis="categoreis"
    :products="products"
    :user="user"
    :wishlist="wishlist"
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
      wishlist: null,
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

        // Get the wishlish or the login user so it can pass to wishlist id if not null
        if (this.user != null) {
          var user = await axios.get(`http://localhost:3000/users`, {
            params: {
              id: this.user.id,
            },
          });
          this.wishlist = user.data[0].wish_list;
        }
      } catch (error) {
        console.log(error);
      }
    },
    updateUser() {
      const userInfo = JSON.parse(localStorage.getItem("User-Info"));
      if (userInfo && userInfo.length > 0) this.user = userInfo[0];
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
