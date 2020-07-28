/**
 * Hello
 * @author zhangds <zhudachang0832@gmail.com>
 * @date 2020-06-22 11:52:57
 * @since 0.1.0
 */

import Vue from "@/components/base";
import { Component } from "vue-property-decorator";
import { Button } from "vant";
import template from "./Hello.vue";

// 兼容组件写法
const btn: any = Button;

@Component({
  name: "Hello",
  mixins: [template],
  components: {
    [Button.name]: btn,
  },
})
export default class Hello extends Vue {
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
  protected created() {}
  //#endregion life cycle **********************/

  //#region hooks ******************************/
  //#endregion hooks ***************************/

  //#region event handler **********************/
  //#endregion event handler *******************/

  //#region methods ****************************/
  //#endregion methods *************************/
}
