<template>
    <!-- <div>
      <el-container>
        <el-aside width="200px">Aside</el-aside>

        <el-container>
          <el-header>Header</el-header>

          <el-main>Main</el-main>

          <el-footer>Footer</el-footer>

        </el-container>
      </el-container>

    </div> -->

  <div>
    导航栏
    <RouterLink to="/user">用户列表</RouterLink>
    <RouterLink to="/role">角色列表</RouterLink>
  </div>
  <div>
    侧边栏
  </div>
  <RouterView></RouterView>
  <div>
    mark说明
  </div>
</template>  

<script>
</script>