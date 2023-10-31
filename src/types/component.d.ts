/**
 * declare module '@vue/runtime-core'
 *   现调整为
 * declare module 'vue'
 */
import type { type } from 'os'
import 'vue'
import XtxGuess from '@/components/XtxGuessLike.vue'
import XtxSwiper from '@/components/XtxSwiper.vue'
declare module 'vue' {
  export interface GlobalComponents {
    //
    XtxGuess: typeof XtxGuess
    XtxSwiper: typeof XtxSwiper
  }
}
export type XtxGuess = InstanceType<typeof XtxGuess>
