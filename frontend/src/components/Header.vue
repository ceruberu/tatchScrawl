<template>
  <div class='header'>
    <router-link to='/'><i>TATCH SCRAWL</i></router-link>
    <router-link class='nav' to='/list/profile' exact-active-class="active">Profile</router-link>
    <router-link class='nav' to='/list/posts'>Posts</router-link>
    <!-- <router-link class='nav' to='/list/best'>Top 5</router-link> -->
    <!-- <div class='time'>{{cutTime(time.start)}}</div> -->
    <!-- <div class='time'>{{cutTime(time.end)}}</div> -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Header',
  computed: {
    ...mapGetters([
      'time',
    ])
  },
  methods: {
    cutTime(time){
      return time.toISOString().slice(0,10);
    }
  }
};
</script>

<style scoped>
.header {
  display: flex;
  flex: 0 0 50px;
  align-items: center;
  justify-content: center;
}
.nav.router-link-active {
  font-weight:bold;
  border-bottom: 1px solid black;
}
a {
  padding: 10px;
  text-decoration: none;
  color: black;
}
.time {
  margin-left: 20px;
}
</style>
