<template>
  <div class="container">
    <div class="row pt-5">
      <div class="col-md-1"></div>
      <!-- display image -->
      <div class="col-md-4 col-12">
        <img :src="displayProduct.image" alt="" class="img-fluid" />
      </div>
      <!-- Display product Details -->
      <div class="col-md-6 col-12 pt-3 pt-md-0">
        <h4>{{ this.displayProduct.name }}</h4>
        <h6 class="category font-italic">{{ category.name }}</h6>
        <h6 class="font-weight-bold">{{ displayProduct.price }} $ Price</h6>
        <p>{{ displayProduct.description }}</p>
        <div class="features pt-3">
          <h5><strong>Features</strong></h5>
          <ul>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ProductDetails",
  data() {
    return {
      displayProduct: {},
      category: {},
    };
  },
  props: ["products", "categoreis"],
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
};
</script>
<style>
.category{
    font-weight: 400px;
    
}
</style>
