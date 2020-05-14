// import '@fortawesome/fontawesome-free/css/all.min.css'
// import 'bootstrap-css-only/css/bootstrap.min.css'
// import 'mdbvue/lib/css/mdb.min.css'
import Vue from 'vue'
import App from './App'
import router from './router'

// const Vue = () => import("vue");
// const App = () => import("./App");
// const router = () => import("./router");

// import { BootstrapVue} from 'bootstrap-vue'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

// Install BootstrapVue
// Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
// Vue.use(IconsPlugin)

Vue.config.productionTip = false

const main = new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

export default main;
