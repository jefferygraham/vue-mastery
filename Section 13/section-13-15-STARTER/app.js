const app = Vue.createApp({
  data: () => ({
    title: 'Hello',
  }),
}).mount('#app');

console.log(app.$refs.greeting);

app.$refs.greeting.innerText = 'Another Hello';
