<template>
  <div>
    <cellsTitle
      :arg="{bg:'rgb(255,255,255)',width:'32.05rem',height:'3.6rem'}"
      :items="baanry[36]"
    />
    <div class="cells_auto_fill multi_cell" style="width: 32.05rem;height:7.3rem;">
      <a
        class="exposure items"
        style="width:10.6rem;height:7.3rem"
        v-for="(item, index) in baanry[37]"
        :key="index"
      >
        <img v-lazy="item" style="width:10.6rem;height:7.3rem" />
      </a>
    </div>
    <div class="cells_auto_fill multi_cell" style="width: 32.05rem;height:7.3rem;">
      <a
        class="exposure items"
        style="width:10.6rem;height:7.3rem"
        v-for="(item, index) in baanry[38]"
        :key="index"
      >
        <img v-lazy="item" style="width:10.6rem;height:7.3rem" />
      </a>
    </div>
    <cellsTitle
      :arg="{bg:'rgb(255,255,255)',width:'32.05rem',height:'4.3rem'}"
      :items="baanry[39]"
    />
    <list-two-type14 :Goods="tip_goods.slice(0, 2)" :bg="'rgb(239, 137, 155)'" />
    <lines :xmsH="'0.445rem'" :xmsC="'rgb(239, 137, 115)'" />
    <list-two-type14 :Goods="tip_goods.slice(2, 4)" :bg="'rgb(239, 137, 155)'" />
    <lines :xmsH="'0.445rem'" :xmsC="'rgb(239, 137, 115)'" />
    <list-two-type14 :Goods="tip_goods.slice(4, 6)" :bg="'rgb(239, 137, 155)'" />
    <lines :xmsH="'0.445rem'" :xmsC="'rgb(239, 137, 115)'" />
    <list-two-type14 :Goods="tip_goods.slice(6, 8)" :bg="'rgb(239, 137, 155)'" />
    <lines :xmsH="'0.445rem'" :xmsC="'rgb(239, 137, 115)'" />
    <list-two-type14 :Goods="tip_goods.slice(8, 10)" :bg="'rgb(239, 137, 155)'" />
    <lines :xmsH="'0.445rem'" :xmsC="'rgb(239, 137, 115)'" />
    <cellsTitle
      :arg="{bg:'rgb(255,255,255)',width:'32.05rem',height:'4.3rem'}"
      :items="baanry[40]"
    />
    <list-two-type14 :Goods="tip_goods.slice(10, 12)" :bg="'rgb(119, 143, 239)'" />
    <lines :xmsH="'0.445rem'" :xmsC="'rgb(119, 143, 239)'" />
    <list-two-type14 :Goods="tip_goods.slice(12, 14)" :bg="'rgb(119, 143, 239)'" />
    <lines :xmsH="'0.445rem'" :xmsC="'rgb(119, 143, 239)'" />
    <list-two-type14 :Goods="tip_goods.slice(14, 16)" :bg="'rgb(119, 143, 239)'" />
    <lines :xmsH="'0.445rem'" :xmsC="'rgb(119, 143, 239)'" />
    <cellsTitle
      :arg="{bg:'rgb(255,255,255)',width:'32.05rem',height:'4.3rem'}"
      :items="baanry[41]"
    />
    <list-two-type14 :Goods="tip_goods.slice(16, 18)" :bg="'rgb(0, 123, 238)'" />
    <lines :xmsH="'0.445rem'" :xmsC="'rgb(0, 123, 238)'" />
    <list-two-type14 :Goods="tip_goods.slice(18, 20)" :bg="'rgb(0, 123, 238)'" />
    <lines :xmsH="'0.445rem'" :xmsC="'rgb(0, 123, 238)'" />
    <list-two-type14 :Goods="tip_goods.slice(20, 22)" :bg="'rgb(0, 123, 238)'" />
    <lines :xmsH="'0.445rem'" :xmsC="'rgb(0, 123, 238)'" />
  </div>
</template>

<script>
import cellsTitle from '@/components/common/cellsTitle.vue'
import listTwoType14 from '@/components/common/list_two_type14.vue'
import lines from '@/components/common/divider-line.vue'

export default {
  props: ['recommendData', 'tvData'],
  components: {
    cellsTitle,
    listTwoType14,
    lines
  },
  data() {
    return {
      baanry: [],
      tip_goods: []
    }
  },
  watch: {
    recommendData(val) {
      this.baanry = this.recommendData.cells_auto_fills
    },
    tvData(old, val) {
      // this.hotGoods = this.intellData.hotGoods
      this.tip_goods = this.tvData.tip_goods
    }
  }
}
</script>

<style lang="less" scoped>
.component-list-main .cells_auto_fill.multi_cell {
  position: relative;
}
.component-list-main .cells_auto_fill .items {
  height: auto !important;
  display: block;
}
.component-list-main .cells_auto_fill.multi_cell .items {
  position: absolute;
}
.component-list-main img {
  display: block;
  width: 100%;
  height: auto;
}
.component-list-main .cells_auto_fill .items img {
  width: 100%;
}
.component-list-main .cells_auto_fill .items:nth-child(3) {
  left: 21.3rem;
}
.component-list-main .cells_auto_fill .items:nth-child(2) {
  left: 10.6rem;
}
</style>