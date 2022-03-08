import Vue from 'vue';
import Vuex from 'vuex';

import data from '../services';

Vue.use(Vuex);

export default new Vuex.Store({
  // 1. Create State
  state: {
    user: {
      name: 'John',
    },
    // create Site Detail
    siteInfo: {
      title: 'Portfolio Vue',
      description: 'This is a portfolio website',
    },
    project: [
      ...data,
    ],
  },
  mutations: {
    // 2. Create Mutations to manipulate State
    setUser(state, user) {
      state.user = user;
    },
  },
  // 4. Use Getters to call and mutate date
  getters: {
    getUser(state) {
      return state.user;
    },
    // get Name from state
    getName: (state) => state.user.name,
    // get Site Detail from state
    getSiteInfo: (state) => state.siteInfo,
    getProject: (state) => state.project,
  },
  actions: {
    // 3. Create Actions to trigger mutation
    callSetUser({ commit }, payload) {
      commit('setUser', payload);
    },
  },
  modules: {
  },
});
