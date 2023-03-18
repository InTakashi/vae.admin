<template>
  <div class="AC-outerbox">
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
  name: "AlbumContent",
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
          url: require("../../../Picture/Albums/first.png"),
          name: "自定义",
          price: "500松果",
        },
        {
          number: 2,
          url: require("../../../Picture/Albums/second.png"),
          name: "寻雾启示",
          price: "500松果",
        },
        {
          number: 3,
          url: require("../../../Picture/Albums/third.png"),
          name: "苏格拉没有底",
          price: "600松果",
        },
        {
          number: 4,
          url: require("../../../Picture/Albums/fourth.png"),
          name: "梦游计",
          price: "500松果",
        },
        {
          number: 5,
          url: require("../../../Picture/Albums/fifth.png"),
          name: "不如吃茶去",
          price: "540松果",
        },
        {
          number: 6,
          url: require("../../../Picture/Albums/sixth.png"),
          name: "青年晚报",
          price: "540松果",
        },
        {
          number: 7,
          url: require("../../../Picture/Albums/seventh.png"),
          name: "寻宝游戏",
          price: "600松果",
        },
        {
          number: 8,
          url: require("../../../Picture/Albums/eighth.png"),
          name: "呼吸之野",
          price: "600松果",
        },
      ],
    };
  },
};
</script>

<style scoped>
.AC-outerbox {
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