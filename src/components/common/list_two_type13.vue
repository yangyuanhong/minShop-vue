<template>
  <div class="list_two_type13 box-flex" style="background: rgb(255,255,255);">
    <a href class="exposure item" v-for="(item, index) in listImages" :key="index">
      <div class="img">
        <img v-lazy="item.imageSrc" style="width: 15.3rem;height:12.5rem;" alt class="big" />
        <div class="tag2" v-if="item.image1">
          <img v-lazy="item.image1" alt />
        </div>
      </div>
      <div class="info bgw align-center">
        <div class="name">{{item.NAME}}</div>
        <div class="brief">{{item.BRIEF}}</div>
        <div class="price">
          {{item.PRICE}}
          <span>起</span>
          <span class="price old" v-if="item.price_old!=''">
            <s>{{item.price_old}}</s>
          </span>
        </div>
        <div class="buybtn mauto">立即购买</div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  props: ['listImages'],
  data() {
    return {}
  }
}
</script>

<style lang="less" scoped>
.component-list-main {
  .list_two_type13 {
    padding: 0 0.5rem;
    width: 100%;
    overflow: hidden;
    text-align: center;
    .item {
      width: 15.23rem;
    }
    .item:first-child {
      margin-right: 0.52rem;
    }
  }
  .img {
    position: relative;
    overflow: hidden;
  }
  img {
    display: block;
    width: 100%;
    height: auto;
  }
  .info {
    padding: 0.89rem 1.2rem;
  }
  .align-center {
    text-align: center !important;
  }
  .bgw {
    background-color: #fff;
  }
  .name {
    font-size: 1.25rem;
    color: rgba(0, 0, 0, 0.87);
  }
  .brief,
  .name {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .brief {
    margin-top: 0.267rem;
    font-size: 1.01rem;
    line-height: 1.33rem;
    color: rgba(0, 0, 0, 0.54);
  }
  .price {
    font-size: 1.25rem;
    color: #ea625b;
    height: 1.5em;
    line-height: 1.5em;
    position: relative;
    display: inline-block;
    span {
      display: inline-block;
      margin-left: -0.178rem;
      font-size: 1.01rem;
    }
    .old {
      display: inline-block;
      margin: 0 0.44rem;
      font-size: 0.88rem;
      color: rgba(0, 0, 0, 0.54);
    }
  }
  .buybtn {
    width: 8.9rem;
    background: #ea625b;
    border-radius: 0.225rem;
    text-align: center;
    color: #fff;
    font-size: 1.068rem;
    font-weight: 700;
    padding: 0.71rem;
  }
  .mauto {
    margin: 0 auto;
  }
  .tag2 {
    position: absolute;
    bottom: 0;
    right: 0;
    img {
      display: inline-block;
      width: 4.4rem;
      height: auto;
    }
  }
}
</style>