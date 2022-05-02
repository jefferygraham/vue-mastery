<template>
  <div class="result">
    <div class="title">{{ results[resultIdx].title }}</div>
    <div class="desc">{{ results[resultIdx].desc }}</div>
  </div>
</template>

<script>
export default {
  name: 'ResultItem',
  props: ['results', 'totalCorrect'],
  computed: {
    resultIdx() {
      let idx = 0;
      this.results.forEach((result, i) => {
        if (
          result.min <= this.totalCorrect &&
          result.max >= this.totalCorrect
        ) {
          idx = i;
        }
      });
      return idx;
    },
  },
};
</script>

<style></style>
