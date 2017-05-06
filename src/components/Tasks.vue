<template>
  <div class="tasks">
    <h1>{{ msg }}</h1>
    <ul>
      <task v-for="item in taskList"
        v-bind:taskText="item.text"
        v-bind:isDone="item.isDone"
        v-bind:taskType="item.type"
        @changeTaskState="changeTaskState(item)">
      </task>
    </ul>
    <div>
      <select-type v-model="tasktype"></select-type>
      <input type="text" v-model="tasktext"></input>
      <button @click="addTask">add</button>
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
      msg: 'This is Todo App'
    }
  },
  computed: {
    taskList () {
      return this.$store.state.taskList
    }
  },
  methods: {
    addTask (ev) {
      this.$store.commit('addTask', { text: this.tasktext, isDone: false, type: this.tasktype })
    },
    changeTaskState (ev) {
      this.$store.commit('changeTaskState', ev)
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
