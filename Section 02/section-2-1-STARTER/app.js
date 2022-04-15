const vm = Vue.createApp({
  data() {
    return {
      firstName: "Jeff",
      middleName: "",
      lastName: "Graham",
      url: "https://google.com",
      rawUrl:
        '<a href="https://google.com" target="_blank" rel="noopener noreferrer"> Google </a>',
      age: 43,
    };
  },
  methods: {
    increment() {
      this.age++;
    },
    updateMiddleName(event) {
      this.middleName = event.target.value;
    },
    updateLastName(message, event) {
      this.lastName = event.target.value;
      console.log(message);
    },
  },
  computed: {
    fullName() {
      console.log("Full name computed property called");

      return `${this.firstName} ${
        this.middleName
      } ${this.lastName.toUpperCase()}`;
    },
  },
  watch: {
    age(newVal, oldVal) {
      setTimeout(() => {
        this.age = 44;
      }, 3000);
    },
  },
}).mount("#app");

// setTimeout(() => {
//   vm.firstName = "Jeffery";
// }, 2000);

// Vue.createApp({
//   data() {
//     return {
//       firstName: "Jeffery",
//       lastName: "G",
//     };
//   },
// }).mount("#app2");
