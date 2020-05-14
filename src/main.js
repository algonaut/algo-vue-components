import Vue from 'vue';
import App from './App.vue';
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue';
import VueFormGenerator from 'vue-form-generator';
import Vuelidate from 'vuelidate';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'vue-form-generator/dist/vfg.css';

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.use(VueFormGenerator);

Vue.use(Vuelidate);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount('#app');
