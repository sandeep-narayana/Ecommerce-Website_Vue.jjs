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
      <a
        
        href="#"
        class="btn btn-primary stretched-link"
        >Learn More</a
      >
    </div>
    <div  class="card-footer d-flex justify-content-between " v-if="$route.name === 'WishList'">
      <button  class="btn  btn-primary">Add to cart</button>
      <button class="btn   btn-danger" v-on:click="DeleteProduct()">Remove </button>
    </div>
  </div>
</template>
<script>
export default {
  name: "ProductBox",
  data() {
    return {};
  },
  props: ["product"],
  methods:{
    async DeleteProduct(){
      var deletedProduct = null;
      console.log(deletedProduct)
    }
  }
};
</script>
<style scoped>

</style>
