<script setup lang="ts">
//获取屏幕边界到安全区的距离
</script>

<template>
  <view class="popular">
    <view class="popularItem" v-for="item in 4" :key="item">
      <view class="title">
        <view class="titleLeft">特惠推价</view>
        <view class="titleRight">金选全攻略</view>
      </view>
      <view class="imgBox">
        <view class="imgLeft"
          ><image
            mode="scaleToFill"
            src="https://pcapi-xiaotuxian-front-devtest.itheima.net/miniapp/uploads/goods_small_1.jpg"
        /></view>
        <view class="imgRight">
          <image
            mode="scaleToFill"
            src="https://pcapi-xiaotuxian-front-devtest.itheima.net/miniapp/uploads/goods_small_1.jpg"
          />
        </view>
      </view>
    </view>
  </view>
</template>

<style lang="scss" scope>
.popular {
  display: flex;
  // height: 300rpx;
  padding: 20rpx 20rpx;
  background-color: #fff;
  flex-wrap: wrap;
  .popularItem {
    width: 350rpx;
    height: 220rpx;
  }
  .title {
    display: flex;
    align-items: center;
    font-size: 24rpx;
    font-weight: 600;
    height: 40rpx;
    .titleRight {
      margin-left: 10rpx;
      font-size: 22rpx;
      font-weight: 300;
      color: #333;
    }
  }
  .imgBox {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 170rpx;
    width: 100%;

    .imgRight,
    .imgLeft {
      width: 170rpx;
      height: 170rpx;
    }
    image {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
}
</style>
