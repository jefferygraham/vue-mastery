let vm = Vue.createApp({
  // template: ``,
});

vm.component("hello", {
  template: `<h1>{{ message }}</h1>`,
  data() {
    return {
      message: "Hello World!",
    };
  },
});

vm.mount("#app");

// const vm2 = Vue.createApp({
//   data() {
//     return {
//       message: "Hello world!",
//     };
//   },
//   render() {
//     return Vue.h(
//       h1
//     );
//   },
// }).mount("#app2");
