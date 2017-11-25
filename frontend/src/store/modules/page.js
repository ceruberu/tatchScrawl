// import shop from '../../api/shop'
import { UPDATE_PAGE_POST, UPDATE_PAGE_NAME, UPDATE_PAGE_PICTURE, UPDATE_FAN_COUNT } from '../mutation-types';

// initial state
const state = {
  allPost: [],
  fanCount: 0,
  name: '',
  picture: {},
};

// getters
const getters = {
  allPost: state => state.allPost,
  fanCount: state => state.fanCount,
  name: state => state.name,
  picture: state => state.picture,
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
  [UPDATE_PAGE_PICTURE](state, data) {
    state.picture = data;
  }
};

export default {
  state,
  getters,
  // actions,
  mutations,
};
