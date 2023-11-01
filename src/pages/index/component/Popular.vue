<script setup lang="ts">
import type { PopularItem } from '@/types/home'

//获取屏幕边界到安全区的距离
defineProps<{ list: PopularItem[] }>()
</script>

<template>
  <view class="popular">
    <view class="popularItem" v-for="item in list" :key="item.id">
      <view class="title">
        <view class="titleLeft">{{ item.title }}</view>
        <view class="titleRight">{{ item.alt }}</view>
      </view>
      <navigator url="/pages/hot/hot">
        <view class="imgBox">
          <view class="imgLeft" v-for="url in item.pictures" :key="url"
            ><image mode="scaleToFill" :src="url"
          /></view>
        </view>
      </navigator>
    </view>
  </view>
</template>

<style lang="scss" scope>
.popular {
  width: 750rpx;
  height: 466;
  margin: 0 auto;

  display: flex;
  // height: 300rpx;
  padding-left: 26rpx;
  padding-right: 26rpx;
  padding-bottom: 10rpx;
  background-color: #fff;
  flex-wrap: wrap;
  .popularItem {
    box-sizing: border-box;
    padding-right: 20rpx;
    padding-left: 20rpx;
    padding-bottom: 20rpx;
    width: 345rpx;
    height: 230rpx;
    border-right: 1rpx solid #f1f1f1;
    border-top: 1rpx solid #f1f1f1;
    &:nth-child(2n) {
      border-right: 0 none;
    }
    &:nth-child(-n + 2) {
      border-top: 0 none;
    }
  }
  .title {
    display: flex;
    align-items: center;
    font-size: 24rpx;
    font-weight: 600;
    height: 60rpx;
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
    height: 150rpx;
    width: 100%;

    .imgLeft {
      width: 145rpx;
      height: 145rpx;
    }
    image {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
}
</style>
