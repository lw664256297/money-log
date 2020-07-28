/**
 * Login
 * @author zhangds <zhudachang0832@gmail.com>
 * @date 2020-07-16 14:44:17
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
      "Login"
    );
  };
}

const routes: IRouterConfigCustom[] = [
  {
    name: "Login",
    path: "/Login",
    component: getView("Login"),
  },
];

export default routes;
