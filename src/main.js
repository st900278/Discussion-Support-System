import Vue from 'vue';
import Vuetify from 'vuetify';
import temp from "./templates/main.vue";
Vue.use(Vuetify);
console.log(temp);

new Vue({
    el: '#app',
    render: h => h(temp)
});
