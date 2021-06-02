<template>
	<div>
		Place Detail Page
	</div>
</template>

<script>
export default {
	created() {
		if (!Object.keys(this.$store.state.place).length) {
			this.$router.push("/").catch(() => {});
		}
	},
};
</script>

<style></style>
