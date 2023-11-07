import type { GoodsResult } from '@/types/goodsItem'
import { http } from '@/utils/http'

export const getgoodsAPI = (id: string) => {
  return http<GoodsResult>({
    method: 'GET',
    url: '/goods',
    data: {
      id,
    },
  })
}
