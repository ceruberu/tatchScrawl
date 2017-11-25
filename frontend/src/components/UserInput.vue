<template>
  <div class='userInput'>
    https://www.facebook.com/<input v-model="message" placeholder="Page URL"> 
    Start<Datepicker v-model="start" name="start"></Datepicker></Datepicker>
    End <Datepicker v-model="end" name="end"></Datepicker>
    <button v-on:click="search"> Search </button>
  </div>
</template>

<script>
import moment from 'moment';
import Datepicker from 'vuejs-datepicker';

const today = new Date();
const year = today.getFullYear();
const month = today.getMonth();
const date = today.getDate();
const start = new Date(year-1, month, date);
const end = new Date(year, month, date, 23, 59, 59);


export default {
  name: 'UserInput',
  components: {
    Datepicker,
  },
  data() {
    return {
      start, end, message: ''
    };
  },
  methods: {
    search(){
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
