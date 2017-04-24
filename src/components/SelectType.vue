<template>
  <select class="selecttype" v-on:change="changeSelectType" >
    <option v-for="item in types" v-bind:value="item.value">{{ item.label }}</option>
  </select>
</template>

<script>
export default {
  name: 'select-type',
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
  },
  methods: {
    changeSelectType: function () {
      console.log('change something')
    }
  }
}
</script>

<style scoped>
</style>
