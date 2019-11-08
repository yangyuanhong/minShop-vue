<template>
  <div>
    <div class="cells_auto_fill multi_cell" style="width: 32.05rem;height:6.77rem;">
      <a
        href
        class="exposure items"
        style="width:6.41rem;height:6.77rem"
        v-for="(item, index) in baanry[62]"
        :key="index"
      >
        <img v-lazy="item" style="width:6.41rem;height:6.77rem" />
      </a>
    </div>
    <lines :xmsH="'0.71rem'" :xmsC="'rgb(245, 245, 245)'" />
    <cellsTitle
      :arg="{bg:'rgb(255,255,255)',width:'32.05rem',height:'3.55rem'}"
      :items="baanry[63]"
    />
    <lines :xmsH="'0.71rem'" :xmsC="'rgb(245, 245, 245)'" />
    <list-three-type :items="hotGoods.slice(102, 105)" :colorS="'rgb(245,245,245)'"></list-three-type>
    <lines :xmsH="'0.71rem'" :xmsC="'rgb(245, 245, 245)'" />
    <list-three-type :items="hotGoods.slice(105, 108)" :colorS="'rgb(245,245,245)'"></list-three-type>
    <lines :xmsH="'0.71rem'" :xmsC="'rgb(245, 245, 245)'" />
    <list-three-type :items="hotGoods.slice(108, 111)" :colorS="'rgb(245,245,245)'"></list-three-type>
    <lines :xmsH="'0.71rem'" :xmsC="'rgb(245, 245, 245)'" />
    <list-three-type :items="hotGoods.slice(111, 114)" :colorS="'rgb(245,245,245)'"></list-three-type>
    <lines :xmsH="'0.71rem'" :xmsC="'rgb(245, 245, 245)'" />
    <list-three-type :items="hotGoods.slice(114, 117)" :colorS="'rgb(245,245,245)'"></list-three-type>
    <lines :xmsH="'0.71rem'" :xmsC="'rgb(245, 245, 245)'" />
    <cellsTitle
      :arg="{bg:'rgb(255,255,255)',width:'32.05rem',height:'3.55rem'}"
      :items="baanry[64]"
    />
    <lines :xmsH="'0.71rem'" :xmsC="'rgb(245, 245, 245)'" />
    <list-three-type :items="hotGoods.slice(117, 120)" :colorS="'rgb(245,245,245)'"></list-three-type>
    <lines :xmsH="'0.71rem'" :xmsC="'rgb(245, 245, 245)'" />
    <list-three-type :items="hotGoods.slice(120, 123)" :colorS="'rgb(245,245,245)'"></list-three-type>
    <lines :xmsH="'0.71rem'" :xmsC="'rgb(245, 245, 245)'" />
    <list-three-type :items="hotGoods.slice(123, 126)" :colorS="'rgb(245,245,245)'"></list-three-type>
    <lines :xmsH="'0.71rem'" :xmsC="'rgb(245, 245, 245)'" />
    <list-three-type :items="hotGoods.slice(126, 129)" :colorS="'rgb(245,245,245)'"></list-three-type>
    <lines :xmsH="'0.71rem'" :xmsC="'rgb(245, 245, 245)'" />
    <cellsTitle
      :arg="{bg:'rgb(255,255,255)',width:'32.05rem',height:'8.9rem'}"
      :items="baanry[65]"
    />
    <lines :xmsH="'0.71rem'" :xmsC="'rgb(245, 245, 245)'" />
    <cellsTitle
      :arg="{bg:'rgb(255,255,255)',width:'32.05rem',height:'3.55rem'}"
      :items="baanry[66]"
    />
    <lines :xmsH="'0.71rem'" :xmsC="'rgb(245, 245, 245)'" />
    <list-three-type :items="hotGoods.slice(129, 132)" :colorS="'rgb(245,245,245)'"></list-three-type>
    <lines :xmsH="'0.71rem'" :xmsC="'rgb(245, 245, 245)'" />
    <list-three-type :items="hotGoods.slice(132, 135)" :colorS="'rgb(245,245,245)'"></list-three-type>
    <lines :xmsH="'0.71rem'" :xmsC="'rgb(245, 245, 245)'" />
    <cellsTitle
      :arg="{bg:'rgb(255,255,255)',width:'32.05rem',height:'8.9rem'}"
      :items="baanry[67]"
    />
    <lines :xmsH="'0.71rem'" :xmsC="'rgb(245, 245, 245)'" />
    <cellsTitle
      :arg="{bg:'rgb(255,255,255)',width:'32.05rem',height:'3.55rem'}"
      :items="baanry[68]"
    />
    <lines :xmsH="'0.71rem'" :xmsC="'rgb(245, 245, 245)'" />
    <list-three-type :items="hotGoods.slice(135, 138)" :colorS="'rgb(245,245,245)'"></list-three-type>
    <lines :xmsH="'0.71rem'" :xmsC="'rgb(245, 245, 245)'" />
    <list-three-type :items="hotGoods.slice(138, 141)" :colorS="'rgb(245,245,245)'"></list-three-type>
    <lines :xmsH="'0.71rem'" :xmsC="'rgb(245, 245, 245)'" />
    <list-three-type :items="hotGoods.slice(141, 144)" :colorS="'rgb(245,245,245)'"></list-three-type>
    <lines :xmsH="'0.71rem'" :xmsC="'rgb(245, 245, 245)'" />
    <list-three-type :items="hotGoods.slice(144, 147)" :colorS="'rgb(245,245,245)'"></list-three-type>
    <lines :xmsH="'0.71rem'" :xmsC="'rgb(245, 245, 245)'" />
    <list-three-type :items="hotGoods.slice(147, 150)" :colorS="'rgb(245,245,245)'"></list-three-type>
    <lines :xmsH="'0.71rem'" :xmsC="'rgb(245, 245, 245)'" />
    <cellsTitle
      :arg="{bg:'rgb(255,255,255)',width:'32.05rem',height:'3.55rem'}"
      :items="baanry[69]"
    />
    <lines :xmsH="'0.71rem'" :xmsC="'rgb(245, 245, 245)'" />
    <list-three-type :items="hotGoods.slice(150, 153)" :colorS="'rgb(245,245,245)'"></list-three-type>
    <lines :xmsH="'0.71rem'" :xmsC="'rgb(245, 245, 245)'" />
    <list-three-type :items="hotGoods.slice(153, 156)" :colorS="'rgb(245,245,245)'"></list-three-type>
    <lines :xmsH="'0.71rem'" :xmsC="'rgb(245, 245, 245)'" />
    <list-three-type :items="hotGoods.slice(156, 159)" :colorS="'rgb(245,245,245)'"></list-three-type>
    <lines :xmsH="'0.71rem'" :xmsC="'rgb(245, 245, 245)'" />
    <list-three-type :items="hotGoods.slice(159, 162)" :colorS="'rgb(245,245,245)'"></list-three-type>
    <lines :xmsH="'0.71rem'" :xmsC="'rgb(245, 245, 245)'" />
    <list-three-type :items="hotGoods.slice(162, 165)" :colorS="'rgb(245,245,245)'"></list-three-type>
    <lines :xmsH="'0.71rem'" :xmsC="'rgb(245, 245, 245)'" />
    <cellsTitle
      :arg="{bg:'rgb(255,255,255)',width:'32.05rem',height:'3.55rem'}"
      :items="baanry[70]"
    />
    <lines :xmsH="'0.71rem'" :xmsC="'rgb(245, 245, 245)'" />
    <list-three-type :items="hotGoods.slice(165, 168)" :colorS="'rgb(245,245,245)'"></list-three-type>
    <lines :xmsH="'0.71rem'" :xmsC="'rgb(245, 245, 245)'" />
    <list-three-type :items="hotGoods.slice(168, 171)" :colorS="'rgb(245,245,245)'"></list-three-type>
    <lines :xmsH="'0.71rem'" :xmsC="'rgb(245, 245, 245)'" />
    <list-three-type :items="hotGoods.slice(171, 174)" :colorS="'rgb(245,245,245)'"></list-three-type>
    <lines :xmsH="'0.71rem'" :xmsC="'rgb(245, 245, 245)'" />
  </div>
</template>

<script>
import lines from '@/components/common/divider-line.vue'
import cellsTitle from '@/components/common/cellsTitle.vue'
import listThreeType from '@/components/common/list_three_type4.vue'

export default {
  props: ['recommendData', 'tvData', 'intellData'],
  components: {
    cellsTitle,
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
  left: 6.41rem;
}
.component-list-main .cells_auto_fill .items:nth-child(3) {
  left: 12.82rem;
}
.component-list-main .cells_auto_fill .items:nth-child(4) {
  left: 19.23rem;
}
.component-list-main .cells_auto_fill .items:nth-child(5) {
  left: 25.64rem;
}
</style>