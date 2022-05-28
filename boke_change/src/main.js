import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
/*引入百度地图api */
/* import BaiduMap from 'vue-baidu-map' */

//引入elementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from "axios"


Vue.use(ElementUI);
Vue.config.productionTip= false;

Vue.prototype.$axios = axios;
axios.defaults.baseUrl='http://localhost:8080'


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


/* Vue.use(BaiduMap, {
  ak: 'fAxzjsg4dKo6nYfGKGrBWLpcHPbf9Nc3'
}) */