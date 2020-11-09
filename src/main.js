import Vue from 'vue'
import App from './App.vue'
import BaseCard from './UI/BaseCard.vue';
import BaseButton from './UI/BaseButton.vue';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

Vue.component('base-card', BaseCard);
Vue.component('base-button', BaseButton);

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
