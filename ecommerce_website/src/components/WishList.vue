<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h3>"Hello, friend! Your wishlist is waiting for you."</h3>
      </div>
      <div class="row">
        <div
          v-for="product in Products"
          :key="product.id"
          class="col-xl-3 col-md-4 col-12 pt-3 d-flex"
        >
          <ProductBox :product="product" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import ProductBox from "./Products/ProductBox.vue";
export default {
  name: "WishList",
  data() {
    return {
      Products: null,
    };
  },
  props: ["user"],
  async mounted() {
    var wishlist = await axios.get(`http://localhost:3000/wish_list`, {
      params: {
        user_id: this.user.id,
      },
    });
    this.Products = wishlist.data;
    console.log("Product data", this.Products);
  },
  components: {
    ProductBox,
  },
};
</script>
