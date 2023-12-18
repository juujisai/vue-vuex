import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import "mdb-vue-ui-kit/css/mdb.min.css";
import store from "./store";

createApp(App).use(store).mount("#app");
