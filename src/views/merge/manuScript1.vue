<template>
  <div>
    <el-table :data="tableData" height="400" border style="width: 100%">
      <el-table-column prop="industry" label="industry" width="280" header-align="center" align="center">
      </el-table-column>
      <el-table-column header-align="center" align="center" prop="date0" :label="label[0]"> </el-table-column>
      <el-table-column header-align="center" align="center" prop="date1" :label="label[1]"> </el-table-column>
      <el-table-column header-align="center" align="center" prop="date2" :label="label[2]"> </el-table-column>
      <el-table-column header-align="center" align="center" prop="date3" :label="label[3]"> </el-table-column>
      <el-table-column header-align="center" align="center" prop="date4" :label="label[4]"> </el-table-column>
      <el-table-column header-align="center" align="center" prop="date5" :label="label[5]"> </el-table-column>
      <el-table-column header-align="center" align="center" prop="date6" :label="label[6]"> </el-table-column>
      <el-table-column header-align="center" align="center" prop="date7" :label="label[7]"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  data() {
    return {
      label: [
        "2022/11/11",
        "2022/3/3",
        "2022/11/11",
        "2022/11/11",
        "2022/11/11",
        "2022/11/11",
        "2022/11/11",
        "2022/22/22",
      ],
      tableData: [
        {
          industry: "The electronic commerce",
          date0: "1231",
          date1: "1518",
          date2: "1518",
          date3: "1518",
          date4: "1518",
          date5: "1518",
          date6: "1518",
          date7: "1518",
        },
        {
          industry: "The electronic commerce",
          date0: "1231",
          date1: "1518",
          date2: "1518",
          date3: "1518",
          date4: "1518",
          date5: "1518",
          date6: "1518",
          date7: "1518",
        },
        {
          industry: "The electronic commerce",
          date0: "1231",
          date1: "1518",
          date2: "1518",
          date3: "1518",
          date4: "1518",
          date5: "1518",
          date6: "1518",
          date7: "1518",
        },
        {
          industry: "The electronic commerce",
          date0: "1231",
          date1: "1518",
          date2: "1518",
          date3: "1518",
          date4: "1518",
          date5: "1518",
          date6: "1518",
          date7: "1518",
        },
        {
          industry: "The electronic commerce",
          date0: "1231",
          date1: "1518",
          date2: "1518",
          date3: "1518",
          date4: "1518",
          date5: "1518",
          date6: "1518",
          date7: "1518",
        },
        {
          industry: "The electronic commerce",
          date0: "1231",
          date1: "1518",
          date2: "1518",
          date3: "1518",
          date4: "1518",
          date5: "1518",
          date6: "1518",
          date7: "1518",
        },
        {
          industry: "The electronic commerce",
          date0: "1231",
          date1: "1518",
          date2: "1518",
          date3: "1518",
          date4: "1518",
          date5: "1518",
          date6: "1518",
          date7: "1518",
        },
        {
          industry: "The electronic commerce",
          date0: "1231",
          date1: "1518",
          date2: "1518",
          date3: "1518",
          date4: "1518",
          date5: "1518",
          date6: "1518",
          date7: "1518",
        },
        {
          industry: "The electronic commerce",
          date0: "1231",
          date1: "1518",
          date2: "1518",
          date3: "1518",
          date4: "1518",
          date5: "1518",
          date6: "1518",
          date7: "1518",
        },
        {
          industry: "The electronic commerce",
          date0: "1231",
          date1: "1518",
          date2: "1518",
          date3: "1518",
          date4: "1518",
          date5: "1518",
          date6: "1518",
          date7: "1518",
        },
      ],
    };
  },
  mounted() {
  },
  methods: {
  },
};
</script>

<style scoped>
</style>