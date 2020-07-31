<!--
 * Detail
 * @author zhangds <zhudachang0832@gmail.com>
 * @date 2020-07-30 10:06:53
 * @since 0.1.0
 -->
<template>
  <div class="Detail-main">
    <div class="detail-main-box">
      <van-row>
        <van-col span="24">
          <div class="detail-head-type">
            <van-button
              icon="plus"
              type="info"
              size="small"
              square
              plain
              color="#fff"
              >全部类型</van-button
            >
          </div>
        </van-col>
      </van-row>

      <van-row class="head-money-log">
        <van-col span="6">
          <div class="box-center">
            <span>{{ detailData.moneyLog.time }}</span>
            <van-icon name="arrow-down" size="12" color="#fff" />
          </div>
        </van-col>

        <van-col span="9">
          <div class="box-center">
            <span>总支出</span>
            <span>¥{{ detailData.moneyLog.outcome }}</span>
          </div>
        </van-col>

        <van-col span="9">
          <div class="box-center">
            <span>总收入</span>
            <span>¥{{ detailData.moneyLog.income }}</span>
          </div>
        </van-col>
      </van-row>
    </div>

    <van-row class="money-log-box">
      <van-col span="24">
        <van-row
          class="money-log-list"
          v-for="(item, index) in detailData.moneyLogList"
          :key="index"
        >
          <div class="money-log-head">
            <van-col span="8">
              <span>{{ item.time }} 今天</span>
            </van-col>
            <van-col span="7" class="money-al-center" offset="2">
              <span class="money-log-title-s">支</span>
              <span>{{ item.outcome }}</span>
            </van-col>
            <van-col span="7" class="money-al-center" offset="1">
              <span class="money-log-title-s">收</span>
              <span>{{ item.income }}</span>
            </van-col>
          </div>
          <div class="money-log-main">
            <van-swipe-cell v-for="(items, indexs) in item.detailList">
              <van-row
                class="money-row-list money-al-center"
                type="flex"
                justify="space-between"
              >
                <van-col
                  span="2"
                  :class="
                    items.isOutInCome === 0
                      ? 'icon-bg money-log-center icon-bg-color-bule'
                      : 'icon-bg money-log-center icon-bg-color-yellow'
                  "
                >
                  <van-icon :name="items.iconType" color="#fff" size="25" />
                </van-col>
                <van-col
                  span="22"
                  :class="
                    indexs === item.detailList.length - 1
                      ? 'money-right'
                      : 'money-right border-s'
                  "
                  offset="1"
                >
                  <van-col span="16" class="money-list-title">
                    <p>{{ items.typeName }}</p>
                    <div class="money-list-time-bz">
                      <span>{{ items.creationTime }}</span>
                      <span v-if="items.remark !== ''">
                        | {{ items.remark }}</span
                      >
                    </div>
                  </van-col>
                  <van-col span="8" class="money-right">
                    <span v-if="items.isOutInCome === 0"
                      >-{{ items.amount }}</span
                    >
                    <span v-if="items.isOutInCome === 1" style="color: #f4b400;"
                      >+{{ items.amount }}</span
                    >
                  </van-col>
                </van-col>
              </van-row>
              <template #right>
                <van-button square type="danger" text="删除" />
                <van-button square type="info" text="编辑" />
              </template>
            </van-swipe-cell>
          </div>
        </van-row>
      </van-col>
    </van-row>
    <!-- 增加 -->
  </div>
</template>
<style src="./Detail.scss" lang="scss" scoped></style>
