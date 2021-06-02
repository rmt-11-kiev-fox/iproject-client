<template>
	<div class="outer-wrapper">
		<div class="wrapper" :class="$store.state.location.lat ? 'hasLocation' : 'noLocation'">
			<Landing />
			<Started />
			<div class="col" v-if="$store.state.location.lat">
				<div class="row">
					<CovidMap />
					<div class="slide four"></div>
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

export default {
	name: "Home",
	components: {
		Landing,
		Started,
		CovidMap,
	},
	created() {
		if (localStorage.location) {
			this.$store.dispatch("setLocation", location);
		}
	},
};
</script>

<style>
body.swal2-shown > [aria-hidden="true"] {
	filter: blur(10px);
}

body > * {
	transition: 0.1s filter linear;
}
.slide {
	width: 100vw;
	height: 100vh;
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
.four {
	background: #00dfdf;
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
