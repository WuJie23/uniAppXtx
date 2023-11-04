import type { type } from 'os'

export type categoryItem = {
  id: string
  name: string
  picture: string
  imageBanners: Array
  children: categoryChildrenItem[]
}
export type categoryChildrenItem = {
  id: 'string'
  name: 'string'
  picture: 'string'
  parentId: null
  parentName: null
  goods: categoryGoodItem[]
  categories: null
  brands: null
  saleProperties: null
}
export type categoryGoodItem = {
  id: 'string'
  name: 'string'
  desc: 'string'
  price: 'string'
  picture: 'string'
  discount: null
  orderNum: number
}
