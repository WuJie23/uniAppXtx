import type { type } from 'os'

// 通用分页类型
export type pageResult<T> = {
  counts: number
  pageSize: number
  pages: number
  page: number
  items: T[]
}
