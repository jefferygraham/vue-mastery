<template>
  <p v-if="age >= 45">{{ greetingMessage }}</p>
  <p v-else>Must be 45+ years old to view this message.</p>
</template>

<script>
export default {
  name: 'greeting-message',
  props: ['age'],
  data() {
    return {
      greetingMessage: 'Hello, Jeff!',
    };
  },
};
</script>

<style scoped lang="scss">
$red: red;
p {
  color: $red;
}
</style>
