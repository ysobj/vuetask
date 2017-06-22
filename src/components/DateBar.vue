<template>
  <div>
    <div class="date-container">
      <div class="date-box"><img src="static/repeat.png"></div>
      <div class="date-box">&lt;&lt;</div>
      <div class="date-box">{{labelPrevDay}}</div>
      <div class="date-box attention">{{labelTargetDay}}</div>
      <div class="date-box">{{labelNextDay}}</div>
      <div class="date-box">&gt;&gt;</div>
      <div class="date-box" @click="showDialog = true"><img src="static/gear.png"></div>
    </div>
    <vue-dialog v-if="showDialog" @closeDialog="showDialog = false"></vue-dialog>
  </div>
</template>

<script>
import VueDialog from '@/components/VueDialog.vue'
import moment from 'moment'
const DATE_FORMAT = 'YYYY/MM/DD'
export default {
  data () {
    return {
      showDialog: false,
      targetDay: moment(),
      today: moment()
    }
  },
  components: {
    'vue-dialog': VueDialog
  },
  computed: {
    labelTargetDay () {
      return this.targetDay.format(DATE_FORMAT)
    },
    labelNextDay () {
      if (this.today.format(DATE_FORMAT) === this.targetDay.format(DATE_FORMAT)) {
        return 'Tomorrow'
      }
      let next = moment(this.targetDay).add(1, 'days')
      return next.format(DATE_FORMAT)
    },
    labelPrevDay () {
      if (this.today.format(DATE_FORMAT) === this.targetDay.format(DATE_FORMAT)) {
        return 'Yesterday'
      }
      let prev = moment(this.targetDay).add(-1, 'days')
      return prev.format(DATE_FORMAT)
    }
  }
}
</script>

<style scoped>
.date-container {
  display: flex;
  justify-content: center;
}
.date-container div:first-child{
  margin-right: auto;
}
.date-container div:last-child{
  margin-left: auto;
}
.date-box {
  margin: 1px;
  padding: 15px;
  border-radius: 5px 5px 0 0;
  background: #60B99A;
  color: #fff;
}
.date-box:hover{
  filter: brightness(80%)
}
.attention {
  background: orange;
}
</style>
