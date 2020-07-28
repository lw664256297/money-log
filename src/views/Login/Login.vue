<!--
 * Login
 * @author zhangds <zhudachang0832@gmail.com>
 * @date 2020-07-16 11:32:50
 * @since 0.1.0
 -->
<template>
  <div class="Login-main">
    <van-form @submit="onSubmit">
      <van-field
        v-model="tel"
        name="手机号"
        label="手机号"
        placeholder="手机号"
        :rules="[{ required: true, message: '请填写手机号' }]"
      />
      <van-field
        v-model="pwd"
        type="pwd"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px;">
        <van-button
          :loading="isLoading"
          :disabled="isDisabled"
          type="info"
          round
          block
          loading-text="加载中..."
          native-type="submit"
          >提交</van-button
        >
      </div>
    </van-form>
  </div>
</template>
<style src="./Login.scss" lang="scss" scoped></style>
