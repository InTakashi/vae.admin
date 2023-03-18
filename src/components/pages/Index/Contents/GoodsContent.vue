<template>
  <div class="GC-outerbox">
    <div class="table">
      <el-table :data="tableData"  max-height="409px">
        <el-table-column prop="number" label="序号" width="110">
        </el-table-column>
        <el-table-column prop="url" label="封面" width="280">
          <template slot-scope="scope">
            <img :src="scope.row.url" height="100" />
          </template>
        </el-table-column>
        <el-table-column prop="name" label="名称" width="170">
        </el-table-column>
        <el-table-column prop="price" label="价格" width="170">
        </el-table-column>
        <el-table-column label="操作" width="120">
          <template slot-scope="scope">
            <el-button
              @click.native.prevent="deleteRow(scope.$index, tableData)"
              type="text"
              size="small"
            >
              删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsContent",
  methods: {
    deleteRow(index, rows) {
      rows.splice(index, 1);
    },
  },
  data() {
    return {
      tableData: [
        {
          number: 1,
          url: require("../../../Picture/Goods/clothes12.jpg"),
          name: "十二周年会服",
          price: "600松果",
        },
        {
          number: 2,
          url: require("../../../Picture/Goods/clothes13.jpg"),
          name: "十三周年会服",
          price: "600松果",
        },
        {
          number: 3,
          url: require("../../../Picture/Goods/clothes14.jpg"),
          name: "十四周年会服",
          price: "600松果",
        },
        {
          number: 4,
          url: require("../../../Picture/Goods/clothes15.jpg"),
          name: "十五周年会服",
          price: "600松果",
        },
        {
          number: 5,
          url: require("../../../Picture/Goods/hat.jpg"),
          name: "纪念会帽",
          price: "400松果",
        },
        {
          number: 6,
          url: require("../../../Picture/Goods/Sealight.jpg"),
          name: "海上灵光",
          price: "500松果",
        },
        {
          number: 7,
          url: require("../../../Picture/Goods/toy.jpg"),
          name: "嵩鼠公仔",
          price: "300松果",
        },
      ],
    };
  },
};
</script>

<style scoped>
.GC-outerbox {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
}

.table {
  width: 98%;
  height: 100%;
}
</style>