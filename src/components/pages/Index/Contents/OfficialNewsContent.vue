<template>
  <div class="ONC-outerbox">
    <div class="table">
      <el-table :data="tableData"  max-height="409px">
        <el-table-column prop="number" label="序号" width="100">
        </el-table-column>
        <el-table-column prop="url" label="封面" width="200">
          <template slot-scope="scope">
            <img :src="scope.row.url" height="100" />
          </template>
        </el-table-column>
        <el-table-column prop="tittle" label="标题" width="425">
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
  name: "OfficialNewsContent",
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
          url: require("../../../Picture/OfficialNews/newsone.jpg"),
          tittle: "横扫多个主流音乐榜单 许嵩《呼吸之野》“年度专辑”实至名归",
        },
        {
          number: 2,
          url: require("../../../Picture/OfficialNews/newstwo.jpg"),
          tittle: "新年福利超多惊喜 虎年好礼送不停",
        },
        {
          number: 3,
          url: require("../../../Picture/OfficialNews/newsthree.png"),
          tittle: "许嵩2022首支单曲「留香」今日上线",
        },
        {
          number: 4,
          url: require("../../../Picture/OfficialNews/newsfour.jpeg"),
          tittle: "许嵩《呼吸之野》获得网易云音乐2021年度最热专辑",
        },
        {
          number: 5,
          url: require("../../../Picture/OfficialNews/newsfive.jpeg"),
          tittle:
            "许嵩献唱第十五届音乐盛典咪咕汇荣获年度创作歌手和年度十大金曲",
        },
        {
          number: 6,
          url: require("../../../Picture/OfficialNews/newssix.jpg"),
          tittle: "许嵩献唱江苏卫视奇妙之旅晚会 仙剑经典联唱尽显侠骨柔情",
        },
        {
          number: 7,
          url: require("../../../Picture/OfficialNews/newsseven.jpeg"),
          tittle: "《环球人物》专访",
        },
        {
          number: 8,
          url: require("../../../Picture/OfficialNews/newseight.jpg"),
          tittle: "许嵩压轴海潮音乐嘉年华 六首连唱点燃全场",
        },
        {
          number: 9,
          url: require("../../../Picture/OfficialNews/newsnine.jpg"),
          tittle: "许嵩献唱建党100周年青春歌会 一曲《燕归巢》致敬百年征程",
        },
      ],
    };
  },
};
</script>

<style scoped>
.ONC-outerbox {
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