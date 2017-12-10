import Vue from 'vue';
import Vuetify from 'vuetify';
import MainTemplate from "./components/App.vue";

Vue.use(Vuetify);


new Vue({
    el: '#app',
    render: createElement => {
        console.log(MainTemplate);
        return createElement(MainTemplate);
    }

});
