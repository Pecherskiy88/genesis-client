import Vue from 'vue';
import 'ant-design-vue/dist/antd.css';
import Antd from 'ant-design-vue';
import Notifications from 'vue-notification';

import App from './App.vue';
import router from './router';

Vue.use(Antd);
Vue.use(Notifications);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
