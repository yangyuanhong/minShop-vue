<template>
  <div class="list_three_type4" :style="{background: colorS}">
    <div class="goods-list">
      <a href="#" class="exposure item item-xs" v-for="(item, index) in items" :key="index">
        <div class="img">
          <img v-lazy="item.imageSrc" class="big" style="width:9.8rem;9.8rem;" />
          <div class="tag2" v-if="item.image1">
            <img v-lazy="item.image1" alt class="tag-icon" />
          </div>
        </div>
        <div class="info-box">
          <div class="text">
            <div class="name">{{item.NAME}}</div>
            <div class="brief">{{item.BRIEF}}</div>
            <div class="price" style="color: rgb(245, 75, 75);">
              {{item.PRICE}}
              <span v-if="item.PRICE_OLD !=''" class="price old">
                <s>{{item.PRICE_OLD}}</s>
              </span>
            </div>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: ['items', 'colorS']
}
</script>

<style lang="less" scoped>
.component-list-main .price {
  font-size: 0.28rem;
  color: #ea625b;
  height: 1.5em;
  line-height: 1.5em;
  position: relative;
  display: inline-block;
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
.component-list-main .goods-list {
  padding: 0 0.1rem;
  overflow: hidden;
  text-align: left;
  .item {
    background: #fff;
    .info-box {
      padding: 1.25rem;
      color: #000;
      .text {
        padding-right: 0.89rem;
      }
      .name {
        font-size: 1.4rem;
        font-weight: bolder;
        color: #3c3c3c;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .brief {
        font-size: 0.89rem;
        color: #3c3c3c;
        height: 1.5em;
        line-height: 1.5em;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .price {
        font-family: Heiti SC, STHeiti;
        font-size: 1.4rem;
        color: #ff4a48;
        font-weight: 700;
        text-align: right;
        line-height: 1em;
        height: 1.2em;
        white-space: nowrap;
        span {
          display: inline-block;
          vertical-align: baseline;
        }
        .old {
          display: inline-block;
          margin: 0 0.44rem;
          font-size: 0.76em;
          color: rgba(0, 0, 0, 0.54);
        }
      }
    }
  }
  .item-xs {
    float: left;
    width: 9.9rem;
    margin-left: 0.53rem;
    .info-box {
      height: auto;
      padding: 0.89rem 0.445rem;
      text-align: center;
      overflow: hidden;
      .text {
        padding-top: 0;
        padding-right: 0;
        height: auto;
      }
      .name {
        font-size: 1rem;
        padding: 0 0.52rem;
      }
      .brief {
        font-size: 0.89rem;
        line-height: 1.6em;
      }
      .price {
        font-size: 1.25rem;
        text-align: center;
        margin-top: 1rem;
        margin-bottom: 0;
      }
    }
  }
  .item-xs:first-child {
    margin-left: 0.089rem;
  }
}
.component-list-main .list_three_type4 .goods-list {
  padding: 0 0.7rem;
  .item-xs {
    width: 9.8rem;
    border-radius: 0.267rem;
    overflow: hidden;
  }
  .item-xs:first-child {
    margin-left: 0;
  }
}
.component-list-main .tag2 {
  position: absolute;
  bottom: 0;
  right: 0;
}
.component-list-main .tag2 img {
  display: inline-block;
  width: 4.4rem;
  height: auto;
}
</style>