<template>
  <el-button>我是 ElButton</el-button>
  <div class="about">
    <h2 v-if="userData.data">
      <div>
        {{ userData.data.id }} -- {{ userData.data.user_name }}
      </div> 
      <ul>
      </ul>
    </h2>
    <p v-else>Loading...</p>
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
import axiosInstance from '@/utils/request'
import { reactive } from 'vue';
import { ElButton } from 'element-plus'

const userData = reactive({
  data: [],
  alluser: [],
});

const fetchData  = (async () => {
  try {
    const response = await axiosInstance({
      method: 'get',
      url: '/v1/user/userid/4',
    });
    userData.data = response;
  } catch (error) {
    console.error(error);
    userData.data = [];
  }
});

const fetchAllData  = (async () => {
  try {
    const response = await axiosInstance({
      method: 'get',
      url: '/v1/user/users',
    });
    userData.alluser = response;
  } catch (error) {
    console.error(error);
    userData.alluser = [];
  }
});
fetchData()
fetchAllData()
console.log(userData.data);

</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 50vh;
    display: flex;
    align-items: center;
    justify-content: center; /* 添加水平居中对齐 */
    flex-direction: column; /* 垂直居中布局 */
    text-align: center; /* 文字居中对齐 */
  }
  .user {
    min-height: 50vh;
    display: flex;
    align-items: center;
    justify-content: center; /* 添加水平居中对齐 */
    text-align: center; /* 文字居中对齐 */
  }
}
/* 调整列表样式 */
ul {
  padding: 0;
  list-style: none;
}
li {
  margin: 10px 0;
}
</style>
