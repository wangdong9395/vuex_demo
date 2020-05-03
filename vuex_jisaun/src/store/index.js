import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    add (state) {
      state.count++
    },
    sub (state) {
      state.count--
    },
    addN (state, step) {
      state.count += step
    },
    subN (state, step) {
      state.count -= step
    }
  },
  actions: {
    addAsync (context) {
      setTimeout(() => {
        context.commit('add')
      }, 2000)
    },
    subAsync (context) {
      setTimeout(() => {
        context.commit('sub')
      }, 2000)
    }
  },
  getters: {
    showInfo (state) {
      return '这是通过getters加工处理过的数据' + state.count * 2
    },
    showInfo2 (state) {
      return '这是通过getters加工处理过的数据2---' + (state.count + 5)
    }
  },
  modules: {
  }
})
