/**
 * Setting
 * @author zhangds <zhudachang0832@gmail.com>
 * @date 2020-07-29 16:27:13
 * @since 0.1.0
 */
import { IRouterConfigCustom } from "../../typings/interface";

function getView(name: string) {
  return (
    resolve: (arg0: any) => void,
    reject: ((err: any) => void) | undefined
  ) => {
    require.ensure(
      [],
      (require) => {
        resolve(require(`@/views/${name}/index.ts`));
      },
      reject,
      "Setting"
    );
  };
}

const routes: IRouterConfigCustom[] = [
  {
    name: "Setting",
    path: "/Setting",
    component: getView("Setting"),
  },
];

export default routes;
