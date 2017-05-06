import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  taskList: [
    { text: 'do something', isDone: false, type: 'TODO' },
    { text: 'eat more vagitable', isDone: true, type: 'DAILY' },
    { text: 'eat more vagitable?', isDone: true, type: 'HABIT' }
  ]
}

const actions = {
}

const mutations = {
  addTask (state, task) {
    state.taskList.push(task)
  },
  changeTaskState (state, task) {
    console.log('changeTaskState', task)
    let tmp = state.taskList.find((el) => el === task)
    tmp.isDone = !tmp.isDone
  }
}

export default new Vuex.Store({
  state,
  actions,
  mutations
})
