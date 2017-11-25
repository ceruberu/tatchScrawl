<template>
  <div class='userInput'>
    https://www.facebook.com/<input v-model="pageURL" placeholder="Page URL"> 
    <br> 
    Start<Datepicker v-model="start" name="start"></Datepicker>
    End <Datepicker v-model="end" name="end"></Datepicker>
    <button v-on:click="check"> Search </button>
  </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker';

const today = new Date();
const year = today.getFullYear();
const month = today.getMonth();
const date = today.getDate();
const start = new Date(year - 1, month, date);
const end = new Date(year, month, date, 23, 59, 59);
const pageURL = '';

export default {
  name: 'UserInput',
  components: {
    Datepicker,
  },
  data() {
    return {
      start, 
      end, 
      pageURL,
    };
  },
  methods: {
    check (){
      const { search, start, end, pageURL, $http } = this;
      FB.api(`/${pageURL}?fields=fan_count,name,picture`, response => {  
        if(!response || response.error){
          alert('Error Occurerd');
        } else {
          this.$store.commit('UPDATE_FAN_COUNT', response.fan_count);
          this.$store.commit('UPDATE_PAGE_NAME', response.name);
          this.$store.commit('UPDATE_PAGE_PICTURE', response.picture.data);
          search();
        }
      });
    },
    search(){
      const { start, end, pageURL, $http } = this;
      let list = [];
      
      function dateToTimestamp (date){
        return Math.floor(date.getTime() / 1000);
      }

      var getFullPosts = (response) => {
        list = list.concat(response.data);
        if (typeof response.paging.next == "undefined") {
          this.$store.commit('UPDATE_PAGE_POST', list);
          this.$router.push('List');
        } else {
          FB.api(response.paging.next, getFullPosts)
        }
      }

      FB.api(`/${pageURL}/posts?fields=shares,comments.limit(0).summary(true),message,created_time,full_picture,type,reactions.type(LIKE).summary(total_count).limit(0).as(like),reactions.type(LOVE).summary(total_count).limit(0).as(love),reactions.type(WOW).summary(total_count).limit(0).as(wow),reactions.type(HAHA).summary(total_count).limit(0).as(haha),reactions.type(SAD).summary(total_count).limit(0).as(sad),reactions.type(ANGRY).summary(total_count).limit(0).as(angry)&until=${dateToTimestamp(end)}&since=${dateToTimestamp(start)}&limit=100`, getFullPosts)
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
</style>

