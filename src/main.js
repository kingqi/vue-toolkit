import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Vue from 'vue';
import QTool from '../packages';
import App from './App.vue';

Vue.use(ElementUI);
Vue.use(QTool);

Vue.config.productionTip = false;

new Vue({
	render: (h) => h(App),
}).$mount('#app');
