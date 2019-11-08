<template>
  <div>
    <swiper :options="swiperOption" class="conent-swiper" style="height: auto">
      <swiper-slide v-for="(item, index) in images" :key="index">
        <img :src="item" width="100%" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  props: ['images'],
  data() {
    return {
      swiperOption: {
        autoHeight: true,
        spaceBetween: 30,
        // loop: true,
        centeredSlides: true,
        autoplay: {
          delay: 3500,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>
.conent-swiper {
  .swiper-slide {
    text-align: center;
    font-size: 1.8rem;
    background: #ccc;
    height: 16rem;
    overflow: hidden;
  }

  .swiper-slide img {
    width: 100%;
    height: 100%;
    -ms-transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    position: absolute;
    left: 50%;
    top: 50%;
  }
}
</style>
<style >
.swiper-pagination-bullet-active {
  background: #fff;
}
</style>