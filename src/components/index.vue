<template>
    <div class="container">
        
            <el-col v-for="(item,index) in   productList" :key="index" :span="6" :offset="1">
        
                <el-card class="productOwn-card">
                    <div slot="header" class="clearfix">
                    持有状态:
                    <span style="color: rgb(255, 0, 0);">{{item.status}}</span>
                    </div>

                <div class="item">
                    <el-tag>产品ID: </el-tag>
                    <span>{{item.productId}}</span>
                </div>
                <div class="item">
                    <el-tag>策略名称: </el-tag>
                    <span>{{item.productName}}</span>
                </div>
                <div class="item">
                    <el-tag type="success">发行方ID: </el-tag>
                    <span>{{item.producerId}}</span>
                </div>
                <div class="item">
                    <el-tag type="warning">收益率: </el-tag>
                    <span>{{item.profit}} </span>
                </div>
                <div class="item">
                    <el-tag type="danger">最大回撤: </el-tag>
                    <span>{{item.setBack}}</span>
                </div>

                <div>
                    <el-button type="text" @click="MarketSignalTableVisible = true">市场信号</el-button>
                    <el-divider direction="vertical" />
                    <el-button type="text" @click="OpsSignalTableVisible = true">操作信号</el-button>
                </div>
                
                </el-card>
        
            </el-col>

            <el-dialog title="市场信号" :visible.sync="MarketSignalTableVisible">
              <el-table :data="marketSignalData">
                <el-table-column property="id" label="ID" width="150"></el-table-column>
                <el-table-column property="date" label="日期" width="150"></el-table-column>
                <el-table-column property="stock" label="股票" width="200"></el-table-column>
                <el-table-column property="price" label="价格"></el-table-column>
              </el-table>
            </el-dialog>

            <el-dialog title="操作信号" :visible.sync="OpsSignalTableVisible">
              <el-table :data="OpsSignalData">
                <el-table-column property="id" label="ID" width="150"></el-table-column>
                <el-table-column property="date" label="日期" width="150"></el-table-column>
                <el-table-column property="stock" label="股票" width="200"></el-table-column>
                <el-table-column property="ops" label="操作"></el-table-column>
              </el-table>
            </el-dialog>
         
    </div>
</template>

<script>
export default {
  data(){

      return{
        MarketSignalTableVisible : false,
        OpsSignalTableVisible : false,
          loading: true,
          productList:[
              
              
                  {  
                      status:'True',
                      productId:'200010002',
                      productName: '网格策略',
                      producerId:'10110001',
                      profit:'5%',
                      setBack:'17%'

                  },
                  {
                      status:'True',
                      productId:'20001001',
                      productName: '海龟交易策略',
                      producerId:'10110002',
                      profit:'10%',
                      setBack:'20%'

                  },
                  
              

          ],

          marketSignalData:[
            {
              id : '00000001',
              date:'2020-05-01',
              stock :'Stock_A',
              price : 10,
            },
            {
              id : '00000002',
              date:'2020-05-02',
              stock :'Stock_A',
              price : 11,
            },
          ],

          OpsSignalData:[
            {
              id : '00010001',
              date:'2020-05-01',
              stock :'Stock_A',
              ops : '+1',
            },
            {
              id : '00010002',
              date:'2020-05-02',
              stock :'Stock_A',
              ops : '-1',
            },
          ]
      }
  }
}
</script>

<style>
.container{
    width: 100%;
    text-align: center;
    min-height: 100%;
    overflow: hidden;
  }
  .tag {
    float: left;
  }

  .item {
    font-size: 14px;
    margin-bottom: 18px;
    color: #999;
  }
.clearfix:before,
.clearfix:after {
    display: table;
  }
  .clearfix:after {
    clear: both
  }
.productOwn-card {
    width: 280px;
    height: 380px;
    margin: 18px;
  }
  
  

</style>