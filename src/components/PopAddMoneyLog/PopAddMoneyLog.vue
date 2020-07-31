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
    >
      <div class="moneyLogPop">
        <van-row type="flex" justify="space-around">
          <van-col span="10" class="flex-log-center">
            <span>支出</span>
            <van-switch :value="checked" @input="onInput" />
            <span>收入</span>
          </van-col>
          <van-col span="6">
            <div class="flex-box-center time-bg" @click="showDate = true">
              <span>{{ inOutDate }}</span>
              <van-icon name="arrow-down" size="12" color="#000" />
            </div>
          </van-col>
        </van-row>

        <div style="height: 20px;"></div>
        <van-row type="flex" justify="center">
          <van-col span="2"><span class="money-fh">¥</span></van-col>
          <van-col span="15">
            <van-field readonly clickable :value="moneyValue" />
            <van-number-keyboard
              v-model="moneyValue"
              theme="custom"
              :show="true"
              :maxlength="7"
              :extra-key="['00', '.']"
              close-button-text="完成"
              @input="onInputKeyboard"
            />
          </van-col>
        </van-row>

        <div style="height: 20px;"></div>
        <div class="type-ico-box">
          <ul class="typeIcon">
            <li
              v-for="(item, index) in setDetailTypeIcon"
              @click="setTypeIconCk(item)"
            >
              <div
                :class="
                  item.isActvier === 1
                    ? 'outincome-icon-bg icon-bg-color-bule'
                    : 'outincome-icon-bg'
                "
              >
                <van-icon :name="item.typeIcon" size="20" color="#fff" />
              </div>
              <p>{{ item.typeName }}</p>
            </li>
          </ul>
        </div>

        <div style="height: 20px;"></div>
        <!-- 备注 -->
        <input
          type="text"
          v-model="remark"
          placeholder="添加备注"
          class="remarkInput"
        />

        <!-- 日历 -->
        <van-calendar v-model="showDate" @confirm="onConfirm" />
      </div>
    </van-popup>
  </div>
</template>
<style src="./PopAddMoneyLog.scss" lang="scss" scoped></style>
<style>
.moneyLogPop .van-field__control {
  font-weight: bold;
  font-size: 40px;
}

.moneyLogPop .van-cell {
  padding-left: 2px;
  /* color: forestgreen; */
}
</style>
