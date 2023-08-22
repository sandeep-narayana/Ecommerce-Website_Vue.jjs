<template>
  <div class="card w-100 h-100">
    <div class="card-img-container">
      <img class="card-img-top" :src="product.image" alt="" />
    </div>
    <div class="card-body">

<router-link :to="{name:'ProductDetails', params:{id:product.id}}">
    <h5 class="card-title">{{ product.name }}</h5>
</router-link>

  
      <p class="card-text">{{ product.description }}</p>
    </div>
    <div class="card-footer">
      <a v-show="$route.name === 'ProductComponent'" href="#" class="btn btn-primary stretched-link">Learn More</a>
    </div>
  </div>
</template>
<script>
export default {
    name:"ProductBox",
    data(){
        return{

        }
    },
    props:["product"]

};
</script>
