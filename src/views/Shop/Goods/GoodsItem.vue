<template>
  <!--商品列表界面-->
    <div id="goods" style="text-align: left">
     <!--顶部搜索-->
      <el-card>

        <div >
          <span  >筛选搜索</span>
          <el-button style="float: right;margin-left: 20px" type="primary" size="small" @click="">查询结果
          </el-button>
          <el-button style="float: right" size="small " @click="">重置</el-button>

        </div>
        <div>
          <el-form :inline="true" style="margin-top:20px" label-width="140px">
            <el-row>
              <el-form-item label="输入搜索：" size="small" prop="orderSn" :span="8">
                <el-input size="small"  style="width: 203px"></el-input>
              </el-form-item>
              <el-form-item label="商品货号：" prop="productSn" :span="8">
                <el-input size="small" style="width: 203px"></el-input>
              </el-form-item>

              <el-form-item label="商品分类：" prop="cate" :span="8">
                <el-cascader size="small"

                             :show-all-levels="false">


                </el-cascader>
              </el-form-item>



            </el-row>

            <el-form-item label="商品品牌：" :span="8">
              <el-select  size="small">
                <el-option
                           >


                </el-option>

              </el-select>
            </el-form-item>

            <el-form-item label="上架状态：" size="small" prop="publishStatus" :span="8">
              <el-select >
                <el-option
                           >


                </el-option>

              </el-select>
            </el-form-item>

            <el-form-item label="审核状态：" prop="verifyStatus" :span="8">
              <el-select  size="small">
                <el-option
                           >


                </el-option>

              </el-select>
            </el-form-item>

          </el-form>
        </div>
      </el-card>

<!--中间的card-->
      <el-card style="margin-top: 30px">
        <div>
          <span>数据列表</span>
          <el-button style="float:right;" size="small">添加</el-button>
        </div>
       </el-card>
      <!--表格-->
      <el-table
      style="margin-top:30px"
        border
        :data="tableData"
      >
        <el-table-column
          prop="id"
          label="编号"
          width="100"
          align="center"
        >


        </el-table-column>
        <el-table-column
          prop="pic"
          label="商品图片"

          align="center"
        >
          <template v-slot="scope">

            <el-image :src="scope.row.pic" style="width: 80px;height: 80px"></el-image>
          </template>

        </el-table-column>
        <el-table-column

          label="商品名称"

          align="center"
        >
          <template v-slot="scope">
            <p>{{tableData[scope.$index].name}}</p>
            <p>品牌：{{tableData[scope.$index].brandName}}</p>
          </template>

        </el-table-column>

        <el-table-column

          label="价格/货号"

          align="center"
        >
          <template v-slot="scope">
            <p>价格：￥{{tableData[scope.$index].price}}</p>
            <p>货号：{{tableData[scope.$index].productSn}}</p>
          </template>

        </el-table-column>

        <el-table-column

          label="标签"

          align="center"
        >
          <template v-slot="scope"  >

            <p>上架：
              <el-switch v-model="tableData[scope.$index].publishStatus" :active-value="1"
                         :inactive-value="0"></el-switch>
            </p>
            <p>新品：
              <el-switch v-model="tableData[scope.$index].newStatus" :active-value="1"
                         :inactive-value="0"></el-switch>
            </p>
            <p>推荐：
              <el-switch v-model="tableData[scope.$index].recommandStatus" :active-value="1"
                         :inactive-value="0"></el-switch>
            </p>

          </template>

        </el-table-column>
        <el-table-column label="SKU库存" align="center">
          <template v-slot="scope">


            <el-button type="primary" icon="el-icon-edit" circle @click="showSku(scope.row)"></el-button>
          </template>
        </el-table-column>

        <el-table-column label="销量" align="center" prop="sale">


        </el-table-column>

        <el-table-column label="审核状态" align="center">

          <p>未审核</p>
          <el-button type="text">审核详情</el-button>

        </el-table-column>


        <el-table-column

          label="操作"
          width="150px"
          align="center"
        >

          <template v-slot="scope">
            <p>
              <el-button size="mini"
                         @click="toUpdateGood(tableData[scope.$index])"
              >操作
              </el-button>
              <el-button type="danger" size="mini" @click="delGood(scope.row)">删除</el-button>
            </p>

          </template>


        </el-table-column>


      </el-table>


    </div>
</template>

<script>
    export default {
        name: "Goods"
    }
</script>

<style scoped>

</style>
