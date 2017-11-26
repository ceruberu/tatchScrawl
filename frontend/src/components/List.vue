<template>
  <div class='list'>
    <div class="infographic">
      <img :src="picture.url" /><p>{{name}}</p>
      <p>Number of Followers {{fanCount}}</p>
      <p>Number of Posts {{totalReactions.count}}</p>
      <doughnut :data="summary" />
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
          <td>Total</td>
          <td>{{totalReactions.like}}</td>
          <td>{{totalReactions.love}}</td>
          <td>{{totalReactions.haha}}</td>
          <td>{{totalReactions.sad}}</td>
          <td>{{totalReactions.angry}}</td>
          <td>{{totalReactions.wow}}</td>
          <td>{{totalReactions.comments}}</td>
          <td>{{totalReactions.shares}}</td>
        </tr>
        <tr>
          <td>Post</td>
          <td>{{round(totalReactions.like/numberPosts)}}</td>
          <td>{{round(totalReactions.love/numberPosts)}}</td>
          <td>{{round(totalReactions.haha/numberPosts)}}</td>
          <td>{{round(totalReactions.sad/numberPosts)}}</td>
          <td>{{round(totalReactions.angry/numberPosts)}}</td>
          <td>{{round(totalReactions.wow/numberPosts)}}</td>
          <td>{{round(totalReactions.comments/numberPosts)}}</td>
          <td>{{round(totalReactions.shares/numberPosts)}}</td>
        </tr>
        <tr>
          <td>Photo</td>
          <td>{{round(summary.photo.like/summary.photo.count)}}</td>
          <td>{{round(summary.photo.love/summary.photo.count)}}</td>
          <td>{{round(summary.photo.haha/summary.photo.count)}}</td>
          <td>{{round(summary.photo.sad/summary.photo.count)}}</td>
          <td>{{round(summary.photo.angry/summary.photo.count)}}</td>
          <td>{{round(summary.photo.wow/summary.photo.count)}}</td>
          <td>{{round(summary.photo.comments/summary.photo.count)}}</td>
          <td>{{round(summary.photo.shares/summary.photo.count)}}</td>
        </tr>
        <tr>
          <td>Video</td>
          <td>{{round(summary.video.like/summary.video.count)}}</td>
          <td>{{round(summary.video.love/summary.video.count)}}</td>
          <td>{{round(summary.video.haha/summary.video.count)}}</td>
          <td>{{round(summary.video.sad/summary.video.count)}}</td>
          <td>{{round(summary.video.angry/summary.video.count)}}</td>
          <td>{{round(summary.video.wow/summary.video.count)}}</td>
          <td>{{round(summary.video.comments/summary.video.count)}}</td>
          <td>{{round(summary.video.shares/summary.video.count)}}</td>
        </tr>
        <tr>
          <td>Status</td>
          <td>{{round(summary.status.like/summary.status.count)}}</td>
          <td>{{round(summary.status.love/summary.status.count)}}</td>
          <td>{{round(summary.status.haha/summary.status.count)}}</td>
          <td>{{round(summary.status.sad/summary.status.count)}}</td>
          <td>{{round(summary.status.angry/summary.status.count)}}</td>
          <td>{{round(summary.status.wow/summary.status.count)}}</td>
          <td>{{round(summary.status.comments/summary.status.count)}}</td>
          <td>{{round(summary.status.shares/summary.status.count)}}</td>
        </tr>
        <tr>
          <td>Link</td>
          <td>{{round(summary.link.like/summary.link.count)}}</td>
          <td>{{round(summary.link.love/summary.link.count)}}</td>
          <td>{{round(summary.link.haha/summary.link.count)}}</td>
          <td>{{round(summary.link.sad/summary.link.count)}}</td>
          <td>{{round(summary.link.angry/summary.link.count)}}</td>
          <td>{{round(summary.link.wow/summary.link.count)}}</td>
          <td>{{round(summary.link.comments/summary.link.count)}}</td>
          <td>{{round(summary.link.shares/summary.link.count)}}</td>
        </tr>
        <tr>
          <td>Event</td>
          <td>{{round(summary.event.like/summary.event.count)}}</td>
          <td>{{round(summary.event.love/summary.event.count)}}</td>
          <td>{{round(summary.event.haha/summary.event.count)}}</td>
          <td>{{round(summary.event.sad/summary.event.count)}}</td>
          <td>{{round(summary.event.angry/summary.event.count)}}</td>
          <td>{{round(summary.event.wow/summary.event.count)}}</td>
          <td>{{round(summary.event.comments/summary.event.count)}}</td>
          <td>{{round(summary.event.shares/summary.event.count)}}</td>
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
          <td>Total</td>
          <td>{{roundThreeMultiply((totalReactions.reactions+totalReactions.shares+totalReactions.comments)/fanCount)}}%</td>
          <td>{{roundThreeMultiply((totalReactions.reactions/fanCount))}}%</td>
          <td>{{roundThreeMultiply((totalReactions.comments/fanCount))}}%</td>
          <td>{{roundThreeMultiply((totalReactions.shares/fanCount))}}%</td>
        </tr>
        <tr>
          <td>Overall</td>
          <td>{{roundThreeMultiply((totalReactions.reactions+totalReactions.shares+totalReactions.comments)/totalReactions.count/fanCount)}}%</td>
          <td>{{roundThreeMultiply((totalReactions.reactions/totalReactions.count/fanCount))}}%</td>
          <td>{{roundThreeMultiply((totalReactions.comments/totalReactions.count/fanCount))}}%</td>
          <td>{{roundThreeMultiply((totalReactions.shares/totalReactions.count/fanCount))}}%</td>
        </tr>
        <tr>
          <td>Photo</td>
          <td>{{roundThreeMultiply((summary.photo.reactions+summary.photo.shares+summary.photo.comments)/summary.photo.count/fanCount)}}%</td>
          <td>{{roundThreeMultiply((summary.photo.reactions/summary.photo.count/fanCount))}}%</td>
          <td>{{roundThreeMultiply((summary.photo.comments/summary.photo.count/fanCount))}}%</td>
          <td>{{roundThreeMultiply((summary.photo.shares/summary.photo.count/fanCount))}}%</td>
        </tr>
        <tr>
          <td>Video</td>
          <td>{{roundThreeMultiply((summary.video.reactions+summary.video.shares+summary.video.comments)/summary.video.count/fanCount)}}%</td>
          <td>{{roundThreeMultiply((summary.video.reactions/summary.video.count/fanCount))}}%</td>
          <td>{{roundThreeMultiply((summary.video.comments/summary.video.count/fanCount))}}%</td>
          <td>{{roundThreeMultiply((summary.video.shares/summary.video.count/fanCount))}}%</td>
        </tr>
        <tr>
          <td>Status</td>
          <td>{{roundThreeMultiply((summary.status.reactions+summary.status.shares+summary.status.comments)/summary.status.count/fanCount)}}%</td>
          <td>{{roundThreeMultiply((summary.status.reactions/summary.status.count/fanCount))}}%</td>
          <td>{{roundThreeMultiply((summary.status.comments/summary.status.count/fanCount))}}%</td>
          <td>{{roundThreeMultiply((summary.status.shares/summary.status.count/fanCount))}}%</td>
        </tr>
        <tr>
          <td>Link</td>
          <td>{{roundThreeMultiply((summary.link.reactions+summary.link.shares+summary.link.comments)/summary.link.count/fanCount)}}%</td>
          <td>{{roundThreeMultiply((summary.link.reactions/summary.link.count/fanCount))}}%</td>
          <td>{{roundThreeMultiply((summary.link.comments/summary.link.count/fanCount))}}%</td>
          <td>{{roundThreeMultiply((summary.link.shares/summary.link.count/fanCount))}}%</td>
        </tr>
        <tr>
          <td>Event</td>
          <td>{{roundThreeMultiply((summary.event.reactions+summary.event.shares+summary.event.comments)/summary.event.count/fanCount)}}%</td>
          <td>{{roundThreeMultiply((summary.event.reactions/summary.event.count/fanCount))}}%</td>
          <td>{{roundThreeMultiply((summary.event.comments/summary.event.count/fanCount))}}%</td>
          <td>{{roundThreeMultiply((summary.event.shares/summary.event.count/fanCount))}}%</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Doughnut from '@/components/Doughnut';

export default {
  name: 'List',
  components: {
    Doughnut,
  },
  computed: {
    ...mapGetters([
      'allPost',
      'fanCount',
      'name',
      'picture',
    ])
  },
  methods: {
    round(number) {
      return Math.round(number * 10)/10;
    },
    roundThreeMultiply(number){
      return Math.round(number * 100000)/1000;
    },
    roundThree(number){
      return Math.round(number * 1000)/1000;
    }
  },
  data() {
    const posts = this.$store.getters.allPost;
    const numberPosts = posts.length;
    class numbers {
      constructor(){
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

    let summary = {
      video: new numbers(),
      photo: new numbers(),
      link: new numbers(),
      status: new numbers(),
      offer: new numbers(),
      event: new numbers(),
    }

    posts.forEach(post =>{
      summary[post.type].count++;
      summary[post.type].like += post.like.summary.total_count;
      summary[post.type].love += post.love.summary.total_count;
      summary[post.type].haha += post.haha.summary.total_count;
      summary[post.type].sad += post.sad.summary.total_count;
      summary[post.type].angry += post.angry.summary.total_count;
      summary[post.type].wow += post.wow.summary.total_count;
      summary[post.type].shares += post.shares ? post.shares.count : 0;
      summary[post.type].comments += post.comments.summary.total_count;
    })

    let totalReactions = new numbers();
    for(var key in summary){
      for(var subkey in summary[key]){
        totalReactions[subkey] += summary[key][subkey];
      }
      summary[key].sumReactions();
    }
    totalReactions.sumReactions();
    return {
      summary, totalReactions, numberPosts
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
