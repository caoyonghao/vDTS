<template>
  <div>
    <el-row class="dota-data-list" :gutter="20">
      <el-col :span="12" :offset="6"><div class="grid-content bg-purple">
        <el-table ref="multipleTable" @selection-change="handleSelectionChange" :data="dotaData" style="width: 100%">
          <el-table-column type="selection"></el-table-column>
          <el-table-column type="expand">
            <template scope="props">
              <el-form label-position="left" inline class="demo-table-expand">
                <el-form-item label="商品名称">
                  <span>{{ props.row.name }}</span>
                </el-form-item>
                <el-form-item label="所属店铺">
                  <span>{{ props.row.shop }}</span>
                </el-form-item>
                <el-form-item label="商品 ID">
                  <span>{{ props.row.id }}</span>
                </el-form-item>
                <el-form-item label="店铺 ID">
                  <span>{{ props.row.shopId }}</span>
                </el-form-item>
                <el-form-item label="商品分类">
                  <span>{{ props.row.category }}</span>
                </el-form-item>
                <el-form-item label="店铺地址">
                  <span>{{ props.row.address }}</span>
                </el-form-item>
                <el-form-item label="商品描述">
                  <span>{{ props.row.desc }}</span>
                </el-form-item>
              </el-form>
            </template>
          </el-table-column>
          <el-table-column label="姓名" prop="name">
          </el-table-column>
          <el-table-column label="数据" prop="kda">
          </el-table-column>
          <el-table-column label="级别" prop="level">
          </el-table-column>
        </el-table>
      </div>
      </el-col>
    </el-row>
    <el-row>
      <el-button type="primary" @click="toMatchUp" size="large">Match Up</el-button>
    </el-row>
  </div>
</template>

<style>
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
  .dota-data-list {
    text-align: left;
  }
</style>

<script>
  import Router from 'vue-router'
  export default {
    methods: {
      handleSelectionChange (selectData) {
        debugger
        this.$notify({
          title: 'Shhh',
          message: 'Just be patient...',
          duration: 6000
        })
      },
      toMatchUp (a, b, c) {
        const router = new Router()
        router.push('result')
        debugger
        console.log(123)
      }
    },
    data () {
      return {
        dotaData: [{
          id: '12987122',
          name: '新锅',
          kda: '1-10',
          level: '1',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333'
        }, {
          id: '12987123',
          name: '岐锅',
          kda: '2-10',
          level: '1',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333'
        }, {
          id: '12987125',
          name: '聪聪',
          kda: '10-10',
          level: '2',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333'
        }, {
          id: '12987126',
          name: '玉锅',
          kda: '10-5',
          level: '3',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333'
        }]
      }
    }
  }
</script>
