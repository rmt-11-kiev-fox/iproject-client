<template>
	<div class="outer-wrapper">
		<!-- <div class="wrapper hasLocation"> -->
		<div class="wrapper" :class="$store.state.location.lat ? 'hasLocation' : 'noLocation'">
			<Landing />
			<Started />
			<!-- <div class="col"> -->
			<div class="col" v-if="$store.state.location.lat">
				<div class="row">
					<CovidMap />
					<MorePlaces />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
// @ is an alias to /src
import Landing from "@/views/Landing";
import Started from "@/views/Started";
import CovidMap from "@/views/CovidMap";
import MorePlaces from "@/views/MorePlaces";

export default {
	name: "Home",
	components: {
		Landing,
		Started,
		CovidMap,
		MorePlaces,
	},
	created() {
		this.$store.commit("SET_DIRECTION", false);
		if (localStorage.getItem("manis_token")) {
			this.$store.commit("SET_AUTH", true);
		} else {
			this.$store.commit("SET_AUTH", false);
		}
	},
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Mate+SC&display=swap");
* {
	font-family: "Mate SC", serif;
}

body.swal2-shown > [aria-hidden="true"] {
	filter: blur(10px);
}

body > * {
	transition: 0.1s filter linear;
}
.wrapper {
	display: flex;
	flex-direction: row;
	transform: rotate(90deg) translateY(-100vh);
	transform-origin: top left;
	background: white;
}

.noLocation {
	width: 200vw;
}

.hasLocation {
	width: 400vw;
}
.outer-wrapper {
	width: 100vh;
	height: 100vw;
	transform: rotate(-90deg) translateX(-100vh);
	transform-origin: top left;
	overflow-y: scroll;
	overflow-x: hidden;
	position: absolute;
	scrollbar-width: none;
	-ms-overflow-style: none;
}
::-webkit-scrollbar {
	display: none;
}
</style>
