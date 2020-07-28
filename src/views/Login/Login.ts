/**
 * Login
 * @author zhangds <zhudachang0832@gmail.com>
 * @date 2020-07-16 11:32:50
 * @since 0.1.0
 */

import Vue from "@/components/base";
import { Component } from "vue-property-decorator";
import template from "./Login.vue";

@Component({
  name: "Login",
  mixins: [template],
  components: {},
})
export default class Login extends Vue {
  //#region datas ******************************/
  protected tel: string = "";
  protected pwd: string = "";
  // 按钮loading
  protected isLoading: boolean = false;
  protected isDisabled: boolean = false;
  //#endregion datas ***************************/

  //#region props ******************************/
  //#endregion props ***************************/

  //#region vuex *******************************/
  //#endregion vuex ****************************/

  //#region computed ***************************/
  //#endregion computed ************************/

  //#region watchers ***************************/
  //#endregion watchers ************************/

  //#region life cycle *************************/
  protected created() {}
  //#endregion life cycle **********************/

  //#region hooks ******************************/
  //#endregion hooks ***************************/

  //#region event handler **********************/
  //#endregion event handler *******************/

  //#region methods ****************************/
  protected async onSubmit() {
    this.isLoading = true;
    this.isDisabled = true;
    const parameter = {
      tel: this.tel,
      pwd: this.pwd,
    };
    const res = await this.api.user.Login(parameter);
    if (res.code === 200) {
      // 存储用户信息
      this.$store.commit("user/SET_USERNAME", res.data);
      // 存储用户token
      this.$store.commit("user/SET_TOKEN", res.data.token);

      this.$notify({ type: "success", message: "登陆成功" });
      this.$router.push({ path: "/Home" });

      this.isLoading = false;
      this.isDisabled = false;
    } else {
      this.isLoading = false;
      this.isDisabled = false;
    }
  }
  //#endregion methods *************************/
}
