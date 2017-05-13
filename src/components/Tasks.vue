<template>
  <div class="tasks">
    <h1>{{ msg }}</h1>
    <table>
      <task v-for="item in taskList"
        :taskText="item.text"
        :isDone="item.isDone"
        :taskType="item.type"
        @changeTaskState="changeTaskState(item)">
      </task>
    </table>
    <task-form></task-form>
  </div>
</template>

<script>
import Task from './Task.vue'
import TaskForm from './TaskForm.vue'
export default {
  name: 'tasks',
  data () {
    return {
      msg: 'This is Todo App'
    }
  },
  computed: {
    taskList () {
      return this.$store.state.taskList
    }
  },
  methods: {
    changeTaskState (ev) {
      this.$store.commit('changeTaskState', ev)
    }
  },
  components: {
    Task,
    TaskForm
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

.tasks table {
  display: inline-block;
}
</style>
