<script setup lang="ts">
import { getCategoryDataAPI } from '@/services/category'
import { getHomeBannerAPI } from '@/services/home'
import type { categoryItem } from '@/types/category'
import type { BannerItem } from '@/types/home'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'

onLoad(() => {
  Promise.all([getSwiperData(), getCategoryData()])
})
const swiperData = ref<BannerItem[]>([])
const getSwiperData = async () => {
  const res = await getHomeBannerAPI(2)
  swiperData.value = res.result
}
// 分类商品数据
const categoryData = ref<categoryItem[]>([])
// 获取点击Active Id
const categoryId = ref('')
// 获取点击Active Id 对应数据
const scrollData = ref<categoryItem>()
const getCategoryData = async () => {
  const res = await getCategoryDataAPI()
  categoryData.value = res.result
  categoryId.value = categoryData.value[0].id
  scrollData.value = categoryData.value[0]
  console.log(categoryData.value[0].id, 'getHomeBannerAPI')
}

const setActiveId = (id: string) => {
  categoryId.value = id
  scrollData.value = categoryData.value.find((item) => {
    return item.id === categoryId.value
  })
  console.log(categoryId.value, 'idid')
  console.log(scrollData, 'scrollDatascrollData')
}
//
</script>

<template>
  <!-- <uni-search-bar placeholder="自定placeholder"></uni-search-bar> -->
  <!-- 基本用法 -->
  <view class="noScroll">
    <view class="uni-search">
      <uni-search-bar
        class="uni-search-bar"
        :radius="100"
        bgColor="#f3f3f3"
        placeholder="请输入商品名称~"
      ></uni-search-bar>
    </view>
  </view>
  <view class="categoryLeft">
    <view
      class="categoryLeftItem"
      :class="{ active: categoryId === item.id }"
      v-for="item in categoryData"
      :key="item.id"
      @tap="setActiveId(item.id)"
      >{{ item.name }}</view
    >
  </view>

  <scroll-view scroll-y class="scroll">
    <view class="swiperBox">
      <XtxSwiper class="XtxSwiper" :list="swiperData"></XtxSwiper>
    </view>
    <view class="categoryRightItem" v-for="item in scrollData?.children" :key="item.id">
      <view class="categoryRightItemTop">
        <view class="topTitle">{{ item.name }}</view>
        <view class="topAll">全部<uni-icons type="right" size="13" color="#999"></uni-icons></view>
      </view>
      <view class="categoryRightItemContent">
        <navigator url="" class="ContentItem" v-for="goods in item.goods" :key="goods.id">
          <view class="ContentItemImg">
            <image mode="widthFix" :src="goods.picture" />
          </view>

          <view class="ContentItemTitle">{{ goods.name }}</view>
          <view class="ContentItemPrice"><text class="priceIcon">￥</text>{{ goods.price }}</view>
        </navigator>
      </view>
    </view>
    <view class="noMoreData">没有更多数据了~</view>
  </scroll-view>
</template>

<style lang="scss">
page {
  background-color: #f7f7f7;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
}

.scroll {
  width: 570rpx;
  padding-top: 100rpx;
  padding-left: 20rpx;
  padding-right: 20rpx;
  font-size: 24rpx;
  color: #333;

  background-color: #ffffff;
  .swiperBox {
    width: 530rpx;
    height: 200rpx;
    overflow: hidden;
  }
  .categoryRightItem {
    margin-top: 10rpx;
    display: flex;
    flex-wrap: wrap;
    width: 530rpx;
    .categoryRightItemTop {
      height: 60rpx;
      width: 530rpx;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: #f5f5f5 2rpx solid;
      .topAll {
        font-size: 23rpx;
        color: #999;
      }
      .topTitle {
        font-size: 26rpx;
        font-weight: 600;
      }
    }
    .categoryRightItemContent {
      display: flex;
      flex-wrap: wrap;
      // justify-content: space-between;
      // align-items: center;
      // align-content: center;
      // align-self: flex-start;
      // &:nth-child(3n) {
      //   margin-right: 0;
      // }
      width: 530rpx;
      padding-top: 20rpx;
      padding-bottom: 40rpx;
      padding-left: 10rpx;
      padding-right: 10rpx;
      .ContentItem {
        width: 160rpx;
        height: 240rpx;
        margin: 0rpx 12rpx 20rpx 0;
        &:nth-child(3n) {
          margin-right: 0;
        }
        // align-items: start;
        // align-content: flex-start;
        border: 2rpx solid #f3f3f3;
        box-shadow: #f5f5f5 0 0 6rpx 8rpx;
        overflow: hidden;
        border-radius: 10rpx;
        overflow: hidden;
        margin-bottom: 16rpx;
        .ContentItemTitle {
          font-weight: 600;

          margin-left: 4rpx;
          margin-top: 4rpx;
          font-size: 20rpx;
          color: #333;
          overflow: hidden;
          /* 文本溢出时省略号显示 */
          text-overflow: ellipsis;
          /* 文本不换行 */
          white-space: nowrap;
        }
        .ContentItemPrice {
          margin-left: 4rpx;
          margin-top: 6rpx;
          font-size: 22rpx;
          font-weight: 600;
          color: rgb(231, 1, 1);
          .priceIcon {
            font-size: 20rpx;
          }
        }
      }
      .ContentItemImg {
        width: 160rpx;
        height: 160rpx;
        overflow: hidden;
        image {
          display: block;
        }
      }
    }
  }
}
.uni-search {
  width: 750rpx;
  height: 100rpx;
  background-color: #ffffff !important;
  position: fixed;
  z-index: 9999999;
  display: flex;
  align-items: center;
  justify-content: center;
  .uni-search-bar {
    width: 720rpx;
  }
}

.categoryLeft {
  padding-top: 100rpx;
  width: 160rpx;
  font-size: 26rpx;
  color: #333;
  height: 850rpx;
  .categoryLeftItem {
    text-align: center;
    width: 160rpx;
    height: 80rpx;
    line-height: 80rpx;
    border-bottom: 2rpx solid #eeeeee;
  }
}
.active {
  &::before {
    display: block;
    content: '';
    width: 100%;
    height: 80rpx;
    border-radius: 6rpx;
    background-color: #ffffff;
    border-left: 8rpx solid #11d6b5;
    position: absolute;
    left: 0;
    z-index: -99999;
  }
}
.noMoreData {
  width: 100%;
  height: 30rpx;
  line-height: 30rpx;
  text-align: center;
  color: #999;
  font-size: 22rpx;
}
</style>
