<script setup lang="ts">
import XtxSwiper from '@/components/XtxSwiper.vue'
import CustomNavbar from '@/pages/index/component/CustomNavbar.vue'
import { getHomeBannerAPI, getcategoryDataAPI } from '@/services/home'
import type { BannerItem } from '@/types/home'
import { http } from '@/utils/http'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'

onLoad(() => {
  getHomeBannerData(), getcategoryData()
})
const homeBannerList = ref<BannerItem[]>([])
const getHomeBannerData = async () => {
  const res = await getHomeBannerAPI()
  console.log(res, 'ressaaas')
  homeBannerList.value = res.result
}

// const getcategoryList = ref([])
const getcategoryData = async () => {
  const res = await getcategoryDataAPI()
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
    <view class="categoryItem" v-for="item in 10" :key="item">
      <view class="categoryItemImg">
        <image
          src="https://pcapi-xiaotuxian-front-devtest.itheima.net/miniapp/images/nav_icon_1.png"
        />
      </view>
      <view class="categoryItemTitle">居家</view>
    </view>
  </view>
</template>

<style lang="scss" scoped>
page {
  background-color: #f7f7f7;
}
.XtxSwiper {
  height: 270rpx;
}
.category {
  margin: 10rpx 0;
  height: 350rpx;
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-evenly;
  color: #666;
  .categoryItem {
    height: 170rpx;
    width: 130rpx;
    display: flex;
    flex-direction: column;
    align-items: center;
    .categoryItemImg {
      width: 110rpx;
      height: 110rpx;
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
