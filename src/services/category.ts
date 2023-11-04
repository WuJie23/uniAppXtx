import type { categoryItem } from '@/types/home'
import { http } from '@/utils/http'
export const getCategoryDataAPI = () => {
  return http<categoryItem[]>({
    method: 'GET',
    url: '/category/top',
  })
}
