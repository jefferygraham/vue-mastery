import { createApp } from 'vue';
import App from './App.vue';

// import GreetingMessage from './components/GreetingMessage.vue';

const vm = createApp(App);

// vm.component(GreetingMessage);

vm.mount('#app');
