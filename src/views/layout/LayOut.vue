<template>
  <div>
    <div class="common-layout">
      <el-container>
        <el-header class="common-header flex-float">
          <div class="flex">
            <!-- <img class="logo" src="../../assets/logo.png" alt="logo" /> -->
            <h2 class="title">
              <div>
                <div class="content">kubeweb管理系统</div>
                <div class="loginout"><el-button type="danger">退出</el-button></div>
              </div>
            </h2>
          </div>

        </el-header>
        <el-container>
          <el-aside class="common-aside" width="200px">
            <el-menu background-color="none" text-color="#fff" :router="true">
              <el-sub-menu index="1">
                <template #title>
                  <el-icon><location /></el-icon>
                  <span>账号管理</span>
                </template>

                <el-menu-item-group>
                  <el-menu-item index="/user">用户列表</el-menu-item>
                  <!-- <el-menu-item index="1-2">item two</el-menu-item> -->
                </el-menu-item-group>
              </el-sub-menu>

              <el-sub-menu index="2">
                <template #title>
                  <el-icon><location /></el-icon>
                  <span>角色管理</span>
                </template>

                <el-menu-item-group>
                  <el-menu-item index="/role">角色列表</el-menu-item>
                  <!-- <el-menu-item index="1-2">item two</el-menu-item> -->
                </el-menu-item-group>
              </el-sub-menu>

              <el-sub-menu index="3">
                <template #title>
                  <el-icon><location /></el-icon>
                  <span>关于</span>
                </template>

                <el-menu-item-group>
                  <el-menu-item index="/about">说明</el-menu-item>
                  <!-- <el-menu-item index="1-2">item two</el-menu-item> -->
                </el-menu-item-group>
              </el-sub-menu>

            </el-menu>
          </el-aside>
          <el-main><router-view></router-view></el-main>
        </el-container>
      </el-container>
    </div>
  </div>
</template>

<script>

</script>
<style >
.el-container {
  height: 100vh;
  overflow: hidden;
}
.common-header {
  background: rgb(120, 174, 240);
}

.common-aside {
  background: rgb(107, 119, 135);
}
.logo {
  width: 30px;
}
.content {
  color: #fff;
  display: inline; 
  vertical-align: middle;
}
.loginout{
  float:right;
  display: inline;
  vertical-align: middle;
}
</style>