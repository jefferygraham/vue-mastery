import { createStore } from "vuex";
import { auth, usersCollection } from "@/includes/firebase"; // @ = src

export default createStore({
  state: {
    authModalShow: false,
    userLoggedIn: false,
  },
  mutations: {
    toggleAuthModal: (state) => {
      state.authModalShow = !state.authModalShow;
    },
    toggleUserLoggedIn: (state) => {
      state.userLoggedIn = !state.userLoggedIn;
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

      commit("toggleUserLoggedIn");
    },
    async login({ commit }, payload) {
      await auth.signInWithEmailAndPassword(payload.email, payload.password);

      commit("toggleUserLoggedIn");
    },
    async signout({ commit }) {
      await auth.signOut();
      commit("toggleUserLoggedIn");
    },
    init_login({ commit }) {
      const user = auth.currentUser;

      if (user) {
        commit("toggleUserLoggedIn");
      }
    },
  },
});
