<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { getGuessLikeAPI } from '@/services/home'
import type { GuessLikeItem } from '@/types/home'
import type { pagePramsResult } from '@/types/global'
onMounted(() => {
  getGuessLikeData()
})
const getGuessLikeList = ref<GuessLikeItem[]>([])
const pagePrams: Required<pagePramsResult> = {
  page: 1,
  pageSize: 10,
}
const finish = ref(false)
const getGuessLikeData = async () => {
  if (finish.value === true) {
    uni.showToast({
      icon: 'none',
      title: '没有更多数据了~',
    })
    return
  }
  const res = await getGuessLikeAPI(pagePrams)
  getGuessLikeList.value.push(...res.result.items)
  if (pagePrams.page < res.result.pages) {
    pagePrams.page++
  } else {
    finish.value = true
  }

  console.log(res.result.items, 'getGuessLikeAPI')
}
const resetGuess = () => {
  pagePrams.page = 1
  getGuessLikeList.value = []
  getGuessLikeData()
}
// defineProps<{ list: BannerItem[] }>()
defineExpose({
  getMoreGuessList: getGuessLikeData,
  resetGuess: resetGuess,
})
</script>

<template>
  <view class="guessLike">
    <view class="guessLikeTitle">猜你喜欢</view>
    <view class="guessLikeBox">
      <navigator
        url="`/pages/goods/goods?id=${item.id}`"
        class="guessLikeItem"
        v-for="item in getGuessLikeList"
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
</template>

<style lang="scss" scoped>
.guessLike {
  width: 750rpx;
  margin: 0 auto;
  padding: 0 20rpx;
  display: flex;
  flex-wrap: wrap;
  .guessLikeTitle {
    width: 750rpx;
    height: 80rpx;
    line-height: 80rpx;
    font-size: 28rpx;
    font-weight: 600;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    &::before {
      content: '';
      display: block;
      background-image: url(@/static/images/bubble.png);
      background-repeat: no-repeat;
      width: 30rpx;
      height: 30rpx;
      background-size: contain;
      margin-right: 10rpx;
    }
    &::after {
      content: '';
      display: block;
      background-image: url(@/static/images/bubble.png);
      background-repeat: no-repeat;
      width: 30rpx;
      height: 30rpx;
      background-size: contain;
      margin-left: 10rpx;
    }
  }
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
