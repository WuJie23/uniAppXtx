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
export type GuessLikeItem = {
  counts: number
  pageSize: number
  pages: number
  page: number
  items: [
    {
      id: string
      name: string
      desc: string
      price: number
      picture: string
      discount: number
      orderNum: number
    },
  ]
}
