/**
 * Detail
 * @author zhangds <zhudachang0832@gmail.com>
 * @date 2020-07-30 10:07:08
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
      "Detail"
    );
  };
}

const routes: IRouterConfigCustom[] = [
  {
    name: "Detail",
    path: "/",
    component: getView("Detail"),
  },
];

export default routes;
