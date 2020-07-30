<!--
 * App
 * @author zhangds <zhudachang0832@gmail.com>
 * @date 2020-06-22 11:32:06
 * @since 0.1.0
 -->
<template>
  <div class="App-main">
    <NavHead
      :leftArrow="false"
      :fixed="true"
      :placeholder="true"
      :border="false"
      :leftTexts="leftTexts"
      :zIndex="zIndex"
    ></NavHead>
    <keep-alive :include="['Login']">
      <router-view />
    </keep-alive>
    <Menu></Menu>
  </div>
</template>
<style src="./App.scss" lang="scss" scoped></style>
