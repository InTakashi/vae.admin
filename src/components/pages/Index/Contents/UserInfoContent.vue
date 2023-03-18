<template>
  <div class="UIC-outerbox">
    <div class="table">
      <el-table :data="tableData" max-height="409px">
        <el-table-column prop="number" label="序号" width="80">
        </el-table-column>
        <el-table-column prop="name" label="昵称" width="130">
        </el-table-column>
        <el-table-column prop="account" label="账号" width="80">
        </el-table-column>
        <el-table-column prop="sex" label="性别" width="60"> </el-table-column>
        <el-table-column prop="phone" label="手机号" width="130">
        </el-table-column>
        <el-table-column prop="birth" label="生日" width="125">
        </el-table-column>
        <el-table-column prop="address" label="地区" width="125">
        </el-table-column>
        <el-table-column label="操作" width="120">
          <template slot-scope="scope">
            <el-button type="text" size="small"> 修改 </el-button>
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
  name: "UserInfoContent",
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
          name: "许嵩",
          account:"111111",
          sex: "男",
          phone: "12345678911",
          birth: "1986-5-14",
          address: "安徽合肥",
        },
        {
          number: 2,
          name: "user1",
          account:"357658",
          sex: "男",
          phone: "15723592523",
          birth: "2000-06-01",
          address: "广东广州",
        },
        {
          number: 3,
          name: "user2",
          account:"657435",
          sex: "女",
          phone: "13356346276",
          birth: "1998-11-02",
          address: "上海",
        },
        {
          number: 4,
          name: "user3",
          account:"658793",
          sex: "男",
          phone: "13353235678",
          birth: "1998-06-01",
          address: "浙江杭州",
        },
        {
          number: 5,
          name: "user4",
          account:"732522",
          sex: "女",
          phone: "15364658234",
          birth: "1995-07-02",
          address: "云南昆明",
        },
        {
          number: 6,
          name: "user5",
          account:"825462",
          sex: "男",
          phone: "19332525767",
          birth: "1986-5-14",
          address: "四川成都",
        },
        {
          number: 7,
          name: "user6",
          account:"547323",
          sex: "女",
          phone: "18769356469",
          birth: "1995-06-01",
          address: "贵州贵阳",
        },
        {
          number: 8,
          name: "user7",
          account:"756325",
          sex: "男",
          phone: "13568649842",
          birth: "1995-08-10",
          address: "湖南长沙",
        },
        {
          number: 9,
          name: "user8",
          account:"275357",
          sex: "男",
          phone: "18835325762",
          birth: "1995-02-15",
          address: "湖北武汉",
        },
        {
          number: 10,
          name: "user9",
          account:"153247",
          sex: "女",
          phone: "19985367634",
          birth: "1996-06-01",
          address: "江苏南京",
        },
        {
          number: 11,
          name: "user10",
          account:"315267",
          sex: "男",
          phone: "15679358675",
          birth: "1996-03-18",
          address: "河南郑州",
        },
        {
          number: 12,
          name: "user11",
          account:"187523",
          sex: "女",
          phone: "15689312567",
          birth: "1996-05-01",
          address: "陕西西安",
        },
        {
          number: 13,
          name: "user12",
          account:"124562",
          sex: "男",
          phone: "18735659753",
          birth: "1996-07-20",
          address: "山东济南",
        },
        {
          number: 14,
          name: "user13",
          account:"185256",
          sex: "女",
          phone: "15634259746",
          birth: "1997-06-01",
          address: "福建福州",
        },
        {
          number: 15,
          name: "user14",
          account:"163532",
          sex: "女",
          phone: "1763595632",
          birth: "1997-05-15",
          address: "广西南宁",
        },
        {
          number: 16,
          name: "user15",
          account:"834511",
          sex: "男",
          phone: "15693234521",
          birth: "1997-08-19",
          address: "甘肃兰州",
        },
        {
          number: 17,
          name: "user16",
          account:"712353",
          sex: "女",
          phone: "13843629743",
          birth: "1998-10-01",
          address: "宁夏银川",
        },
        {
          number: 18,
          name: "user17",
          account:"923411",
          sex: "男",
          phone: "18765864679",
          birth: "1999-11-18",
          address: "河北石家庄",
        },
        {
          number: 19,
          name: "user18",
          account:"121645",
          sex: "女",
          phone: "17956834631",
          birth: "1999-12-10",
          address: "广东深圳",
        },
        {
          number: 20,
          name: "user19",
          account:"714127",
          sex: "男",
          phone: "15798903478",
          birth: "1998-05-25",
          address: "江西南昌",
        },
        {
          number: 21,
          name: "user20",
          account:"723666",
          sex: "男",
          phone: "13178675949",
          birth: "2000-08-17",
          address: "江西赣州",
        },
      ],
    };
  },
};
</script>

<style scoped>
.UIC-outerbox {
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