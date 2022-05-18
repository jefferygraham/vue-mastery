import { createStore } from 'vuex';
import { auth, usersCollection } from '@/includes/firebase'; // @ = src
import { Howl } from 'howler';

export default createStore({
  state: {
    authModalShow: false,
    userLoggedIn: false,
    currentSong: {},
    sound: {},
  },
  mutations: {
    toggleAuthModal: (state) => {
      state.authModalShow = !state.authModalShow;
    },
    toggleUserLoggedIn: (state) => {
      state.userLoggedIn = !state.userLoggedIn;
    },
    newSong: (state, payload) => {
      state.currentSong = payload;

      state.sound = new Howl({
        src: [payload.url],
        html5: true,
      });
    },
  },
  getters: {
    // authModalShow: (state) => state.authModalShow,
    playing: (state) => {
      if (state.sound.playing) {
        return state.sound.playing();
      }

      return false;
    },
  },
  actions: {
    async register({ commit }, payload) {
      const userCred = await auth.createUserWithEmailAndPassword(
        payload.email,
        payload.password,
      );

      await usersCollection.doc(userCred.user.uid).set({
        name: payload.name,
        email: payload.email,
        age: payload.age,
        country: payload.country,
      });

      await userCred.user.updateProfile({
        displayName: payload.name,
      });

      commit('toggleUserLoggedIn');
    },
    async login({ commit }, payload) {
      await auth.signInWithEmailAndPassword(payload.email, payload.password);

      commit('toggleUserLoggedIn');
    },
    async signout({ commit }) {
      await auth.signOut();

      commit('toggleUserLoggedIn');

      // if (payload.route.meta.requiresAuth) {
      //   payload.router.push({ name: "home" });
      // }
    },
    async newSong({ commit, state }, payload) {
      commit('newSong', payload);

      state.sound.play();
    },
    async toggleAudio({ state }) {
      if (!state.sound.playing) {
        return;
      }

      if (state.sound.playing()) {
        state.sound.pause();
      } else {
        state.sound.play();
      }
    },
    init_login({ commit }) {
      const user = auth.currentUser;

      if (user) {
        commit('toggleUserLoggedIn');
      }
    },
  },
});
