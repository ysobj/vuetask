<template>
  <li class="task">
    <span v-bind:class="{ done: isDone }" v-on:click="deleteTask">{{ xtask.text }}</span>
  </li>
</template>

<script>
export default {
  name: 'task',
  props: ['xtask'],
  data () {
    return {
      task: 'hogehogefugafuga',
      isDone: false
    }
  },
  methods: {
    deleteTask: function (ev) {
      this.isDone = !this.isDone
    }
  }
}
</script>

<style scoped>
.done {
  text-decoration: line-through
}
</style>
