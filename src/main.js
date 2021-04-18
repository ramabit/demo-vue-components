import Vue from 'vue'
import App from './App.vue'

// Global icons
import './globals/icons';

// Global components
import './components/globalComponents';

// Global styles
import './styles/main.scss';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
