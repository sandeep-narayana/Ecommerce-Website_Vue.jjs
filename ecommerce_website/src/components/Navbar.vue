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
          <li class="nav-item dropdown">
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
                href="/login"
                @click="handleOptionClick('Login')"
                >Login</a
              >
              <a
                class="dropdown-item"
                href="/signup"
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
    };
  },
  methods: {
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    handleOptionClick(option) {
      // Handle the click on dropdown options here

      alert(`Clicked on ${option}`);
      if (option === "Signup") {
        this.$router.push("Signup"); // Use $router instead of $route
      }
      // You can implement specific functionality for each option
    },
  },
};
</script>

<style scoped>

</style>
