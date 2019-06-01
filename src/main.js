import Vue from 'vue';
import App from './App.vue';
import BootstrapVue from 'bootstrap-vue';
import VueMoment from 'vue-moment';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCertificate, faGraduationCap, faBriefcase, faAddressCard, faEnvelope, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faStackOverflow } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome';
 
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component('font-awesome-layers', FontAwesomeLayers);
Vue.component('font-awesome-layers-text', FontAwesomeLayersText);
 
library.add(faCertificate, faGraduationCap, faBriefcase, faAddressCard, faEnvelope, faMobileAlt, faLinkedin, faGithub, faStackOverflow);

Vue.use(BootstrapVue);
Vue.use(VueMoment);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
