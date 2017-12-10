import Vue from 'vue';
import Vuetify from 'vuetify';
import Template from "./templates/main.vue";
Vue.use(Vuetify);


new Vue({
    el: '#app',
    data: {
      clipped: true,
      drawer: true,
      fixed: false,
      items: [
        { icon: 'bubble_chart', title: 'Inspire'},
        { icon: 'bubble_chart', title: 'test' },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Discussion Support System'
    }
    /*
    render: createElement => {
      return createElement(Template);
    }
    */
});
