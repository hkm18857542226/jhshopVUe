<template>
  <div >

    <el-col style="margin-top: 10%;"  :offset="6" :span="12">

      <el-form  :model="login" label-width="100px" :rules="rules" ref="login"  class="demo-ruleForm" >
        <el-card >
          <div slot="header" class="clearfix">
            <span ><strong>江湖jshop后台管理系统</strong> </span><span style="background-color:red">{{login.error}}</span>
          </div>

          <el-form-item label="账号" prop="account">
            <el-input name="account"   v-model="login.account"/>
          </el-form-item>

          <el-form-item label="密码" prop="password">
            <el-input  show-password   name="password" v-model="login.password"/>
          </el-form-item>


          <el-button style="width: 70%;" @click="loginMethod('login')" type="submit">提交</el-button>

        </el-card>
      </el-form>
    </el-col>
  </div>
</template>

<script>

  import VueRouter from 'vue-router';

  import Cookies from "js-cookie"
  export default {
    data(){
      return{
        login:{
          account:'',
          password:'',
          error:""
        },
        rules:{
          account:[{
            required: true,
            message: '请输入账号',

          },{
            max:15,
            min:3,
            message:"长度再3到15之间",
          },{
            validator: (rule,value,callback) => {


              // 判断用户的输入石否为数字和英语
              if(new RegExp("^[A-Za-z0-9]+$").test(value)){

                callback();
              }else{
                callback(new Error("只能输入数字和英语"));
              }
            }
          }
          ],
          password:[{
            required:true,
            message:'请输入密码'
          },{
            min:3,
            max:15,
            message:"长度再3到15之间"
          }]
        }
      }
    },
    created(){

    },
    methods:{

      loginMethod(){
        let vue = this;
        this.$refs['login'].validate((valid)=>{
          if(valid){
            // window.location("")
            this.$api.login.login({
              account:this.login.account,
              password:this.login.password
            }).then((data)=>{
              console.log(data.error)
              console.log(this)
              //如果传过来的数据是空的那么就去主页  不正确就把error 信息给 vue组件

              if(data.error === ""){
                // 重定向到主页的路由
                console.log("主页")


                sessionStorage.setItem('user', data.account) // 保存用户到本地会话
                console.log(data.account)
                Cookies.set('token', data.username) // 放置token到Cookie
                vue.$store.commit('menuRouteLoaded',false)//要求重新加载导航菜单
                vue.$router.push('/')  // 登录成功，跳转到主页


              }else{
                this.login.error = data.error
              }

            }).catch(err => {
              console.log('all good')
            })
            // this.axios.post("http://localhost:8080/login",{
            //     account:this.login.account,
            //     password:this.login.password
            // }).then((data)=>{
            //     console.log(data.data.error)
            //
            //     //如果传过来的数据是空的那么就去主页  不正确就把error 信息给 vue组件
            //
            //     if(data.data.error === ""){
            //         // 重定向到主页的路由
            //         console.log("主页")
            //
            //        console.log(VueRouter)
            //
            //
            //         this.$router.push({name:"main"})
            //
            //     }else{
            //         this.login.error = data.data.error
            //     }
            //
            // })
            // this.axios.create({
            //       method:"post",
            //        baseURL:'http://localhost:8080',
            //        url:'/login',
            //     data:{
            //            account:this.login.account,
            //            password:this.login.password
            //     }
            // })

          }
        })
      },
      refreshCaptcha: function(){
        this.loginForm.src = this.global.baseUrl + "/captcha.jpg?t=" + new Date().getTime();
      },
      reset() {
        this.$refs.loginForm.resetFields()
      },
      mounted() {
        this.refreshCaptcha()
      }

    }

  }
</script>

<style>
</style>
