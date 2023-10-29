<script setup lang="ts">
import CustomNavbar from '@/pages/index/component/CustomNavbar.vue'
import XtxSwiper from '@/components/XtxSwiper.vue'
</script>

<template>
  <view class="CustomNavbar">
    <CustomNavbar></CustomNavbar>
  </view>

  <view class="XtxSwiper">
    <XtxSwiper></XtxSwiper>
  </view>
</template>

<style lang="scss" scoped>
.CustomNavbar {
}
.XtxSwiper {
  height: 300rpx;
}
</style>
