<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <!-- Button to toggle the navbar on smaller screens -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav mr-auto">
          <!-- Home -->
          <li class="nav-item">
            <a class="nav-link" href="/">Home</a>
          </li>
          <!-- About -->
          <li class="nav-item">
            <a class="nav-link" href="/about">About</a>
          </li>
          <!-- Account Dropdown -->
          <li class="nav-item dropdown" v-if="loggedInUser">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="accountDropdown"
              role="button"
              @click="toggleDropdown"
            >
            {{ loggedInUser[0].firstName }} {{ loggedInUser[0].lastName }}
            </a>
            <div
              class="dropdown-menu"
              aria-labelledby="accountDropdown"
              :class="{ show: isDropdownOpen }"
            >
              <a class="dropdown-item" href="#" @click="handleLogout">Logout</a>
            </div>
          </li>
          <li class="nav-item dropdown" v-else>
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="accountDropdown"
              role="button"
              @click="toggleDropdown"
            >
              Account
            </a>
            <div
              class="dropdown-menu"
              aria-labelledby="accountDropdown"
              :class="{ show: isDropdownOpen }"
            >
              <a
                class="dropdown-item"
                href="/wishlist"
                @click="handleOptionClick('Wishlist')"
                >Wishlist</a
              >
              <a
                class="dropdown-item"
                href="/admin"
                @click="handleOptionClick('Admin')"
                >Admin</a
              >
              <div class="dropdown-divider"></div>
              <a
                class="dropdown-item"
                href=""
                @click="handleOptionClick('Login')"
                >Login</a
              >
              <a
                class="dropdown-item"
                href=""
                @click="handleOptionClick('Signup')"
                >Signup</a
              >
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavbarComponent",
  data() {
    return {
      isDropdownOpen: false,
      loggedInUser: null,
    };
  },
  mounted() {
    // Check if the user is logged in on component creation
    const userInfo = localStorage.getItem("User-Info");
    if (userInfo) {
      this.loggedInUser = JSON.parse(userInfo);
      console.log("Logged in user",userInfo)
    }
  },
  methods: {
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    handleOptionClick(option) {
      if (option === "Signup") {
        this.$router.push("sign-up"); 
      }else if(option === "Login"){
        this.$router.push("sign-in")
      }
    },
    handleLogout() {
      // Clear user information from localStorage and refresh the page
      localStorage.removeItem("User-Info");
      this.loggedInUser = null;
      this.$router.go(); // Refresh the page
    },
  },
};
</script>

<style scoped>

</style>
