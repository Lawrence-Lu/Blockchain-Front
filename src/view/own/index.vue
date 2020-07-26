<template>
    <div class="container">
        
            <el-col v-for="(item,index) in   productList" :key="index" :span="6" :offset="1">
        
                <el-card class="realEstate-card">
                    <div slot="header" class="clearfix">
                    持有状态:
                    <span style="color: rgb(255, 0, 0);">{{item.status}}</span>
                    </div>

                <div class="item">
                    <el-tag>产品ID: </el-tag>
                    <span>{{item.productId}}</span>
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

                
                </el-card>
        
            </el-col>
         
    </div>
</template>

<script>
export default {
  data(){

      return{
          loading: true,
          productList:[
              
              
                  {  
                      status:'True',
                      productId:'0',
                      producerId:'001',
                      profit:'10%',
                      setBack:'20%'

                  },
                  {
                      status:'True',
                      productId:'0',
                      producerId:'001',
                      profit:'10%',
                      setBack:'20%'

                  }
              

          ],
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
.realEstate-card {
    width: 250px;
    height: 340px;
    margin: 18px;
  }
  
  

</style>