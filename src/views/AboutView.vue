<template>
  <div class="about">
    <h2 v-if="userData.data">{{ userData.data }}</h2>
    <p v-else>Loading...</p>
  <div>
  </div>

  </div>
</template>

<script setup>
import axiosInstance from '../utils/request'
import { reactive } from 'vue';
const userData = reactive({
  data: '',
});

const fetchData  = (async () => {
  try {
    const response = await axiosInstance({
      method: 'get',
      url: '/v1/user/userid/4',
    });
    userData.data = response;
    console.log(response);
  } catch (error) {
    console.error(error);
    userData.data = null;
  }
});

fetchData()

</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
