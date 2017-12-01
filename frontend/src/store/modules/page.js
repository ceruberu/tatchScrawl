// import shop from '../../api/shop'
import { UPDATE_PAGE_URLS, UPDATE_PAGE_POST, UPDATE_PAGE_INFO, SUMMARIZE_PAGE_INFO, UPDATE_TIME } from '../mutation-types';

class Numbers {
  constructor() {
    this.count = 0;
    this.like = 0;
    this.sad = 0;
    this.angry = 0;
    this.wow = 0;
    this.comments = 0;
    this.shares = 0;
    this.haha = 0;
    this.love = 0;
    this.reactions = 0;
  }
  sumReactions(){
    this.reactions = this.like + this.sad + this.angry + this.wow + this.haha + this.love;
  }
}

class Summary {
  constructor(){
    this.video = new Numbers();
    this.photo = new Numbers();
    this.link = new Numbers();
    this.status = new Numbers();
    this.offer = new Numbers();
    this.event = new Numbers();
  }
}

// initial state
const state = {
  pageUrls: [{ value: '' }],
  pages: [],
  time: {},
};

// getters
const getters = {
  pageUrls: state => state.pageUrls,
  pages: state => state.pages,
  time: state => state.time,
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
  [UPDATE_PAGE_URLS](state, data) {
    state.pageUrls = data;
  },
  [UPDATE_PAGE_INFO](state, data) {
    state.pages[data.index] = data;
  },
  [UPDATE_PAGE_POST](state, data) {
    state.pages[data.index].posts = data.list;
  },
  [SUMMARIZE_PAGE_INFO](state, data) {
    const posts = state.pages[data.index].posts;
    const summary = new Summary();

    posts.forEach((post) => {
      summary[post.type].count += 1;
      summary[post.type].like += post.like.summary.total_count;
      summary[post.type].love += post.love.summary.total_count;
      summary[post.type].haha += post.haha.summary.total_count;
      summary[post.type].sad += post.sad.summary.total_count;
      summary[post.type].angry += post.angry.summary.total_count;
      summary[post.type].wow += post.wow.summary.total_count;
      summary[post.type].shares += post.shares ? post.shares.count : 0;
      summary[post.type].comments += post.comments.summary.total_count;
    });

    const totalReactions = new Numbers();
    Object.keys(summary).forEach((key) => {
      Object.keys(totalReactions).forEach((subkey) => {
        totalReactions[subkey] += summary[key][subkey];
      });
      summary[key].sumReactions();
    });
    totalReactions.sumReactions();
    state.pages[data.index].summary = { total: totalReactions, ...summary };
  },
  [UPDATE_TIME](state, data) {
    state.time = { ...data };
  },
};

export default {
  state,
  getters,
  // actions,
  mutations,
};
