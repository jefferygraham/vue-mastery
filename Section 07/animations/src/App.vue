<template>
  <button type="button" @click="flag = !flag">Toggle</button>

  <!-- <transition name="fade" mode="out-in">
    <h2 v-if="flag" key="main">Hello</h2>
    <h2 v-else key="secondary">Hello again</h2>
  </transition> -->

  <!-- <transition name="zoom" type="animation" appear>
    <h2 v-if="flag">Hello</h2>
  </transition> -->

  <!-- <transition
    @before-enter="beforeEnter"
    @enter="enter"
    @after-enter="afterEnter"
    @before-leave="beforeLeave"
    @leave="leave"
    @after-leave="afterLeave"
    :css="true"
    name="fade"
  >
    <h2 v-if="flag">Hey</h2>
  </transition> -->
  <button @click="addItem">Add</button>

  <ul>
    <transition-group
      name="fade"
      enter-active-class="animate__animated animate__flipInX"
      leave-active-class="animate__animated animate__flipOutX"
    >
      <li
        v-for="(number, idx) in numbers"
        :key="number"
        @click="removeItem(idx)"
      >
        {{ number }}
      </li>
    </transition-group>
  </ul>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      flag: true,
      numbers: [1, 2, 3, 4, 5],
    };
  },
  methods: {
    addItem() {
      const num = Math.floor(Math.random() * 100 + 1);
      const idx = Math.floor(Math.random() * this.numbers.length);

      this.numbers.splice(idx, 0, num);
    },
    removeItem(idx) {
      this.numbers.splice(idx, 1);
    },
    beforeEnter(element) {
      console.log('before-enter event called', element);
    },
    enter(element) {
      console.log('enter event called', element);

      // const animation = element.animate([{ transform: 'scale3d(0,0,0' }, {}], {
      //   duration: 1000,
      // });

      // animation.onfinish = () => {
      //   done();
      // };
    },
    afterEnter(element) {
      console.log('after-enter event called', element);
    },
    beforeLeave(element) {
      console.log('before-leave event called', element);
    },
    leave(element) {
      console.log('leave event called', element);
      // const animation = element.animate([{}, { transform: 'scale3d(0,0,0)' }], {
      //   duration: 1000,
      // });
      // animation.onfinish = () => {
      //   done();
      // };
    },
    afterLeave(element) {
      console.log('after-leave event called', element);
    },
  },
};
</script>

<style>
.animate__animated {
  duration: 1.5s;
}

.animate__flipOutX {
  position: absolute;
}

h2 {
  width: 400px;
  padding: 20px;
  margin: 20px;
}

li {
  font-size: 22px;
  cursor: pointer;
}

.fade-enter-from {
  opacity: 0;
}

.fade-enter-active {
  transition: all 1s linear;
}

.fade-leave-to {
  transition: all 1s linear;
  opacity: 0;
}

.fade-move {
  transition: all 1s linear;
}

.fade-leave-active {
  position: absolute;
}

.zoom-enter-active {
  animation: zoom-in 1s linear forwards;
  transition: all 2s linear;
}

.zoom-leave-active {
  animation: zoom-out 1s linear forwards;
  transition: all 2s linear;
}

.zoom-enter-from {
  opacity: 0;
}

.zoom-leave-to {
  opacity: 0;
}

@keyframes zoom-in {
  from {
    transform: scale(0, 0);
  }

  to {
    transform: scale(1, 1);
  }
}

@keyframes zoom-out {
  from {
    transform: scale(1, 1);
  }

  to {
    transform: scale(0, 0);
  }
}
</style>
