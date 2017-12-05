<template>
  <div class='posts'>  
    <vue-good-table
      v-for='(page, index) in pages'
      v-bind:key='index'
      :title='page.name+",  "+page.posts.length+" Posts"'
      :columns="columns"
      :rows="page.posts"
      :paginate="true"
      :lineNumbers="false"
    >
      <template slot="table-row-before" slot-scope="props">
        <td><a target="_blank" :href='props.row.permalink_url'>{{props.index+1}}</a></td>
      </template>
      <template slot="table-row-after" slot-scope="props">
        <td class='messageTd' >
          <div class='message'>{{props.row.message}}</div>
        </td>
      </template>
    </vue-good-table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import InfiniteLoading from 'vue-infinite-loading';

export default {
  name: 'Profile',
  data(){
    return {
      columns: [
        {
          label: 'Link',
          field: '',
          sortable: false,
        },
        {
          label: 'Date',
          field: 'created_time',
          type: 'date',
          inputFormat: 'YYYY-MM-DD',
          outputFormat: 'DD MMM YY',
        },
        {
          label: 'Type',
          field: 'type',
        },
        {
          label: 'Like',
          field: 'like.summary.total_count',
          type: 'number',
        },
        {
          label: 'Love',
          field: 'love.summary.total_count',
          type: 'number',
        },
        {
          label: 'Haha',
          field: 'haha.summary.total_count',
          type: 'number',
        },
        {
          label: 'Wow',
          field: 'wow.summary.total_count',
          type: 'number',
        },
        {
          label: 'Angry',
          field: 'angry.summary.total_count',
          type: 'number',
        },
        {
          label: 'Sad',
          field: 'sad.summary.total_count',
          type: 'number',
        },
        {
          label: 'Comments',
          field: 'comments.summary.total_count',
          type: 'number',
        },
        {
          label: 'Shares',
          field: this.shares,
          type: 'number',
        },
        {
          label: 'Total',
          field: this.totalFn,
          type: 'number',
        },
        {
          label: 'Message',
          field: '',
          sortable: false,
        },

        // {
        //   label: 'Message',
        //   field: 'message',
        //   tdClass: 'message',
        //   html: 'true',
        //   width: '200px',
        // },
      ]
    }
  },
  computed: {
    ...mapGetters([
      'pages',
      'time',
    ])
  },
  methods: {
    shares(post){
      return post.shares ? post.shares.count : 0;
    },
    totalFn(post) {
      const shares = post.shares ? post.shares.count : 0;
      return shares+post.comments.summary.total_count+post.like.summary.total_count+post.love.summary.total_count+post.haha.summary.total_count+post.sad.summary.total_count+post.angry.summary.total_count+post.wow.summary.total_count;
    },
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
table {
  border-spacing: 20px;
}
span {
  display: block;
  width: 100px;
}
.messageTd {
  min-width: 350px;
  height: 100px;
  padding: 0 !important;
}
.message {
  height: 100%;
  width: calc(100% - 20);
  overflow-y: auto;
  padding: 10px;
  word-break:break-all;
  /* text-overflow: scroll; */
  /* overflow: hidden; */
}
</style>
