import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Board from "./views/Board.vue";
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";
import Account from "./views/Account.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/board",
      name: "Board",
      component: Board
    },
    {
      path: "/account",
      name: "Account",
      component: Account
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    },
    {
      path: "/register",
      name: "Register",
      component: Register
    },


  ]
});
