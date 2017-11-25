<template>
  <div class='list'>
    <div class="infographic">
      <p>{{name}}</p>
      <p>Number of Followers {{fanCount}}</p>
      <p>Number of Posts {{numberPosts}}</p>
      <table id="numberGraphic">
        <tr>
          <th></th>
          <th>Like</th>
          <th>Love</th>
          <th>Haha</th>
          <th>Sad</th>
          <th>Angry</th>
          <th>Wow</th>
          <th>Comments</th>
          <th>Shares</th>
        </tr>
        <tr>
          <td>Number</td>
          <td>{{numberLike}}</td>
          <td>{{numberLove}}</td>
          <td>{{numberHaha}}</td>
          <td>{{numberSad}}</td>
          <td>{{numberAngry}}</td>
          <td>{{numberWow}}</td>
          <td>{{numberComments}}</td>
          <td>{{numberShares}}</td>
        </tr>
      </table>
      <br><br>
      <table id="engagementGraphic">
        <tr>
          <th></th>
          <th>Combined</th>
          <th colspan="2">Engagement</th>
          <th>Virarlity</th>
        </tr>
        <tr>
          <td></td>
          <td>Average Post <br>Engagement</td>
          <td>Post Reactions</td>
          <td>Post Comments</td>
          <td>Post Shares</td>
        </tr>
        <tr>
          <td>Rate</td>
          <td>{{roundThree((totalReactions+numberShares+numberComments)/fanCount)}}%</td>
          <td>{{roundThree((totalReactions/fanCount))}}%</td>
          <td>{{roundThree((numberComments/fanCount))}}%</td>
          <td>{{roundThree((numberShares/fanCount))}}%</td>
        </tr>
        <tr>
          <td>Per Post</td>
          <td>{{round((totalReactions+numberShares+numberComments)/numberPosts)}}</td>
          <td>{{round((totalReactions/numberPosts))}}</td>
          <td>{{round((numberComments/numberPosts))}}</td>
          <td>{{round((numberShares/numberPosts))}}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'List',
  computed: {
    ...mapGetters([
      'allPost',
      'fanCount',
      'name',
    ])
  },
  methods: {
    round(number) {
      return Math.round(number * 10)/10;
    },
    roundThree(number){
      return Math.round(number * 1000)/1000;
    }
  },
  data() {
    console.log(this.$store);
    const posts = this.$store.getters.allPost;
    const fanCount = this.$store.getters.fanCount;
    const numberPosts = posts.length;
    let numberLike = 0;
    let numberLove = 0;
    let numberHaha = 0;
    let numberSad = 0;
    let numberAngry = 0;
    let numberWow = 0;
    let numberComments = 0;
    let numberShares = 0;
    let type = {
      video: 0,
      photo: 0,
      link: 0,
      status: 0,
      offer: 0,
    }
    posts.forEach(post =>{
      numberLike += post.like.summary.total_count;
      numberLove += post.love.summary.total_count;
      numberHaha += post.haha.summary.total_count;
      numberSad += post.sad.summary.total_count;
      numberAngry += post.angry.summary.total_count;
      numberWow += post.wow.summary.total_count;
      numberShares += post.shares ? post.shares.count : 0;
      numberComments += post.comments.summary.total_count;
      type[post.type]++;
    })
    let totalReactions = numberLike + numberLove + numberHaha + numberSad + numberAngry + numberWow;
    return {
      numberPosts, numberLike, numberLove, numberHaha, numberSad, numberAngry, numberWow, numberComments, numberShares, totalReactions, type,
    }
  }
};
</script>

<style scoped>
.list {
  display: flex;
  flex: 1;
}

.infographic {
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
}

th {
  padding: 10px;
  border-bottom: 1px solid black;
}
td {
  padding: 10px;
}
tr {
  padding: 10px;
}

#numberGraphic {
  width: 100%;
  max-width: 600px;
}


</style>
