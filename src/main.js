import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import VueGeolocation from "vue-browser-geolocation";
import VueHorizontal from "vue-horizontal";
import VueTilt from "vue-tilt.js";
import * as VueGoogleMaps from "vue2-google-maps";

Vue.use(VueGeolocation);
Vue.use(VueHorizontal);
Vue.use(VueTilt);
Vue.use(VueGoogleMaps, {
	load: {
		key: "AIzaSyBgpC1SC7h63uaj1352XOJLqxet94MCdlE",
		libraries: "places,drawing,visualization",
	},
	installComponents: true,
});

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount("#app");
