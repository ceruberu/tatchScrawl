<template>
  <div class='userInput'> 
    <div class="fb-login-button" data-max-rows="1" data-size="medium" data-button-type="login_with" data-show-faces="false" data-auto-logout-link="true" data-use-continue-as="false"></div>
    <div class='pagesInput'>
      <div class='numberControl'>
        <div class='inactive' v-if="pageUrls.length == 1">-</div>
        <div v-else v-on:click="changeNumberPage('minus')">-</div>
        <div>{{pageUrls.length}}</div>
        <div v-on:click="changeNumberPage('plus')">+</div>
      </div>
      <div class='pageInput' v-for="(pageUrl, index) in pageUrls" v-bind:key="index">
        {{ index + 1 }}. <input v-model="pageUrl.value" placeholder="Page URL">
      </div>
    </div>
    <br> 
    Start<Datepicker v-model="time.start" name="start"></Datepicker>
    End <Datepicker v-model="time.end" name="end"></Datepicker>
    <button v-on:click="check"> Search </button>
  </div>
</template>

<script>
import moment from 'moment';
import { mapGetters } from 'vuex'
import Datepicker from 'vuejs-datepicker';
export default {
  name: 'UserInput',
  components: {
    Datepicker,
  },
  computed: {
    ...mapGetters([
      'numberPage',
      'pages',
      'time',
    ]),
  },
  data() {
    return {
      pageUrls: [{ value: 'jooxth' }],
    };
  },
  methods: {
    customFormatter(date){
      return moment(date).toDate();
    },
    changeNumberPage(sign){
      if(sign == 'minus'){
        this.pageUrls.pop();
      } else {
        this.pageUrls.push({ value: '' });
      }
    },
    check (){
      const { search, start, end, pageUrls, promisifyPage } = this;
      let promises = [];
      for (let i in pageUrls){
        promises.push(promisifyPage(pageUrls[i].value, i));
      }
      Promise.all(promises).then(()=>{
        search();
      }, reason =>{
        console.log(reason);
      });
    },
    promisifyPage(pageUrl, index){
      return new Promise((resolve, reject) => {
        FB.api(`/${pageUrl}?fields=fan_count,name,picture`, response => {  
            if(!response || response.error){
            reject();
          } else {
            this.$store.commit('UPDATE_PAGE_INFO', {
              fanCount: response.fan_count,
              name: response.name,
              picture: response.picture.data,
              index
            });
            resolve();
          }
        })
      })
    },
    promisifyPost(pageUrl, index){
      const { $store, time } = this;
      const { start, end } = time;
      return new Promise((resolve, reject) => {
        let list = [];
        function dateToTimestamp (date){
          return Math.floor(date.getTime() / 1000);
        }
        const getFullPosts = (response) => {
          list = list.concat(response.data);
          if(!response || response.error){
            reject();
          } else if (typeof response.paging.next == "undefined") {
            $store.commit('UPDATE_PAGE_POST', {list, index});
            resolve();
          } else {
            FB.api(response.paging.next, getFullPosts)
          }
        }
        FB.api(`/${pageUrl}/posts?fields=permalink_url,source,shares,comments.limit(0).summary(true),message,created_time,full_picture,type,reactions.type(LIKE).summary(total_count).limit(0).as(like),reactions.type(LOVE).summary(total_count).limit(0).as(love),reactions.type(WOW).summary(total_count).limit(0).as(wow),reactions.type(HAHA).summary(total_count).limit(0).as(haha),reactions.type(SAD).summary(total_count).limit(0).as(sad),reactions.type(ANGRY).summary(total_count).limit(0).as(angry)&until=${dateToTimestamp(end)}&since=${dateToTimestamp(start)}&limit=100`, getFullPosts);
      })
    },
    search(){
      const { time, pageUrls, $router, promisifyPost, $store } = this;
      const { start, end } = time;
      let postPromises = [];
      for (let i in pageUrls){
        postPromises.push(promisifyPost(pageUrls[i].value, i));
      }
      Promise.all(postPromises).then(()=>{
        for(let i in pageUrls){
          $store.commit('SUMMARIZE_PAGE_INFO', {
            index: i,
          })
        }
        console.log(this.pages, " ALL DONE SUM");
        $router.push('list/profile');
      }, reason => {
        console.log(reason);
      })
    },
  },
};
</script>

<style scoped>
.input {
  display: flex;
  flex: 0 0 100px;
  background-color: gray;
}
.datepick {
  flex: 0 0 200px;
}
.numberControl {
  display: flex;
  justify-content: center;
}
.numberControl div {
  margin: 10px;
  cursor: default;
}
.inactive {
  color: lightgrey;
}
</style>

