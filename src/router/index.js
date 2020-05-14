import Vue from 'vue';
import Router from 'vue-router';


// import VueScrollTo from 'vue-scrollto';
// import VuePageTransition from 'vue-page-transition'

import main from "../main.js";
import VueScrollTo from "vue-scrollto";
const VuePageTransition = () => import("vue-page-transition");

Vue.use(VueScrollTo, {
  container: "body",
  duration: 500,
  easing: "ease",
  offset: -100,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
})
Vue.use(VuePageTransition)
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/components/pages/Home'),
    },
    {
      path: '/beton',
      name: 'Beton',
      component: () => import('@/components/pages/Beton'),
    },
    {
      path: '/help',
      name: 'Help',
      component: () => import('@/components/pages/Help')
    },
    {
      path: '/concrete_styling',
      name: 'ConcreteStyling',
      component: () => import('@/components/pages/ConcreteStyling')
    },
    {
      path: '/history_beton',
      name: 'HistoryBeton',
      component: () => import('@/components/pages/HistoryBeton')
    }

  ],
  /* eslint-disable no-unused-vars */
  async scrollBehavior (to, from, savedPosition) {
    return new Promise(resolve => {
      main.$root.$once("scrollAfterEnter", () => {
        if (to.hash) {
          VueScrollTo.scrollTo(to.hash, 1000, {
            offset: -100
          });
          resolve({ selector: to.hash })
        } else {
          VueScrollTo.scrollTo({ x: 0, y: 0 }, 500);
          // window.scrollTo(0,0);
          resolve({ x: 0, y: 0 })
        }
      });
    });
  }
});
