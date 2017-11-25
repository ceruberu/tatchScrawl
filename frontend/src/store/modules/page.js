// import shop from '../../api/shop'
import { UPDATE_PAGE_POST, UPDATE_PAGE_NAME, UPDATE_FAN_COUNT } from '../mutation-types';

// initial state
const state = {
  allPost: [],
  fanCount: 0,
  name: '',
};

// getters
const getters = {
  allPost: state => state.allPost,
  fanCount: state => state.fanCount,
  name: state => state.name,
};

// actions
// const actions = {
//   getAllProducts({ commit }) {
//     shop.getProducts((products) => {
//       commit(UPDATE_DATA, { products });
//     });
//   },
// };

// mutations
const mutations = {
  [UPDATE_PAGE_POST](state, data) {
    state.allPost = data;
  },
  [UPDATE_PAGE_NAME](state, data) {
    state.name = data;
  },
  [UPDATE_FAN_COUNT](state, data) {
    state.fanCount = data;
  },
};

export default {
  state,
  getters,
  // actions,
  mutations,
};
