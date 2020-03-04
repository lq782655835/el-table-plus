import Component from "./el-table-plus.vue";
import { getDataValue } from "./util";

function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.prototype.$getDataValue = (...args) => getDataValue(Vue, ...args);
  Vue.component("el-table-plus", Component);
}

// auto plugin install
let GlobalVue = null;
if (typeof window !== "undefined") {
  GlobalVue = window.Vue;
} else if (typeof global !== "undefined") {
  GlobalVue = global.vue;
}
if (GlobalVue) {
  GlobalVue.use({ install });
}

// export default
Component.install = install;
export default Component;
