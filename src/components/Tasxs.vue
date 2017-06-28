<template>
  <div class="tasxs">
    <DateBar :target="target" @changeTarget="changeTarget"></DateBar>   
    <Tasks :target="target"></Tasks>
  </div>
</template>

<script>
import Tasks from './Tasks.vue'
import DateBar from './DateBar.vue'
import moment from 'moment'
export default {
  data () {
    return {
      target: moment('2017-05-05', 'YYYY-MM-DD')
    }
  },
  components: {
    Tasks,
    DateBar
  },
  methods: {
    changeTarget (target) {
      console.log('changeTarget', target)
      this.$store.dispatch('getTaskByDate', target)
      this.target = target
    }
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
