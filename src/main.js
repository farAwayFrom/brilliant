import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import storage from "./utils/storage";
import ElementUI from "element-ui";
import i18n from "./lang";

import "./styles/variables.scss";

Vue.config.productionTip = false;

Vue.use(ElementUI, {
  size: storage.cookie.get("size") || "medium", // set element-ui default size
  i18n: (key, value) => i18n.t(key, value) // 自定义 Element 的 i18n 的处理方法
});

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount("#app");
