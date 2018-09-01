import Vue from 'nativescript-vue';
import router from './router';
//Vue.registerElement('Gradient', () => require('nativescript-gradient').Gradient);


import './styles.scss';

// Uncomment the following to see NativeScript-Vue output logs
//Vue.config.silent = false;

new Vue({

  router,


}).$start();
