/**
 * Detail
 * @author zhangds <zhudachang0832@gmail.com>
 * @date 2020-07-30 10:06:53
 * @since 0.1.0
 */

import Vue from "@/components/base";
import { Component, Ref } from "vue-property-decorator";
import template from "./Detail.vue";
import PopAddMoneyLog from "@/components/PopAddMoneyLog";

@Component({
  name: "Detail",
  mixins: [template],
  components: {
    PopAddMoneyLog,
  },
})
export default class Detail extends Vue {
  //#region datas ******************************/
  protected detailData: object = {
    moneyLog: {
      time: "0",
      outcome: "-",
      income: "-",
    },
    moneyLogList: [],
  };
  protected addMoenyLogBtn: boolean = false;
  protected showPops: boolean = false;
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
  protected created() {
    console.log("进入明细");
    this.getMoneyLog();
  }
  //#endregion life cycle **********************/

  //#region hooks ******************************/
  //#endregion hooks ***************************/

  //#region event handler **********************/
  //#endregion event handler *******************/

  //#region methods ****************************/
  // 获取帐号明细
  protected async getMoneyLog() {
    const res = await this.api.detail.getDetailList();
    if (res.code === 200) {
      this.detailData = res.data;
    }
  }
  // 显示增加编辑框
  protected showMoneyEdit() {
    (this.$refs.PopAddMoneyLog as PopAddMoneyLog).isShow();
    console.log(1);
  }
  //#endregion methods *************************/
}
