import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import "bootstrap";
import jQuery from "jquery";

window.jQuery = jQuery
window.$ = jQuery

//import require css
import "@fortawesome/fontawesome-free/css/all.min.css";
import "admin-lte/plugins/overlayScrollbars/css/OverlayScrollbars.min.css";
import "admin-lte/dist/css/adminlte.min.css";

//import require js
import "admin-lte/plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js";
import "admin-lte/dist/js/adminlte.min.js";

//import custom css theme
import "./style/App.css";


Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
