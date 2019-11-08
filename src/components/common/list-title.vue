<template>
  <div>
    <div
      class="divider_line"
      style="height:0.049rem;border-bottom:0.049rem solid rgb(206, 206, 206);background-color: rgb(206,206,206);"
    ></div>
    <div class="list_action_title box-flex">
      <a href class="h exposure">
        <div class="ti">{{msg}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: ['msg']
}
</script>

<style lang="less" scoped>
.component-list-main .list_action_title .h {
  background: #fff;
  height: 4.4rem;
  line-height: 4.4rem;
  text-align: center;
  font-size: 1.25rem;
  .ti {
    color: rgba(0, 0, 0, 0.6);
    width: 32.05rem;
  }
}
</style>