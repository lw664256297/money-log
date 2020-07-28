// import { post } from "../http";
// export default {
//   Reg(data: Types.Http.ILoginData): Promise<Types.Cons.IResponseData> {
//     return post<Types.Cons.IResponseData>(`/reg`, data);
//   },
// };

// ***************************模拟数据***********************
import * as Mock from "../mock";
export default {
  // 登陆
  Login(data: Types.Http.ILoginData): Promise<Types.Cons.IResponseData> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Mock.userInfo());
      }, 100);
    });
  },
};
