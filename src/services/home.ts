import type { BannerItem, GuessLikeItem, PopularItem, categoryItem, pageResult } from '@/types/home'
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
export const getGuessLikeAPI = () => {
  return http<pageResult<GuessLikeItem>>({
    method: 'GET',
    url: '/home/goods/guessLike',
  })
}
