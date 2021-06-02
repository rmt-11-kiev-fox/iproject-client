<template>
	<div id="app">
		<fab :position="position" :bg-color="bgColor" :actions="fabActions" @login="login" @home="home" @map="map" @search="search" :start-opened="true"></fab>
		<router-view />
	</div>
</template>
<script>
import fab from "vue-fab";
export default {
	components: {
		fab,
	},
	data() {
		return {
			bgColor: "rgba(104, 191, 120, 0.5)",
			position: "top-left",
			fabActions: [
				{
					name: "login",
					icon: this.$store.state.isAuthenticate ? "logout" : "login",
					tooltip: this.$store.state.isAuthenticate ? "Logout" : "Login",
				},
				{
					name: "home",
					icon: "home",
					tooltip: "Back Home",
				},
				{
					name: "map",
					icon: "masks",
					tooltip: localStorage.lat ? "View Covid Data" : "Please Give Location Access",
				},
				{
					name: "search",
					icon: "search",
					tooltip: localStorage.lat ? "Search Places" : "Please Give Location Access",
				},
			],
		};
	},
	methods: {
		login() {
			if (localStorage.getItem("manis_token")) {
				localStorage.removeItem("manis_token");
				this.$router.push("/").catch(() => {});
			} else {
				this.$router.push("/login").catch(() => {});
			}
		},
		home() {
			this.$router.push("/").catch(() => {});
		},
		map() {
			this.$router.push("/#covidMap").catch(() => {});
		},
		search() {
			this.$router.push("/#more").catch(() => {});
		},
	},
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");
@import url("https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css");
</style>
