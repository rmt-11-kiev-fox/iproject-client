<template>
	<div id="app">
		<fab :position="position" :bg-color="bgColor" :actions="fabActions" @login="login" @home="home" @map="map" @search="search" :start-opened="true"></fab>
		<router-view />
		<div id="CenterDIV">
			<HFooter></HFooter>
		</div>
	</div>
</template>
<script>
import fab from "vue-fab";
import HFooter from "vue-hacktiv8-footer";

export default {
	components: {
		fab,
		HFooter,
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
					tooltip: localStorage.getItem("lat") ? "View Covid Data" : "Please Give Location Access",
				},
				{
					name: "search",
					icon: "search",
					tooltip: localStorage.getItem("lat") ? "Search Places" : "Please Give Location Access",
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
			if (localStorage.getItem("lat")) {
				this.$router.push("/#covidMap").catch(() => {});
			}
		},
		search() {
			if (localStorage.getItem("lat")) {
				this.$router.push("/#more").catch(() => {});
			}
		},
	},
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");
@import url("https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css");
#CenterDIV {
	position: fixed;
	bottom: 0;
	display: block;
}
</style>
