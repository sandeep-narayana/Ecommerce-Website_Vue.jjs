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
          <h2 class="pt-4 pl-4">Create Account</h2>
          <form class="pt-4 pl-4 pr-4" @submit.prevent="signup()">
            <div class="form-group">
              <!-- Email -->
              <label for="Email">Email</label>
              <input
                class="form-control"
                type="email"
                required
                v-model="this.user.email"
              />
              <div class="form-row">
                <div class="col">
                  <div class="form-group">
                    <!-- First Name -->
                    <label for="Email">First Name</label>
                    <input
                      class="form-control"
                      type="text"
                      required
                      v-model="this.user.firstName"
                    />
                  </div>
                </div>
                <!-- Last Name -->
                <div class="col">
                  <div class="form-group">
                    <label for="Email">Last Name</label>
                    <input
                      class="form-control"
                      type="text"
                      required
                      v-model="this.user.lastName"
                    />
                  </div>
                </div>
                <!-- Password -->
              </div>
              <label for="Email">Password</label>
              <input
                class="form-control"
                type="password"
                required
                v-model="this.user.password"
              />
              <!-- Confirm Password -->
              <label for="Email">Confirm Password</label>
              <input
                class="form-control"
                type="password"
                required
                v-model="this.confirmPassword"
              />
            </div>

            <button type="submit" class="btn btn-primary">
              Create Account
            </button>
          </form>
          <router-link to="SignIn"> Already a member ? Signin </router-link>
        </div>
      </div>
    </div>

    <!-- form -->
  </div>
</template>
<script>
import sweetAlert from "sweetalert2";
import axios from "axios";
export default {
  name: "SignUp",
  data() {
    return {
      user: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      },
      confirmPassword: "",
    };
  },
  methods: {
    async signup() {
      if (this.user.password !== this.confirmPassword) {
        sweetAlert.fire({
          icon: "error",
          title: "Password Error",
          text: "password and the confirm password must be same ",
        });
        return;
      } else {
        // save the data in db.json
        var user = await axios.post("http://localhost:3000/users", this.user);
        if (user.status === 201) {
          // for showing a user logged in we are using local storage
          localStorage.setItem("User-Info", JSON.stringify(user.data));
          // redirect to home page
          this.$router.push({ name: "Home" });
        } else {
          sweetAlert.fire({
            icon: "error",
            title: "Sign-Up Failed",
            text: "Something went wrong please try again after sometime"
          });
          return;
        }
      }
    },
  },
};
</script>
<style scoped>
label {
  margin: 5px;
}
</style>
