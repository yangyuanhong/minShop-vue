<template>
  <div class="cells_auto_fill" :style="{backgroundColor: arg.bg}">
    <a
      href="#"
      class="exposure items"
      :style="{width:arg.width,height:arg.height, }"
      v-for="(item, index) in items"
      :key="index"
    >
      <img v-lazy="item" :style="{width:arg.width,height:arg.height, }" />
    </a>
  </div>
</template>

<script>
export default {
  props: ['arg', 'items']
}
</script>

<style lang="less" scoped>
.component-list-main .cells_auto_fill .items {
  height: auto !important;
  display: block;
}
.component-list-main img {
  display: block;
  width: 100%;
  height: auto;
}
.component-list-main .cells_auto_fill .items img {
  width: 100%;
}
</style>