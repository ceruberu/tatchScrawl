// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import axios from 'axios';
import Vue from 'vue';
import App from './App';
import store from './store';
import router from './router';

Vue.config.productionTip = false;
Vue.prototype.$http = axios;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  created() {
    window.fbAsyncInit = async () => {
      await FB.init({
        appId: '1987673228177708',
        autoLogAppEvents: true,
        xfbml: true,
        version: 'v2.11',
      });

      FB.getLoginStatus((response) => {
        if (response.status === 'connected') {
          console.log('Logged in.');
        } else {
          FB.login();
        }
      });
    };

    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = 'https://connect.facebook.net/en_US/sdk.js';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  },
  template: '<App/>',
  components: { App },
});
