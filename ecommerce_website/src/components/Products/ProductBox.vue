<template>
  <div class="card w-100 h-100">
    <div class="card-img-container">
      <img class="card-img-top" :src="product.image" alt="" />
    </div>
    <div class="card-body">
      <router-link :to="{ name: 'ProductDetails', params: { id: product.id } }">
        <h5 class="card-title">{{ product.name }}</h5>
      </router-link>

      <p class="card-text">{{ product.description }}</p>
      <p v-if="product.count != null">{{ `Quantity: ${product.count}` }}</p>
    </div>
    <div class="card-footer" v-if="$route.name === 'ProductComponent'">
      <a href="#" class="btn btn-primary stretched-link">Learn More</a>
    </div>

    <!-- // buttons for wishlist -->
    <div
      class="card-footer d-flex justify-content-between"
      v-if="$route.name === 'WishList'"
    >
      <button class="btn btn-primary" v-on:click="AddToCart()">
        Add to cart
      </button>
      <button class="btn btn-danger" v-on:click="DeleteProductFromWishList()">
        Remove
      </button>
    </div>
    <!-- buttons for cart -->
    <div
      class="card-footer d-flex justify-content-between"
      v-if="$route.name === 'Cart'"
    >
      <button class="btn btn-primary" v-on:click="AddToWishList()">
        Add to Wishlist
      </button>
      <button class="btn btn-danger" v-on:click="DeleteProductFromCart()">
        Remove
      </button>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "ProductBox",
  data() {
    return {};
  },
  props: ["product", "user"],
  methods: {
    // remove product from Wishlist
    async DeleteProductFromWishList() {
      try {
        const userId = this.user.id;
        // Make a GET request to get the user's data including the wishlist
        const response = await axios.get(
          `http://localhost:3000/users/${userId}`
        );

        // Filter out the deleted product from the wishlist
        const userDataFromDb = response.data;
        const wishlist = userDataFromDb.wish_list;
        const updatedWishlist = wishlist.filter(
          (item) => item.id !== this.product.id
        );

        // Update the user's wishlist on the server
        await axios.put(`http://localhost:3000/users/${userId}`, {
          wishlist: updatedWishlist,
        });

        // Emit an event to notify the parent component to update its state
        this.$emit("fetchData");
        // reload the page
        this.$router.go(0);
      } catch (error) {
        console.log(error);
      }
    },

    async AddToWishList() {
      try {
        const userId = this.user.id;
        // Make a GET request to get the user's data including the cart and wishlist
        const response = await axios.get(
          `http://localhost:3000/users/${userId}`
        );

        // Extract the user data
        const userDataFromDb = response.data;

        // Filter out the product from the cart
        const updatedCart = userDataFromDb.cart.filter(
          (item) => item.id !== this.product.id
        );

        // Add the product to the wishlist
        const updatedWishlist = [...userDataFromDb.wishlist, this.product];

        // Update both cart and wishlist in a single PUT request
        await axios.put(`http://localhost:3000/users/${userId}`, {
          cart: updatedCart,
          wishlist: updatedWishlist,
        });

        // Emit an event to notify the parent component to update its state
        this.$emit("fetchData");
        this.$router.go(0);
      } catch (error) {
        console.log(error);
      }
    },

    // Add product to Cart and delete from Wishlist
    async AddToCart() {
      try {
        const userId = this.user.id;
        // Make a GET request to get the user's data including the cart and wishlist
        const response = await axios.get(
          `http://localhost:3000/users/${userId}`
        );

        // Extract the user data
        const userDataFromDb = response.data;

        // Filter out the product from the cart
        const updatedWishlist = userDataFromDb.wishlist.filter(
          (item) => item.id !== this.product.id
        );

        // Add the product to the wishlist
        const updatedCart = [...userDataFromDb.cart, this.product];

        // Update both cart and wishlist in a single PUT request
        await axios.put(`http://localhost:3000/users/${userId}`, {
          cart: updatedCart,
          wishlist: updatedWishlist,
        });

        // Emit an event to notify the parent component to update its state
        this.$emit("fetchData");
        this.$router.go(0);
      } catch (error) {
        console.log(error);
      }
    },

    // Remove product from the cart
    async DeleteProductFromCart() {
      try {
        const userId = this.user.id;
        // Make a GET request to get the user's data including the wishlist
        const response = await axios.get(
          `http://localhost:3000/users/${userId}`
        );

        // Filter out the deleted product from the wishlist
        const userDataFromDb = response.data;
        const cart = userDataFromDb.cart;
        const updatedcart = cart.filter((item) => item.id !== this.product.id);

        // Update the user's wishlist on the server
        await axios.put(`http://localhost:3000/users/${userId}`, {
          cart: updatedcart,
        });

        // Emit an event to notify the parent component to update its state
        this.$emit("fetchData");
        // reload the page
        this.$router.go(0);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
</style>