<template>
  <div class="main">
    <UserInput />
  </div>
</template>

<script>
import UserInput from '@/components/UserInput';

export default {
  name: 'Main',
  components: {
    UserInput,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main {
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
}
/* h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
} */
</style>
