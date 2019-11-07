<template>
    <div style="text-align: left">
<el-card style="width: 800px;margin: 30px auto">


      <el-form style="margin-top: 50px;padding-left: 20px;width: 600px" label-width="120px"  :model="form" >
        <!--商品分类-->

        <el-form-item label="商品分类：" prop="proId">
          <el-cascader
                       :show-all-levels="false"></el-cascader>


        </el-form-item>
        <!--商品名称-->

        <el-form-item label="商品名称：" prop="name" :rules="[{required:true,message:'不能为空',trigger:'blur'}]">
          <el-input v-model="form.name"


          ></el-input>


        </el-form-item>
        <!--副标题-->
        <el-form-item label="副标题：" prop="subTitle">
          <el-input></el-input>
        </el-form-item>
        <!--商品品牌-->
        <el-form-item label="商品品牌：" prop="braId">
          <el-select placeholder="请选择商品品牌">
            <el-option></el-option>
          </el-select>


        </el-form-item>
        <!--商品介绍-->

        <el-form-item label="商品介绍：">
          <el-input type="textarea"></el-input>
        </el-form-item>

        <!--商品货号-->
        <el-form-item label="商品货号：">
          <el-input></el-input>
        </el-form-item>
        <!--商品售价-->
        <el-form-item label="商品售价：">
          <el-input></el-input>
        </el-form-item>

        <!--市场价-->
        <el-form-item label="市场价：">
          <el-input></el-input>
        </el-form-item>

        <!--商品库存-->
        <el-form-item label="商品库存：">
          <el-input></el-input>
        </el-form-item>


        <!--计量单位-->
        <el-form-item label="计量单位：">
          <el-input></el-input>
        </el-form-item>

        <!--商品重量-->
        <el-form-item label="商品重量：">
          <el-col :span="14">
            <el-form-item>
              <el-input></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="3" class="text-center">
            克
          </el-col>
        </el-form-item>
        <!--排序-->
        <el-form-item label="排序：">
          <el-input></el-input>
        </el-form-item>

        <el-form-item>

          <el-button type="primary" @click="" style="margin: 0 auto">下一步，填写商品促销</el-button>
        </el-form-item>
      </el-form>
</el-card>


    </div>
</template>

<script>
    export default {
        name: "Form",
      data(){
          return{
            form:{name:""}
          }
      }
    }
</script>

<style scoped>

</style>
