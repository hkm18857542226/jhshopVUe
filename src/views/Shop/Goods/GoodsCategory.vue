<template>
  <div>
    <el-container>
      <el-main>
        <el-card style="margin-top: 30px;position: relative ;height: 65px">
          <div>
            <span style="position: absolute ; left: 20px">数据列表</span>
            <el-button size="mini" style="position: absolute ; right: 20px" @click="jumpToAdd">添加</el-button>
          </div>
        </el-card>


        <el-table
          :data="tableData"
          border
          style="width: 100%;margin-top: 40px">
          <el-table-column
            prop="id"
            label="编号"
            width="100"
            align="center">
          </el-table-column>
          <el-table-column
            prop="name"
            label="分类名称"

            align="center">
          </el-table-column>
          <el-table-column
            prop="level"
            label="级别" width="100"
            align="center">
          </el-table-column>
          <el-table-column
            prop="productCount" width="100"
            label="商品数量"
            align="center">
          </el-table-column>
          <el-table-column
            prop="productUnit" width="100"
            label="商品单位"
            align="center">
          </el-table-column>
          <el-table-column
            width="100"
            label="导航栏"
            align="center">
            <template v-slot="scope">

              <el-switch v-model="scope.row.navStatus" :active-value="1"
                         :inactive-value="0"></el-switch>


            </template>

          </el-table-column>
          <el-table-column
            width="100"
            label="是否显示"
            align="center">
            <template v-slot="scope">

              <el-switch :active-value="1" v-model="scope.row.showStatus"
                         :inactive-value="0"></el-switch>


            </template>

          </el-table-column>
          <el-table-column
            prop="sort" width="100"
            label="排序"
            align="center">
          </el-table-column>
          <el-table-column
            width="200"
            label="设置"
            align="center">
            <template v-slot="scope">
              <el-button-group>
                <el-button size="small" @click="">查看下级</el-button>
                <el-button size="small" class="ml-3">转移商品</el-button>
              </el-button-group>
            </template>

          </el-table-column>
          <el-table-column
            width="200"
            label="操作"
            align="center">
            <template v-slot="scope">
              <el-button-group>
                <el-button size="mini" @click="">编辑</el-button>
                <el-button size="mini" class="ml-3" type="danger" @click="delClick(scope.row.id)">删除</el-button>

              </el-button-group>
            </template>
          </el-table-column>

        </el-table>


        <!--分页-->
        <div style="position: relative;height: 32px;background: #ffffff; margin-top: 20px ;" >
          <el-pagination style="position: absolute;right: 0;"


                         :page-sizes="[5, 10, 15]"

                         layout="total, sizes, prev, pager, next, jumper"
          >
          </el-pagination>
        </div>




      </el-main>

    </el-container>

  </div>
</template>

<script>
  import {getGoodsCategoryData, delGoodsCategoryData} from "@/sevice/api"

  export default {
    name: "category",
    data() {
      return {
        tableData: [],
         delDialogVisible:false,
      }
    },

    created() {
      this.initData();

    },
    methods: {
      // 初始化分类数据
      async initData() {
        let res = await getGoodsCategoryData();
        if (res.code === 200) {

          this.tableData = res.data;
        }
      },

      // 跳转到添加分类界面
      jumpToAdd(){
        // this.$router.push({path: "/goodsCategory/addCategory"});

      },



      // 删除分类
      async delCategory(id) {
        let res= delGoodsCategoryData({id});
       if(res.code===200){

       }
       this.initData();

      }

    },


  }
</script>

<style scoped>

</style>
