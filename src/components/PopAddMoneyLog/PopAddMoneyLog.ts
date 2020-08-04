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
  protected showPop: boolean = true;
  protected checked: boolean = false;
  // 是否为支出还是收入 0 支出 1收入
  protected isOutInComeType: number = 0;
  protected moneyValue: any = "";
  // 初始化记账本类型
  protected setDetailTypeIcon: any = [
    {
      id: 0,
      typeName: "购物",
      typeIcon: "shopping-cart-o",
      isActvier: 0,
    },
    {
      id: 1,
      typeName: "服装美容",
      typeIcon: "shopping-cart-o",
      isActvier: 1,
    },
    {
      id: 2,
      typeName: "餐饮",
      typeIcon: "shopping-cart-o",
      isActvier: 2,
    },
    {
      id: 3,
      typeName: "交通",
      typeIcon: "shopping-cart-o",
      isActvier: 3,
    },
  ];
  // 备注
  protected remark: string = "";
  // 备注弹窗
  protected addRemarkShow: boolean = false;
  protected remarkBtnName: string = "添加备注";
  // 日历
  protected showDate: boolean = false;
  protected inOutDate: string = "";

  // 列表
  protected currentItem: number = 0;

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
      return { height: "90%" };
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
  protected created() {
    const date = new Date();
    this.inOutDate = `${date.getMonth() + 1}月${date.getDate()}日`;
  }
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
  protected onInput(checked) {
    this.$dialog
      .confirm({
        title: "提醒",
        message: "是否切换模式？",
      })
      .then(() => {
        this.checked = checked;
        if (checked === false) {
          this.isOutInComeType = 0;
        } else {
          this.isOutInComeType = 1;
        }
      });
  }
  protected setTypeIconCk(el) {
    this.currentItem = el.isActvier;
  }
  protected formatDate(date) {
    return `${date.getMonth() + 1}月${date.getDate()}日`;
  }
  // 日历
  // tslint:disable-next-line:member-ordering
  public onConfirm(date) {
    this.inOutDate = this.formatDate(date);
    this.showDate = false;
  }
  protected onInputKeyboard() {
    // let req = {};
  }
  // 添加备注
  protected addRemarkShowOk() {
    if (this.remark !== "") {
      this.addRemarkShow = false;
      this.remarkBtnName = "修改";
    }
  }

  //#endregion methods *************************/
}
