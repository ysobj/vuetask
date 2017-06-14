<template>
  <div class="tasks">
    <table>
      <tbody>
        <draggable v-model="taskList">
          <task v-for="item in taskList"
            :taskText="item.text"
            :taskType="item.type"
            :key="item.id"
            :editable="item.editable"
            @changeEditMode="changeTaskEditMode(item, $event)"
            @changeTaskState="changeTaskState(item)">
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
    changeTaskState (ev) {
      this.$store.commit('changeTaskState', ev)
    },
    changeTaskEditMode (item, ev) {
      console.log(item, ev)
      if (ev) {
        this.taskList.forEach((task) => {
          if (task !== item && item.editable) {
            console.log('test')
            item.editable = false
          }
        })
      }
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
