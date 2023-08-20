<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-12 text-center">
          <h3 class="pt-3">Our Categories</h3>
          <router-link :to="{ name: 'AddCategory' }"
            ><button class="btn btn-primary">Add Categories</button>
          </router-link>
        </div>
      </div>
      <div class="row">
        <div
          v-for="category in categoreis"
          :key="category.id"
          class="col-xl-3 col-md-4 col-12 pt-3 d-flex"
        >
          <Categorybox :categoryData="category" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from "axios";
import Categorybox from "./Categorybox.vue";

export default {
  name: "CategoryComponent",
  components: {
    Categorybox,
  },
  props:["categoreis"]
};
</script>