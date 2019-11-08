<template>
  <div class="container fluid app-view app-view-with-footer">
    <header class="header-bar" id="header-bar" ref="headerBar">
      <div class="app-header-wrapper">
        <div class="app-header-left">
          <div class="app-header-item logo">
            <van-icon :name="logo" size="2.08rem" />
          </div>
        </div>
        <div class="app-header-middle">
          <div class="app-header-title">
            <van-icon :name="search" size="2.6rem" />搜索商品名称
          </div>
        </div>
        <div class="app-header-right">
          <div class="app-header-item logo">
            <van-icon :name="right" size="2.08rem" />
          </div>
        </div>
      </div>
      <div class="nav-wrap">
        <div class="nav-display" @click="toChangeNav">
          <van-icon :name="down" :class="toClass" size="1.78rem" />
        </div>
        <div class="nav-item-layer" v-show="isnav">
          <div class="title">全部</div>
          <div class="btn-wrap">
            <span
              class="extra-btn"
              v-for="(item,index) in dispalyNav"
              :key="index"
              v-bind:class="{cur:item.isActive, 'mr-interval':index!=3}"
              @click="haleBtn(index,item.name)"
            >{{item.name}}</span>
          </div>
        </div>
        <div class="nav" v-show="!isnav">
          <van-tabs
            v-model="active"
            @click="changeTab"
            swipeable
            title-active-color="#ED5B00"
            background="#f2f2f2"
            line-height="2px"
            sticky
            :swipe-threshold="6"
            :ellipsis="false"
          >
            <van-tab v-for="(item,index) in navtabs" :key="index" :title="item"></van-tab>
          </van-tabs>
        </div>
      </div>
    </header>
    <div id="home" class="page-wrap">
      <div class="bodys" v-show="tbodys[0].isActive">
        <!--<swiper class="swiper" :options="swiperOption">
        <swiper-slide class="text">-->
        <div class="component-list-main">
          <div class="swiper-container gallery">
            <Y-swiper :images="reomdImages.slice(0, 3)" />
          </div>
          <div class="cells_auto_fill multi_cell" style="width: 32.05rem;height:6.77rem;">
            <a
              href
              style="width:6.41rem;height:6.77rem"
              v-for="(item, index) in baanry[0]"
              :key="index"
            >
              <img v-lazy="item" style="width:6.41rem;height:6.77rem" />
            </a>
          </div>
          <div class="cells_auto_fill multi_cell" style="width: 32.05rem;height:6.77rem;">
            <a
              href
              style="width:6.41rem;height:6.77rem"
              v-for="(item, index) in baanry[1]"
              :key="index"
            >
              <img v-lazy="item" style="width:6.41rem;height:6.77rem" />
            </a>
          </div>
          <lines :xmsH="'0.71rem'" :xmsC="'rgb(245,245,245)'" />
          <div
            class="cells_auto_fill multi_cell"
            style="width: 32.05rem;height:22.6rem;position:relative;"
          >
            <a href style="width:15.937rem;height:22.6rem;" class="exposure items">
              <img v-lazy="hotGoods1" style="width:15.93rem;height:22.6rem" />
            </a>
            <a href style="width:15.93rem;height:22.6rem;left:16.11rem" class="exposure items">
              <img v-lazy="hotGoods2" style="width:15.93rem;height:11.2rem;" />
            </a>
            <a
              href
              style="width:6.41rem;height:22.6rem;left:16.11rem;top:11.4rem;"
              class="exposure items"
            >
              <img v-lazy="hotGoods3" style="width:15.93rem;height:11.2rem;" />
            </a>
          </div>
          <lines :xmsH="'0.71rem'" :xmsC="'rgb(245,245,245)'" />
          <div class="cells_auto_fill">
            <a href style="width:32.05rem;height:12.5rem;" class="exposure items">
              <img v-lazy="hotGoods4" style="width:32.05rem;height:12.5rem;" alt />
            </a>
          </div>
          <lines :xmsH="'0.71rem'" :xmsC="'rgb(245,245,245)'" />
          <div class="cells_auto_fill">
            <a href style="width:32.05rem;height:19.6rem;" class="exposure items">
              <img v-lazy="hotGoods5" style="width:32.05rem;height:19.6rem;" alt />
            </a>
          </div>
          <listType :listImages="listImage.slice(0,2)" />
          <line-whit />
          <listType :listImages="listImage.slice(2,4)" />
          <line-whit />
          <listType :listImages="listImage.slice(6,8)" />
          <line-whit />
          <listType :listImages="listImage.slice(8,10)" />
          <listTitle :msg="'更多小米手机产品'" />
          <lines :xmsH="'0.71rem'" :xmsC="'rgb(245,245,245)'" />
          <div class="cells_auto_fill">
            <a href class="exposure items" style="width: 32.05rem;height:12.5rem;">
              <img v-lazy="hotGoods6" alt style="width: 32.05rem;height:12.5rem;" />
            </a>
          </div>
          <lines :xmsH="'0.71rem'" :xmsC="'rgb(245,245,245)'" />
          <div class="cells_auto_fill">
            <a href class="exposure items" style="width: 32.05rem;height:19.5rem;">
              <img v-lazy="hotGoods7" alt style="width: 32.05rem;height:19.5rem;" />
            </a>
          </div>
          <line-whit />
          <listType :listImages="listImage.slice(10,12)" />
          <line-whit />
          <listType :listImages="listImage.slice(12,14)" />
          <line-whit />
          <listType :listImages="listImage.slice(14,16)" />
          <listTitle :msg="'更多小米电视产品'" />
          <lines :xmsH="'0.71rem'" :xmsC="'rgb(245,245,245)'" />
          <div class="cells_auto_fill">
            <a href class="exposure items" style="width: 32.05rem;height:12.5rem;">
              <img v-lazy="hotGoods8" alt style="width: 32.05rem;height:12.5rem;" />
            </a>
          </div>
          <lines :xmsH="'0.71rem'" :xmsC="'rgb(245,245,245)'" />
          <div class="cells_auto_fill">
            <a href class="exposure items" style="width: 32.05rem;height:19.5rem;">
              <img v-lazy="hotGoods9" alt style="width: 32.05rem;height:19.5rem;" />
            </a>
          </div>
          <line-whit />
          <listType :listImages="listImage.slice(16,18)" />
          <line-whit />
          <listType :listImages="listImage.slice(18,20)" />
          <line-whit />
          <listType :listImages="listImage.slice(20,22)" />
          <listTitle :msg="'更多小米笔记本产品'" />
          <lines :xmsH="'0.71rem'" :xmsC="'rgb(245,245,245)'" />
          <div class="cells_auto_fill">
            <a href class="exposure items" style="width: 32.05rem;height:12.5rem;">
              <img v-lazy="hotGoods10" alt style="width: 32.05rem;height:12.5rem;" />
            </a>
          </div>
          <lines :xmsH="'0.71rem'" :xmsC="'rgb(245,245,245)'" />
          <div class="cells_auto_fill">
            <a href class="exposure items" style="width: 32.05rem;height:19.5rem;">
              <img v-lazy="hotGoods11" alt style="width: 32.05rem;height:19.5rem;" />
            </a>
          </div>
          <div
            class="divider_line"
            style="height: 0.04rem; border-bottom: 0.04rem solid rgb(245, 245, 245); background-color: rgb(245, 245, 245);"
          ></div>
          <listType1 :imageTwo="imageTwo.slice(0, 2)" />
          <listType1 :imageTwo="imageTwo.slice(2, 4)" />
          <listType1 :imageTwo="imageTwo.slice(4, 6)" />
          <listTitle :msg="'更多米家家电产品'" />
          <lines :xmsH="'0.71rem'" :xmsC="'rgb(245,245,245)'" />
          <div class="cells_auto_fill">
            <a href class="exposure items" style="width: 32.05rem;height:12.5rem;">
              <img v-lazy="hotGoods12" alt style="width: 32.05rem;height:12.5rem;" />
            </a>
          </div>
          <lines :xmsH="'0.71rem'" :xmsC="'rgb(245,245,245)'" />
          <div class="cells_auto_fill">
            <a href class="exposure items" style="width: 32.05rem;height:19.5rem;">
              <img v-lazy="hotGoods13" alt style="width: 32.05rem;height:19.5rem;" />
            </a>
          </div>
          <div
            class="divider_line"
            style="height: 0.17rem; border-bottom: 0.17rem solid rgb(255, 255, 255); background-color: rgb(255, 255, 255);"
          ></div>
          <list-type-one2 :imageOne="imageOne.slice(0,1)" />
          <list-type-one3 :imageoneThree="imageOne.slice(1,2)" />
          <list-type-one2 :imageOne="imageOne.slice(2,3)" />
          <listTitle :msg="'更多米家智能产品'" />
          <lines :xmsH="'0.71rem'" :xmsC="'rgb(245,245,245)'" />
          <div class="cells_auto_fill multi_cell" style="width: 32.05rem;height:21.3rem;">
            <a href class="exposure items" style="width: 15.9rem;height:21.3rem;">
              <img v-lazy="hotGoods14[0]" alt style="width: 15.9rem;height:21.3rem;" />
            </a>
            <a href class="exposure items" style="width: 15.9rem;height:21.3rem;left:16.1rem;">
              <img v-lazy="hotGoods14[1]" alt style="width: 15.9rem;height:21.3rem;" />
            </a>
          </div>
          <div
            class="divider_line"
            style="height: 0.17rem; border-bottom: 0.17rem solid rgb(245, 245, 245); background-color: rgb(245, 245, 245);"
          ></div>
          <div class="cells_auto_fill multi_cell" style="width: 32.05rem;height:21.3rem;">
            <a href class="exposure items" style="width: 15.9rem;height:21.3rem;">
              <img v-lazy="hotGoods15[0]" alt style="width: 15.9rem;height:21.3rem;" />
            </a>
            <a href class="exposure items" style="width: 15.9rem;height:21.3rem;left:16.1rem;">
              <img v-lazy="hotGoods15[1]" alt style="width: 15.9rem;height:21.3rem;" />
            </a>
          </div>
          <div
            class="divider_line"
            style="height: 0.17rem; border-bottom: 0.17rem solid rgb(245, 245, 245); background-color: rgb(245, 245, 245);"
          ></div>
          <div class="cells_auto_fill multi_cell" style="width: 32.05rem;height:21.3rem;">
            <a href class="exposure items" style="width: 15.9rem;height:21.3rem;">
              <img v-lazy="hotGoods16[0]" alt style="width: 15.9rem;height:21.3rem;" />
            </a>
            <a href class="exposure items" style="width: 15.9rem;height:21.3rem;left:16.1rem;">
              <img v-lazy="hotGoods16[1]" alt style="width: 15.9rem;height:21.3rem;" />
            </a>
          </div>
          <lines :xmsH="'0.71rem'" :xmsC="'rgb(245,245,245)'" />
          <div class="cells_auto_fill">
            <a href class="exposure items" style="width: 32.05rem;height:12.5rem;">
              <img v-lazy="hotGoods17" alt style="width: 32.05rem;height:12.5rem;" />
            </a>
          </div>

          <div class="cells_auto_fill">
            <a href class="exposure items" style="width: 32.05rem;height:4.7rem;">
              <img v-lazy="hotGoods18" alt style="width: 32.05rem;height:4.7rem;" />
            </a>
          </div>
        </div>
        <!-- </swiper-slide>
          <div class="swiper-scrollbar" slot="scrollbar"></div>
        </swiper>-->
      </div>
      <div class="bodys" v-show="tbodys[1].isActive">
        <div class="component-list-main">
          <div class="swiper-container gallery">
            <Y-swiper :images="reomdImages.slice(3, 8)" />
          </div>
          <ai-tabs :intellData="intellData" :recommendData="recommendData"></ai-tabs>
        </div>
      </div>
      <div class="bodys" v-show="tbodys[2].isActive">
        <div class="component-list-main">
          <div class="swiper-container gallery">
            <Y-swiper :images="reomdImages.slice(8, 10)" />
          </div>
          <tv-tabs :recommendData="recommendData" :tvData="tvData" />
        </div>
      </div>
      <div class="bodys" v-show="tbodys[3].isActive">
        <div class="component-list-main">
          <div class="swiper-container gallery">
            <Y-swiper :images="reomdImages.slice(10, 12)" />
          </div>
          <note-book-tabs :recommendData="recommendData" :intellData="intellData" :tvData="tvData" />
        </div>
      </div>
      <div class="bodys" v-show="tbodys[4].isActive">
        <div class="component-list-main">
          <div class="swiper-container gallery">
            <Y-swiper :images="reomdImages.slice(12, 16)" />
          </div>
          <alc-tabs :recommendData="recommendData" :tvData="tvData" />
        </div>
      </div>
      <div class="bodys" v-show="tbodys[5].isActive">
        <div class="component-list-main">
          <div class="swiper-container gallery">
            <Y-swiper :images="reomdImages.slice(16, 20)" />
          </div>
          <life-tabs :recommendData="recommendData" :tvData="tvData" :intellData="intellData" />
        </div>
      </div>
      <!-- <div class="bodys" v-show="tbodys[6].isActive">6</div> -->
    </div>
  </div>
</template>

<script>
import { getHomeData } from '@/api/getHome'
import YSwiper from '@/components/common/Y-swiper.vue'
import lines from '@/components/common/divider-line.vue'
import lineWhit from '@/components/common/divider-line-whit.vue'
import listType from '@/components/common/list_two_type13.vue'
import listType1 from '@/components/common/list_two_type1.vue'
import listTypeOne2 from '@/components/common/list_one_type2.vue'
import listTypeOne3 from '@/components/common/list_one_type3.vue'
import listTitle from '@/components/common/list-title.vue'
import aiTabs from '@/page/tabpage/aiTabs'
import tvTabs from '@/page/tabpage/tvTabs'
import noteBookTabs from '@/page/tabpage/noteBookTabs'
import alcTabs from '@/page/tabpage/alcTabs'
import lifeTabs from '@/page/tabpage/lifeTabs'

export default {
  components: {
    YSwiper,
    lines,
    listType,
    listType1,
    listTypeOne2,
    listTypeOne3,
    listTitle,
    lineWhit,
    aiTabs,
    tvTabs,
    noteBookTabs,
    alcTabs,
    lifeTabs
  },
  data() {
    return {
      msg: 'hello miapp',
      logo: require('@/assets/img/logo.png'),
      search: require('@/assets/img/serach.png'),
      right: require('@/assets/img/user.png'),
      down: require('@/assets/img/down.png'),
      navtabs: [],
      active: 0,
      toClass: '',
      isnav: false,
      dispalyNav: [], //tabs页数据
      tbodys: [
        {
          isActive: true
        },
        {
          isActive: false
        },
        {
          isActive: false
        },
        {
          isActive: false
        },
        {
          isActive: false
        },
        {
          isActive: false
        },
        {
          isActive: false
        }
      ], //
      swiperOption: {
        direction: 'vertical',
        slidesPerView: 'auto',
        freeMode: true,
        mousewheel: true,
        scrollbar: {
          el: '.swiper-scrollbar'
        }
      },

      reomdImages: [], //推荐页轮播图数组
      baanry: [], //cells_auto_fills下的文件路径
      hotGoods1: '',
      hotGoods2: '',
      hotGoods3: '',
      hotGoods4: '',
      hotGoods5: '',
      hotGoods6: '',
      hotGoods7: '',
      hotGoods8: '',
      hotGoods9: '',
      hotGoods10: '',
      hotGoods11: '',
      hotGoods12: '',
      hotGoods13: '',
      hotGoods14: [],
      hotGoods15: [],
      hotGoods16: [],
      hotGoods17: '',
      hotGoods18: '',
      listImage: [],
      imageTwo: [],
      imageOne: [],
      tvData: {},
      recommendData: {},
      intellData: {}
    }
  },
  created() {
    this.init()
    // this.getSwiper();
  },
  mounted() {
    // this.getSwiper();
    // this.getSwiper()
    // let resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
    // window.addEventListener(resizeEvt, this.getSwiper(), false);
    // document.addEventListener('DOMContentLoaded', this.getSwiper(), false);
  },

  methods: {
    // 获取初始化数据
    async init() {
      let { data } = await getHomeData()
      this.recommendData = data.recommendData
      this.intellData = data.intellData
      // console.log(data)
      this.tvData = data.tvData
      this.navtabs = data.recommendData.tabsData
      this.reomdImages = data.recommendData.swiperData
      this.navtabs.forEach((item, index) => {
        this.dispalyNav.push({
          name: item,
          isActive: index == this.active
        })
      })
      this.tbodys = this.dispalyNav
      this.baanry = data.recommendData.cells_auto_fills
      this.hotGoods1 = this.baanry[2][0]
      this.hotGoods2 = this.baanry[2][1]
      this.hotGoods3 = this.baanry[2][2]
      this.hotGoods4 = this.baanry[3][0]
      this.hotGoods5 = this.baanry[4][0]
      this.hotGoods6 = this.baanry[5][0]
      this.hotGoods7 = this.baanry[6][0]
      this.hotGoods8 = this.baanry[7][0]
      this.hotGoods9 = this.baanry[8][0]
      this.hotGoods10 = this.baanry[9][0]
      this.hotGoods11 = this.baanry[10][0]
      this.hotGoods12 = this.baanry[11][0]
      this.hotGoods13 = this.baanry[12][0]
      this.hotGoods14 = this.baanry[13]
      this.hotGoods15 = this.baanry[14]
      this.hotGoods16 = this.baanry[15]
      this.hotGoods17 = this.baanry[16][0]
      this.hotGoods18 = this.baanry[17][0]
      // console.log(this.hotGoods16)

      this.listImage = data.recommendData.list_type
      this.imageTwo = data.recommendData.list_type_1
      this.imageOne = data.recommendData.list_type_2
    },
    // 计算视口高度
    getSwiper() {
      let $height = window.innerHeight || document.documentElement.clientHeight
      let other = this.$refs.headerBar.offsetHeight //100;
      console.log($height, other)
      this.style.height = $height - other - 50 + 'px'
    },
    toChangeNav() {
      this.isnav = !this.isnav
      this.toClass = this.isnav ? 'unfold' : ''
    },
    haleBtn(index, res) {
      this.dispalyNav.forEach(item => {
        item.isActive = false
      })
      this.toChangeNav()
      this.dispalyNav[index].isActive = true
      this.active = index
    },
    changeTab(name, title) {
      this.dispalyNav.forEach(item => {
        item.isActive = false
      })
      this.dispalyNav[name - 0].isActive = true
    },
    onSearch() {},
    onCancel() {}
  }
}
</script>

<style lang="less" scoped>
.header-bar {
  position: fixed;
  top: -1px;
  left: 0;
  right: 0;
  z-index: 99;
  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2);
  background: #f2f2f2;
}
.app-header-wrapper > div,
.app-header-wrapper {
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.app-header-wrapper {
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  height: 3.74rem;
  background: #f2f2f2;
  color: #666;
  padding: 0;
  .app-header-item {
    display: block;
    width: 2.6rem;
    margin: 0 0.89rem;
  }
  .app-header-middle {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    font-size: 1.3rem;
  }
  .app-header-title {
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: start;
    -webkit-justify-content: flex-start;
    justify-content: flex-start;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    border: 1px solid #e5e5e5;
    width: 100%;
    color: rgba(0, 0, 0, 0.3);
    background-color: #fff;
    border-radius: 0.1rem;
  }
}
.container .nav-wrap {
  position: relative;
  overflow: hidden;
  .nav {
    padding-right: 3.4rem;
  }
  .nav-item-layer {
    background-color: #f2f2f2;
    font-size: 1.24661rem;
    text-align: left;
    padding: 0 1.1rem;
    -webkit-transition: max-height 0.3s ease-in-out;
    transition: max-height 0.3s ease-in-out;
    overflow: hidden;
    .title {
      padding-top: 1.11304rem;
    }
    .btn-wrap {
      margin-top: 1.514rem;
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-flex-wrap: wrap;
      flex-wrap: wrap;
      .extra-btn {
        margin-bottom: 1.06852rem;
        display: inline-block;
        width: 6rem;
        height: 2.5rem;
        text-align: center;
        line-height: 2.5rem;
        border: 1px solid #e5e5e5;
        border-radius: 4px;
        font-size: 1.11304rem;
        background-color: #fff;
      }
      .extra-btn.mr-interval {
        margin-right: 1.5rem;
      }
      .extra-btn.cur {
        background-color: #fde0d5;
        border-color: #ff6700;
        color: #ff6700;
      }
    }
  }

  .nav-display {
    position: absolute;
    right: 0;
    top: 0;
    width: 3.02739rem;
    height: 2.4487rem;
    line-height: 2.4487rem;
    background-color: #f2f2f2;
    box-shadow: -15px 0 15px 0 #f2f2f2;
    z-index: 99;

    .van-icon {
      vertical-align: middle;
      transform: rotate(0deg);
      -webkit-transition: -webkit-transform 0.2s linear;
      transition: -webkit-transform 0.2s linear;
      transition: transform 0.2s linear;
      transition: transform 0.2s linear, -webkit-transform 0.2s linear;
    }
    .van-icon.unfold {
      -webkit-transform: rotate(180deg);
      transform: rotate(180deg);
    }
  }
}

@import '../css/home.less';
</style>