<template>
    <div class="login">
        <!-- 用户登录卡片 -->
        <el-card class="login-card">
            <template #header>
                <div class="login-card-header">
                    <span>用户登录</span>
                </div>
            </template>
            <!-- 表单 -->
            <el-form :model="loginData" :rules="loginDataRules" ref="loginData">
                <el-form-item prop="user_name">
                    <!-- 用户名 -->
                    <el-input prefix-icon="UserFilled" v-model.trim="loginData.user_name" maxlength="32" placeholder="请输入账号" clearable></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <!-- 密码 -->
                    <el-input prefix-icon="Lock" v-model.trim="loginData.password" maxlength="16" show-password placeholder="请输入密码" clearable></el-input>
                </el-form-item>
                <el-form-item>
                    <!-- 登录按钮 -->
                    <el-button type="primary" style="width: 100%;border-radius: 2px" :loading="loginLoading" @click="handleLogin">登 录</el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>

<script>
// import moment from 'moment';
import {login} from "@/api/user/login";
export default{
    data() {
        return {
            //加载等待动画
            loginLoading: false,
            //登录验证的后端接口
            loginData: {
                user_name: '',
                password: ''
            },
            //校验规则
            loginDataRules: {
                user_name: [{
                    required: true,
                    message: '请填写用户名',
                    trigger: 'change'
                }],
                password: [{
                    required: true,
                    message: '请填写密码',
                    trigger: 'change'
                }],
            }
        }
    },
    methods: {
        //登录方法
        handleLogin() {
           console.log(this.loginData) 
          login(this.loginData)
          .then(res => {
                //账号密码校验成功后的一系列操作
                // localStorage.setItem('user_name', this.loginData.user_name);
                // localStorage.setItem('loginDate', moment().format('YYYY-MM-DD HH:mm:ss'));
                //存放token
                // localStorage.setItem('token', res.data.token);
                //跳转至根路径
                // console.log(333,res)
                if (res.code != 200 ) {
                    this.$message.error({
                        message: res.message
                    })
                    this.$router.push('/login')
                    return
                }else{
                    this.$router.push('/');
                    this.$message.success({
                        message: res.message
                    })
                }                
            })
          .catch(res => {
                console.log(111,res)
                this.$message.error({
                    message: res.message
                })
            })
        }
    }
}
</script>

<style scoped>
    .login {
        position: absolute;
        width: 100%;
        height: 100%;
      background: aquamarine url(@/views/common/img/login.webp);
      background-size: 100%;
    }
    .login-card {
        position: absolute;
        left: 40%;
        top: 30%;
        width: 350px;
        border-radius: 5px;
        background: rgb(255, 255, 255);
        overflow: hidden;
    }
    .login-card-header {
        text-align: center;
    }
</style>
