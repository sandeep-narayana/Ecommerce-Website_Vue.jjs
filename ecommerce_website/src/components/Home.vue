<template>
  <div id="Home">
    <div id="backgroud-div" class="page-holder bg-cover">
      <div class="container py-5">
        <header class="text-left text-white py-5">
          <h3 class="mb-4 rounded" id="heading">
            <a href="#start-shopping" class="bg-white px-2 py-2 rounded"
              >Start shopping</a
            >
          </h3>
          <p class="lead mb-0 bg-dark p-1 rounded">Demo Ecommerce</p>
        </header>
      </div>
      <hr />
    </div>

    <!-- Display Top Category  and products-->
    <div class="container">
      <div class="row">
        <div class="col-12 text-center">
          <h2 class="pt-3">Top Category</h2>
        </div>
      </div>
      <!-- // show Category cards -->
      <div class="row">
        <div
          v-for="index in this.categorySize"
          :key="index"
          class="col-md-6 col-xl-4 col-12 pt-3 justify-content-around d-flex"
        >
          <Categorybox :categoryData="categoreis[index]" />
        </div>
      </div>

      <div class="row">
        <div class="col-12 text-center">
          <h2 class="pt-3">Top Products</h2>
        </div>
      </div>
      <!-- // show Category cards -->
      <div class="row">
        <div
          v-for="index in productSize"
          :key="index"
          class="col-xl-3 col-md-4 col-12 pt-3 d-flex"
        >
          <ProductBox :product="products[index]" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Categorybox from "./Category/Categorybox.vue";
import ProductBox from "./Products/ProductBox.vue";
export default {
  name: "HomeComponent",
  data() {
    return {
      categorySize: 0,
      productSize:0
    };
  },
  created() {
    this.categorySize = Math.min(6, this.categoreis.length);
    this.productSize = Math.min(8, this.products.length);
  },
  components: {
    Categorybox,
    ProductBox,
  },
  props: ["categoreis","products"],
};
</script>
<style >
.page-holder {
  min-height: 100vh;
}
#backgroud-div {
  background: url("../assets/home.png");
}
.bg-cover {
  background-size: cover !important;
}

#heading {
  font-weight: 400;
}
</style>
