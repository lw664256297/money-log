/**
 * Home
 * @author zhangds <zhudachang0832@gmail.com>
 * @date 2020-07-16 11:36:20
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
      "Home"
    );
  };
}

const routes: IRouterConfigCustom[] = [
  {
    name: "Home",
    path: "/Home",
    component: getView("Home"),
  },
];

export default routes;
