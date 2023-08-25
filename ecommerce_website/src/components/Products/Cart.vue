<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h3>"Hello, friend! Your wishlist is waiting for you."</h3>
      </div>
      <div class="row">
        <div
          v-for="product in cart"
          :key="product.id"
          class="col-xl-3 col-md-4 col-12 pt-3 d-flex"
        >
          <ProductBox :product="product" :user="user" />
        </div>
      </div>
    </div>
    <!-- Display Total Amount and Price -->
    <div class="row mt-4">
      <div class="col-12 text-center">
        <h4>Total Amount: ${{ getTotalAmount() }}</h4>
      </div>
    </div>

    <!-- "Buy Now" Button -->
    <div class="row mt-4">
      <div class="col-12 text-center">
        <!-- <router-link :to="{ name: 'PurchasePage', query: { cartItems: JSON.stringify(cart) } }">
          <router-link :to="{ name: 'PurchasePage', query: { cartItems: JSON.stringify(cart) } }">
          <button class="btn btn-primary">Buy Now</button>
        </router-link> -->
        <button class="btn btn-primary">Buy Now</button>
      </div>
    </div>
  </div>
</template>
<script>
import ProductBox from "./ProductBox.vue";
export default {
  name: "CartComponet",
  data() {
    return {
      Products: null,
    };
  },
  props: ["user", "cart"],
  components: {
    ProductBox,
  },
  methods: {
    getTotalAmount() {
      // var amount = 0;
      // for (const product of this.cart) {
      //   // add the price to it
      //   amount =+product.count*10000
        
      // }
      // return amount;
      console.log("Hello")
    },
  },
};
</script>
