<template>
  <div class="container">
    <dir class="row">
      <div class="col-12 text-center">
        <h3 class="pt-3">{{ category.name }}</h3>
        <h5 style="font-weight: 300; color: #686868;" >{{ msg }}</h5>
      </div>
      <dir class="row">
        <div
          v-for="product in this.category.products"
          :key="product.id"
          class="col-xl-4 col-md-6 col-12 pt-3 d-flex"
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
      category: {},
      msg: "",
    };
  },
  components: {
    ProductBox,
  },
  props: ["categoreis"],
  mounted() {
    this.id = this.$route.params.id;
    this.category = this.categoreis.find(
      (category) => category.id === parseInt(this.id)
    );

    if(this.category.products.length===0){
        this.msg="No Product Found";
    }else if(this.category.products.length===1){
        this.msg="Only 1 Product Found" ;
    }else{
        this.msg= this.category.products.length+" Products Found" ;
    }
  },
};
</script>