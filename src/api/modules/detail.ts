// import { post } from "../http";
// export default {
//   Reg(data: Types.Http.ILoginData): Promise<Types.Cons.IResponseData> {
//     return post<Types.Cons.IResponseData>(`/reg`, data);
//   },
// };

// ***************************模拟数据***********************
import * as Mock from "../mock";
export default {
  // 获取明细
  getDetailList(): Promise<Types.Cons.IResponseData> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Mock.moneyLogin());
      }, 100);
    });
  },
};
