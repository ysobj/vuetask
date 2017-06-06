<template>
  <tr class="task">
    <td><div class="task-type-base" :class="typeClass">{{ taskType }}</div></td>
    <td><span :class="{ done: isDone }" @click="changeTaskState">{{ taskText }}</span></td>
    <td class="task-time" :class="exceedEstimate"><span>{{ elapsed }}</span></td>
    <td class="task-date"><span>{{ fromDate }}</span></td>
    <td class="task-date"><span>{{ toDate }}</span></td>
    <td><input class="task-minutes" type="text"></input></td>
    <td><input class="task-time" type="text" v-model.number="fromDateStr"></input></td>
    <td><input class="task-time" type="text" v-model.number="toDateStr"></input></td>
  </tr>
</template>

<script>
var moment = require('moment')
export default {
  name: 'task',
  props: ['taskText', 'isDone', 'taskType'],
  data () {
    return {
      fromDateStr: '',
      toDateStr: ''
    }
  },
  methods: {
    changeTaskState: function (ev) {
      this.$emit('changeTaskState')
    }
  },
  computed: {
    exceedEstimate () {
      return { 'exceed-estimate': true }
    },
    typeClass () {
      return {
        'task-type-todo': this.taskType === 'TODO',
        'task-type-daily': this.taskType === 'DAILY',
        'task-type-habit': this.taskType === 'HABIT'
      }
    },
    elapsed () {
      var fromDate = moment()
      if (this.fromDateStr) {
        fromDate.hour(this.fromDateStr / 100)
        fromDate.minute(this.fromDateStr % 100)
      }
      var toDate = moment()
      if (this.toDateStr) {
        toDate.hour(this.toDateStr / 100)
        toDate.minute(this.toDateStr % 100)
      }
      if (this.fromDateStr && this.toDateStr) {
        return toDate.diff(fromDate, 'minutes')
      }
      return this.fromDateStr
    },
    fromDate () {
      return format(this.fromDateStr)
    },
    toDate () {
      return format(this.toDateStr)
    },
    isDone () {
      return this.fromDate && this.toDate
    },
    isExceedEstimate () {
      return true
    }
  }
}
function format (num) {
  if (!num) {
    return null
  }
  let min = ('' + (num % 100)).length === 1 ? '0' + num % 100 : num % 100
  return Math.floor(num / 100) + ':' + min
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
