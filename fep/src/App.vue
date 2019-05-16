<template>
  <div id="app">
      <Navigation></Navigation>
    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src
import Navigation from "@/components/Nav";

export default {
  name: "App",
  components: {
    Navigation
  }
};
</script>

