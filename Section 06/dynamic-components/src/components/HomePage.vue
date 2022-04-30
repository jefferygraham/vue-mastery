<template>
  <h1>Home Page</h1>
</template>

<script>
export default {
  unmounted() {
    console.log('home page unmounted');
  },
  activated() {
    console.log('home page activated');
  },
  deactivated() {
    console.log('home page deactivated');
  },
};
</script>
