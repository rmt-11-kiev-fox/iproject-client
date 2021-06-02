<template>
	<div class="landing-page">
		<div class="row">
			<div class="col-md-6 col-sm-12">
				<div class="row d-flex h-100 justify-content-center align-items-center flex-column landing-info">
					<img src="../assets/logo.png" alt="" />
					<div class="mb-4 text-center">
						<h3 class="text-uppercase">boost your day</h3>
						<p>and Be Stylish with MANIS.</p>
						<a href="#started" class="btn btn-outline-success" @click="accessLocation">
							Get Started
						</a>
					</div>
				</div>
			</div>
			<div class="col-md-6 col-sm-12">
				<div class="svg">
					<HomeSvg />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import HomeSvg from "@/components/svg/HomeSvg";
import Swal from "sweetalert2";

export default {
	name: "LandingPage",
	components: {
		HomeSvg,
	},
	data() {
		return {};
	},
	methods: {
		accessLocation() {
			if (!this.$store.state.location.lat) {
				if (!("geolocation" in navigator)) {
					Swal.fire({
						title: `Warning`,
						text: `Geolocation is not available`,
						icon: "warning",
					});
					return;
				}
				this.$getLocation({
					enableHighAccuracy: true, //defaults to false
					timeout: Infinity, //defaults to Infinity
					maximumAge: 10000, //defaults to 0
				})
					.then((coordinates) => {
						this.$store.dispatch("setLocation", coordinates);
						localStorage.setItem("location", coordinates);
					})
					.catch((err) => {
						console.log(err);
					});
			}
		},
	},
};
</script>

<style>
.svg {
	height: 100%;
	width: 100%;
}

.landing-page {
	width: 100vw;
	height: 100vh;
	background-image: linear-gradient(to right, rgba(255, 255, 0, 0), rgba(255, 255, 255, 1)), url("../assets/bg-home.png");
	background-size: 100% 100%;
	background-repeat: no-repeat;
}

@keyframes infoAnimation {
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
}

.landing-info {
	animation-name: infoAnimation;
	animation-duration: 5s;
}
</style>
