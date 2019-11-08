<template>
  <div class="content app-view app-view-with-footer">
    <header class="hd">
      <div class="user ui-flex align-center">
        <div class="img">
          <img src="https://s1.mi.com/m/images/m/default.png" />
        </div>
        <!-- <div class="name">登录/注册</div> -->
        <div class="name">
          <p>{{user.name}}</p>
          <div class="account">{{user.user_id}}</div>
        </div>
      </div>
    </header>
    <div class="b1 ui-flex align-center justify-space-between">
      <div class="cite">我的订单</div>
      <div class="span ui-flex align-center">
        <a href class>全部订单</a>
      </div>
    </div>
    <ul class="b2 ui-flex align-center justify-space-between">
      <li class="dfk">
        <router-link to="/order/list?type=7">
          <div class="my-icon">
            <van-icon size="2.1rem" :name="dfk" />
          </div>
          <span>待付款</span>
        </router-link>
      </li>
      <li class="dah">
        <router-link to="/order/list?type=8">
          <div class="my-icon">
            <van-icon size="2.1rem" :name="dsh" />
          </div>
          <span>待收货</span>
        </router-link>
      </li>
      <li class="thx">
        <router-link to="/aftersale/list">
          <div class="my-icon">
            <van-icon size="2.1rem" :name="thx"></van-icon>
          </div>
          <span>退换修</span>
        </router-link>
      </li>
    </ul>
    <div class="ui-line"></div>
    <ul class="items">
      <li class="i-member">
        <router-link to="/mpointsmall">
          <cite>会员中心</cite>
        </router-link>
      </li>
      <li class="i-wallet">
        <router-link to="/uer/coupon">
          <cite>我的优惠</cite>
        </router-link>
      </li>
    </ul>
    <div class="ui-line"></div>
    <ul class="items">
      <li class="i-service">
        <router-link to="/services">
          <cite>服务中心</cite>
        </router-link>
      </li>
      <li class="i-mihome">
        <router-link to="/maplocation/address?location_type=mihome">
          <cite>小米之家</cite>
        </router-link>
      </li>
    </ul>
    <div class="ui-line"></div>
    <ul class="items">
      <li class="i-fcode">
        <router-link to="/fcode">
          <cite>我的F码</cite>
        </router-link>
      </li>
      <li class="i-gift">
        <router-link to="/giftcode">
          <cite>我的优惠</cite>
        </router-link>
      </li>
    </ul>
    <div class="ui-line"></div>
    <ul class="items">
      <li class="i-setting">
        <router-link to="/user/set">
          <cite>设置</cite>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dfk: require('@/assets/img/dfk.png'),
      dsh: require('@/assets/img/dsh.png'),
      thx: require('@/assets/img/thx.png'),
      user: {
        name: '古穆',
        user_id: '1411474058'
      }
    }
  }
}
</script>

<style lang="less" scoped>
.hd {
  background: url(https://m.mi.com/static/img/bg.63c8e19851.png) center 0
    #f37d0f;
  background-size: auto 100%;
  padding: 1.42rem 0;
  .img {
    margin: 0 0.71rem 0 1.42rem;
    width: 4.27rem;
    height: 4.27rem;
    overflow: hidden;
    box-sizing: border-box;
    border-radius: 100%;
    border: 3px solid hsla(0, 0%, 100%, 0.4);
    text-align: center;
    img {
      width: auto;
      height: 100%;
      margin: 0 auto;
    }
  }
  .name {
    color: #fff;
    font-size: 1.068rem;
    text-align: left;
  }
}
.b1 {
  background-color: #fff;
  height: 3.56rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  color: rgba(0, 0, 0, 0.54);
  position: relative;
  padding-right: 2.5rem;
  .cite {
    font-size: 1.24rem;
    padding: 0 0 0 1.42rem;
    color: rgba(0, 0, 0, 0.87);
  }
  .span,
  a {
    font-size: 1.068rem;
    color: rgba(0, 0, 0, 0.87);
  }
}
.b1::after {
  content: '';
  position: absolute;
  right: 5.12px;
  right: 1.42rem;
  top: 50%;
  width: 3.2px;
  width: 0.89rem;
  height: 3.2px;
  height: 0.89rem;
  border-left: 1px solid currentColor;
  border-top: 1px solid currentColor;
  transform: translate3d(0, -50%, 0) rotate(135deg);
  -webkit-transform: translate3d(0, -50%, 0) rotate(135deg);
}
.b2 {
  padding: 0 3.56rem;
  background-color: #fff;
}
.b2 li {
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-align-content: space-between;
  align-content: space-between;
  position: relative;
  padding: 1.78rem 0;
  span {
    color: rgba(0, 0, 0, 0.87);
  }
  .my-icon {
    margin-bottom: 0.6rem;
  }
}
.items {
  background: #fff;
  li {
    position: relative;
    color: rgba(0, 0, 0, 0.54);
    background: url('../assets/img/i-setting.png') no-repeat 1.42rem;
    background-size: 2.13rem auto;
    // border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    line-height: 0;
    list-style: none;
  }
  li.i-member {
    background-image: url('../assets/img/i-hy.png');
  }
  li.i-wallet {
    background-image: url('../assets/img/i-yh.png');
  }
  li.i-service {
    background-image: url('../assets/img/i-fw.png');
  }
  li.i-mihome {
    background-image: url('../assets/img/i-xmzj.png');
  }
  li.i-fcode {
    background-image: url('../assets/img/i-f.png');
  }
  li.i-gift {
    background-image: url('../assets/img/i-gift.png');
  }
  li:last-child {
    border-bottom-color: #fff;
  }
  li > a {
    display: block;
    padding-right: 2.49rem;
    padding-left: 4.97rem;
    height: 4.6rem;
    display: box;
    display: -webkit-box;
    box-align: center;
    -webkit-box-align: center;
    box-pack: justify;
    -webkit-box-pack: justify;
    color: currentColor;
    cite {
      font-size: 1.24rem;
      font-style: normal;
      color: rgba(0, 0, 0, 0.87);
    }
  }
}
.items li::after {
  content: '';
  position: absolute;
  right: 5.12px;
  right: 1.42rem;
  top: 50%;
  width: 3.2px;
  width: 0.89rem;
  height: 3.2px;
  height: 0.89rem;
  border-left: 1px solid currentColor;
  border-top: 1px solid currentColor;
  transform: translate3d(0, -50%, 0) rotate(135deg);
  -webkit-transform: translate3d(0, -50%, 0) rotate(135deg);
}
.items li:first-child::before {
  position: absolute;
  box-sizing: border-box;
  content: '';
  pointer-events: none;
  right: 0;
  bottom: 0;
  left: 4.97rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5);
}
.hd .account {
  color: hsla(0, 0%, 100%, 0.6);
}
</style>