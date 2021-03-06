/* eslint-disable no-console */
import './assets/scss/base.scss';
import Vue from 'vue';
import App from './App';
import VueLazyLoad from 'vue-lazyload';
import infiniteScroll from 'vue-infinite-scroll';
import axios from 'axios';
import loadsh from 'lodash';
import store from './vuex/index';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { currency } from './utils/currency';
import * as utils from './utils/validation';
import moment from 'moment';
import router from './router';

Vue.config.productionTip = false;
Vue.use(VueLazyLoad, {
    loading: '/static/loading-svg/loading-balls.svg'
});
Vue.use(infiniteScroll);
axios.interceptors.response.use(
    response => {
        console.log('success', { data: response.data, status: response.status });
        if (!response.data.success && response.data.status === 100) {
            router.replace('/');
            store.commit('user/updateUser', '');
        }
        return response.data;
    },
    error => {
        console.log('error');
        console.log(error);
        console.log(JSON.stringify(error));
        return Promise.reject(error);
    }
);
Vue.prototype.$http = axios;
Vue.prototype._ = loadsh;
Vue.prototype.$utils = utils;
// Vue.prototype.$API = 'http://localhost:3000';
Vue.prototype.$API = 'http://www.fanzehua.cn';
Vue.prototype.$moment = moment;
Vue.filter('currency', currency);
Vue.use(ElementUI, { size: 'small', zIndex: 3000 });

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
