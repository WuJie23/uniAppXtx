<script setup lang="ts">
import XtxSwiper from '@/components/XtxSwiper.vue'
import CustomNavbar from '@/pages/index/component/CustomNavbar.vue'
import XtxGuessLike from '@/components/XtxGuessLike.vue'
import { getHomeBannerAPI, getcategoryDataAPI, getPopularDataAPI } from '@/services/home'
import type { BannerItem, PopularItem, categoryItem } from '@/types/home'
import { http } from '@/utils/http'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import Popular from '@/pages/index/component/Popular.vue'
import type { XtxGuess } from '@/types/component'
import PageSkeleton from '@/pages/index/component/PageSkeleton.vue'

// Banner
const homeBannerList = ref<BannerItem[]>([])
const getHomeBannerData = async () => {
  const res = await getHomeBannerAPI()
  // console.log(res, 'ressaaas')
  homeBannerList.value = res.result
}
// category
const getcategoryList = ref<categoryItem[]>([])
const getcategoryData = async () => {
  const res = await getcategoryDataAPI()
  getcategoryList.value = res.result
}

// hot
const getPopularList = ref<PopularItem[]>([])
const getPopularData = async () => {
  const res = await getPopularDataAPI()
  getPopularList.value = res.result
  // console.log(res.result, 'res.result')
}
// like
const GuessLike = ref<XtxGuess>()
const scrolltolower = () => {
  console.log('滚动到低了')
  GuessLike.value?.getMoreGuessList()
}
const isTriggered = ref(false)
// pullDown
const pullDownHandle = async () => {
  isTriggered.value = true
  GuessLike.value?.resetGuess()

  await Promise.all([getHomeBannerData(), getcategoryData(), getPopularData()])
  isTriggered.value = false
}
// isShow
const isLoading = ref(true)
onLoad(async () => {
  isLoading.value = true
  await Promise.all([getHomeBannerData(), getcategoryData(), getPopularData()])
  isLoading.value = false
})
</script>

<template>
  <view class="CustomNavbar">
    <CustomNavbar></CustomNavbar>
  </view>
  <!-- scroll box -->

  <scroll-view
    @refresherrefresh="pullDownHandle"
    :refresher-enabled="true"
    :refresher-triggered="isTriggered"
    scroll-y
    class="scroll-view"
    @scrolltolower="scrolltolower"
  >
    <PageSkeleton v-if="isLoading"></PageSkeleton>
    <template v-else>
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
      <Popular :list="getPopularList"></Popular>
      <!-- like -->
      <XtxGuessLike ref="GuessLike"></XtxGuessLike>
    </template>
  </scroll-view>
</template>

<style lang="scss">
page {
  background-color: #f7f7f7 !important ;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.scroll-view {
  flex: 1;
}
.XtxSwiper {
  height: 270rpx;
}
.category {
  margin: 10rpx auto;
  height: 280rpx;
  width: 750rpx;
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
