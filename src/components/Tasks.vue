<template>
  <div class="tasks">
    <h1>{{ msg }}</h1>
    <ul>
      <li>write some simple sample code.</li>
      <li>learn vuex basic.</li>
      <task v-for="item in taskList"
        v-bind:taskText="item.text"
        v-bind:isDone="item.isDone"
        v-on:taskdone="taskdone(item)">
      </task>
    </ul>
    <div>
      <input type="text" v-model="tasktext"></input>
      <select-type></select-type>
      <button v-on:click="addTask">add</button>
    </div>
  </div>
</template>

<script>
import Task from './Task.vue'
import SelectType from './SelectType.vue'
export default {
  name: 'tasks',
  data () {
    return {
      tasktext: 'this is sample',
      msg: 'Welcome to Your Vue.js App',
      taskList: [
        { text: 'do something', isDone: false },
        { text: 'eat more vagitable', isDone: true }
      ]
    }
  },
  methods: {
    addTask: function (ev) {
      console.log('addTask', ev)
      this.msg = new Date()
      this.taskList.push({ text: this.tasktext, isDone: false })
    },
    taskdone: function (ev) {
      ev.isDone = !ev.isDone
    }
  },
  components: {
    Task,
    SelectType
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}

a {
  color: #42b983;
}
</style>
