<template>
  <div class="card w-100 h-100">
    <div class="card-img-container">
      <img class="card-img-top" :src="categoryData.image" alt="" />
    </div>
    <div class="card-body">
      <h5 class="card-title">{{ categoryData.name }}</h5>
      <p class="card-text">{{ categoryData.description }}</p>
    </div>
    <div class="card-footer">
     <router-link :to="{ name: 'EditCategory', params: { categoryId: categoryData.id } }">Edit</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "CategoryBox",
  props: ["categoryData"],
};
</script>

<style >
.card {
  /* Your existing card styles */

  /* Set the card container to be relative for absolute positioning of the image */
  position: relative;
}

.card-img-container {
  /* Set the desired aspect ratio (e.g., 4:3) for the image container */
  padding-top: 75%; /* 3/4 aspect ratio */
  position: relative;
  overflow: hidden;
}

.card-img-top {
  /* Set the image to fill the container while maintaining aspect ratio */
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
}
</style>

