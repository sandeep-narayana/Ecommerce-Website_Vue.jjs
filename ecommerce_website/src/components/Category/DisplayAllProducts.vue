<template>
  <h1>Hello i am all the products</h1>
  <div class="container">
    <dir class="row">
      <div class="col-12 text-center">
        <h3 class="pt-3">Our Products</h3>
        <router-link :to="{ name: 'AddProduct' }"
          ><button class="btn btn-primary">Add products</button>
        </router-link>
      </div>
      <dir class="row">
        <div
          v-for="product in this.products"
          :key="product.id"
          class="col-xl-3 col-md-4 col-12 pt-3 d-flex"
        >
          <ProductBox :product="product" />
        </div>
      </dir>
    </dir>
  </div>
</template>

<script>
import ProductBox from "../Products/ProductBox.vue";
export default {
  name: "DisplayProducts",
  data() {
    return {
      products: [],
    };
  },
  components: {
    ProductBox,
  },
  props: ["categoreis"],
  mounted() {
    this.id = this.$route.params.id;
    const category = this.categoreis.find((category) => category.id === parseInt(this.id));
    this.products = category.products;
  
  },
};
</script>
