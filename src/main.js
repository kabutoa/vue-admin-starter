import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import components from "@/utils/components";
Vue.use(components);

// 开发环境加载`mockjs`
if (process.env.NODE_ENV === "development") {
  require("@/mock");
}

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
