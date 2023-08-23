`<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h3 class="pt-3">Add New Product</h3>
      </div>
    </div>
    <div class="row">
      <div class="col-3"></div>
      <div class="col-6">
        <form action="">
          <!-- dropdown for category -->
          <div class="form-group">
            <label for="">Product Name</label>
            <select
              name=""
              id=""
              class="form-control"
              v-model="this.categoryid"
              required
            >
              <!-- Assuming you have an array of product names to populate the dropdown options -->
              <option
                v-for="category in categoreis"
                :key="category.id"
                :value="category.id"
              >
                {{ category.name }}
              </option>
            </select>
          </div>
          <div class="form-group">
            <label for="">Product Name</label>
            <input
              type="text"
              class="form-control"
              v-model="this.product.name"
              required
            />
          </div>
          <div class="form-group">
            <label for="">Product Description</label>
            <input
              type="text"
              class="form-control"
              v-model="this.product.description"
              required
            />
          </div>
          <div class="form-group">
            <label for="">Product Image</label>
            <input
              type="url"
              class="form-control"
              v-model="this.product.image"
              required
            />
          </div>
          <div class="form-group">
            <label for="">Product Price</label>
            <input
              type="url"
              class="form-control"
              v-model="this.product.price"
              required
            />
          </div>
          <button
            type="submit"
            class="btn btn-primary"
            @click.prevent="addProduct()"
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
  name: "AddProduct",
  data() {
    return {
      categoryid: "",
      product: {
        name: "",
        image: "",
        description: "",
        price: "",
        id: "",
      },
    };
  },
  methods: {
    async addProduct() {
      if (this.isFormCoplete) {
        sweetAlert.fire({
          icon: "error",
          title: "Incomplete Form",
          text: "Please fill all the mandatory fields ",
        });
        return;
      }
      try {
        var res = await axios.get(
          `http://localhost:3000/category/${this.categoryid}`
        );
        if (res.data == null) {
          sweetAlert.fire({
            icon: "error",
            title: "Invalid Category",
            text: "Category not found",
          });
          return;
        }

        var category = res.data;
        // add the product to the category's product list
        // 1 find the id of the last product
        var lastProductId = category.products[category.products.length - 1].id;
        // add the product
        this.product.id = lastProductId + 1;
        category.products.push(this.product);

        // delete current category
        var deleteCategory = await axios.delete(
          `http://localhost:3000/category/${this.categoryid}`
        );
        if (deleteCategory == null) {
          sweetAlert.fire({
            icon: "error",
            title: "Invalid Category",
            text: "Category not found - del",
          });
          return;
        }

        // add new category with added product
        var updatedCategory = await axios.post(
          `http://localhost:3000/category`,
          category
        );
        // get the category
        if (updatedCategory == null) {
          sweetAlert.fire({
            icon: "error",
            title: "Invalid Category",
            text: "Category not found-update",
          });
          return;
        } else {
          sweetAlert.fire({
            icon: "success",
            title: "Product added successfully",
            showConfirmButton: false,
            timer: 1500, // Auto close after 1.5 seconds
          });
        }
      } catch (error) {
        sweetAlert.fire({
          icon: "error",
          title: "Invalid Category",
          text: "Category not found-update",
        });
      }
    },
  },
  props: ["categoreis"],
  computed: {
    isFormCoplete() {
      return !(
        this.categoryid &&
        this.product.name &&
        this.product.description &&
        this.product.image &&
        this.product.price
      );
    },
  },
};
</script>
`