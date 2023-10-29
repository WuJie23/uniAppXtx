import type { BannerItem, categoryItem } from '@/types/home'
import { http } from '@/utils/http'

export const getHomeBannerAPI = (distributionSite = 1) => {
  return http<BannerItem[]>({
    method: 'GET',
    url: '/home/banner',
    data: { distributionSite },
  })
}
export const getcategoryDataAPI = async () => {
  return http<categoryItem[]>({
    method: 'GET',
    url: '/home/category/mutli',
  })
}
