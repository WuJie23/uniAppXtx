import type { pagePramsResult } from '@/types/global'
import type { BannerItem, GuessLikeItem, PopularItem, categoryItem, pageResult } from '@/types/home'
import type { HotDataItem } from '@/types/hot'
import { http } from '@/utils/http'

export const getHomeBannerAPI = (distributionSite = 1) => {
  return http<BannerItem[]>({
    method: 'GET',
    url: '/home/banner',
    data: { distributionSite },
  })
}
export const getcategoryDataAPI = () => {
  return http<categoryItem[]>({
    method: 'GET',
    url: '/home/category/mutli',
  })
}

// hot
export const getPopularDataAPI = () => {
  return http<PopularItem[]>({
    method: 'GET',
    url: '/home/hot/mutli',
  })
}

//like
export const getGuessLikeAPI = (data?: pagePramsResult) => {
  return http<pageResult<GuessLikeItem>>({
    method: 'GET',
    url: '/home/goods/guessLike',
    data,
  })
}

// 热门推荐数据
export const getHotDataAPI = (
  url: string,
  data?: { subType: string; pageSize: number; page: number },
) => {
  return http<HotDataItem>({
    method: 'GET',
    url,
    data,
  })
}
