<!--
 * Detail
 * @author zhangds <zhudachang0832@gmail.com>
 * @date 2020-07-30 10:06:53
 * @since 0.1.0
 -->
<template>
  <div class="Detail-main">
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
          <span>2020年7月</span>
          <van-icon name="arrow-down" size="12" color="#fff" />
        </div>
      </van-col>

      <van-col span="9">
        <div class="box-center">
          <span>总支出</span>
          <span>¥288888.88</span>
        </div>
      </van-col>

      <van-col span="9">
        <div class="box-center">
          <span>总收入</span>
          <span>¥10000.00</span>
        </div>
      </van-col>
    </van-row>

    <van-row class="money-log-box">
      <van-col span="24">
        <van-row class="money-log-list">
          <div class="money-log-head">
            <van-col span="8">
              <span>7月30日 今天</span>
            </van-col>
            <van-col span="7" class="money-al-center" offset="2">
              <span class="money-log-title-s">支</span>
              <span>122223.00</span>
            </van-col>
            <van-col span="7" class="money-al-center" offset="1">
              <span class="money-log-title-s">收</span>
              <span>19222.00</span>
            </van-col>
          </div>
          <div class="money-log-main">
            <van-row
              class="money-row-list money-al-center"
              type="flex"
              justify="space-between"
            >
              <van-col span="2" class="icon-bg money-log-center">
                <van-icon name="shopping-cart-o" color="#fff" size="25" />
              </van-col>
              <van-col span="22" class="border-s money-right" offset="1">
                <van-col span="16" class="money-list-title">
                  <p>购物</p>
                  <div class="money-list-time-bz">
                    <span>08:00</span> | <span>成都撒大</span>
                  </div>
                </van-col>
                <van-col span="8" class="money-right">
                  <span>-8222.00</span>
                </van-col>
              </van-col>
            </van-row>

            <van-row
              class="money-row-list money-al-center"
              type="flex"
              justify="space-between"
            >
              <van-col span="2" class="icon-bg money-log-center">
                <van-icon name="shopping-cart-o" color="#fff" size="25" />
              </van-col>
              <van-col span="22" class="money-right border-s" offset="1">
                <van-col span="16" class="money-list-title">
                  <p>购物</p>
                  <div class="money-list-time-bz">
                    <span>08:00</span> | <span>成都撒大</span>
                  </div>
                </van-col>
                <van-col span="8" class="money-right">
                  <span>-8222.00</span>
                </van-col>
              </van-col>
            </van-row>

            <van-row
              class="money-row-list money-al-center"
              type="flex"
              justify="space-between"
            >
              <van-col span="2" class="icon-bg money-log-center">
                <van-icon name="shopping-cart-o" color="#fff" size="25" />
              </van-col>
              <van-col span="22" class="money-right" offset="1">
                <van-col span="16" class="money-list-title">
                  <p>购物</p>
                  <div class="money-list-time-bz">
                    <span>08:00</span> | <span>成都撒大</span>
                  </div>
                </van-col>
                <van-col span="8" class="money-right">
                  <span>-8222.00</span>
                </van-col>
              </van-col>
            </van-row>
          </div>
        </van-row>
      </van-col>
    </van-row>
  </div>
</template>
<style src="./Detail.scss" lang="scss" scoped></style>
