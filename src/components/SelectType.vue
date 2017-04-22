<template>
  <select class="selecttype">
    <option v-for="item in types" v-bind:value="item.value">{{ item.label }}</option>
  </select>
</template>

<script>
export default {
  name: 'task',
  props: ['xtask'],
  data () {
    return {
      types: [
        { label: 'ABCD', value: 11 },
        { label: 'EFGH', value: 22 },
        { label: 'IJKL', value: 33 },
        { label: 'MNOP', value: 44 },
        { label: 'QRST', value: 55 }
      ]
    }
  }
}
</script>

<style scoped>
</style>
