import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const suffix = "MANIS - ";

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
		meta: {
			title: `${suffix}Home Page`, // Title must be a string.
		},
	},
	{
		path: "/detail",
		name: "Detail",
		component: () => import("../views/Detail.vue"),
		meta: {
			title: `${suffix}Details`, // Title must be a string.
		},
	},
	{
		path: "/login",
		name: "Login",
		component: () => import("../views/Login.vue"),
		meta: {
			title: `${suffix}Login`, // Title must be a string.
		},
	},
	{
		path: "/register",
		name: "Register",
		component: () => import("../views/Register.vue"),
		meta: {
			title: `${suffix}Register`, // Title must be a string.
		},
	},
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});

router.beforeEach((to, from, next) => {
	if (to.name === "Login" && localStorage.getItem("manis_token")) next({ name: "Home" });
	else next();
});

export default router;
