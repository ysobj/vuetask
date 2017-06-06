import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  taskList: [
    { id: 1, text: 'do something', type: 'TODO' },
    { id: 2, text: 'eat more vagitable', type: 'DAILY' },
    { id: 3, text: 'eat more vagitable?', type: 'HABIT' }
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
  },
  updateList (state, list) {
    state.taskList.splice(0, state.taskList.length)
    list.forEach((item) => state.taskList.push(item))
  }
}

export default new Vuex.Store({
  state,
  actions,
  mutations,
  strict: true
})
