<template>
  <div>
    <div class="date-container">
      <div class="date-box"><img src="static/repeat.png"></div>
      <div class="date-box" @click="moveTo7DaysBefore">&lt;&lt;</div>
      <div class="date-box disp-date" @click="movePrev">{{labelPrevDay}}</div>
      <div class="date-box disp-date attention">{{labelTargetDay}}</div>
      <div class="date-box disp-date" @click="moveNext">{{labelNextDay}}</div>
      <div class="date-box" @click="moveTo7DaysAfter">&gt;&gt;</div>
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
      return formatDate(this.today, this.targetDay)
    },
    labelNextDay () {
      return formatDate(this.today, getTomorrow(this.targetDay))
    },
    labelPrevDay () {
      return formatDate(this.today, getYesterday(this.targetDay))
    }
  },
  methods: {
    movePrev () {
      this.targetDay = getYesterday(this.targetDay)
    },
    moveNext () {
      this.targetDay = getTomorrow(this.targetDay)
    },
    moveTo7DaysBefore () {
      this.targetDay = get7DaysBefore(this.targetDay)
    },
    moveTo7DaysAfter () {
      this.targetDay = get7DaysAfter(this.targetDay)
    }
  }
}
function get7DaysBefore (today) {
  return moment(today).add(-7, 'days')
}
function get7DaysAfter (today) {
  return moment(today).add(7, 'days')
}
function getYesterday (today) {
  return moment(today).add(-1, 'days')
}
function getTomorrow (today) {
  return moment(today).add(1, 'days')
}
function formatDate (today, day) {
  let formatted = day.format(DATE_FORMAT)
  let yesterday = moment(today).add(-1, 'days').format(DATE_FORMAT)
  if (formatted === yesterday) {
    return 'Yesterday'
  }
  let tomorrow = moment(today).add(1, 'days').format(DATE_FORMAT)
  if (formatted === tomorrow) {
    return 'Tomorrow'
  }
  return formatted
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
.disp-date {
  width: 100px;
}
.attention {
  background: orange;
}
</style>
