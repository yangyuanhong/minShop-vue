<template>
  <div
    class="divider_line"
    :style="{height: xmsH,borderBottom: xmsH+' solid '+xmsC,backgroundColor: xmsC}"
  ></div>
</template>

<script>
export default {
  props: ['xmsH', 'xmsC'],
  data() {
    return {
      //   xmsH: '0.712rem',
      //   xmsC: 'rgb(245,245,245)'
    }
  }
}
</script>

<style lang="less" scoped>
.component-list-main .divider_line {
  margin: 0 auto;
  border-top: none;
  border-left: none;
  border-right: none;
  box-sizing: border-box;
  width: 100%;
  overflow: hidden;
}
</style>