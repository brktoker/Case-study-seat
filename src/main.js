import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import 'animate.css'

var _ = require('lodash');

createApp(App).use(store).use(router).mount("#app");
