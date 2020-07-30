import Vue from "vue";

import Vant from "vant";
import "vant/lib/index.css";
import "@/common/css/style.css";

import router from "@/router";
import store from "@/store";
import App from "@/pages/App";

Vue.use(Vant);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
