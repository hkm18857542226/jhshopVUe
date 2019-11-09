<template>
  <div>
    <el-card>

      <div style="text-align: left">
        <span>筛选搜索</span>
        <el-button style="float: right;margin-left: 20px" type="primary" size="small" @click="">查询结果
        </el-button>
        <el-button style="float: right" size="small " @click="">重置</el-button>

      </div>
      <div>
        <el-form :inline="true" style="margin-top:20px" label-width="140px">
          <el-row>
            <el-form-item label="输入搜索：" size="small" prop="orderSn" :span="8">
              <el-input size="small" style="width: 203px"></el-input>
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
            <el-select size="small">
              <el-option
              >


              </el-option>

            </el-select>
          </el-form-item>

          <el-form-item label="上架状态：" size="small" prop="publishStatus" :span="8">
            <el-select>
              <el-option
              >


              </el-option>

            </el-select>
          </el-form-item>

          <el-form-item label="审核状态：" prop="verifyStatus" :span="8">
            <el-select size="small">
              <el-option>


              </el-option>

            </el-select>
          </el-form-item>

        </el-form>
      </div>
    </el-card>


  </div>
</template>

<script>
  export default {
    name: "Search"
  }
</script>

<style scoped>

</style>
