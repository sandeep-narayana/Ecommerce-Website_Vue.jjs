<template>
  <div class="container">
    <dir class="row">
      <h4>Our Products</h4>
      <dir class="row">
        <div
          v-for="product in products"
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
import ProductBox from "./ProductBox.vue";
export default {
  name: "ProductComponent",
  props: ["products"],
  components: {
    ProductBox,
  },
};
</script>
