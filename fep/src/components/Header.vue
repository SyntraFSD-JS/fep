<template>
        <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link> |
            <router-link to="/register">Register</router-link> |
            <router-link to="/login">Login</router-link> |
            <router-link to="/account">Account</router-link> |
            <router-link to="/board">Board</router-link>
        </div>
</template>

<script>
    export default {
        name: "Header",
    };
</script>