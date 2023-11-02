import type { PageResult, GoodsItem } from '@/types/global'
// 热门推荐数据
export type HotDataItem = {
  title: 'string'
  id: 'string'
  bannerPicture: 'string'
  subTypes: SubTypeItem[]
}
/** 热门推荐-子类选项 */
export type SubTypeItem = {
  /** 子类id */
  id: string
  /** 子类标题 */
  title: string
  /** 子类对应的商品集合 */
  goodsItems: PageResult<GoodsItem>
}
