<template>
  <div>
    <div @click="closeDialog" class="dialog-screen"></div>
    <div class="dialog">
      <div class="dialog-header">header</div>
      <div class="dialog-body">
        The quick brown fox jumps over the lazy dog.The quick brown fox jumps over the lazy dog.The quick brown fox jumps over the lazy dog.The quick brown fox jumps over the lazy dog.The quick brown fox jumps over the lazy dog.The quick brown fox jumps over the lazy dog.The quick brown fox jumps over the lazy dog.The quick brown fox jumps over the lazy dog.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vue-dialog',
  props: [ 'isOpen' ],
  data () {
    return {}
  },
  methods: {
    closeDialog () {
      this.$emit('closeDialog')
    }
  }
}
</script>

<style scoped>
.dialog-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #efefef;
  z-index: 9000;
  filter: opacity(65%);
}
.dialog {
  position: fixed;
  top: 300px;
  left: 300px;
  border: 1px solid black;
  width: 450px;
  border-radius: 5px;
  z-index: 9200;
}
.dialog .dialog-header {
  background: #3e3e3e;
  color: #fefefe;
  padding: 3px
}
.dialog .dialog-body {
  padding: 3px;
  background: #fefefe;
  border-radius: 0 0 5px 5px;
}
</style>
