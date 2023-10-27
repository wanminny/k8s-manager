<template>
  <div>
    <h2 v-if="userData.data">
      <div>
        {{ userData.data.id }} -- {{ userData.data.user_name }}
      </div> 
      <ul>
      </ul>
    </h2>
    <p v-else>Loading...</p>
    <div>alluser: </div>
    <h2 v-if="userData.alluser">
      <!-- {{ userData.alluser }} -->
      <div>
            <ul v-for="u in userData.alluser.users" v-bind:key="u.id">
               {{ u.id }}--{{u.user_name}}
            </ul>
      </div> 
    </h2>
    <p v-else>Loading11...</p>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import {getAllUserInfo, getUserInfoById } from '@/api/user.js'

const userData = reactive({
  data: [],
  alluser: [],
});

getUserInfoById(4).then(res => {
            //响应成功，获取deployment列表和total
            userData.data = res;
          })
          .catch(error => {
            console.error(error);
            userData.data = [];
          }),

getAllUserInfo().then(res => {
            //响应成功，获取deployment列表和total
            userData.alluser = res;
          })
          .catch(error => {
            console.error(error);
            userData.alluser = [];
          })

// console.log(userData.data);
</script>

<style lang="scss" scoped>

</style>