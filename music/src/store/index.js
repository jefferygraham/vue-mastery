import { createStore } from 'vuex';
import { auth, usersCollection } from '@/includes/firebase'; // @ = src

export default createStore({
  state: {
    authModalShow: false,
    userLoggedIn: false,
    currentSong: {},
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
    },
  },
  getters: {
    // authModalShow: (state) => state.authModalShow,
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
      auth.signOut();

      commit('toggleUserLoggedIn');

      // if (payload.route.meta.requiresAuth) {
      //   payload.router.push({ name: "home" });
      // }
    },
    async newSong({ commit }, payload) {
      commit('newSong', payload);
    },
    init_login({ commit }) {
      const user = auth.currentUser;

      if (user) {
        commit('toggleUserLoggedIn');
      }
    },
  },
});
