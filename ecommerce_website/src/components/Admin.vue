<template>
  <div class="container">
    <router-link to="/admin/category">
      <button class="btn btn-primary btn-lrg">
        Admin Category
      </button> </router-link
    ><br />

    <router-link to="/admin/product">
      <button class="btn btn-primary btn-lrg">
        Admin Products
      </button> </router-link
    ><br />
  </div>
</template>
<script>
export default {
  name: "AdminComponent",
};
</script>
<style scoped>
.btn {
  margin: 10px;
  padding: 10px;
}
</style>