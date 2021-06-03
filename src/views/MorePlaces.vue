<template>
	<div id="more" class="d-flex flex-column justify-content-center align-items-center">
		<div class="inputplace">
			<div class="inputdata mb-5">
				<label>Search Places</label>
				<gmap-autocomplete placeholder="This is a placeholder text" @place_changed="setPlace"> </gmap-autocomplete>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	methods: {
		setPlace(place) {
			this.$store.commit("SET_PLACE", place);
			this.$router.push("/detail").catch(() => {});
		},
	},
};
</script>

<style>
#more {
	width: 100vw;
	height: 100vh;

	background-image: linear-gradient(to right, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0)), url("../assets/bg-home.png");
	background-size: 100% 100%;
	background-repeat: no-repeat;
}
.inputplace {
	width: 450px;
	background: #fff;
	padding: 30px;
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}
.inputplace .inputdata {
	height: 40px;
	width: 100%;
	position: relative;
}
.inputplace .inputdata input {
	height: 100%;
	width: 100%;
	border: none;
	font-size: 17px;
	border-bottom: 2px solid silver;
}
.inputplace .inputdata input:focus {
	outline: none !important;
}
</style>
