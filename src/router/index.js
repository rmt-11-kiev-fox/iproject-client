import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Login.vue")
  },
  {
    path: "/movies/detail/:movieId",
    name: "MovieDetail",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/MovieDetail.vue")
  },
  {
    path: "/movies/wishlist",
    name: "MovieWishlist",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Wishlist.vue")
  },
  {
    path: "/register",
    name: "Register",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Register.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (!localStorage.access_token) {
    if (to.name === "Login") {
      next();
    } else if (to.name === "Register") {
      next();
    } else if (to.name === "Home") {
      next();
    } else {
      next({ name: "Login" });
    }
  } else {
    if (to.name === "Login") {
      next({ name: "Home" });
    } else if (to.name === "Register") {
      next({ name: "Home" });
    } else {
      next();
    }
  }
});

export default router;
