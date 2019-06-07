<template>
  <nav>
    <router-link to="/">Home</router-link>
    |
    <router-link to="/account">Account</router-link>
    |
    <router-link to="/board">Board</router-link>
    |
    <router-link to="/login">Login</router-link>
    |
    <router-link to="/register">Register</router-link>
  </nav>
</template>

<script>
  export default {
    name: "Header"
  }
</script>

<style scoped>

</style>