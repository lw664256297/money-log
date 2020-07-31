/**
 * PopAddMoneyLog
 * @author zhangds <zhudachang0832@gmail.com>
 * @date 2020-07-31 15:55:17
 * @since 0.1.0
 */

import Vue from "@/components/base";
import { Component, Prop } from "vue-property-decorator";
import template from "./PopAddMoneyLog.vue";

@Component({
  name: "PopAddMoneyLog",
  mixins: [template],
})
export default class PopAddMoneyLog extends Vue {
  //#region datas ******************************/
  protected showPop: boolean = false;

  //#endregion datas ***************************/

  //#region props ******************************/
  @Prop({
    type: Boolean,
    default: true,
  })
  protected popCloseable: boolean;

  @Prop({
    type: String,
    default: "top-left",
  })
  protected popTopLeft: string;

  @Prop({
    type: String,
    default: "bottom",
  })
  protected popPosition: string;

  @Prop({
    type: Object,
    default: () => {
      return { height: "70%" };
    },
  })
  protected popStyle: object;

  @Prop({
    type: Boolean,
    default: false,
  })
  protected closeOnClickOverlay: boolean;
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
  // tslint:disable-next-line:member-ordering
  public isClose() {
    this.showPop = false;
  }
  // tslint:disable-next-line:member-ordering
  public isShow() {
    this.showPop = true;
  }
  // 窗口关闭后
  // tslint:disable-next-line:member-ordering
  public isCloseCall() {
    console.log("-------1");
  }
  //#endregion methods *************************/
}
