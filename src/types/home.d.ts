import type { type } from 'os'

export type BannerItem = {
  hrefUrl: string
  id: string
  imgUrl: string
  type: number
}
export type categoryItem = {
  id: 'string'
  name: 'string'
  icon: 'string'
}
export type PopularItem = {
  id: 'string'
  alt: 'string'
  pictures: ['string']
  target: 'string'
  title: 'string'
  type: 'string'
}
// 猜你喜欢商品类型
export type GuessLikeItem = {
  id: string
  name: string
  desc: string
  price: number
  picture: string
  discount: number
  orderNum: number
}
// 猜你喜欢后端返回类型
export type pageResult<T> = {
  counts: number
  pageSize: number
  pages: number
  page: number
  items: T[]
}
