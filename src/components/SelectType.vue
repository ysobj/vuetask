<template>
  <select class="selecttype" @change="changeSelectType($event.target.value)" :value="value">
    <option v-for="item in types" :value="item.value">{{ item.label }}</option>
  </select>
</template>

<script>
export default {
  name: 'select-type',
  props: ['value'],
  data () {
    return {
      types: [
        { label: 'TODO', value: 'TODO' },
        { label: 'DAILY', value: 'DAILY' },
        { label: 'HABIT', value: 'HABIT' }
      ]
    }
  },
  methods: {
    changeSelectType: function (value) {
      this.$emit('input', value)
    }
  }
}
</script>

<style scoped>
</style>
