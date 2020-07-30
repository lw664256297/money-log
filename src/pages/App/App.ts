/**
 * App
 * @author zhangds <zhudachang0832@gmail.com>
 * @date 2020-06-22 11:32:06
 * @since 0.1.0
 */

import Vue from "@/components/base";
import { Component, Watch } from "vue-property-decorator";
import template from "./App.vue";
import NavHead from "@/components/NavHead";
import Menu from "@/components/Menu";
@Component({
  name: "App",
  mixins: [template],
  components: {
    NavHead,
    Menu,
  },
})
export default class App extends Vue {
  //#region datas ******************************/
  protected leftTexts: string = "";
  protected zIndex: number = 99;
  //#endregion datas ***************************/

  //#region props ******************************/
  //#endregion props ***************************/

  //#region vuex *******************************/
  //#endregion vuex ****************************/

  //#region computed ***************************/
  //#endregion computed ************************/

  //#region watchers ***************************/
  // @Watch("child")
  // onChangeValue(newVal: string, oldVal: string) {
  //   // todo...
  // }
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
