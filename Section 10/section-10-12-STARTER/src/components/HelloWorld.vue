<template>
  <div>
    <slot :user="user" :favorites="favorites"></slot>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      user: {
        name: 'Jeff',
        age: 43,
      },
      favorites: ['Pizza', 'Marbles', 'Birds'],
    };
  },
};
</script>
