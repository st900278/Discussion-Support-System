var Vue = require('vue');

var app = new Vue({
  el : '#app',
  components: {
    'my-hoge': {
      template: "test"
    },
    'my-foo': {
      template: require('./templates/foo.html')
    }
  }
});
