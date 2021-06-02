<template>
	<div class="started-page" id="started">
		<div class="mx-3 my-3 h-100">
			<div class="row d-flex justify-content-center" v-if="!$store.state.location.lat">
				<div class="col-md-6 d-flex flex-column align-items-center">
					<h2 class="text-center mt-4 ">Please Enable Location Access</h2>
					<button @click.prevent="accessLocation" class="btn btn-outline-success ">Give Access</button>
					<div class="svg">
						<Error400 />
					</div>
				</div>
			</div>
			<div class="row align-items-center h-100" v-if="$store.state.location.lat">
				<div class="col d-flex flex-column align-items-center">
					<h1>Near You</h1>
					<vue-horizontal class="horizontal mx-2">
						<div class="row my-5 mx-3">
							<div class="mx-4" v-for="place in $store.state.suggestions" :key="place.place_id">
								<Card :place="place" />
							</div>
						</div>
					</vue-horizontal>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Error400 from "@/components/svg/Error400";
import Card from "@/components/Card";

export default {
	name: "StartedPage",
	data() {
		return {
			image: "https://images.unsplash.com/photo-1479660656269-197ebb83b540?dpr=2&auto=compress,format&fit=crop&w=1199&h=798&q=80&cs=tinysrgb&crop=",
		};
	},
	components: {
		Error400,
		Card,
	},
	methods: {
		accessLocation() {
			this.$getLocation({
				enableHighAccuracy: true, //defaults to false
				timeout: Infinity, //defaults to Infinity
				maximumAge: 10000, //defaults to 0
			})
				.then((coordinates) => {
					this.$store.dispatch("setLocation", coordinates);
					localStorage.setItem("lat", coordinates.lat);
					localStorage.setItem("lng", coordinates.lng);
				})
				.catch((err) => {
					console.log(err);
				});
		},
	},
	created() {
		if (this.$store.state.location.lat) {
			// this.$store.dispatch("fetchSuggestions");
		}
	},
};
</script>

<style scoped>
.svg {
	width: 100%;
}
.started-page {
	width: 100vw;
	height: 100vh;
	background-image: linear-gradient(to right, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0), rgba(255, 255, 255, 1)), url("../assets/bg-home.png");
	background-size: 100% 100%;
	background-repeat: no-repeat;
}
</style>
