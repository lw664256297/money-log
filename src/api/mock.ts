// 用户信息
const userInfo = () => {
  return {
    code: 200,
    data: {
      id: "1",
      username: "张三",
      sex: "女",
      tel: "13438888888",
      role: "0",
      token: "bhnjkmqwuieoqwehjklasdn",
    },
    message: "Ok",
  };
};

// 明细
const moneyLogin = () => {
  return {
    code: 200,
    data: {
      moneyLog: {
        time: "2020年7月",
        outcome: "28888.99",
        income: "10000.00",
      },
      moneyLogList: [
        {
          id: 0,
          timeDay: "7月30日",
          outcome: "2999.00",
          income: "100.00",
          detailList: [
            {
              detailId: 0,
              iconType: "shopping-cart-o",
              typeName: "购物",
              isOutInCome: 0,
              creationTime: "08:20",
              remark: "成都衣服",
              amount: "1000.00",
            },
            {
              detailId: 1,
              iconType: "shopping-cart-o",
              typeName: "购物",
              isOutInCome: 1,
              creationTime: "09:20",
              remark: "成都衣服",
              amount: "11.00",
            },
          ],
        },
        {
          id: 1,
          timeDay: "7月31日",
          outcome: "2999.00",
          income: "100.00",
          detailList: [
            {
              detailId: 0,
              iconType: "shopping-cart-o",
              typeName: "购物",
              isOutInCome: 0,
              creationTime: "08:20",
              remark: "成都衣服",
              amount: "1000.00",
            },
            {
              detailId: 1,
              iconType: "shopping-cart-o",
              typeName: "购物",
              isOutInCome: 1,
              creationTime: "09:20",
              remark: "成都衣服",
              amount: "11.00",
            },
          ],
        },
      ],
    },
    message: "ok",
  };
};

export { userInfo, moneyLogin };
