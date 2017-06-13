<template>
  <div class="tasxs">
    <DateBar></DateBar>   
    <Tasks></Tasks>
  </div>
</template>

<script>
import Tasks from './Tasks.vue'
import DateBar from './DateBar.vue'
export default {

  components: {
    Tasks,
    DateBar
  }
}
</script>

<style scoped>
.tasks {
  width: 800px;
  display: flex;
  flex-direction: column;
}
</style>
