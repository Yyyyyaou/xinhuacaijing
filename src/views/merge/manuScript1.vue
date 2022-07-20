<template>
  <div>
    <el-table :data="tableData" height="400" border style="width: 100%">
      <el-table-column
        prop="national"
        label="national"
        width="180"
        header-align="center"
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="industry"
        label="Industry dynamism"
        width="180"
        header-align="center"
        align="center"
      >
      </el-table-column>
      <el-table-column
        header-align="center"
        align="center"
        prop="date0"
        :label="label[0]"
      >
      </el-table-column>
      <el-table-column
        header-align="center"
        align="center"
        prop="date1"
        :label="label[1]"
      >
      </el-table-column>
      <el-table-column
        header-align="center"
        align="center"
        prop="date2"
        :label="label[2]"
      >
      </el-table-column>
      <el-table-column
        header-align="center"
        align="center"
        prop="date3"
        :label="label[3]"
      >
      </el-table-column>
      <el-table-column
        header-align="center"
        align="center"
        prop="date4"
        :label="label[4]"
      >
      </el-table-column>
      <el-table-column
        header-align="center"
        align="center"
        prop="date5"
        :label="label[5]"
      >
      </el-table-column>
      <el-table-column
        header-align="center"
        align="center"
        prop="date6"
        :label="label[6]"
      >
      </el-table-column>
      <el-table-column
        header-align="center"
        align="center"
        prop="date7"
        :label="label[7]"
      >
      </el-table-column>
      <el-table-column
        header-align="center"
        align="center"
        prop="date8"
        :label="label[8]"
      >
      </el-table-column>
      <el-table-column
        header-align="center"
        align="center"
        prop="date9"
        :label="label[9]"
      >
      </el-table-column>
      <el-table-column
        header-align="center"
        align="center"
        prop="date10"
        :label="label[10]"
      >
      </el-table-column>
      <el-table-column
        header-align="center"
        align="center"
        prop="date11"
        :label="label[11]"
      >
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  data() {
    return {
      label: [
        "Industry 1",
        "Industry 2",
        "Industry 3",
        "Industry 4",
        "Industry 5",
        "Industry 6",
        "Industry 7",
        "Industry 8",
        "Industry 9",
        "Industry 10",
        "Industry 11",
        "Industry 12",
      ],
      tableData: [
        {
          national: "ch",
          industry: "2323",
          date0: "34982/10%",
          date1: "34982/10%",
          date2: "34982/10%",
          date3: "34982/10%",
          date4: "34982/10%",
          date5: "34982/10%",
          date6: "34982/10%",
          date7: "34982/10%",
          date8: "34982/10%",
          date9: "34982/10%",
          date10: "34982/10%",
          date11: "34982/10%",
        },
        {
          national: "zghhh",
          industry: "12312421",
          date0: "3/10%",
          date1: "34982/10%",
          date2: "34982/10%",
          date3: "34982/10%",
          date4: "34982/10%",
          date5: "34982/10%",
          date6: "34982/10%",
          date7: "34982/10%",
          date8: "34982/10%",
          date9: "34982/10%",
          date10: "34982/10%",
          date11: "34982/10%",
        },
        {
          national: "zg",
          industry: "2323",
          date0: "34982/10%",
          date1: "34982/10%",
          date2: "34982/10%",
          date3: "34982/10%",
          date4: "34982/10%",
          date5: "34982/10%",
          date6: "2/10%",
          date7: "34982/10%",
          date8: "34982/10%",
          date9: "34982/10%",
          date10: "34982/10%",
          date11: "34982/10%",
        },
        {
          national: "zg",
          industry: "2323",
          date0: "34982/10%",
          date1: "34982/10%",
          date2: "34982/10%",
          date3: "382/10%",
          date4: "34982/10%",
          date5: "34982/10%",
          date6: "34982/10%",
          date7: "34982/10%",
          date8: "34982/10%",
          date9: "34982/10%",
          date10: "34982/10%",
          date11: "34982/10%",
        },
        {
          national: "zg",
          industry: "2323",
          date0: "34982/10%",
          date1: "34982/10%",
          date2: "34982/10%",
          date3: "34982/10%",
          date4: "34982/10%",
          date5: "34982/10%",
          date6: "34982/10%",
          date7: "34982/10%",
          date8: "34982/10%",
          date9: "34982/10%",
          date10: "34982/10%",
          date11: "34982/10%",
        },
        {
          national: "zg",
          industry: "2323",
          date0: "34982/10%",
          date1: "34982/10%",
          date2: "34982/10%",
          date3: "34982/10%",
          date4: "34982/10%",
          date5: "34982/10%",
          date6: "34982/10%",
          date7: "34982/10%",
          date8: "34982/10%",
          date9: "34982/10%",
          date10: "34982/10%",
          date11: "34982/10%",
        },
        {
          national: "zg",
          industry: "2323",
          date0: "34982/10%",
          date1: "34982/10%",
          date2: "34982/10%",
          date3: "34982/10%",
          date4: "34982/10%",
          date5: "34982/10%",
          date6: "34982/10%",
          date7: "34982/10%",
          date8: "34982/10%",
          date9: "34982/10%",
          date10: "34982/10%",
          date11: "34982/10%",
        },
        {
          national: "zg",
          industry: "2323",
          date0: "34982/10%",
          date1: "34982/10%",
          date2: "34982/10%",
          date3: "34982/10%",
          date4: "34982/10%",
          date5: "34982/10%",
          date6: "34982/10%",
          date7: "34982/10%",
          date8: "34982/10%",
          date9: "34982/10%",
          date10: "34982/10%",
          date11: "34982/10%",
        },
        {
          national: "zg",
          industry: "2323",
          date0: "34982/10%",
          date1: "34982/10%",
          date2: "34982/10%",
          date3: "34982/10%",
          date4: "34982/10%",
          date5: "34982/10%",
          date6: "34982/10%",
          date7: "34982/10%",
          date8: "34982/10%",
          date9: "34982/10%",
          date10: "34982/10%",
          date11: "34982/10%",
        },
        {
          national: "zg",
          industry: "2323",
          date0: "34982/10%",
          date1: "34982/10%",
          date2: "34982/10%",
          date3: "34982/10%",
          date4: "34982/10%",
          date5: "34982/10%",
          date6: "34982/10%",
          date7: "34982/10%",
          date8: "34982/10%",
          date9: "34982/10%",
          date10: "34982/10%",
          date11: "34982/10%",
        },
      ],
    };
  },
  mounted() {},
  methods: {},
};
</script>

<style scoped>
</style>