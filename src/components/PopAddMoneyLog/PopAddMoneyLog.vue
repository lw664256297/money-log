<!--
 * PopAddMoneyLog
 * @author zhangds <zhudachang0832@gmail.com>
 * @date 2020-07-31 15:55:17
 * @since 0.1.0
 -->
<template>
  <div class="PopAddMoneyLog-main">
    <van-popup
      v-model="showPop"
      :closeable="popCloseable"
      :close-icon-position="popTopLeft"
      :close-on-click-overlay="closeOnClickOverlay"
      :position="popPosition"
      :style="popStyle"
      @close="isCloseCall"
    />
  </div>
</template>
<style src="./PopAddMoneyLog.scss" lang="scss" scoped></style>
