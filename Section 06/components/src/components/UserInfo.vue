<template>
  <button @click.prevent="onClickAge">Increment Age Event</button>
  <button @click.prevent="ageChangeFn(3)">Increment Age CB</button>

  <p>The user is {{ age }} years old</p>
  <p>{{ ageDoubled }}</p>
</template>

<script>
export default {
  name: 'UserInfo',
  emits: ['age-change'],
  props: {
    age: {
      type: Number,
      // required: true,
      // default: 43,
      validator(value) {
        return value < 130;
      },
    },
    ageChangeFn: Function,
  },
  computed: {
    ageDoubled() {
      return this.age * 2;
    },
  },
  methods: {
    onClickAge() {
      this.$emit('age-change', 3);
    },
  },
};
</script>
