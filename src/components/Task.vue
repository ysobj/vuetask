<template>
  <li class="task">
    <span v-on:click="deleteTask">{{ xtask.text }}</span>
  </li>
</template>

<script>
export default {
  name: 'task',
  props: ['xtask'],
  data () {
    return {
      task: 'hogehogefugafuga'
    }
  },
  methods: {
    deleteTask: function (ev) {
      console.log('deleteTask', ev)
      console.log(this.xtask.text)
    }
  }
}
</script>

<style scoped>
</style>
