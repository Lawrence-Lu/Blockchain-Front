<template>
    <div>
      <div>
        <img src="../assets/img/cover.png" alt="">
      </div>

      <div style="text-align: center; margin-top: 50px; color: #005bb9"><h3>策略精选</h3></div>
      <div class="box">
        <card class="item" style="margin-top: 30px">策略一</card>
        <card class="item" style="margin-top: 30px">策略二</card>
        <card class="item" style="margin-top: 30px">策略三</card>
        <card class="item">策略四</card>
        <card class="item">策略五</card>
        <card class="item">策略六</card>
      </div>
    </div>
</template>

<script>

import Card from "./Card";


    export default {
        name: "Home",
        components: {
          Card
        },
        data () {
            return {

            }
        },
        methods: {
        }
    }
</script>

<style scoped>
  .box {
    display: grid;
    justify-content:space-evenly;
    grid-template-columns:  repeat(3, 33.33%);
    grid-row-gap: 100px;
    margin-left: 100px;
  }

  .item{
    width: 1200px;
    height: 300px;
  }
</style>
