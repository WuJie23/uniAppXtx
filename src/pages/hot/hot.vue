<template>
  <div class="hot">hot</div>
</template>

<script setup lang="ts">
import type { PopularItem } from '@/types/home'
import { onHide, onLoad, onReady, onShow, onUnload } from '@dcloudio/uni-app'
import { ref } from 'vue'
// 页面周期函数--监听页面加载
onLoad(() => {
  setTitle()
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
  item: string
  // item: PopularItem[]
}>()
const item = ref(JSON.parse(query.item))
const setTitle = () => {
  console.log(item.value, 'item')
  uni.setNavigationBarTitle({
    title: item.value.title,
  })
}
</script>

<style scoped></style>
