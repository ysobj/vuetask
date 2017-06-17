<template>
  <div class="date-container">
    <div class="date-box"><img src="static/repeat.png"></div>
    <div class="date-box">&lt;&lt;</div>
    <div class="date-box">Yesterday</div>
    <div class="date-box attention">2017/6/13</div>
    <div class="date-box">Tomorrow</div>
    <div class="date-box">&gt;&gt;</div>
    <div class="date-box"><img src="static/gear.png"></div>
  </div>
</template>

<script>
export default {
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
