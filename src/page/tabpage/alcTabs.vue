<template>
  <div>
    <cellsTitle
      :arg="{bg:'rgb(255,255,255)',width:'32.05rem',height:'3.81rem'}"
      :items="baanry[50]"
    />
    <div
      class="cells_auto_fill multi_cell"
      style="width: 32.05rem;height:6.39rem;background-color: rgb(255,255,255);"
      v-for="a in 2"
      :key="a"
    >
      <a
        class="exposure items"
        style="width:16rem;height:6.39rem"
        v-for="(item, index) in baanry[a + 50]"
        :key="index"
      >
        <img v-lazy="item" style="width:16rem;height:6.39rem" />
      </a>
    </div>
    <cellsTitle
      :arg="{bg:'rgb(255,255,255)',width:'32.05rem',height:'4.22rem'}"
      :items="baanry[53]"
    />
    <lines :xmsH="'0.71rem'" :xmsC="'rgb(113, 177, 223)'" />
    <cellsTitle
      :arg="{bg:'rgb(255,255,255)',width:'32.05rem',height:'3.95rem'}"
      :items="baanry[54]"
    />
    <div
      class="cells_auto_fill multi_cell"
      style="width: 32.05rem;height:7.9rem;background-color: rgb(255,255,255);"
    >
      <a class="exposure items" style="width:10.6rem;height:7.9rem">
        <img v-lazy="baanry1" style="width:10.6rem;height:7.9rem" />
      </a>
      <a class="exposure items" style="width:10.6rem;height:7.9rem;left:10.6rem;">
        <img v-lazy="baanry2" style="width:10.6rem;height:7.9rem" />
      </a>
      <a class="exposure items" style="width:10.6rem;height:7.9rem;left:21.2rem;">
        <img v-lazy="baanry3" style="width:10.6rem;height:7.9rem" />
      </a>
    </div>
    <cellsTitle
      :arg="{bg:'rgb(255,255,255)',width:'32.05rem',height:'4.4rem'}"
      :items="baanry[56]"
    />
    <list-two-type14 :Goods="tip_goods.slice(26, 28)" :bg="'rgb(146,202,219)'" />
    <lines :xmsH="'0.71rem'" :xmsC="'rgb(146,202,219)'" />
    <list-two-type14 :Goods="tip_goods.slice(28, 30)" :bg="'rgb(146,202,219)'" />
    <lines :xmsH="'0.71rem'" :xmsC="'rgb(146,202,219)'" />
    <list-two-type14 :Goods="tip_goods.slice(30, 32)" :bg="'rgb(146,202,219)'" />
    <lines :xmsH="'0.71rem'" :xmsC="'rgb(146,202,219)'" />
    <list-two-type14 :Goods="tip_goods.slice(32, 34)" :bg="'rgb(146,202,219)'" />
    <lines :xmsH="'0.71rem'" :xmsC="'rgb(146,202,219)'" />
    <list-two-type14 :Goods="tip_goods.slice(34, 36)" :bg="'rgb(146,202,219)'" />
    <lines :xmsH="'0.71rem'" :xmsC="'rgb(146,202,219)'" />
    <cellsTitle
      :arg="{bg:'rgb(255,255,255)',width:'32.05rem',height:'4.22rem'}"
      :items="baanry[57]"
    />
    <list-two-type14 :Goods="tip_goods.slice(36, 38)" :bg="'rgb(113, 177, 223)'" />
    <lines :xmsH="'0.71rem'" :xmsC="'rgb(113, 177, 223)'" />
    <list-two-type14 :Goods="tip_goods.slice(38, 40)" :bg="'rgb(113, 177, 223)'" />
    <lines :xmsH="'0.71rem'" :xmsC="'rgb(113, 177, 223)'" />
    <cellsTitle
      :arg="{bg:'rgb(255,255,255)',width:'32.05rem',height:'4.4rem'}"
      :items="baanry[58]"
    />
    <list-two-type14 :Goods="tip_goods.slice(40, 42)" :bg="'rgb(240,194,98)'" />
    <lines :xmsH="'0.71rem'" :xmsC="'rgb(240,194,98)'" />
    <list-two-type14 :Goods="tip_goods.slice(42, 44)" :bg="'rgb(240,194,98)'" />
    <lines :xmsH="'0.71rem'" :xmsC="'rgb(240,194,98)'" />
    <list-two-type14 :Goods="tip_goods.slice(44, 46)" :bg="'rgb(240,194,98)'" />
    <lines :xmsH="'0.71rem'" :xmsC="'rgb(240,194,98)'" />
    <list-two-type14 :Goods="tip_goods.slice(46, 48)" :bg="'rgb(240,194,98)'" />
    <lines :xmsH="'0.71rem'" :xmsC="'rgb(240,194,98)'" />
    <cellsTitle
      :arg="{bg:'rgb(255,255,255)',width:'32.05rem',height:'4.35rem'}"
      :items="baanry[59]"
    />
    <list-two-type14 :Goods="tip_goods.slice(48, 50)" :bg="'rgb(245,161,150)'" />
    <lines :xmsH="'0.71rem'" :xmsC="'rgb(245,161,150)'" />
    <list-two-type14 :Goods="tip_goods.slice(50, 52)" :bg="'rgb(245,161,150)'" />
    <lines :xmsH="'0.71rem'" :xmsC="'rgb(245,161,150)'" />
    <list-two-type14 :Goods="tip_goods.slice(52, 54)" :bg="'rgb(245,161,150)'" />
    <lines :xmsH="'0.71rem'" :xmsC="'rgb(245,161,150)'" />
    <list-two-type14 :Goods="tip_goods.slice(54, 56)" :bg="'rgb(245,161,150)'" />
    <lines :xmsH="'0.71rem'" :xmsC="'rgb(245,161,150)'" />
    <cellsTitle
      :arg="{bg:'rgb(255,255,255)',width:'32.05rem',height:'4.4rem'}"
      :items="baanry[60]"
    />
    <list-two-type14 :Goods="tip_goods.slice(56, 58)" :bg="'rgb(240,194,98)'" />
    <lines :xmsH="'0.71rem'" :xmsC="'rgb(240,194,98)'" />
    <list-two-type14 :Goods="tip_goods.slice(58, 60)" :bg="'rgb(240,194,98)'" />
    <lines :xmsH="'0.71rem'" :xmsC="'rgb(240,194,98)'" />
    <list-two-type14 :Goods="tip_goods.slice(60, 62)" :bg="'rgb(240,194,98)'" />
    <lines :xmsH="'0.71rem'" :xmsC="'rgb(240,194,98)'" />
    <list-two-type14 :Goods="tip_goods.slice(62, 64)" :bg="'rgb(240,194,98)'" />
    <lines :xmsH="'0.71rem'" :xmsC="'rgb(240,194,98)'" />
    <cellsTitle
      :arg="{bg:'rgb(255,255,255)',width:'32.05rem',height:'4.35rem'}"
      :items="baanry[61]"
    />
    <list-two-type14 :Goods="tip_goods.slice(64, 66)" :bg="'rgb(245, 161, 150)'" />
    <lines :xmsH="'0.71rem'" :xmsC="'rgb(245, 161, 150)'" />
    <list-two-type14 :Goods="tip_goods.slice(66, 68)" :bg="'rgb(245, 161, 150)'" />
    <lines :xmsH="'0.71rem'" :xmsC="'rgb(245, 161, 150)'" />
    <list-two-type14 :Goods="tip_goods.slice(68, 70)" :bg="'rgb(245, 161, 150)'" />
    <lines :xmsH="'0.71rem'" :xmsC="'rgb(245, 161, 150)'" />
  </div>
</template>

<script>
import cellsTitle from '@/components/common/cellsTitle.vue'
import lines from '@/components/common/divider-line.vue'
import listTwoType14 from '@/components/common/list_two_type14.vue'

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
      baanry1: '',
      baanry2: '',
      baanry3: '',
      tip_goods: []
    }
  },
  watch: {
    recommendData(val) {
      this.baanry = this.recommendData.cells_auto_fills
      this.baanry1 = this.baanry[55][0]
      this.baanry2 = this.baanry[55][1]
      this.baanry3 = this.baanry[55][2]
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
.component-list-main .cells_auto_fill .items:nth-child(2) {
  left: 16rem;
}
</style>