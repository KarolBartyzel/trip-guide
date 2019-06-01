import Vue from 'vue';
import App from './App.vue';
import router from './router';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faWifi, faBed, faPlane, faStar, faStarHalfAlt, faChevronLeft, faMapMarkerAlt, faClock, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faWifi, faBed, faPlane, faStar, faStarHalfAlt, faChevronLeft, faMapMarkerAlt, faClock, faPhone );
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
