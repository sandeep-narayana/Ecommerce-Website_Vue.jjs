<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h3 class="pt-3"></h3>
      </div>
    </div>
    <div class="row">
      <div class="col-3"></div>
      <div class="col-6">
        <form action="">
          <div class="form-group">
            <label for="">Category Name</label>
            <input
              type="text"
              class="form-control"
              v-model="this.category.name"
              required
            />
          </div>
          <div class="form-group">
            <label for="">Category Description</label>
            <input
              type="text"
              class="form-control"
              v-model="this.category.description"
              required
            />
          </div>
          <div class="form-group">
            <label for="">Category Image</label>
            <input
              type="url"
              class="form-control"
              v-model="this.category.image"
              required
            />
          </div>
          <button
            type="submit"
            class="btn btn-primary"
            @click.prevent="updateCategory"
          >
            Submit
          </button>
        </form>
      </div>
      <div class="col-3"></div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import sweetAlert from "sweetalert2";
export default {
  name: "EditCategory",
  data() {
    return {
      categoryId: null,
      category: {},
    };
  },
  async mounted() {
    this.categoryId = this.$route.params.categoryId;

    try {
      var category = await axios.get(
        `http://localhost:3000/category/${this.categoryId}`
      );
      this.category = category.data;
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    async updateCategory() {
      var category = await axios.put(
        `http://localhost:3000/category/${this.categoryId}`,
        this.category
      );
      if (category.status == 200) {
        sweetAlert.fire({
          icon: "success",
          title: "Category updated successfully",
          showConfirmButton: false,
          timer: 1500, // Auto close after 1.5 seconds
        });

        // Reload the page
        this.$router.push("/admin/category");
      } else {
        sweetAlert.fire({
          icon: "serror",
          title: "Product updation unsuccessfully",
          text: "Category not found-update",
        });
      }
    },
  },
};
</script>
