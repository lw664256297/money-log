<!--
 * NavHead
 * @author zhangds <zhudachang0832@gmail.com>
 * @date 2020-07-28 16:35:13
 * @since 0.1.0
 -->
<template>
  <div class="NavHead-main">
    <van-nav-bar
      :title="title"
      :left-text="leftTexts"
      :right-text="rightText"
      :left-arrow="leftArrow"
      :border="border"
      :fixed="fixed"
      :z-index="zIndex"
      :placeholder="placeholder"
      @click-left="onClickNavHeadLeft"
      @click-right="onClickNavHeadRight"
    >
      <template slot="title">
        <slot name="title"></slot>
      </template>
      <template slot="left">
        <slot name="left"></slot>
      </template>
      <template slot="right">
        <slot name="right"></slot>
      </template>
    </van-nav-bar>
  </div>
</template>
<style src="./NavHead.scss" lang="scss" scoped></style>
