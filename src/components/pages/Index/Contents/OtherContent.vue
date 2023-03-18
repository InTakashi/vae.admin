<template>
  <div class="OC-outerbox">
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
  name: "OtherContent",
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
          url: require("../../../Picture/Other/Renamecard.jpg"),
          name: "更名卡",
          price: "60松果",
        },
      ],
    };
  },
};
</script>

<style scoped>
.OC-outerbox {
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