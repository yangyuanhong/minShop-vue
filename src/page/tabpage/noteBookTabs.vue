<template>
  <div>
    <cellsTitle
      :arg="{bg:'rgb(242,250,253)',width:'32.05rem',height:'4.49rem'}"
      :items="baanry[42]"
    />
    <div
      class="cells_auto_fill multi_cell"
      style="width: 32.05rem;height:6.49rem;"
      v-for="a in 3"
      :key="a"
    >
      <a
        class="exposure items"
        style="width:16rem;height:6.49rem"
        v-for="(item, index) in baanry[a + 42]"
        :key="index"
      >
        <img v-lazy="item" style="width:16rem;height:6.49rem" />
      </a>
    </div>
    <cellsTitle :arg="{bg:'rgb(11,159,221)',width:'32.05rem',height:'4.3rem'}" :items="baanry[46]" />
    <lines :xmsH="'0.71rem'" :xmsC="'rgb(11,159,221)'" />
    <cellsTitle :arg="{bg:'rgb(207,48,67)',width:'32.05rem',height:'12.4rem'}" :items="baanry[47]" />
    <lines :xmsH="'0.71rem'" :xmsC="'rgb(11,159,221)'" />
    <list-two-type14 :Goods="tip_goods.slice(22, 24)" :bg="'rgb(11,159,221)'" />
    <lines :xmsH="'0.71rem'" :xmsC="'rgb(11,159,221)'" />
    <list-two-type14 :Goods="tip_goods.slice(24, 26)" :bg="'rgb(11,159,221)'" />
    <lines :xmsH="'0.71rem'" :xmsC="'rgb(11,159,221)'" />
    <cellsTitle
      :arg="{bg:'rgb(153,187,235)',width:'32.05rem',height:'4.3rem'}"
      :items="baanry[48]"
    />
    <lines :xmsH="'0.71rem'" :xmsC="'rgb(153,187,235)'" />
    <list-three-type :items="hotGoods.slice(93, 96)" :colorS="'rgb(153,187,235)'"></list-three-type>
    <lines :xmsH="'0.71rem'" :xmsC="'rgb(153,187,235)'" />
    <cellsTitle
      :arg="{bg:'rgb(169,201,242)',width:'32.05rem',height:'4.3rem'}"
      :items="baanry[49]"
    />
    <lines :xmsH="'0.71rem'" :xmsC="'rgb(169,201,242)'" />
    <list-three-type :items="hotGoods.slice(96, 99)" :colorS="'rgb(169,201,242)'"></list-three-type>
    <lines :xmsH="'0.71rem'" :xmsC="'rgb(169,201,242)'" />
    <list-three-type :items="hotGoods.slice(99, 102)" :colorS="'rgb(169,201,242)'"></list-three-type>
    <lines :xmsH="'0.71rem'" :xmsC="'rgb(169,201,242)'" />
  </div>
</template>

<script>
import cellsTitle from '@/components/common/cellsTitle.vue'
import lines from '@/components/common/divider-line.vue'
import listTwoType14 from '@/components/common/list_two_type14.vue'
import listThreeType from '@/components/common/list_three_type4.vue'

export default {
  props: ['recommendData', 'tvData', 'intellData'],
  components: {
    cellsTitle,
    listTwoType14,
    listThreeType,
    lines
  },
  data() {
    return {
      baanry: [],
      tip_goods: [],
      hotGoods: []
    }
  },
  watch: {
    recommendData(val) {
      this.baanry = this.recommendData.cells_auto_fills
    },
    tvData(old, val) {
      // this.hotGoods = this.intellData.hotGoods
      this.tip_goods = this.tvData.tip_goods
    },
    intellData(val) {
      this.hotGoods = this.intellData.hotGoods
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
  left: 16.2rem;
}
</style>