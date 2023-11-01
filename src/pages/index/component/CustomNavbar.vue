<script setup lang="ts">
//获取屏幕边界到安全区的距离
const { safeAreaInsets } = uni.getSystemInfoSync()
</script>

<template>
  <view class="navbar" :style="{ paddingTop: safeAreaInsets?.top + 'px' }">
    <view class="logoNav">
      <image class="logo" src="@/static/images/logo.png" mode="widthFix"> </image>
      <view class="line"> </view>
      <view class="logoTitle"> 新鲜・亲民・快捷 </view>
    </view>
    <view class="search">
      <uni-icons class="searchIcon" type="search" size="24" color="#fff"></uni-icons>
      <text class="searchTitle">搜索商品</text>
      <uni-icons class="scanIcon" type="scan" size="24" color="#fff"></uni-icons>
    </view>
  </view>
  <!-- <text class="iconfont icon-baomihua-01"></text> -->
</template>

<style lang="scss">
//
.navbar {
  height: 180rpx;
  background-image: url('@/static/images/navigator_bg.png');
  padding-top: 20px;
  box-sizing: content-box;
  .logoNav {
    display: flex;
    align-items: center;
    padding-top: 20rpx;
    padding-bottom: 20rpx;
    padding-right: 36rpx;
    padding-left: 36rpx;
    .logo {
      width: 150rpx;
    }
    .line {
      width: 2rpx;
      height: 30rpx;
      border-left: 2rpx solid #fff;
      margin: 0 20rpx;
    }
    .logoTitle {
      font-size: 28rpx;
      font-weight: 100;
      color: #fff;
    }
  }
  .search {
    display: flex;
    align-items: center;
    height: 74rpx;
    margin-right: 20rpx;
    margin-left: 20rpx;
    background-color: #ffffffa8;
    border-radius: 30rpx;
    color: #fff;
    font-size: 28rpx;
    position: relative;
    .searchIcon {
      position: absolute;
      left: 20rpx;
    }
    .scanIcon {
      position: absolute;
      right: 28rpx;
    }
    .searchTitle {
      position: absolute;
      left: 72rpx;
      font-size: 30rpx;
    }
  }
}
</style>
