<script setup lang="ts">
import XtxSwiper from '@/components/XtxSwiper.vue'
import CustomNavbar from '@/pages/index/component/CustomNavbar.vue'
import { getHomeBannerAPI, getcategoryDataAPI, getPopularDataAPI } from '@/services/home'
import type { BannerItem, categoryItem } from '@/types/home'
import { http } from '@/utils/http'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import Popular from './component/Popular'

onLoad(() => {
  getHomeBannerData(), getcategoryData(), getPopularData()
})
const homeBannerList = ref<BannerItem[]>([])
const getHomeBannerData = async () => {
  const res = await getHomeBannerAPI()
  console.log(res, 'ressaaas')
  homeBannerList.value = res.result
}

const getcategoryList = ref<categoryItem[]>([])
const getcategoryData = async () => {
  const res = await getcategoryDataAPI()
  getcategoryList.value = res.result
}

// hot
const getPopularList = ref<PopularItem[]>([])
const getPopularData = async () => {
  const res = await getPopularDataAPI()
  console.log(res, '23442')
}
</script>

<template>
  <view class="CustomNavbar">
    <CustomNavbar></CustomNavbar>
  </view>

  <view class="XtxSwiper">
    <XtxSwiper :list="homeBannerList"></XtxSwiper>
  </view>

  <!-- Front desk category -->
  <view class="category">
    <view class="categoryItem" v-for="item in getcategoryList" :key="item.id">
      <view class="categoryItemImg">
        <image :src="item.icon" />
      </view>
      <view class="categoryItemTitle">{{ item.name }}</view>
    </view>
  </view>

  <!-- hot -->

  <Popular></Popular>
</template>

<style lang="scss">
page {
  background-color: #f7f7f7 !important ;
}
.XtxSwiper {
  height: 270rpx;
}
.category {
  margin: 10rpx 0;
  height: 280rpx;
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-evenly;
  color: #666;
  .categoryItem {
    height: 150rpx;
    width: 130rpx;
    display: flex;
    flex-direction: column;
    align-items: center;
    .categoryItemImg {
      width: 100rpx;
      height: 100rpx;
      image {
        width: 100%;
        height: 100%;
        display: block;
      }
    }
    .categoryItemTitle {
      text-align: center;
      width: 130rpx;
      height: 40rpx;
      font-size: 26rpx;
    }
  }
}
</style>
