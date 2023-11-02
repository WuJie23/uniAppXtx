<script setup lang="ts">
import type { GoodsItem } from '@/types/global'
import type { PopularItem } from '@/types/home'
import type { HotDataItem, SubTypeItem } from '@/types/hot'
import { http } from '@/utils/http'
import { onHide, onLoad, onReady, onShow, onUnload } from '@dcloudio/uni-app'
import { ref } from 'vue'
// 页面周期函数--监听页面加载
onLoad(async () => {
  await Promise.all([setTitle(), getHotData(), getgoodsItemsList()])
})
// 页面周期函数--监听页面初次渲染完成
onReady(() => {})
// 页面周期函数--监听页面显示(not-nvue)
onShow(() => {})

// 热门推荐页 标题和url
const hotMap = [
  { type: '1', title: '特惠推荐', url: '/hot/preference' },
  { type: '2', title: '爆款推荐', url: '/hot/inVogue' },
  { type: '3', title: '一站买全', url: '/hot/oneStop' },
  { type: '4', title: '新鲜好物', url: '/hot/new' },
]
const query = defineProps<{
  type: string
  // item: PopularItem[]
}>()
const itemMap = hotMap.find((i) => i.type === query.type)
// 设置标题
const setTitle = () => {
  console.log(query.type, itemMap, 'item')
  uni.setNavigationBarTitle({
    title: itemMap!.title,
  })
}
// 请求页面数据
const bannerPicture = ref<string>('')
const subTypes = ref<SubTypeItem[]>([])
const getHotData = async () => {
  const res = await http<HotDataItem>({
    method: 'GET',
    url: itemMap!.url,
  })
  // 背景图
  bannerPicture.value = res.result.bannerPicture
  // 推荐列表
  subTypes.value = res.result.subTypes
  console.log(res, 'set')
}
const activeIndex = ref(0)
const finish = ref(true)
// 请求商品数据
const pageCount = ref<number>(1)
const getgoodsItemsList = async () => {
  console.log(activeIndex, 'iiiiiii')

  const res = await http({
    method: 'GET',
    url: itemMap!.url,
    data: {
      subType: activeIndex.value,
      pageSize: 10,
      page: pageCount.value,
    },
  })

  console.log(res, 'set123')
}
// 触底加载
const goodsItemsList = ref()
const scrolltolower = () => {
  console.log('hot 到底了')
}
</script>
<template>
  <view class="noScroll">
    <view class="Banner">
      <image class="bannerImg" :src="bannerPicture" mode="widthFix" />
    </view>
    <view class="topTabs">
      <view
        class="title"
        v-for="(item, index) in subTypes"
        :class="{ active: index === activeIndex }"
        @tap="activeIndex = index"
        :key="item.id"
      >
        {{ item.title }}</view
      >
    </view>
  </view>

  <scroll-view scroll-y @scrolltolower="scrolltolower">
    <view class="guessLike">
      <view class="guessLikeBox">
        <navigator
          url=""
          class="guessLikeItem"
          v-for="item in subTypes[activeIndex].goodsItems.items"
          :key="item.id"
        >
          <view class="guessLikeItemImg">
            <image :src="item.picture" />
          </view>

          <view class="guessLikeItemTitle">{{ item.name }}</view>
          <view class="guessLikeItemPrice">￥{{ item.price }}</view>
        </navigator>
      </view>
    </view>
    <view class="loading">
      {{ finish ? '没有更多数据了~' : '正在加载...' }}
    </view>
  </scroll-view>
</template>

<style lang="scss">
page {
  background-color: #eeeeee !important;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.noScroll {
  margin-bottom: 20rpx;
}
.Banner {
  height: 224rpx;
  overflow: hidden;
  .bannerImg {
    display: block;
    border-radius: 0 0 20rpx 20rpx;
  }
}
.topTabs {
  display: flex;
  height: 104rpx;
  width: 94%;
  position: sticky;
  top: 0rpx;
  margin-left: auto;
  margin-right: auto;
  margin-top: -50rpx;
  border-radius: 10rpx;
  background-color: #fff;
  box-shadow: #e9e9e9 0 10rpx 5rpx;

  .title {
    height: 100%;
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    padding-bottom: 6rpx;
    flex: 1;
    font-weight: 550;
    font-size: 26rpx;
    color: #444;
  }
}
.active {
  &::after {
    display: block;
    content: '';
    width: 46rpx;
    height: 6rpx;
    border-radius: 6rpx;
    background-color: #4cd964;
    position: absolute;
    bottom: 24rpx;
    left: 50%;
    transform: translate(-50%);
  }
}

.guessLike {
  width: 750rpx;
  margin: 0 auto;
  padding: 0 20rpx;
  display: flex;
  flex-wrap: wrap;

  // goods
  .guessLikeBox {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 0 24rpx;
    width: 750rpx;
    .guessLikeItem {
      padding: 20rpx;
      display: flex;
      font-weight: 600;
      flex-wrap: wrap;
      border-radius: 20rpx;
      overflow: hidden;
      width: 320rpx;
      height: 440rpx;
      background-color: #fff !important;
      margin-bottom: 16rpx;
      // height: 260rpx;
      .guessLikeItemImg {
        display: block;
        margin-bottom: 10rpx;
        width: 280rpx;
        height: 280rpx;
        image {
          width: 100%;
          height: 100%;
        }
      }
    }
    .guessLikeItemTitle {
      margin-top: 10rpx;
      color: #333;
      font-size: 22rpx;
      width: 280rpx;

      height: 60rpx;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    .guessLikeItemPrice {
      width: 280rpx;
      margin: 10rpx 0;
      height: 36rpx;
      font-size: 25rpx;
      color: red;
    }
  }
}
.loading {
  display: flex;
  justify-content: center;
  font-size: 24rpx;
  height: 30rpx;
  color: #666;
}
</style>
