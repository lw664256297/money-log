<!--
 * Menu
 * @author zhangds <zhudachang0832@gmail.com>
 * @date 2020-07-29 15:06:03
 * @since 0.1.0
 -->
<template>
  <div class="Menu-main">
    <van-tabbar v-model="MenuActive">
      <van-tabbar-item icon="home-o" to="/">明细</van-tabbar-item>
      <van-tabbar-item icon="chart-trending-o" to="/Statistics"
        >统计</van-tabbar-item
      >
      <van-tabbar-item icon="setting-o" to="/Setting">设置</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<style src="./Menu.scss" lang="scss" scoped></style>
