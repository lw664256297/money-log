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
          <van-col span="15" class="pop-money-key">
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
                v-if="isOutInComeType === 0"
                class="outincome-icon-bg"
                :class="{ 'icon-bg-color-bule': currentItem === index }"
              >
                <van-icon :name="item.typeIcon" size="20" color="#fff" />
              </div>
              <div
                v-if="isOutInComeType === 1"
                class="outincome-icon-bg"
                :class="{ 'icon-bg-color-yellow': currentItem === index }"
              >
                <van-icon :name="item.typeIcon" size="20" color="#fff" />
              </div>
              <p>{{ item.typeName }}</p>
            </li>
          </ul>
        </div>

        <div style="height: 20px;"></div>
        <!-- 添加备注 -->
        <div>
          <span style="padding-left: 10px;">{{ remark }}</span>
          <span @click="addRemarkShow = true" class="addRemarkp">
            {{ remarkBtnName }}
          </span>
        </div>
        <!-- 备注弹窗 -->
        <van-popup
          v-model="addRemarkShow"
          position="bottom"
          round
          closeable
          close-icon-position="top-left"
          :style="{ height: '30%' }"
        >
          <van-row type="flex" justify="end" style="margin-top: 12px;">
            <van-col span="8" style="text-align: center;">
              <span>请添加备注</span>
            </van-col>
            <van-col span="8" style="text-align: right;">
              <span class="pop-ok-remark" @click="addRemarkShowOk">确定</span>
            </van-col>
          </van-row>
          <van-row type="flex" justify="center">
            <van-col span="20">
              <van-field
                v-model="remark"
                maxlength="30"
                show-word-limit
                placeholder="请输入备注内容"
                size="12"
              />
            </van-col>
          </van-row>
        </van-popup>

        <!-- 日历 -->
        <van-calendar v-model="showDate" @confirm="onConfirm" />
      </div>
    </van-popup>
  </div>
</template>
<style src="./PopAddMoneyLog.scss" lang="scss" scoped></style>
<style>
.moneyLogPop .pop-money-key .van-field__control {
  font-weight: bold;
  font-size: 40px;
}

.moneyLogPop .van-cell {
  padding-left: 2px;
  /* color: forestgreen; */
}
</style>
