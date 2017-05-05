<template>
  <li class="task">
    <span class="task-type-base" v-bind:class="typeClass">{{ taskType }}</span>
    <span v-bind:class="{ done: isDone }" v-on:click="deleteTask">{{ taskText }}</span>
  </li>
</template>

<script>
export default {
  name: 'task',
  props: ['taskText', 'isDone', 'taskType'],
  data () {
    return {
    }
  },
  methods: {
    deleteTask: function (ev) {
      this.$emit('taskdone')
    }
  },
  computed: {
    typeClass: function () {
      return {
        'task-type-todo': this.taskType === 'TODO',
        'task-type-daily': this.taskType === 'DAILY',
        'task-type-habit': this.taskType === 'HABIT'
      }
    }
  }
}
</script>

<style scoped>
.task {
  height: 33px
}
.done {
  text-decoration: line-through
}
.task-type-base {
  color: white;
  padding: 3px 3px;
  border-radius: 3px;
}
.task-type-todo {
  background-color: orange;
}
.task-type-daily {
  background-color: green;
}
.task-type-habit {
  background-color: red;
}
</style>
