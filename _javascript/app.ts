import Vue from 'vue';
import Tooltip from 'vue-directive-tooltip';

import v2Button from './components/v2Button';
import v2Tab from './components/v2Tab.vue';
import v2Tabset from './components/v2Tabset.vue';

import v2Accordian from './components/v2Accordian.vue';

Vue.use(Tooltip);

new Vue({
  el: '#app',
  delimiters: ['((', '))'],
  components: {
    v2Button,
    v2Tab,
    v2Tabset,
    v2Accordian
  }
});
