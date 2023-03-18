<template>
  <div class="RTC-outerbox">
    <div class="table">
      <el-table :data="tableData" max-height="409px">
        <el-table-column prop="number" label="序号" width="80">
        </el-table-column>
        <el-table-column prop="tittle" label="标题" width="310">
        </el-table-column>
        <el-table-column prop="date" label="演出时间" width="150">
        </el-table-column>
        <el-table-column prop="address" label="演出地点/平台" width="210">
        </el-table-column>
        <el-table-column label="操作" width="100">
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
  name: "RecentTripContent",
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
          tittle: "南京演出 — — 森林音乐狂欢节",
          date: "2022-05-03 12:00",
          address: "江北新区扬子江公园（定山城市客厅）",
        },
        {
          number: 2,
          tittle: "温州演出 — — 楠溪江星巢秘境音乐节",
          date: "2022-04-17 12:00",
          address: "温州市楠溪江滩地音乐公园",
        },
        {
          number: 3,
          tittle: "海南演出 — — 国风音乐盛典之新元之夜",
          date: "2022-01-01 12:00",
          address: "海南陵水富力海洋世界",
        },
        {
          number: 4,
          tittle: "2021最美的夜跨年晚会",
          date: "2022-12-31 20:30",
          address: "哔哩哔哩",
        },
        {
          number: 5,
          tittle: "动感地带第十五届音乐盛典咪咕汇",
          date: "2021-12-25 19:30",
          address: "咪咕音乐直播间",
        },
        {
          number: 6,
          tittle: "江苏卫视奇妙之旅晚会",
          date: "2021-10-21 21:10",
          address: "江苏卫视、优酷等",
        },
        {
          number: 7,
          tittle: "深圳演出 — — 大鹏音乐嘉年华",
          date: "2021-10-17 14:00",
          address: "深圳·大鹏新区佳兆业国际乐园",
        },
        {
          number: 8,
          tittle: "B站夏日毕业歌会2021",
          date: "2021-6-20 20:00",
          address: "Bilibili",
        },
      ],
    };
  },
};
</script>

<style scoped>
.RTC-outerbox {
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