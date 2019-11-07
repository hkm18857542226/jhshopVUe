<template>
  <div>


    <el-row :gutter="20">
      <el-col :span="7" :offset="1">
        <el-card>
          <i class="el-icon-tickets" style="font-size:40px;"><span class="" style="font-size: 30px;">今日订单数量<span class="font-red">{{mainTongJi.order1}}</span></span></i>

        </el-card>
      </el-col>
      <el-col :span="7">
        <el-card>
          <i style="font-size: 40px;" class="el-icon-s-marketing">
            <span style="font-size:30px">今日销售总额<span class="font-red">{{mainTongJi.order2}}</span></span>
          </i>

        </el-card>
      </el-col>
      <el-col  :span="7">
        <el-card>
          <i style="font-size: 40px;" class="el-icon-s-data">
            <span style="font-size:30px">昨日销售总额<span class="font-red">{{mainTongJi.order3}}</span></span>
          </i>
        </el-card>
      </el-col>

    </el-row>

    <el-col :span="21" :offset="1">



      <el-card class="box-card"   header="backge" style="margin-top: 10px;">
        <div slot="header"   >
          <h3 style="margin: 0;" >待处理订单<span class="font-red">{{mainTongJi.order4}}</span></h3>
        </div>

        <el-row :gutter="20" >
          <el-col :span="8" >
            <el-row type="flex"   justify="space-between">
              <el-col :span="22" ><div>待付款订单</div></el-col>
              <el-col :offset="8"class="font-red"><div><span class="font-red">{{mainTongJi.order5}}</span></div></el-col>

            </el-row>
            <el-divider/>
          </el-col>

          <el-col :span="8" >
            <el-row type="flex"   justify="space-between">
              <el-col :span="22" ><div>已完成订单</div></el-col>
              <el-col :offset="8"   class="font-red"><div><span class="font-red">{{mainTongJi.order6}}</span></div></el-col>

            </el-row>
            <el-divider/>
          </el-col>

          <el-col :span="8" >
            <el-row type="flex"   justify="space-between">
              <el-col :span="22" ><div>待确认收货订单</div></el-col>
              <el-col :offset="8"   class="font-red"><div><span class="font-red">{{mainTongJi.order7}}</span></div></el-col>

            </el-row>
            <el-divider/>
          </el-col>
        </el-row>


        <el-row :gutter="20">

          <el-col :span="8" >
            <el-row type="flex"   justify="space-between">
              <el-col :span="22" ><div>待发货订单</div></el-col>
              <el-col :offset="8"   class="font-red"><div><span class="font-red">{{mainTongJi.order8}}</span></div></el-col>

            </el-row>
            <el-divider/>
          </el-col>

          <el-col :span="8" >
            <el-row type="flex"   justify="space-between">
              <el-col :span="22" ><div>待处理退货订单</div></el-col>
              <el-col :offset="8"   class="font-red"><div><span class="font-red">{{mainTongJi.order9 == "" ? mainTongJi.order9:0}}</span></div></el-col>

            </el-row>
            <el-divider/>
          </el-col>


        </el-row>



      </el-card>
    </el-col>



    <el-row  :gutter="20"
    >
       <el-col :span="10" :offset="1">
         <el-card class="box-card" header="backge">
           <div slot="header"   >
             <h3 style="margin: 0;" >商品总览</h3>
           </div>
           <el-row >
             <el-col :offset="4">
               <el-col :span="3">
                 <span class="order-font-size"><span class="font-red">{{mainTongJi.goods1}}</span></span>
                 <span >已下架</span>
               </el-col>

               <el-col  :offset="1" :span="3">
                 <span class="order-font-size">{{mainTongJi.goods2}}</span>
                 <span >已上架</span>
               </el-col>

               <el-col  :offset="1" :span="3">
                 <span class="order-font-size">{{mainTongJi.goods3}}</span>
                 <span >库存紧张</span>
               </el-col>

               <el-col  :offset="1" :span="3">
                 <span class="order-font-size">{{mainTongJi.goods4}}</span>
                 <span >全部商品</span>
               </el-col>
             </el-col>
           </el-row>
         </el-card>

       </el-col>

      <el-col :span="11">
        <el-card class="box-card" header="backge">
          <div slot="header"   >
            <h3 style="margin: 0;" >用户总览</h3>
          </div>
          <el-row >
            <el-col :offset="4">
              <el-col :span="3">
                <span class="order-font-size">{{mainTongJi.user1}}</span>
                <span >今日新增</span>
              </el-col>

              <el-col  :offset="1" :span="3">
                <span class="order-font-size">{{mainTongJi.user2}}</span>
                <span >昨日新增</span>
              </el-col>

              <el-col  :offset="1" :span="3">
                <span class="order-font-size">{{mainTongJi.user3}}</span>
                <span >本月新增</span>
              </el-col>

              <el-col  :offset="1" :span="3">
                <span class="order-font-size">{{mainTongJi.user4}}</span>
                <span >会员总数</span>
              </el-col>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
    </el-row>


    <el-row >
      <el-col  :span="12">

        <div style="height: 400px;width: 500px" id="chart1"></div>
      </el-col >
      <el-col  :span="12">
        <div style="height: 400px;width: 500px" id="order"></div>
      </el-col >
    </el-row>
  </div>

</template>



<style scoped>
  .font-red{
    color: red;
  }

  .backge{
    background-color: #bfcee5;
    height: 10px;
  }
  .order-font-size{
    font-size: 30px;
    color: red;
  }
</style>



<script>

  import echarts from 'echarts'

  export default {
    created(){
      // 组件初始化成功的时候需要  请求后台数据的pagebean
      this.$api.mainstatistics.mainshuju().then((data) => {
      console.log(data)
        this.order = data.order;
      this.users = data.users
        this.mainTongJi = data.mainTongJi;
        this.initChart();
      }).catch((e) => {});

    },
    name: 'MyComponent1',
    data(){
      return {
        dataMain:{

        },
        order:[],
        users:{

        },
        mainTongJi:{

        },
        orderMessage:{
          order:[ "1","3"],
          users:{
            "1": "2019-09-25",
            "2": "2019-11-05"
          },

        }
      }
    },


    methods: {

      initChart () {
        console.log(this.orderMessage)

        // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(document.getElementById('chart1'))
        let order = echarts.init(document.getElementById('order'))
        let option = {
          legend: {},
          tooltip: {},
          dataset: {
            source: this.getGoods

          },
          xAxis: {type: 'category'},
          yAxis: {},
          // Declare several bar series, each will be mapped
          // to a column of dataset.source by default.
          series: [

            {type: 'bar'},
          ]
        }

        let orderoption = {
          legend: {},
          tooltip: {},
          dataset: {
            source: [
              ['product', '2015', '2016', '2017'],
              ['订单的待处理书',this.order[0]],
              ['24小时的订单书', this.order[1]],

            ]
          },
          xAxis: {type: 'category'},
          yAxis: {},
          // Declare several bar series, each will be mapped
          // to a column of dataset.source by default.
          series: [
            {type: 'pie'},
            {type: 'pie'},
            {type: 'pie'}
            // {type: 'bar'},
            // {type: 'bar'},
          ]
        }

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option)
        order.setOption(orderoption)

      }
    },

    computed:{
      getGoods:function () {
        let goods = new Array();
        //添加 表头
        let ggg = new Array();
        ggg.push("product");
        ggg.push("订单销售俄")
        console.log(ggg)
        goods.push(ggg)

        // 添加 内容
        for (let i in this.users){
          let gg = new Array()

          gg.push(this.users[i])
          gg.push(i)
          goods.push(gg)
        }
        console.log(goods)
        return goods
      }
    },


  }
</script>


