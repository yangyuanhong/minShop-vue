<template>
  <div class="list_one_type3">
    <a href class="exposure box-flex item" v-for="(item, index) in imageoneThree" :key="index">
      <div class="info">
        <div class="name">{{item.NAME}}</div>
        <div class="briefwarp">{{item.BRIEF}}</div>
        <div class="price mt32">
          {{item.PRICE}}
          <span class="price old" v-if="item.price_old!=''">
            <s>{{item.price_old}}</s>
          </span>
        </div>
      </div>
      <div class="img">
        <img v-lazy="item.imageSrc" class="big" style="width: 16rem;height:16rem" />
      </div>
    </a>
  </div>
</template>

<script>
export default {
  props: ['imageoneThree']
}
</script>

<style lang="less" scoped>
.component-list-main .list_one_type3 .item {
  width: 100%;
}
.component-list-main .list_one_type3 .img {
  width: 16rem;
  height: 16rem;
}
.component-list-main .img {
  position: relative;
  overflow: hidden;
}
.component-list-main img {
  display: block;
  width: 100%;
  height: auto;
}
.component-list-main {
  .info {
    padding: 0.88rem 1.2rem;
    text-align: left;
  }
  .list_one_type3 .info {
    padding: 2.85rem 0.53rem 0 1.4rem;
    box-sizing: border-box;
    width: 16rem;
    height: 16rem;
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
  .briefwarp {
    margin-top: 0.26rem;
    font-size: 1.01rem;
    line-height: 1.55rem;
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
  .price.mt32 {
    margin-top: 0.89rem;
  }
}
</style>