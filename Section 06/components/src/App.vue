<template>
  <h3>Hey!</h3>
  <greeting-message :age="age"></greeting-message>
  <user-info
    :age="age"
    @age-change="updateAge"
    :ageChangeFn="updateAgeCB"
  ></user-info>
</template>

<script>
import GreetingMessage from './components/GreetingMessage.vue';
import UserInfo from './components/UserInfo.vue';

export default {
  name: 'App',
  components: { GreetingMessage, UserInfo },
  data() {
    return {
      age: 43,
    };
  },
  methods: {
    updateAge(num) {
      this.age += num;
    },
    updateAgeCB(num) {
      this.age += num;
    },
  },
};
</script>
