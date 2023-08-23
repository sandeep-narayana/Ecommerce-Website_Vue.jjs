<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-centre pt-3">
        <!-- display logo -->
      </div>
    </div>
    <!-- header -->
    <div class="row">
      <div class="col-12 text-centre pt-3">
        <div id="signup-div" class="flex-item-border">
          <h2 class="pt-4 pl-4">Sign In</h2>
          <form class="pt-4 pl-4 pr-4" @submit.prevent="SignIn">
            <div class="form-group">
              <!-- Email -->
              <label for="Email">Email</label>
              <input
                class="form-control"
                type="email"
                required
                v-model="this.email"
              />
              <!-- password -->
              <label for="Email">Password</label>
              <input
                class="form-control"
                type="password"
                required
                v-model="this.password"
              />
            </div>

            <button type="submit" class="btn btn-primary">
              Create Account
            </button>
          </form>
          <router-link to="SignUp"> Not a member ? SignUp </router-link>
        </div>
      </div>
    </div>

    <!-- form -->
  </div>
</template>
<script>
import axios from "axios";
import sweetAlert from "sweetalert2";
export default {
  name: "SignIn",
  data() {
    return {
      data: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async SignIn() {
      var user = await axios.get(`http://localhost:3000/users`, {
        params: {
          email: this.email,
          password: this.password,
        },
      });
      
      if (user.status === 200 && user.data.length > 0) {
        localStorage.setItem("User-Info", JSON.stringify(user.data));
        this.$emit("updateUser")
        this.$router.push("/");
      } else {
        sweetAlert.fire({
          icon: "error",
          title: "Authentication Failed",
          text: "Please check your credentials",
        });
        return;
      }
    },
  },
};
</script>
