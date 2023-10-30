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
            src="https://pcapi-xiaotuxian-front-devtest.itheima.net/miniapp/uploads/goods_small_1.jpg"
            mode="scaleToFill"
        /></view>
        <view class="imgRight">
          <image
            src="https://pcapi-xiaotuxian-front-devtest.itheima.net/miniapp/uploads/goods_small_1.jpg"
            mode="scaleToFill"
          />
        </view>
      </view>
    </view>
  </view>
</template>

<style lang="scss">
//
.popular{
  display:flex;
  bac
}
</style>
