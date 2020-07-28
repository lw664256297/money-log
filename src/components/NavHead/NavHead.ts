/**
 * NavHead
 * @author zhangds <zhudachang0832@gmail.com>
 * @date 2020-07-28 16:35:13
 * @since 0.1.0
 */

import Vue from "@/components/base";
import { Component, Prop } from "vue-property-decorator";
import template from "./NavHead.vue";

@Component({
  name: "NavHead",
  mixins: [template],
})
export default class NavHead extends Vue {
  //#region datas ******************************/
  //#endregion datas ***************************/

  //#region props ******************************/
  @Prop({
    type: String, // type: [String , Number]
    default: () => {
      return "财政报告";
    },
  })
  protected title: string;

  @Prop({
    type: String,
    default: () => {
      return "返回";
    },
  })
  protected leftTexts: string;

  @Prop({
    type: String,
    default: () => {
      return "";
    },
  })
  protected rightText: string;

  @Prop({
    type: Boolean,
    default: () => {
      return true;
    },
  })
  protected leftArrow: boolean;

  @Prop({
    type: Boolean,
    default: () => {
      return true;
    },
  })
  protected border: boolean;

  @Prop({
    type: Boolean,
    default: () => {
      return false;
    },
  })
  protected fixed: boolean;

  @Prop({
    type: Boolean,
    default: () => {
      return false;
    },
  })
  protected placeholder: boolean;

  @Prop({
    type: [Number, String],
    default: () => {
      return 99;
    },
  })
  protected zIndex: string | number;

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
  // 左边按钮
  protected onClickNavHeadLeft() {
    this.$emit("onClickNavHeadLeft");
  }
  // 右边事件
  protected onClickNavHeadRight() {
    this.$emit("onClickNavHeadRight");
  }
  //#endregion methods *************************/
}
