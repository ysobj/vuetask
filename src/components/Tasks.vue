<template>
  <div class="tasks">
    <table>
      <tbody>
        <draggable v-model="taskList">
          <task v-for="item in taskList"
            :taskText="item.text"
            :taskType="item.type"
            :id="item.id"
            :key="item.id"
            @updateTask="updateTask(item)"
            @updateTaskState="updateTaskState(item)">
          </task>
        </draggable>
      </tbody>
    </table>
    <task-form></task-form>
  </div>
</template>

<script>
import Task from './Task.vue'
import TaskForm from './TaskForm.vue'
import draggable from 'vuedraggable'
export default {
  name: 'tasks',
  data () {
    return {
      msg: 'This is Todo App'
    }
  },
  computed: {
    taskList: {
      get () {
        return this.$store.state.taskList
      },
      set (value) {
        this.$store.commit('updateList', value)
      }
    }
  },
  methods: {
    updateTaskState (ev) {
      this.$store.commit('updateTaskState', ev)
    },
    updateTask (ev) {
      this.$store.commit('updateTask', ev)
    }
  },
  components: {
    Task,
    TaskForm,
    draggable
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
