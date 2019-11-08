<template>
  <div>
    <div class="cells_auto_fill multi_cell" style="width: 32.05rem;height:6.77rem;">
      <a href style="width:6.41rem;height:6.77rem" v-for="(item, index) in baanry[18]" :key="index">
        <img v-lazy="item" style="width:6.41rem;height:6.77rem" />
      </a>
    </div>
    <div class="cells_auto_fill multi_cell" style="width: 32.05rem;height:6.77rem;">
      <a href style="width:6.41rem;height:6.77rem" v-for="(item, index) in baanry[19]" :key="index">
        <img v-lazy="item" style="width:6.41rem;height:6.77rem" />
      </a>
    </div>
    <lines :xmsH="'0.71rem'" :xmsC="'rgb(245,245,245)'" />
    <div class="cells_auto_fill" style="background-color: rgb(220, 221, 164);">
      <a
        href
        style="width:32.05rem;height:4.98rem"
        class="exposure items"
        v-for="(item, index) in baanry[20]"
        :key="index"
      >
        <img v-lazy="item" style="width:32.05rem;height:4.98rem" />
      </a>
    </div>
    <lines :xmsH="'0.71rem'" :xmsC="'rgb(255, 255, 255)'" />
    <list-three-type :items="hotGoods.slice(0, 3)" :colorS="'rgb(255,255,255)'"></list-three-type>
    <list-three-type :items="hotGoods.slice(3, 6)" :colorS="'rgb(255,255,255)'"></list-three-type>
    <list-three-type :items="hotGoods.slice(6, 9)" :colorS="'rgb(255,255,255)'"></list-three-type>
    <lines :xmsH="'0.089rem'" :xmsC="'rgb(227, 227, 227)'" />
    <div class="cells_auto_fill" style="background-color: rgb(220, 221, 164);">
      <a
        href
        style="width:32.05rem;height:3.8rem"
        class="exposure items"
        v-for="(item, index) in baanry[21]"
        :key="index"
      >
        <img v-lazy="item" style="width:32.05rem;height:3.8rem" />
      </a>
    </div>
    <lines :xmsH="'0.71rem'" :xmsC="'rgb(250, 250, 250)'" />
    <div class="cells_auto_fill">
      <a
        href
        style="width:32.05rem;height:8.9rem"
        class="exposure items"
        v-for="(item, index) in baanry[22]"
        :key="index"
      >
        <img v-lazy="item" style="width:32.05rem;height:8.9rem" />
      </a>
    </div>
    <div class="cells_auto_fill">
      <a
        href
        style="width:32.05rem;height:8.9rem"
        class="exposure items"
        v-for="(item, index) in baanry[23]"
        :key="index"
      >
        <img v-lazy="item" style="width:32.05rem;height:8.9rem" />
      </a>
    </div>
    <lines :xmsH="'0.71rem'" :xmsC="'rgb(250, 250, 250)'" />
    <div class="cells_auto_fill" style="background-color: rgb(220, 221, 164);">
      <a
        href
        style="width:32.05rem;height:4.98rem"
        class="exposure items"
        v-for="(item, index) in baanry[24]"
        :key="index"
      >
        <img v-lazy="item" style="width:32.05rem;height:4.98rem" />
      </a>
    </div>
    <lines :xmsH="'0.71rem'" :xmsC="'rgb(255, 255, 255)'" />
    <list-three-type :items="hotGoods.slice(9, 12)" :colorS="'rgb(255,255,255)'"></list-three-type>
    <list-three-type :items="hotGoods.slice(12, 15)" :colorS="'rgb(255,255,255)'"></list-three-type>
    <list-three-type :items="hotGoods.slice(15, 18)" :colorS="'rgb(255,255,255)'"></list-three-type>
    <lines :xmsH="'0.089rem'" :xmsC="'rgb(227, 227, 227)'" />
    <div class="cells_auto_fill" style="background-color: rgb(220, 221, 164);">
      <a
        href
        style="width:32.05rem;height:3.8rem"
        class="exposure items"
        v-for="(item, index) in baanry[25]"
        :key="index"
      >
        <img v-lazy="item" style="width:32.05rem;height:3.8rem" />
      </a>
    </div>
    <lines :xmsH="'0.71rem'" :xmsC="'rgb(250, 250, 250)'" />
    <div class="cells_auto_fill" style="background-color: rgb(220, 221, 164);">
      <a
        href
        style="width:32.05rem;height:3.5rem"
        class="exposure items"
        v-for="(item, index) in baanry[26]"
        :key="index"
      >
        <img v-lazy="item" style="width:32.05rem;height:3.5rem" />
      </a>
    </div>
    <lines :xmsH="'0.71rem'" :xmsC="'rgb(240, 241, 243)'" />
    <list-three-type :items="hotGoods.slice(18, 21)" :colorS="'rgb(240, 241, 243)'"></list-three-type>
    <lines :xmsH="'0.71rem'" :xmsC="'rgb(240, 241, 243)'" />
    <list-three-type :items="hotGoods.slice(21, 24)" :colorS="'rgb(240, 241, 243)'"></list-three-type>
    <lines :xmsH="'0.71rem'" :xmsC="'rgb(240, 241, 243)'" />
    <list-three-type :items="hotGoods.slice(24, 27)" :colorS="'rgb(240, 241, 243)'"></list-three-type>
    <lines :xmsH="'0.71rem'" :xmsC="'rgb(240, 241, 243)'" />
    <div class="cells_auto_fill" style="background-color: rgb(220, 221, 164);">
      <a
        href
        style="width:32.05rem;height:3.5rem"
        class="exposure items"
        v-for="(item, index) in baanry[27]"
        :key="index"
      >
        <img v-lazy="item" style="width:32.05rem;height:3.5rem" />
      </a>
    </div>
    <lines :xmsH="'0.71rem'" :xmsC="'rgb(240, 241, 243)'" />
    <list-three-type :items="hotGoods.slice(27, 30)" :colorS="'rgb(240, 241, 243)'"></list-three-type>
    <lines :xmsH="'0.71rem'" :xmsC="'rgb(240, 241, 243)'" />
    <list-three-type :items="hotGoods.slice(30, 33)" :colorS="'rgb(240, 241, 243)'"></list-three-type>
    <lines :xmsH="'0.71rem'" :xmsC="'rgb(240, 241, 243)'" />
    <list-three-type :items="hotGoods.slice(33, 36)" :colorS="'rgb(240, 241, 243)'"></list-three-type>
    <lines :xmsH="'0.71rem'" :xmsC="'rgb(240, 241, 243)'" />
    <div class="cells_auto_fill" style="background-color: rgb(220, 221, 164);">
      <a
        href
        style="width:32.05rem;height:3.5rem"
        class="exposure items"
        v-for="(item, index) in baanry[28]"
        :key="index"
      >
        <img v-lazy="item" style="width:32.05rem;height:3.5rem" />
      </a>
    </div>
    <lines :xmsH="'0.71rem'" :xmsC="'rgb(240, 241, 243)'" />
    <list-three-type :items="hotGoods.slice(36, 39)" :colorS="'rgb(240, 241, 243)'"></list-three-type>
    <lines :xmsH="'0.71rem'" :xmsC="'rgb(240, 241, 243)'" />
    <list-three-type :items="hotGoods.slice(39, 42)" :colorS="'rgb(240, 241, 243)'"></list-three-type>
    <lines :xmsH="'0.71rem'" :xmsC="'rgb(240, 241, 243)'" />
    <div class="cells_auto_fill" style="background-color: rgb(220, 221, 164);">
      <a
        href
        style="width:32.05rem;height:3.5rem"
        class="exposure items"
        v-for="(item, index) in baanry[29]"
        :key="index"
      >
        <img v-lazy="item" style="width:32.05rem;height:3.5rem" />
      </a>
    </div>
    <lines :xmsH="'0.71rem'" :xmsC="'rgb(240, 241, 243)'" />
    <list-three-type :items="hotGoods.slice(42, 45)" :colorS="'rgb(240, 241, 243)'"></list-three-type>
    <lines :xmsH="'0.71rem'" :xmsC="'rgb(240, 241, 243)'" />
    <list-three-type :items="hotGoods.slice(45, 48)" :colorS="'rgb(240, 241, 243)'"></list-three-type>
    <lines :xmsH="'0.71rem'" :xmsC="'rgb(240, 241, 243)'" />
    <list-three-type :items="hotGoods.slice(48, 51)" :colorS="'rgb(240, 241, 243)'"></list-three-type>
    <lines :xmsH="'0.71rem'" :xmsC="'rgb(240, 241, 243)'" />
    <div class="cells_auto_fill" style="background-color: rgb(220, 221, 164);">
      <a
        href
        style="width:32.05rem;height:3.5rem"
        class="exposure items"
        v-for="(item, index) in baanry[30]"
        :key="index"
      >
        <img v-lazy="item" style="width:32.05rem;height:3.5rem" />
      </a>
    </div>
    <lines :xmsH="'0.71rem'" :xmsC="'rgb(240, 241, 243)'" />
    <list-three-type :items="hotGoods.slice(51, 54)" :colorS="'rgb(240, 241, 243)'"></list-three-type>
    <lines :xmsH="'0.71rem'" :xmsC="'rgb(240, 241, 243)'" />
    <list-three-type :items="hotGoods.slice(54, 57)" :colorS="'rgb(240, 241, 243)'"></list-three-type>
    <lines :xmsH="'0.71rem'" :xmsC="'rgb(240, 241, 243)'" />
    <div class="cells_auto_fill" style="background-color: rgb(220, 221, 164);">
      <a
        href
        style="width:32.05rem;height:3.5rem"
        class="exposure items"
        v-for="(item, index) in baanry[31]"
        :key="index"
      >
        <img v-lazy="item" style="width:32.05rem;height:3.5rem" />
      </a>
    </div>
    <lines :xmsH="'0.71rem'" :xmsC="'rgb(240, 241, 243)'" />
    <list-three-type :items="hotGoods.slice(57, 60)" :colorS="'rgb(240, 241, 243)'"></list-three-type>
    <lines :xmsH="'0.71rem'" :xmsC="'rgb(240, 241, 243)'" />
    <list-three-type :items="hotGoods.slice(60, 63)" :colorS="'rgb(240, 241, 243)'"></list-three-type>
    <lines :xmsH="'0.71rem'" :xmsC="'rgb(240, 241, 243)'" />
    <list-three-type :items="hotGoods.slice(63, 66)" :colorS="'rgb(240, 241, 243)'"></list-three-type>
    <lines :xmsH="'0.71rem'" :xmsC="'rgb(240, 241, 243)'" />
    <div class="cells_auto_fill" style="background-color: rgb(220, 221, 164);">
      <a
        href
        style="width:32.05rem;height:3.5rem"
        class="exposure items"
        v-for="(item, index) in baanry[32]"
        :key="index"
      >
        <img v-lazy="item" style="width:32.05rem;height:3.5rem" />
      </a>
    </div>
    <lines :xmsH="'0.71rem'" :xmsC="'rgb(240, 241, 243)'" />
    <list-three-type :items="hotGoods.slice(66, 69)" :colorS="'rgb(240, 241, 243)'"></list-three-type>
    <lines :xmsH="'0.71rem'" :xmsC="'rgb(240, 241, 243)'" />
    <list-three-type :items="hotGoods.slice(69, 72)" :colorS="'rgb(240, 241, 243)'"></list-three-type>
    <lines :xmsH="'0.71rem'" :xmsC="'rgb(240, 241, 243)'" />
    <list-three-type :items="hotGoods.slice(72, 75)" :colorS="'rgb(240, 241, 243)'"></list-three-type>
    <lines :xmsH="'0.71rem'" :xmsC="'rgb(240, 241, 243)'" />
    <div class="cells_auto_fill" style="background-color: rgb(220, 221, 164);">
      <a
        href
        style="width:32.05rem;height:3.5rem"
        class="exposure items"
        v-for="(item, index) in baanry[33]"
        :key="index"
      >
        <img v-lazy="item" style="width:32.05rem;height:3.5rem" />
      </a>
    </div>
    <lines :xmsH="'0.71rem'" :xmsC="'rgb(240, 241, 243)'" />
    <list-three-type :items="hotGoods.slice(75, 78)" :colorS="'rgb(240, 241, 243)'"></list-three-type>
    <lines :xmsH="'0.71rem'" :xmsC="'rgb(240, 241, 243)'" />
    <list-three-type :items="hotGoods.slice(78, 81)" :colorS="'rgb(240, 241, 243)'"></list-three-type>
    <lines :xmsH="'0.71rem'" :xmsC="'rgb(240, 241, 243)'" />
    <list-three-type :items="hotGoods.slice(81, 84)" :colorS="'rgb(240, 241, 243)'"></list-three-type>
    <lines :xmsH="'0.71rem'" :xmsC="'rgb(240, 241, 243)'" />
    <div class="cells_auto_fill" style="background-color: rgb(220, 221, 164);">
      <a
        href
        style="width:32.05rem;height:3.5rem"
        class="exposure items"
        v-for="(item, index) in baanry[34]"
        :key="index"
      >
        <img v-lazy="item" style="width:32.05rem;height:3.5rem" />
      </a>
    </div>
    <lines :xmsH="'0.71rem'" :xmsC="'rgb(240, 241, 243)'" />
    <list-three-type :items="hotGoods.slice(84, 87)" :colorS="'rgb(240, 241, 243)'"></list-three-type>
    <lines :xmsH="'0.71rem'" :xmsC="'rgb(240, 241, 243)'" />
    <list-three-type :items="hotGoods.slice(87, 90)" :colorS="'rgb(240, 241, 243)'"></list-three-type>
    <lines :xmsH="'0.71rem'" :xmsC="'rgb(240, 241, 243)'" />
    <list-three-type :items="hotGoods.slice(90, 93)" :colorS="'rgb(240, 241, 243)'"></list-three-type>
    <lines :xmsH="'0.71rem'" :xmsC="'rgb(240, 241, 243)'" />
    <div class="cells_auto_fill" style="background-color: rgb(255, 255, 255);">
      <a
        href
        style="width:32.05rem;height:12.5rem"
        class="exposure items"
        v-for="(item, index) in baanry[35]"
        :key="index"
      >
        <img v-lazy="item" style="width:32.05rem;height:12.5rem" />
      </a>
    </div>
  </div>
</template>

<script>
import YSwiper from '@/components/common/Y-swiper.vue'
import lines from '@/components/common/divider-line.vue'
import listThreeType from '@/components/common/list_three_type4.vue'

export default {
  components: {
    YSwiper,
    lines,
    listThreeType
  },
  props: ['recommendData', 'intellData'],
  data() {
    return {
      baanry: [],
      hotGoods: []
    }
  },
  watch: {
    recommendData(val) {
      this.baanry = this.recommendData.cells_auto_fills
    },
    intellData(val) {
      this.hotGoods = this.intellData.hotGoods
    }
  },
  methods: {}
}
</script>

<style lang="less" scoped>
.component-list-main .cells_auto_fill .items {
  height: auto !important;
  display: block;
}
.component-list-main .cells_auto_fill .items img {
  display: block;
  width: 100%;
  height: auto;
}
.component-list-main .cells_auto_fill .items img {
  width: 100%;
}
</style>