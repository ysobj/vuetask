<template>
  <div class="tasks">
    <h1>{{ msg }}</h1>
    <ul>
      <task v-for="item in taskList"
        v-bind:taskText="item.text"
        v-bind:isDone="item.isDone"
        v-bind:taskType="item.type"
        v-on:taskdone="taskdone(item)">
      </task>
    </ul>
    <div>
      <select-type v-model="tasktype"></select-type>
      <input type="text" v-model="tasktext"></input>
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
      tasktype: 'TODO',
      tasktext: 'this is sample',
      msg: 'This is Todo App',
      taskList: [
        { text: 'do something', isDone: false, type: 'TODO' },
        { text: 'eat more vagitable', isDone: true, type: 'DAILY' }
      ]
    }
  },
  methods: {
    addTask: function (ev) {
      this.taskList.push({ text: this.tasktext, isDone: false, type: this.tasktype })
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

.tasks {
  margin: auto;
}
</style>
