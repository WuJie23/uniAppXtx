<template name="skeleton">
  <view class="sk-container">
    <view class="noScroll">
      <view class="uni-search">
        <view
          is="node-modules/@dcloudio/uni-ui/lib/uni-search-bar/uni-search-bar"
          class="uni-search-bar"
        >
          <view class="uni-searchbar bar--uni-searchbar">
            <view
              class="uni-searchbar__box bar--uni-searchbar__box"
              style="border-radius: 100px; background-color: #f3f3f3"
            >
              <view class="uni-searchbar__box-icon-search bar--uni-searchbar__box-icon-search">
                <view is="node-modules/@dcloudio/uni-ui/lib/uni-icons/uni-icons">
                  <text
                    class="uni-icons icons--uni-icons uniui-search icons--uniui-search sk-pseudo sk-pseudo-circle"
                    style="color: #c0c4cc; font-size: 18px"
                  ></text>
                </view>
              </view>
              <text
                class="uni-searchbar__text-placeholder bar--uni-searchbar__text-placeholder sk-transparent sk-text-14-2857-577 sk-text"
                >请输入商品名称~</text
              >
            </view>
          </view>
        </view>
      </view>
    </view>
    <view class="categoryLeft">
      <view
        class="categoryLeftItem active sk-transparent sk-text-33-9450-951 sk-text sk-pseudo sk-pseudo-circle"
        style="background-position-x: 50%"
        >居家</view
      >
      <view
        class="categoryLeftItem sk-transparent sk-text-33-9450-321 sk-text"
        style="background-position-x: 50%"
        >美食</view
      >
      <view
        class="categoryLeftItem sk-transparent sk-text-33-9450-9 sk-text"
        style="background-position-x: 50%"
        >服饰</view
      >
      <view
        class="categoryLeftItem sk-transparent sk-text-33-9450-26 sk-text"
        style="background-position-x: 50%"
        >母婴</view
      >
      <view
        class="categoryLeftItem sk-transparent sk-text-33-9450-197 sk-text"
        style="background-position-x: 50%"
        >个护</view
      >
      <view
        class="categoryLeftItem sk-transparent sk-text-33-9450-236 sk-text"
        style="background-position-x: 50%"
        >严选</view
      >
      <view
        class="categoryLeftItem sk-transparent sk-text-33-9450-721 sk-text"
        style="background-position-x: 50%"
        >数码</view
      >
      <view
        class="categoryLeftItem sk-transparent sk-text-33-9450-977 sk-text"
        style="background-position-x: 50%"
        >运动</view
      >
      <view
        class="categoryLeftItem sk-transparent sk-text-33-9450-815 sk-text"
        style="background-position-x: 50%"
        >杂项</view
      >
    </view>
    <scroll-view :scroll-y="false" class="scroll">
      <view class="swiperBox">
        <view is="components/XtxSwiper" class="XtxSwiper">
          <view class="carousel XtxSwiper--carousel data-v-17cc3903 XtxSwiper--data-v-17cc3903">
            <swiper
              :autoplay="false"
              :circular="true"
              class="data-v-17cc3903 XtxSwiper--data-v-17cc3903"
              :indicator-dots="true"
              :interval="3000"
              :current="0"
            >
              <swiper-item
                class="data-v-17cc3903 XtxSwiper--data-v-17cc3903"
                style="
                  position: absolute;
                  width: 100%;
                  height: 100%;
                  transform: translate(100%, 0px) translateZ(0px);
                "
              >
                <navigator
                  class="navigator XtxSwiper--navigator data-v-17cc3903 XtxSwiper--data-v-17cc3903"
                  hover-class="none"
                >
                  <image
                    class="image XtxSwiper--image data-v-17cc3903 XtxSwiper--data-v-17cc3903 sk-image"
                    mode="aspectFill"
                  ></image>
                </navigator>
              </swiper-item>
            </swiper>
          </view>
        </view>
      </view>
      <view class="categoryRightItem">
        <view class="categoryRightItemTop">
          <view class="topTitle sk-transparent sk-text-14-2857-950 sk-text">居家生活用品</view>
          <view class="topAll sk-transparent"
            >全部
            <view is="node-modules/@dcloudio/uni-ui/lib/uni-icons/uni-icons">
              <text
                class="uni-icons icons--uni-icons uniui-right icons--uniui-right sk-pseudo sk-pseudo-circle"
                style="color: #999; font-size: 13px"
              ></text>
            </view>
          </view>
        </view>
        <view class="categoryRightItemContent">
          <navigator class="ContentItem">
            <view class="ContentItemImg">
              <image mode="widthFix" style="height: 218px" class="sk-image"></image>
            </view>
            <view class="ContentItemTitle sk-transparent sk-text-14-2857-848 sk-text"
              >梅乃宿梅酒720毫升</view
            >
            <view class="ContentItemPrice sk-transparent">
              <text class="priceIcon sk-transparent sk-text-14-2857-960 sk-text">￥</text
              >168.00</view
            >
          </navigator>
          <navigator class="ContentItem">
            <view class="ContentItemImg">
              <image mode="widthFix" style="height: 218px" class="sk-image"></image>
            </view>
            <view class="ContentItemTitle sk-transparent sk-text-14-2857-624 sk-text"
              >法国年份雅文邑700毫升</view
            >
            <view class="ContentItemPrice sk-transparent">
              <text class="priceIcon sk-transparent sk-text-14-2857-556 sk-text">￥</text
              >1480.00</view
            >
          </navigator>
          <navigator class="ContentItem">
            <view class="ContentItemImg">
              <image mode="widthFix" style="height: 218px" class="sk-image"></image>
            </view>
            <view class="ContentItemTitle sk-transparent sk-text-14-2857-89 sk-text"
              >多米尼加陈年朗姆酒700毫升</view
            >
            <view class="ContentItemPrice sk-transparent">
              <text class="priceIcon sk-transparent sk-text-14-2857-121 sk-text">￥</text
              >238.00</view
            >
          </navigator>
          <navigator class="ContentItem">
            <view class="ContentItemImg">
              <image mode="widthFix" style="height: 218px" class="sk-image"></image>
            </view>
            <view class="ContentItemTitle sk-transparent sk-text-14-2857-772 sk-text"
              >全新升级，四川酸辣粉195克*6杯</view
            >
            <view class="ContentItemPrice sk-transparent">
              <text class="priceIcon sk-transparent sk-text-14-2857-672 sk-text">￥</text
              >69.00</view
            >
          </navigator>
          <navigator class="ContentItem">
            <view class="ContentItemImg">
              <image mode="widthFix" style="height: 218px" class="sk-image"></image>
            </view>
            <view class="ContentItemTitle sk-transparent sk-text-14-2857-626 sk-text"
              >川味牛肉辣椒酱190克</view
            >
            <view class="ContentItemPrice sk-transparent">
              <text class="priceIcon sk-transparent sk-text-14-2857-520 sk-text">￥</text
              >38.00</view
            >
          </navigator>
          <navigator class="ContentItem">
            <view class="ContentItemImg">
              <image mode="widthFix" style="height: 218px" class="sk-image"></image>
            </view>
            <view class="ContentItemTitle sk-transparent sk-text-14-2857-360 sk-text"
              >极光限定 珠光蓝珐琅锅</view
            >
            <view class="ContentItemPrice sk-transparent">
              <text class="priceIcon sk-transparent sk-text-14-2857-626 sk-text">￥</text
              >199.00</view
            >
          </navigator>
          <navigator class="ContentItem">
            <view class="ContentItemImg">
              <image mode="widthFix" style="height: 218px" class="sk-image"></image>
            </view>
          </navigator>
          <navigator class="ContentItem">
            <view class="ContentItemImg">
              <image mode="widthFix" style="height: 218px" class="sk-image"></image>
            </view>
          </navigator>
          <navigator class="ContentItem">
            <view class="ContentItemImg">
              <image mode="widthFix" style="height: 218px" class="sk-image"></image>
            </view>
          </navigator>
        </view>
      </view>
    </scroll-view>
  </view>
</template>
<style>
/*
此文件为开发者工具生成，生成时间: 2023/11/4下午2:34:55

在 D:\wujie\webProduct\uniAppXtx\dist\dev\mp-weixin\pages\category\category.wxss 中引入样式
```
@import "./category.skeleton.wxss";
```

更多详细信息可以参考文档：https://developers.weixin.qq.com/miniprogram/dev/devtools/skeleton.html
*/
.sk-transparent {
  color: transparent !important;
}
.sk-text-14-2857-577 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 14.3555rpx;
  position: relative !important;
}
.sk-text {
  background-origin: content-box !important;
  background-clip: content-box !important;
  background-color: transparent !important;
  color: transparent !important;
  background-repeat: repeat-y !important;
}
.sk-text-33-9450-951 {
  background-image: linear-gradient(
    transparent 33.945%,
    #eeeeee 0%,
    #eeeeee 66.055%,
    transparent 0%
  ) !important;
  background-size: 100% 79.834rpx;
  position: relative !important;
}
.sk-text-33-9450-321 {
  background-image: linear-gradient(
    transparent 33.945%,
    #eeeeee 0%,
    #eeeeee 66.055%,
    transparent 0%
  ) !important;
  background-size: 100% 79.834rpx;
  position: relative !important;
}
.sk-text-33-9450-9 {
  background-image: linear-gradient(
    transparent 33.945%,
    #eeeeee 0%,
    #eeeeee 66.055%,
    transparent 0%
  ) !important;
  background-size: 100% 79.834rpx;
  position: relative !important;
}
.sk-text-33-9450-26 {
  background-image: linear-gradient(
    transparent 33.945%,
    #eeeeee 0%,
    #eeeeee 66.055%,
    transparent 0%
  ) !important;
  background-size: 100% 79.834rpx;
  position: relative !important;
}
.sk-text-33-9450-197 {
  background-image: linear-gradient(
    transparent 33.945%,
    #eeeeee 0%,
    #eeeeee 66.055%,
    transparent 0%
  ) !important;
  background-size: 100% 79.834rpx;
  position: relative !important;
}
.sk-text-33-9450-236 {
  background-image: linear-gradient(
    transparent 33.945%,
    #eeeeee 0%,
    #eeeeee 66.055%,
    transparent 0%
  ) !important;
  background-size: 100% 79.834rpx;
  position: relative !important;
}
.sk-text-33-9450-721 {
  background-image: linear-gradient(
    transparent 33.945%,
    #eeeeee 0%,
    #eeeeee 66.055%,
    transparent 0%
  ) !important;
  background-size: 100% 79.834rpx;
  position: relative !important;
}
.sk-text-33-9450-977 {
  background-image: linear-gradient(
    transparent 33.945%,
    #eeeeee 0%,
    #eeeeee 66.055%,
    transparent 0%
  ) !important;
  background-size: 100% 79.834rpx;
  position: relative !important;
}
.sk-text-33-9450-815 {
  background-image: linear-gradient(
    transparent 33.945%,
    #eeeeee 0%,
    #eeeeee 66.055%,
    transparent 0%
  ) !important;
  background-size: 100% 79.834rpx;
  position: relative !important;
}
.sk-text-14-2857-950 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35.8887rpx;
  position: relative !important;
}
.sk-text-14-2857-848 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 27.6855rpx;
  position: relative !important;
}
.sk-text-14-2857-960 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 27.6855rpx;
  position: relative !important;
}
.sk-text-14-2857-624 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 27.6855rpx;
  position: relative !important;
}
.sk-text-14-2857-556 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 27.6855rpx;
  position: relative !important;
}
.sk-text-14-2857-89 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 27.6855rpx;
  position: relative !important;
}
.sk-text-14-2857-121 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 27.6855rpx;
  position: relative !important;
}
.sk-text-14-2857-772 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 27.6855rpx;
  position: relative !important;
}
.sk-text-14-2857-672 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 27.6855rpx;
  position: relative !important;
}
.sk-text-14-2857-626 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 27.6855rpx;
  position: relative !important;
}
.sk-text-14-2857-520 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 27.6855rpx;
  position: relative !important;
}
.sk-text-14-2857-360 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 27.6855rpx;
  position: relative !important;
}
.sk-image {
  background: #efefef !important;
}
.sk-pseudo::before,
.sk-pseudo::after {
  background: #efefef !important;
  background-image: none !important;
  color: transparent !important;
  border-color: transparent !important;
}
.sk-pseudo-rect::before,
.sk-pseudo-rect::after {
  border-radius: 0 !important;
}
.sk-pseudo-circle::before,
.sk-pseudo-circle::after {
  border-radius: 50% !important;
}
.sk-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: transparent;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
}
</style>
