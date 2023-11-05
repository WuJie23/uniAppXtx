<template>
  <uni-swiper-dot :info="info" :current="current" field="content" :mode="mode">
    <swiper class="swiper-box" @change="change">
      <swiper-item v-for="(item, index) in info" :key="index">
        <view class="swiper-item">
          {{ item.content }}
        </view>
      </swiper-item>
    </swiper>
  </uni-swiper-dot>
</template>

<script setup lang="ts">
import { onLoad, onReady, onShow, onHide, onUnload } from '@dcloudio/uni-app'

// 页面周期函数--监听页面加载
onLoad(() => {})
// 页面周期函数--监听页面初次渲染完成
onReady(() => {})
// 页面周期函数--监听页面显示(not-nvue)
onShow(() => {})
</script>

<style lang="scss" scoped></style>
