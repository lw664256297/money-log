/**
 * user store
 * @author 张德帅 <zhudachang0832@gmail.com>
 * @date 2020-01-10 19:02:39
 * @since 0.1.0
 */

import keymirror from "@/store/utils/keymirror";
import LS from "@/common/util/ls";

import {
  State as vState,
  Getter as vGetter,
  Mutation as vMutation,
  Action as vAction,
  namespace,
} from "vuex-class";

import { getter, mutation, action, decorator } from "@/store/utils/vuexUtil";

export const storeName = "user";

/*** state ***/
const state = {
  userName: "这是userStore 的值222222222222",
};

/*** getters ***/
const getters = getter(state, {});

/*** mutations ***/
const mutations = mutation(state, {
  // tslint:disable-next-line:no-shadowed-variable
  SET_NAME(state, data) {
    state.userName = data;
    console.log("home----被执行的方法" + state.userName);
  },
  // tslint:disable-next-line:no-shadowed-variable
  SET_TOKEN(state, token) {
    LS.set("token", token);
  },
  // 存储用户名
  // tslint:disable-next-line:no-shadowed-variable
  SET_USERNAME(state, data) {
    LS.set("userInfo", data);
  },
});

/*** actions ***/
const actions = action(state, {
  setUName({ commit }, data) {
    commit("SET_NAME", data);
    commit("SET_TOKEN", "");
  },
});

/*** module store ***/
const store = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};

/*** exports ***/
export let types = {
  state: keymirror(state),
  getter: keymirror(getters),
  mutation: keymirror(mutations),
  action: keymirror(actions),
};

export let State = decorator(namespace(storeName, vState), types.state);
export let Getter = decorator(namespace(storeName, vGetter), types.getter);
export let Mutation = decorator(
  namespace(storeName, vMutation),
  types.mutation
);
export let Action = decorator(namespace(storeName, vAction), types.action);

export default store;
