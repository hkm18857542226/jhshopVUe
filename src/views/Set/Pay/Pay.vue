<template>
    <div>


      <el-card>

        <el-header>
          <el-dialog title="插件" :visible.sync="dialogTableVisible">
            <el-form :model="addpay" label-width="100px" :rules="rules" ref="addpay">
              <el-form-item label="名字" prop="name">
                  <el-input v-model="addpay.name"/>
              </el-form-item>
              <el-form-item label="code" prop="code">
                  <el-input v-model="addpay.code"/>
              </el-form-item>

            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="dialogTableVisible = false">取 消</el-button>
              <el-button type="primary" @click="addcooke">确 定</el-button>
            </div>
          </el-dialog>




          <p>支付设置</p>
          <el-button @click="dialogTableVisible  = true">增加</el-button>
        </el-header>

        <el-table
          :data="pageBean.rows"
          border
          style="width: 100%;margin-top: 40px">
          <el-table-column align="center" prop="code" label="插件编码"/>

          <el-table-column align="center" prop="name" label="名字" />

          <el-table-column align="center" label="运行状态">

            <template slot-scope="status">
              <el-button @click="open(status.row)">
                <el-switch
                  v-model="status.row.status"
                  active-color="#13ce66"
                  inactive-color="#ff4949"
                  active-text="启动"
                  inactive-text="禁止"
                  active-value="1"
                  inactive-value="0"
                >
                </el-switch>
              </el-button>


           </template>
          </el-table-column>

        </el-table>

        <el-footer>

          <el-pagination


                           @current-change="page"
                        style="float: right;margin-top: 30px"
                          :page-sizes="[5, 10, 15]"
                      :page-size="pageBean.pageSize"

                           :total="pageBean.total"
                          layout="total, prev, pager, next, jumper"
          >
          </el-pagination>
        </el-footer>
      </el-card>
    </div>
</template>

<script>
    export default {
        name: "Pay",
      data(){
          return{
            addpay:{
              name:'',
              code:"",
            },
            rules:{
              name:[{
                required:true,
                message:"请输入插件名字"
              }],
              code:[{
                required:true,
                message:"请输入插件的code"
              }]

            },

            dialogTableVisible:false,
            pageBean:{

            },
            tableData:[
              {
                name:"支付",
                status:"1",
                code:'awdaw'
              },
            ]
          }
      },
      methods: {
        // 验证参数的完整性后提交到后台
          addcooke(){
            this.$refs['addpay'].validate((valid) => {
              if (valid) {
                this.dialogTableVisible = false
                this.$api.plugin.payIsert(this)
                 return true
              } else {
                alert('错误信息!');
                return false;
              }
            });
        },
          //根据选择的分页数进行选择
          page(val){
            this.$api.plugin.pay({pageIndex:val}).then((data)=>{
              console.log(data)
              this.pageBean = data
            })

          },
        open(code) {

          console.log(132)
          this.$confirm('是否改变状态, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            this.$message({
              type: 'success',
              message: '改变成功!'
            });
            //发送请求 到服务器  修改用插件的状态
            console.log(code)
            this.$api.plugin.updata(code)

          }).catch(() => {
            this.$message({
              type: 'info',
              message: '已取消停用'
            });
          });

        }
      },
      created(){
          // 组件初始化成功的时候需要  请求后台数据的pagebean
          this.$api.plugin.payone().then((data) =>{
            console.log(data);
            this.pageBean = data;
          })



      }
    }
</script>

<style scoped>

</style>
