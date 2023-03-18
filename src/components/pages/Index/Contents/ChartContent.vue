<template>
  <div class="CC-outerbox">
    <div class="innerbox">
      <div class="header-box">
        <el-tabs v-model="activeName" type="card">
          <el-tab-pane label="性别" name="first">
            <div id="sex"></div>
          </el-tab-pane>
          <el-tab-pane label="年龄" name="second">
            <div id="age"></div>
          </el-tab-pane>
          <el-tab-pane label="地区" name="third">
            <div id="address"></div>
          </el-tab-pane>
        </el-tabs>
      </div>
      <div class=""></div>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";

export default {
  name: "ChartContent",
  data() {
    return {
      activeName: "first",
    };
  },

  mounted() {
    this.age();
    this.sex();
    this.address();
  },

  methods: {
    sex() {
      var sexDom = document.getElementById("sex");
      var sexChart = echarts.init(sexDom);
      var sexOption;

      sexOption = {
        tooltip: {
          trigger: "item",
        },
        legend: {
          top: "5%",
          left: "center",
        },
        series: [
          {
            name: "Sex From",
            type: "pie",
            radius: ["40%", "70%"],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: "#fff",
              borderWidth: 2,
            },
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "40",
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: 1200, name: "女" },
              { value: 1000, name: "男" },
            ],
          },
        ],
      };

      sexOption && sexChart.setOption(sexOption);
    },

    age() {
      var ageDom = document.getElementById("age");
      var ageChart = echarts.init(ageDom);
      var ageOption;

      ageOption = {
        tooltip: {
          trigger: "item",
        },
        legend: {
          top: "5%",
          left: "center",
        },
        series: [
          {
            name: "Age From",
            type: "pie",
            radius: ["40%", "70%"],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: "#fff",
              borderWidth: 2,
            },
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "40",
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: 1048, name: "95后" },
              { value: 735, name: "90后" },
              { value: 580, name: "00后" },
              { value: 484, name: "02后" },
              { value: 200, name: "85后" },
            ],
          },
        ],
      };

      ageOption && ageChart.setOption(ageOption);
    },

    address() {
      var addressDom = document.getElementById("address");
      var addressChart = echarts.init(addressDom);
      var addressOption;

      addressOption = {
        tooltip: {
          trigger: "item",
        },
        legend: {
          top: "5%",
          left: "center",
        },
        series: [
          {
            name: "Address From",
            type: "pie",
            radius: ["40%", "70%"],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: "#fff",
              borderWidth: 2,
            },
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "40",
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: 1048, name: "河北省" },
              { value: 735, name: "山西省" },
              { value: 580, name: "辽宁省" },
              { value: 1048, name: "吉林省" },
              { value: 1048, name: "黑龙江省" },
              { value: 1048, name: "江苏省" },
              { value: 735, name: "浙江省" },
              { value: 580, name: "安徽省" },
              { value: 1048, name: "福建省" },
              { value: 1048, name: "江西省" },
              { value: 1048, name: "山东省" },
              { value: 735, name: "河南省" },
              { value: 580, name: "湖北省" },
              { value: 1048, name: "湖南省" },
              { value: 1048, name: "广东省" },
              { value: 1048, name: "海南省" },
              { value: 735, name: "四川省" },
              { value: 580, name: "贵州省" },
              { value: 1048, name: "云南省" },
              { value: 1048, name: "陕西省" },
              { value: 1048, name: "甘肃省" },
              { value: 735, name: "青海省" },
              { value: 580, name: "台湾省" },
              { value: 1048, name: "北京市" },
              { value: 1048, name: "天津市" },
              { value: 1048, name: "上海市" },
              { value: 735, name: "重庆市" },
              { value: 580, name: "香港特别行政区" },
              { value: 484, name: "澳门特别行政区" },
              { value: 580, name: "广西壮族自治区" },
              { value: 484, name: "内蒙古自治区" },
              { value: 200, name: "宁夏回族自治区" },
              { value: 200, name: "新疆维吾尔自治区" },
              { value: 200, name: "西藏自治区" },
            ],
          },
        ],
      };

      addressOption && addressChart.setOption(addressOption);
    },
  },
};
</script>

<style scoped>
.CC-outerbox {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
}

.innerbox {
  width: 98%;
  height: 100%;
}

#age,
#sex,
#address {
  height: 400px;
  width: 840px;
}
</style>