<template>
  <div>

    <el-card>

      <div style="text-align: left">
        <span>筛选搜索</span>
        <el-button style="float: right;margin-left: 20px" type="primary" size="small" @click="find">查询结果
        </el-button>
        <el-button style="float: right" size="small " @click="initialUse">重置</el-button>

      </div>
      <div>
        <el-form :inline="true" style="margin-top:20px" label-width="140px" >
          <el-row>


            <el-form-item label="输入手机号：" size="small" prop="orderSn" :span="8" >
              <el-input v-model="user.obj.phone" size="small" style="width: 203px"></el-input>
            </el-form-item>


            <el-form-item label="用户姓名：" prop="productSn" :span="8">
              <el-input v-model="user.obj.nickname" size="small" style="width: 203px"></el-input>
            </el-form-item>

            <el-form-item label="用户的性别" prop="cate" :span="8"  >
              <el-select size="small" v-model="user.obj.gender">
                <el-option label="未知" :value="0"/>
                <el-option label="男" :value="1"/>
                <el-option label="女" :value="2"/>

              </el-select>
            </el-form-item>


          </el-row>
        <el-row>

          <el-form-item   label="用户所在地："  size="small" :span="8">
            <div id="app">
              <el-cascader

                :options="options"
                v-model="selectedOptions"
                @change="handleChange">
              </el-cascader>
            </div>
          </el-form-item>

          <el-form-item label="用户注册时间：" size="small" prop="publishStatus" :span="8">
            <div class="block">

              <el-date-picker
                value-format="yyyy-MM-dd HH:mm:ss"
                v-model="user.obj.createTime"
                type="date"
                placeholder="选择日期">
              </el-date-picker>
            </div>
          </el-form-item>

          <el-form-item label="帐号启用状态" prop="verifyStatus" :span="8">
            <el-select size="small" v-model="user.obj.status">
              <el-option label="已启用" value="1"/>
              <el-option label="已禁用" value="0"/>
            </el-select>
          </el-form-item>
        </el-row>
        </el-form>


        <el-table :data="user.pageBean.rows"  border
                  style="width: 100%">
            <el-table-column prop="username" label="用户名"/>

          <el-table-column prop="nickname" label="昵称"/>

          <el-table-column prop="phone" label="手机号码"/>

          <el-table-column prop="createTime" label="注册时间"/>
          <el-table-column    label="性别">
            <template slot-scope="scope">
              {{ sexComput(scope) }}
            </template>
          </el-table-column>
          <el-table-column prop="city" label="所在城市"/>


        </el-table>
      </div>

      <el-footer>

        <el-pagination


          @current-change="page"
          style="float: right;margin-top: 30px"
          :page-size="user.pageBean.pageSize"
          :total="user.pageBean.total"
          layout="total, prev, pager, next, jumper"
        >
        </el-pagination>
      </el-footer>
    </el-card>



  </div>
</template>

<script>
  import {regionData} from 'element-china-area-data'

  export default {
    name: "UserItem",
    data() {
      return {
        options: regionData,
        selectedOptions: [],
        value1: '',
        user:{
          obj:{
            gender:""
          },
          pageBean:{}
        },
        initialUser:{

        }
      }
    },
    computed:{

    },
    methods: {
      handleChange(value) {
        this.user.pageBean.city = this.selectedOptions[2]
        console.log(this.selectedOptions)
      },
      sexComput(sex){
        console.log(sex)
        //计算性别
        switch (sex.$index) {

          case 0:
            return "未知";
          case 1:
            return "男";
          case 2:
            return "女";
        }
      },
      //根据选择的分页数进行选择
      page(val){
        this.user.pageBean.pageIndex =  val;
        this.$api.userMem.page(this.user).then((data)=>{
          console.log(data)
          this.user.pageBean = data.pageBean
        })
      },
      // 根据用户输入进行查找
      find(){

        this.$api.userMem.find(this.user.obj).then((data) =>{
          this.user.pageBean = data.pageBean;

        })
      },
      initialUse(){
        this.$api.userMem.one().then((data)=>{
          console.log(data)
          this.user = data;
          this.initialUser = data;
        })
      }
    },
    created(){
      this.$api.userMem.one().then((data)=>{
        console.log(data)
        this.user = data;
        this.initialUser = data;
      })

    }
  }
</script>

<style scoped>

</style>
