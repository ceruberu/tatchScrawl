<template>
  <div class="best">
    <div v-for="(posts, index) in sortBest" v-bind:key="index">
      <div v-for="post in posts" v-bind:key="post.id">
        <div class="postHeader">
          <img class="headerProfile" style="{background-image:url(pages[index].picture.url)}"/>
          <div>
            <p>{{pages[index].name}}</p>
            <p>{{post.created_time}}</p>
          </div>
        </div>
        <div class="postBody">
          <p>{{post.message}}</p>
          <img :src="post.full_picture" />
        </div>
        <div class="postFooter">
          <div class="footerIcons"></div>
          <div class="footerShare"></div>
          <div class="footerComment"></div>
        </div>

      </div>

    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Best',
  computed: {
    sortBest: function() {
      const sortedPosts = [];
      this.pages.forEach((page) => {
        const sorted = page.posts.sort((a,b)=>{
          return this.getTotal(b) - this.getTotal(a);
        })
        sortedPosts.push(sorted.slice(0,5));
      })
      
      // FB.api(`/${pageUrl}?fields=fan_count,name,picture`, response => {  

      return sortedPosts;
    },
    ...mapGetters([
      'pages',
      'time',
    ]),
  },
  methods: {
    getTotal(post){
      const shares = post.shares ? post.shares.count : 0;
      return shares+post.comments.summary.total_count+post.like.summary.total_count+post.love.summary.total_count+post.haha.summary.total_count+post.sad.summary.total_count+post.angry.summary.total_count+post.wow.summary.total_count;
    },
    sortBest(page){

    },
    getComment(post){

    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.best {
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
}
.postHeader {
  display: flex;
  flex: 0 0 35px;
}
.headerProfile{
  width: 50px;
  height: 50px;
  /* border-radius: 10px; */
}

.postBody {
  display: flex;
}
.postFooter {
  display: flex;
}
</style>
