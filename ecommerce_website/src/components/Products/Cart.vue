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
  </div>
</template>
<script>
import ProductBox from "./Products/ProductBox.vue";
export default {
  name: "CartComponet",
  data() {
    return {
      Products: null,
    };
  },
  props: [ "user","cart"],
  components: {
    ProductBox,
  },
  
};
</script>
