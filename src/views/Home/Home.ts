/**
 * Home
 * @author zhangds <zhudachang0832@gmail.com>
 * @date 2020-07-16 11:35:40
 * @since 0.1.0
 */

import Vue from "@/components/base";
import { Component } from "vue-property-decorator";
import template from "./Home.vue";
import NavHead from "@/components/NavHead";

@Component({
  name: "Home",
  mixins: [template],
  components: {
    NavHead,
  },
})
export default class Home extends Vue {
  //#region datas ******************************/
  protected isLogin: boolean = true;
  protected title: string = "财政报告";
  protected leftTexts: string = "";
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
  //#endregion methods *************************/
}
