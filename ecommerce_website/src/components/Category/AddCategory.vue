<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h3 class="pt-3">Add Categories</h3>
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
            @click.prevent="addCategory"
          >
            Submit
          </button>
        </form>
      </div>
      <div class="col-3"></div>
    </div>
  </div>
</template>
// <script>
import axios from "axios";
import Swal from "sweetalert2"; // Import sweetalert2

export default {
  name: "AddCategory",
  data() {
    return {
      category: {
        name: "",
        description: "",
        image: "",
      },
    };
  },
  methods: {
    async addCategory() {
      // return if all the mandatory feilds are not filled
      if (this.isFormCoplete) {
       Swal.fire({
            icon: "error",
            title: "Incomplete Form",
            text: "Please fill all the mandatory fields",
          });
        return;
      }

      try {
        var categoryRes = await axios.post(
          "http://localhost:3000/category",
          this.category
        );
        if (categoryRes.status === 201) {
            Swal.fire({
            icon: "success",
            title: "Category added successfully",
            showConfirmButton: false,
            timer: 1500, // Auto close after 1.5 seconds
          });
        }
      } catch (error) {
        // here show the msg to the user
        console.log(error);
      } finally {
        this.category.name = this.category.description = this.image = "";
      }
    },
  },
  computed: {
    isFormCoplete() {
      return !(
        this.category.name &&
        this.category.description &&
        this.category.image
      );
    },
  },
};
</script>
<style scoped>
</style>
