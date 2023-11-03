import type { type } from 'os'

// 通用分页类型
export type pageResult = {
  counts: number
  pageSize: number
  pages: number
  page: number
  items: GoodsItem[]
}
// 分页参数
export type pagePramsResult = {
  page?: number
  pageSize?: number
}
/** 通用商品类型 */
export type GoodsItem = {
  /** 商品描述 */
  desc: string
  /** 商品折扣 */
  discount: number
  /** id */
  id: string
  /** 商品名称 */
  name: string
  /** 商品已下单数量 */
  orderNum: number
  /** 商品图片 */
  picture: string
  /** 商品价格 */
  price: number
}
