import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/tailwind.css";
import VTooltip from "v-tooltip";
import VueSocketIO from "vue-socket.io";
import VueYouTubeEmbed from "vue-youtube-embed";

// If you don't need the styles, do not connect
Vue.use(VueYouTubeEmbed);
Vue.use(VTooltip);
Vue.use(
    new VueSocketIO({
        debug: true,
        connection: "http://localhost:3000",
        vuex: {
            store,
            actionPrefix: "SOCKET_",
            mutationPrefix: "SOCKET_",
        },
    })
);

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");
