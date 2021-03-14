import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    form2:{}
  },
  mutations: {
    setForm(state,form){
      state.form2=form
    },
  }
});