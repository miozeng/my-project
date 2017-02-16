import Vue from 'vue'
import ElementUI from 'element-ui';
import axios from 'axios'
import App from './App'
import VueRouter from 'vue-router'
import modulPage from './views/modul'
import projectPage from './views/project'
import testcasePage from './views/testcase'
import store from './store'
import  'element-ui/lib/theme-default/index.css';


// import { Button, Dialog }  from 'element-ui';
// Vue.component(Button.name, Button)
// Vue.component(Dialog.name, Dialog)

Vue.use(ElementUI);
Vue.use(VueRouter)
let router = new VueRouter({
	mode: 'history',
	routes: [
		{
			path: '/',
			component: projectPage
		},
		{
			path: '/modul/:projectid',
			component: modulPage
		},
		{
			path: '/testcase/:modulid',
			component: testcasePage
		}
	]
})

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})