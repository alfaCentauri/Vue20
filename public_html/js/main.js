/* 
    Created on : 04/02/2019, 03:35:00 PM
    Author     : Ricardo Presilla.
    Licencia GNU.
*/
Vue.component('base-checkbox', {
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    checked: Boolean
  },
  template: `
    <input
      type="checkbox"
      v-bind:checked="checked"
      v-on:change="$emit('change', $event.target.checked)"
    >
  `
});

var vue = new Vue({
    el: '#app',
    data: {
        lovingVue: ''
    }
});

