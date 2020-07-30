/**
 * Setting
 * @author zhangds <zhudachang0832@gmail.com>
 * @date 2020-07-29 16:26:54
 * @since 0.1.0
 */

import Vue from "@/components/base";
import { Component } from "vue-property-decorator";
import template from "./Setting.vue";

@Component({
  name: "Setting",
  mixins: [template],
})
export default class Setting extends Vue {
  //#region datas ******************************/
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
    console.log("进入设置");
  }
  //#endregion life cycle **********************/

  //#region hooks ******************************/
  //#endregion hooks ***************************/

  //#region event handler **********************/
  //#endregion event handler *******************/

  //#region methods ****************************/
  //#endregion methods *************************/
}
