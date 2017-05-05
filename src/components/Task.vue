<template>
  <li class="task">
    <span v-bind:class="{ done: isDone }" v-on:click="deleteTask">{{ taskText }}</span>
  </li>
</template>

<script>
export default {
  name: 'task',
  props: ['taskText', 'isDone'],
  data () {
    return {
    }
  },
  methods: {
    deleteTask: function (ev) {
      this.$emit('taskdone')
    }
  }
}
</script>

<style scoped>
.done {
  text-decoration: line-through
}
</style>
