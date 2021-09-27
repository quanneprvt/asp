import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element-ui.js'
import './assets/ant-icon'
import axios from '@/plugins/axios'
import AsyncComputed from 'vue-async-computed'
import '@/plugins/vue-echarts'
import VueClipboard from 'vue-clipboard2'
import {jumpTo} from '@/utils/routerUtils'
import commonPlugin from '@/plugins/common'
import _ from 'lodash'
import vuetify from '@/plugins/vuetify'
import './style/index.scss'


Vue.config.productionTip = false;

Vue.use(commonPlugin);
Vue.use(AsyncComputed);
Vue.use(VueClipboard);

Vue.prototype.$vars = store.state.style.vars;
Vue.prototype.$themes = store.state.style.themes;
Vue.prototype.$apps = store.state.apps;
Vue.prototype.$jumpTo = jumpTo;
Vue.prototype.$routeState = store.state.routeState;
Vue.prototype.$loda = _;

Vue.prototype.$axios = axios;

new Vue({
	vuetify,
	router,
	store,
	render: h => h(App)
}).$mount('#app');
