<template>
  <div class="list_two_type14" :style="{background: bg}">
    <div class="goods-list">
      <div class="item item-md" v-for="(item, index) in Goods" :key="index">
        <a href="#" class="exposure img-box">
          <div class="img">
            <img v-lazy="item.imageSrc" class="big" style="width:15rem;height: 15rem;" />
            <div class="tag2" v-if="item.image1">
              <img v-lazy="item.image1" class="tag-icon" />
            </div>
          </div>
        </a>
        <div class="info-box">
          <div class="text">
            <div class="name">{{item.NAME}}</div>
            <div class="brief">{{item.BRIEF}}</div>
          </div>
          <div class="action-box ui-flex justify-center">
            <a href="#" class="exposure action">
              <div class="price" style="color: rgb(245, 75, 75);">
                {{item.PRICE}}
                <span class="price old" v-if="item.PRICE_OLD!=''">
                  <s>{{item.PRICE_OLD}}</s>
                </span>
              </div>
              <div
                class="ui-button btn-s-h"
                style="background-color:rgb(245,75,75);color:rgb(255,255,255);"
              >
                <span>立即购买</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['Goods', 'bg']
}
</script>

<style lang="less" scoped>
.component-list-main {
  .ui-button {
    display: block;
    width: 100%;
    height: 2.6rem;
    line-height: 2.6rem;
    text-align: center;
    font-size: 1rem;
    background: #ea625b;
    border-radius: 3px;
    span: #fff;
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
  .price {
    font-size: 1.248rem;
    color: #ea625b;
    height: 1.5em;
    line-height: 1.5em;
    position: relative;
    display: inline-block;
  }
  .brief {
    margin-top: 0.26rem;
    font-size: 0.98rem;
    line-height: 1.33rem;
    color: rgba(0, 0, 0, 0.54);
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
  .goods-list {
    padding: 0 0.44rem;
    overflow: hidden;
    text-align: left;
    .item {
      background: #fff;
      .img-box {
        display: block;
        position: relative;
        height: 19.4rem;
        overflow: hidden;
      }
      .info-box {
        padding: 1.24rem;
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
        .action {
          width: 9.7rem;
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
        .ui-button {
          font-weight: bolder;
        }
        .ui-button.bth-s-h {
          height: 2.18rem;
          line-height: 2.18rem;
        }
      }
    }
    .item-md {
      float: left;
      width: 15.3rem;
      .img-box {
        height: 12.5rem;
      }
      .info-box {
        height: auto;
        padding: 1.24rem 0.44rem;
        text-align: center;
        overflow: hidden;
        .text {
          padding-top: 0;
          padding-right: 0;
          height: auto;
          margin-bottom: 0.53rem;
        }
        .name {
          font-size: 1.24rem;
          padding: 0 0.53rem;
        }
        .action {
          width: 7.8rem;
          margin: 0 auto;
        }
        .price {
          font-size: 1.24rem;
          text-align: center;
        }
      }
    }
    .item-md:nth-child(2n) {
      margin-left: 0.53rem;
    }
  }
  .list_two_type14 {
    .goods-list {
      padding: 0 0.71rem;
      .item-md {
        width: 15rem;
        border-radius: 0.44rem;
        overflow: hidden;
        .img-box {
          height: 15rem;
          .action {
            display: block;
          }
        }
      }
    }
  }
}
</style>