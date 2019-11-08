<template>
  <div class="list_two_type1 box-flex">
    <a class="exposure item" v-for="(item, index) in imageTwo" :key="index">
      <div class="img">
        <img v-lazy="item.imageSrc" class="big" style="width:16rem;height:16rem;" />
        <div class="tag2" v-if="item.image1">
          <img v-lazy="item.image1" alt class="tag-icon" />
        </div>
      </div>
      <div class="info">
        <div class="name">{{item.NAME}}</div>
        <div class="brief">{{item.BRIEF}}</div>
        <div class="price">
          {{item.PRICE}}
          <span>起</span>
          <span class="price old" v-if="item.price_old!=''">
            <s>{{item.price_old}}</s>
          </span>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  props: ['imageTwo']
}
</script>

<style lang="less" scoped>
.component-list-main {
  .img {
    position: relative;
    overflow: hidden;
  }
  .list_two_type1 .img {
    width: 16rem;
    height: 16rem;
  }
  .list_two_type1 .item {
    width: 16rem;
  }
  .list_two_type1 .item:first-child {
    margin-right: 0.178rem;
  }
  .info {
    padding: 0.89rem 1.2rem;
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