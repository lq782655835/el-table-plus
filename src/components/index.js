import Component from "./el-table-plus.jsx";

function install(Vue, options = {}) {
  if (install.installed) return;
  install.installed = true;

  Vue.component("el-table-plus", Component);
  Vue.prototype.$ELEMENT_PLUS = options
}
Component.install = install;

// auto plugin install
let GlobalVue = null;
if (typeof window !== "undefined") {
  GlobalVue = window.Vue;
} else if (typeof global !== "undefined") {
  GlobalVue = global.vue;
}
if (GlobalVue) {
  GlobalVue.use(Component);
}

// export default
export default Component;
