<template>
  <div>
    <select-type v-model="tasktype"></select-type>
    <input type="text" v-model="tasktext"></input>
    <button @click="addTask">add</button>
  </div>
</template>

<script>
import SelectType from './SelectType.vue'
export default {
  name: 'taskForm',
  data () {
    return {
      tasktype: 'TODO',
      tasktext: 'this is sample'
    }
  },
  methods: {
    addTask (ev) {
      this.$store.commit('addTask', { text: this.tasktext, type: this.tasktype })
    }
  },
  components: {
    SelectType
  }
}
</script>

<style scoped>
</style>
