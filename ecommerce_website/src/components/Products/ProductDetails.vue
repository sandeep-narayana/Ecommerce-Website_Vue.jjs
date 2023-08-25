<template>
  <div class="container">
    <div class="row pt-5">
      <div class="col-md-1"></div>
      <!-- display image -->
      <div class="col-md-4 col-12">
        <img
          :src="displayProduct.image"
          alt=""
          class="img-fluid custom-image"
        />
      </div>
      <!-- Display product Details -->
      <div class="col-md-6 col-12 pt-3 pt-md-0">
        <h4>{{ this.displayProduct.name }}</h4>
        <h6 class="category font-italic">{{ category.name }}</h6>
        <h6 class="font-weight-bold">{{ displayProduct.price }} $ Price</h6>
        <p>{{ displayProduct.description }}</p>
        <div class="features pt-3">
          <h5><strong>Features</strong></h5>
          <ul class="list-unstyled">
            <li>Lorem ipsum dolor sit amet consectetur adipisicing</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing</li>
          </ul>
        </div>
        <!-- // buttons for Add to cart and Add to WishList -->
        <div class="card-footer d-flex mb-2 justify-content-around">
          <button class="btn btn-success mb-2" @click="AddToCart()">
            Add to Cart
          </button>
          <button class="btn btn-primary mb-2" @click="AddToWishList()">
            Add to WishList
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import sweetAlret from "sweetalert2";
export default {
  name: "ProductDetails",
  data() {
    return {
      displayProduct: {},
      category: {},
    };
  },
  props: ["products", "categoreis", "user"],
  mounted() {
    this.id = this.$route.params.id;
    this.displayProduct = this.products.find(
      (product) => product.id == this.id
    );

    // Find the category that contains the displayProduct
    for (const cat of this.categoreis) {
      const foundProduct = cat.products.find(
        (product) => product.id == this.id
      );
      if (foundProduct) {
        this.category = cat;
        break; // Stop searching once the category is found
      }
    }
  },
  methods: {
    // Add product to Cart and delete from Wishlist
    async AddToCart() {
      try {
        if (this.user == null) {
          sweetAlret.fire({
            icon: "error",
            title: "login first",
          });
          return;
        }

        const userId = this.user.id;
        // Make a GET request to get the user's data including the cart and wishlist
        const response = await axios.get(
          `http://localhost:3000/users/${userId}`
        );

        // Extract the user data
        const userDataFromDb = response.data;

        // Add the product to the wishlist
        const updatedCart = [...userDataFromDb.cart, this.displayProduct];
        userDataFromDb.cart = updatedCart;

        // Update both cart and wishlist in a single PUT request
        await axios.put(
          `http://localhost:3000/users/${userId}`,
          userDataFromDb
        );

        // Emit an event to notify the parent component to update its state
        this.$emit("fetchData");
      } catch (error) {
        console.log(error);
      }
    },

    // Add product to WishList
    async AddToWishList() {
      try {
        if (this.user == null) {
          sweetAlret.fire({
            icon: "error",
            title: "login first",
          });
          return;
        }

        const userId = this.user.id;
        // Make a GET request to get the user's data including the cart and wishlist
        const response = await axios.get(
          `http://localhost:3000/users/${userId}`
        );

        // Extract the user data
        const userDataFromDb = response.data;

        // Add the product to the wishlist
        const updatedWishList = [
          ...userDataFromDb.wishlist,
          this.displayProduct,
        ];
        userDataFromDb.wishlist = updatedWishList;

        // Update user
        await axios.put(
          `http://localhost:3000/users/${userId}`,
          userDataFromDb
        );

        // Emit an event to notify the parent component to update its state
        this.$emit("fetchData");
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
<style>
.category {
  font-weight: 400px;
}
</style>
