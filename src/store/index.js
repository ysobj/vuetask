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

const getters = {
}

const actions = {
  getTaskByDate (context, {from, to}) {
    let str = JSON.stringify(context.state.taskList)
    localStorage.setItem(from.format('YYYY-MM-DD'), str)
    let tmp = localStorage.getItem(to.format('YYYY-MM-DD'))
    let newTaskList = []
    if (tmp) {
      newTaskList = JSON.parse(tmp)
    }
    context.commit('updateList', newTaskList)
  }
}

const mutations = {
  addTask (state, task) {
    state.taskList.push(task)
  },
  updateTaskState (state, task) {
    let tmp = state.taskList.find((el) => el === task)
    tmp.isDone = !tmp.isDone
  },
  updateTask (state, task) {
    let tmp = state.taskList.find((el) => el.id === task.id)
    tmp.text = task.taskText
    tmp.estimate = task.estimate
    tmp.fromDate = new Date()
    tmp.toDate = new Date()
  },
  updateList (state, list) {
    state.taskList.splice(0, state.taskList.length)
    list.forEach((item) => state.taskList.push(item))
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  strict: true
})
