<template>
  <app-header />

  <router-view></router-view>

  <audio-player></audio-player>

  <auth-modal />
</template>

<script>
import AudioPlayer from '@/components/AudioPlayer.vue';
import AppHeader from './components/AppHeader.vue';
import AuthModal from './components/AuthModal.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AuthModal,
    AudioPlayer,
  },
  created() {
    this.$store.dispatch('init_login');
  },
};
</script>

<style>
a {
  color: inherit;
}
</style>
