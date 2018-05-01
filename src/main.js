import Vue from 'vue';
import VueHighlightJS from 'vue-highlightjs';

import Example from './Example';
import 'highlight.js/styles/default.css';
Vue.use(VueHighlightJS);

new Vue({
  el: '#app',
  render: h => h(Example)
});
