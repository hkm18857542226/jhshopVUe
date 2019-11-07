<template>
    <div>

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



      <el-pagination  style="float: right;margin-top: 30px"
                     :page-sizes="[5, 10, 15]"
                     layout="total, sizes, prev, pager, next, jumper"
      >
      </el-pagination>


    </div>
</template>

<script>
    export default {
        name: "Table",
      data(){
          return{

            tableData:[
              {
                "id": 1,
                "name": "夹克",
                "level": 0,
                "productCount": null,
                "productUnit": null,
                "navStatus": 0,
                "showStatus": null,
                "sort": 1,
                "icon": null,
                "keywords": null,
                "description": null
              },
              {
                "id": 2,
                "name": "长袖T恤",
                "level": 0,
                "productCount": null,
                "productUnit": null,
                "navStatus": 1,
                "showStatus": null,
                "sort": 1,
                "icon": null,
                "keywords": null,
                "description": null
              },
              {
                "id": 3,
                "name": "长袖衬衫",
                "level": 0,
                "productCount": null,
                "productUnit": null,
                "navStatus": 1,
                "showStatus": null,
                "sort": 1,
                "icon": null,
                "keywords": null,
                "description": null
              },
              {
                "id": 4,
                "name": "牛仔裤",
                "level": 0,
                "productCount": null,
                "productUnit": null,
                "navStatus": 1,
                "showStatus": null,
                "sort": 1,
                "icon": null,
                "keywords": null,
                "description": null
              },
              {
                "id": 5,
                "name": "休闲裤",
                "level": 0,
                "productCount": null,
                "productUnit": null,
                "navStatus": 1,
                "showStatus": null,
                "sort": 1,
                "icon": null,
                "keywords": null,
                "description": null
              },
              {
                "id": 6,
                "name": "风衣/西服",
                "level": 0,
                "productCount": null,
                "productUnit": null,
                "navStatus": 1,
                "showStatus": null,
                "sort": 1,
                "icon": null,
                "keywords": null,
                "description": null
              },
              {
                "id": 7,
                "name": "卫衣",
                "level": 0,
                "productCount": null,
                "productUnit": null,
                "navStatus": 1,
                "showStatus": null,
                "sort": 1,
                "icon": null,
                "keywords": null,
                "description": null
              },
              {
                "id": 8,
                "name": "毛衫",
                "level": 0,
                "productCount": null,
                "productUnit": null,
                "navStatus": 1,
                "showStatus": null,
                "sort": 1,
                "icon": null,
                "keywords": null,
                "description": null
              },
              {
                "id": 9,
                "name": "皮具",
                "level": 0,
                "productCount": null,
                "productUnit": null,
                "navStatus": 1,
                "showStatus": null,
                "sort": 1,
                "icon": null,
                "keywords": null,
                "description": null
              },
              {
                "id": 11,
                "name": "连衣裙",
                "level": 0,
                "productCount": null,
                "productUnit": null,
                "navStatus": null,
                "showStatus": null,
                "sort": 1,
                "icon": null,
                "keywords": "靓丽的风景线",
                "description": null
              }



            ]
          }
      }
    }
</script>

<style scoped>

</style>
