/**
 * Menu
 * @author zhangds <zhudachang0832@gmail.com>
 * @date 2020-07-29 15:06:03
 * @since 0.1.0
 */

import Vue from "@/components/base";
import { Component, Prop } from "vue-property-decorator";
import template from "./Menu.vue";

@Component({
  name: "Menu",
  mixins: [template],
})
export default class Menu extends Vue {
  //#region datas ******************************/
  protected MenuActive: number = 0;
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
  protected onChangeMenu() {}
  //#endregion methods *************************/
}
