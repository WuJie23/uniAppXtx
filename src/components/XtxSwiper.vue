<script setup lang="ts">
import type { BannerItem } from '@/types/home'
import { ref } from 'vue'

// const activeIndex = ref(0)
defineProps<{ list: BannerItem[] }>()
</script>

<template>
  <view class="carousel">
    <swiper :circular="true" :autoplay="true" :interval="3000" :indicator-dots="true">
      <swiper-item v-for="item in list" :key="item.id">
        <navigator url="/pages/index/index" hover-class="none" class="navigator">
          <image mode="aspectFill" class="image" :src="item.imgUrl"></image>
        </navigator>
      </swiper-item>
    </swiper>
  </view>
</template>

<style lang="scss" scoped>
/* 轮播图 */
.carousel {
  height: 100%;
  position: relative;
  overflow: hidden;
  transform: translateY(0);
  background-color: #efefef;
  .indicator {
    z-index: 66666666666;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 16rpx;
    display: flex;
    justify-content: center;
    .dot {
      width: 20rpx;
      height: 20rpx;
      margin: 0 8rpx;
      border-radius: 50%;
      background-color: rgba(0, 0, 0, 0.281);
    }
    .active {
      background-color: #ffffff;
    }
  }
  .navigator,
  .image {
    width: 100%;
    height: 100%;
  }
}
</style>
