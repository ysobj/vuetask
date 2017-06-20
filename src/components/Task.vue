<template>
  <tr class="task" @click="changeEditMode(true)">
    <td><div class="task-type-base" :class="typeClass">{{ taskType }}</div></td>
    <td><input v-if="editable" @blur="updateTask" type="text" v-model="taskText"></input><span v-else  :class="{ done: isDone }">{{ taskText }}</span></td>
    <td class="task-time"><input v-if="editable" @blur="updateTask" class="task-minutes" type="text" v-model.number="estimate"></input><span v-else>{{ estimate }}</span></td>
    <td class="task-time" :class="exceedEstimate"><span>{{ elapsed }}</span></td>
    <td class="task-date"><input v-if="editable" class="task-time" type="text" v-model.number="fromDate" @keydown.ctrl.66="inputFromDate" @blur="updateTask"></input><span v-else>{{ fromDate }}</span></td>
    <td class="task-date"><input v-if="editable" class="task-time" type="text" v-model.number="toDate" @keydown.ctrl.66="inputToDate" @blur="updateTask"></input><span v-else>{{ toDate }}</span></td>
  </tr>
</template>

<script>
var moment = require('moment')
export default {
  name: 'task',
  props: [ 'id', 'taskType', 'taskText', 'taskEstimate', 'taskFromDate', 'taskToDate' ],
  data () {
    return {
      text: this.taskText,
      estimate: this.taskEstimate,
      fromDate: formatDateToStr(this.taskFromDate),
      toDate: formatDateToStr(this.taskToDate),
      editable: false
    }
  },
  methods: {
    updateTaskState (ev) {
      this.$emit('updateTaskState')
    },
    inputFromDate () {
      console.log('inputFromDate')
      console.log(format())
    },
    inputToDate () {
      this.toDate = moment().format('HH:mm')
    },
    updateTask () {
    //  this.$emit('updateTask')
      this.$store.commit('updateTask', this)
    },
    changeEditMode (mode) {
      this.editable = mode
      this.$emit('changeEditMode', mode)
    }
  },
  computed: {
    exceedEstimate () {
      let elapsed = calcElapsed(this.fromDate, this.toDate)
      let exceed = elapsed > this.estimate
      return { 'exceed-estimate': exceed }
    },
    typeClass () {
      return {
        'task-type-todo': this.taskType === 'TODO',
        'task-type-daily': this.taskType === 'DAILY',
        'task-type-habit': this.taskType === 'HABIT'
      }
    },
    elapsed () {
      return calcElapsed(this.fromDate, this.toDate)
    },
    isDone () {
      return this.fromDate && this.toDate
    }
  }
}
function calcElapsed (fromDate, toDate) {
  var tmpFromDate = moment()
  if (fromDate != null) {
    let tmp = fromDate.split(':')
    tmpFromDate.hour(tmp[0])
    tmpFromDate.minute(tmp[1])
  }
  var tmpToDate = moment()
  if (toDate != null) {
    let tmp = toDate.split(':')
    tmpToDate.hour(tmp[0])
    tmpToDate.minute(tmp[1])
  }
  if (fromDate && toDate) {
    return tmpToDate.diff(tmpFromDate, 'minutes')
  }
  return ''
}
function format (num) {
  if (!num) {
    return null
  }
  let min = ('' + (num % 100)).length === 1 ? '0' + num % 100 : num % 100
  return Math.floor(num / 100) + ':' + min
}
function formatDateToStr (date) {
  if (date) {
    return ''
  }
  let tmp = moment(date)
  return tmp.format('HH:mm')
}
</script>

<style scoped>
.task {
  height: 33px
}
.done {
  text-decoration: line-through
}
.task-type-base {
  color: white;
  padding: 3px 3px;
  border-radius: 3px;
}
.task-type-todo {
  background-color: orange;
}
.task-type-daily {
  background-color: green;
}
.task-type-habit {
  background-color: red;
}
.task-time {
  width: 40px;
}
.task-minutes {
  width: 20px;
}
.task-date {
  width: 70px;
}
.exceed-estimate {
  color: #ff0000;
  font-weight: bold;
}
</style>
