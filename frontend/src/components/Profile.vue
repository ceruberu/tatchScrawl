<template>
 <div class='profiles'>
    <div class="profile" v-for="page in pages" v-bind:key="page.name">
      <img :src="page.picture.url" /><p>{{page.name}}</p>
      <p>{{page.fanCount}} Followers</p>
      <p>{{page.posts.length}} Posts</p>
      <p>{{roundThree(page.posts.length/(Math.floor(( Date.parse(time.end) - Date.parse(time.start) ) / 86400000)))}} Posts/day</p>
      <!-- <h4>Media Mix</h4> -->
      <table>
        <tr>
          <th>Photo</th>
          <td>{{page.summary.photo.count}}</td>
          <td>{{round(page.summary.photo.count/page.posts.length*100)}}%</td>
        </tr>
        <tr>
          <th>Video</th>
          <td>{{page.summary.video.count}}</td>
          <td>{{round(page.summary.video.count/page.posts.length*100)}}%</td>
        </tr>
        <tr>
          <th>Link</th>
          <td>{{page.summary.link.count}}</td>
          <td>{{round(page.summary.link.count/page.posts.length*100)}}%</td>
        </tr>
        <tr>
          <th>Status</th>
          <td>{{page.summary.status.count}}</td>
          <td>{{round(page.summary.status.count/page.posts.length*100)}}%</td>
        </tr>
        <tr>
          <th>Event</th>
          <td>{{page.summary.event.count}}</td>
          <td>{{round(page.summary.event.count/page.posts.length*100)}}%</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Doughnut from '@/components/Doughnut';

export default {
  name: 'Profile',
  components: {
    Doughnut,
  },
  computed: {
    ...mapGetters([
      'pages',
      'time',
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
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.profiles {
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
}

.profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid lightslategray;
  padding: 15px;
  border-radius: 7.5px;
  margin: 15px;
}
img {
  margin-top: 5px;
  margin-bottom: 15px;
}
p {
  margin-top: 5px;
  margin-bottom: 5px;
}
table {
  border-spacing: 10px;
}
h4 {
  margin-bottom: 3px;
}
</style>
