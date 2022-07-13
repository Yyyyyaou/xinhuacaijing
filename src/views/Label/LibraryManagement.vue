<template>
  <div class="tree">
    <div class="treeL">
      <!-- 增删改 -->
      <div class="btn">
        <el-button
          size="mini"
          @click="() => append()"
          icon="el-icon-plus"
          circle
        ></el-button>
        <el-button
          size="mini"
          @click="() => edit()"
          icon="el-icon-edit"
          circle
        ></el-button>
        <el-button size="mini" icon="el-icon-delete" circle></el-button>
      </div>
      <!-- 搜索 -->
      <div style="margin-top: 15px; width: 90%">
        <el-autocomplete
          style="width: 100%"
          v-model="state"
          :fetch-suggestions="querySearchAsync"
          placeholder="请输入内容"
          @select="handleSelect"
        ></el-autocomplete>
      </div>
      <!-- 下拉框 -->
      <el-select
        style="
          width: 90%;
          margin-left: -28px;
          margin-top: 10px;
          margin-bottom: 20px;
        "
        v-model="value"
        clearable
        placeholder="请选择"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <el-tree
        style="width: 80%; font-family: 'Microsoft YaHei'"
        :data="data"
        show-checkbox
        default-expand-all
        node-key="id"
        ref="tree"
        highlight-current:true
        :props="defaultProps"
        @check-change="handleCheckChange"
        @node-click="handleNodeClick"
      >
      </el-tree>
      <el-dialog
        :title="titleMap[dialogStatus]"
        :visible.sync="dialogFormVisible"
      >
        <el-form :model="form">
          <el-form-item label="标签名称" :label-width="formLabelWidth">
            <el-input v-model="form.label" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogFormVisible = false"
            >确 定</el-button
          >
        </div>
      </el-dialog>
    </div>
    <div class="treeR">
      <div class="headRL">
        <div class="file">
          <el-upload
            class="upload-demo"
            ref="upload"
            :multiple="false"
            :show-file-list="false"
            action="void"
            :http-request="customUpload"
            :before-upload="beforeUploadFile"
            :auto-upload="true"
          >
            <el-button type="primary" slot="trigger">导入Excel</el-button>
            <!-- slot="trigger" 为触发文件选择框的内容 -->
          </el-upload>
          <!--
            multiple：是否支持多文件上传
            show-file-list：是否显示已上传文件列表
            action：为上传的地址，必选参数，因为不想固定，此处可以写void
            http-request：可以自定义上传的实现
            before-upload：上传前的钩子函数，此处判断文件类型 
            auto-upload：是否在选取文件后立即进行上传
          -->
        </div>
        <!-- <div class=""> -->
        <div class="block">
          <el-date-picker
            v-model="value1"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          >
          </el-date-picker>
          <!-- </div> -->
        </div>
        <el-input
          placeholder="请输入内容"
          v-model="input3"
          class="input-with-select"
        >
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </div>
      <el-table
        :data="List"
        default-expand-all
        border
        :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
        :header-cell-style="{background:'#577ABC','font-size':'14px','font-weight':'550',color:'#FFFFFF',height:'35px'}"
      >
        style="width: 100%;overflow:hidden;border-radius: 10px;">
        <el-table-column
          label="数"
          align="center"
          type="index"
          width="100"
          borderTopLeftRadius="10"
        ></el-table-column>
        <el-table-column
          prop="title"
          align="center"
          label="标题"
          width="180"
        ></el-table-column>
        <el-table-column
          prop="cln"
          align="center"
          label="总结"
          width="180"
        ></el-table-column>
        <el-table-column
          prop="src"
          align="center"
          label="来源"
          width="180"
        ></el-table-column>
        <el-table-column
          prop="time"
          align="center"
          label="发布时间"
          width="180"
        ></el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <el-switch
              class="main-switch"
              v-model="scope.row.state"
            ></el-switch>
          </template>
        </el-table-column>
      </el-table>
      <!-- {{List}} -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 时间范围
      value1: "",
      // 右侧搜索
      input3: "",
      // 左侧搜索
      restaurants: [],
      state: "",
      timeout: null,
      // 弹窗
      dialogFormVisible: false,
      form: {
        label: "",
      },
      titleMap: {
        addEquipment: "新增",
        editEquipment: "编辑",
      },
      dialogStatus: "",
      formLabelWidth: "120px",
      // 弹窗
      data: [
        {
          id: 1,
          label: "标签一级",
          title: "11111111111111111",
          cln: "2022",
          src: "百度新闻",
          time: "2022-03-25 08:04:00",
          state: true,
          children: [
            {
              id: 4,
              label: "标签二级",
              title: "11111111111111111",
              cln: "2022",
              src: "百度新闻",
              time: "2022-03-25 08:04:00",
              state: true,
              children: [
                {
                  id: 9,
                  label: "标签三级",
                  label: "标签二级",
                  title: "11111111111111111",
                  cln: "2022",
                  src: "百度新闻",
                  time: "2022-03-25 08:04:00",
                  state: true,
                },
                {
                  id: 10,
                  label: "标签三级",
                  label: "标签二级",
                  title: "11111111111111111",
                  cln: "2022",
                  src: "百度新闻",
                  time: "2022-03-25 08:04:00",
                  state: true,
                },
              ],
            },
          ],
        },
        {
          id: 2,
          label: "标签一级",
          label: "标签二级",
          title: "11111111111111111",
          cln: "2022",
          src: "百度新闻",
          time: "2022-03-25 08:04:00",
          state: true,
          children: [
            {
              id: 5,
              label: "标签二级",
              label: "标签二级",
              title: "11111111111111111",
              cln: "2022",
              src: "百度新闻",
              time: "2022-03-25 08:04:00",
              state: true,
            },
            {
              id: 6,
              label: "标签二级",
              label: "标签二级",
              title: "11111111111111111",
              cln: "2022",
              src: "百度新闻",
              time: "2022-03-25 08:04:00",
              state: true,
            },
          ],
        },
        {
          id: 3,
          label: "标签一级",
          title: "11111111111111111",
          cln: "2022",
          src: "百度新闻",
          time: "2022-03-25 08:04:00",
          state: true,
          children: [
            {
              id: 7,
              label: "标签二级",
              label: "标签二级",
              title: "11111111111111111",
              cln: "2022",
              src: "百度新闻",
              time: "2022-03-25 08:04:00",
              state: true,
            },
            {
              id: 8,
              label: "标签二级",
              label: "标签二级",
              title: "11111111111111111",
              cln: "2022",
              src: "百度新闻",
              time: "2022-03-25 08:04:00",
              state: true,
              name: "",
            },
          ],
        },
      ],
      defaultProps: {
        children: "children",
        label: "label",
      },
      // 点击左侧对应的数据
      List: [],
      // 下拉框
      options: [
        {
          value: "选项1",
          label: "正面标签",
        },
        {
          value: "选项2",
          label: "负面标签",
        },
        {
          value: "选项3",
          label: "蚵仔煎",
        },
        {
          value: "选项4",
          label: "龙须面",
        },
        {
          value: "选项5",
          label: "北京烤鸭",
        },
      ],
      value: "",
    };
  },
  methods: {
    handleCheckChange() {
      // this.timer = setInterval(() => {
      //   this.List = this.$refs.tree.getCheckedNodes();
      // }, 500);
      // this.List = this.$refs.tree.getCheckedNodes();
      // console.log(this.List);
    },
    handleNodeClick(data) {
      this.List.push(data);
      console.log(data, "1111111122222");
    },
    // 新增
    append() {
      this.dialogFormVisible = true;
      this.dialogStatus = "addEquipment";
      // if (this.$refs.tree.getCheckedNodes() == "") {
      //   this.$confirm("请选择您要操作的标签?", "提示", {
      //     confirmButtonText: "确定",
      //     cancelButtonText: "取消",
      //     type: "warning",
      //   })
      //     .then(() => {
      //       this.$message({
      //         type: "success",
      //         message: "删除成功!",
      //         delete: row.splice(index, 1), //splice 删除对象是数unfuntion组   如果是对象会出现错误  row.solice not is
      //       });
      //     })
      //     .catch(() => {
      //       this.$message({
      //         type: "info",
      //         message: "已取消删除",
      //       });
      //     });
      // } else {
      //   this.dialogFormVisible = true;
      //   this.dialogStatus = "addEquipment";
      // }
    },
    // 编辑
    edit() {
      this.dialogFormVisible = true;
      this.dialogStatus = "editEquipment";
      // if (this.$refs.tree.getCheckedNodes() == "") {
      //   this.$confirm("请选择您要操作的标签?", "提示", {
      //     confirmButtonText: "确定",
      //     cancelButtonText: "取消",
      //     type: "warning",
      //   })
      //     .then(() => {
      //       this.$message({
      //         type: "success",
      //         message: "确定!",
      //       });
      //     })
      //     .catch(() => {
      //       this.$message({
      //         type: "info",
      //         message: "取消",
      //       });
      //     });
      // } else {
      //   this.dialogFormVisible = true;
      //   this.dialogStatus = "editEquipment";
      // }
    },
    // 左侧搜索
    loadAll() {
      return [
        { value: "三全鲜食（北新泾店）", address: "长宁区新渔路144号" },
        {
          value: "Hot honey 首尔炸鸡（仙霞路）",
          address: "上海市长宁区淞虹路661号",
        },
        {
          value: "新旺角茶餐厅",
          address: "上海市普陀区真北路988号创邑金沙谷6号楼113",
        },
        { value: "泷千家(天山西路店)", address: "天山西路438号" },
        {
          value: "胖仙女纸杯蛋糕（上海凌空店）",
          address: "上海市长宁区金钟路968号1幢18号楼一层商铺18-101",
        },
        { value: "贡茶", address: "上海市长宁区金钟路633号" },
        {
          value: "豪大大香鸡排超级奶爸",
          address: "上海市嘉定区曹安公路曹安路1685号",
        },
        {
          value: "茶芝兰（奶茶，手抓饼）",
          address: "上海市普陀区同普路1435号",
        },
        { value: "十二泷町", address: "上海市北翟路1444弄81号B幢-107" },
        { value: "星移浓缩咖啡", address: "上海市嘉定区新郁路817号" },
        { value: "阿姨奶茶/豪大大", address: "嘉定区曹安路1611号" },
        { value: "新麦甜四季甜品炸鸡", address: "嘉定区曹安公路2383弄55号" },
        {
          value: "Monica摩托主题咖啡店",
          address: "嘉定区江桥镇曹安公路2409号1F，2383弄62号1F",
        },
        {
          value: "浮生若茶（凌空soho店）",
          address: "上海长宁区金钟路968号9号楼地下一层",
        },
        { value: "NONO JUICE  鲜榨果汁", address: "上海市长宁区天山西路119号" },
        { value: "CoCo都可(北新泾店）", address: "上海市长宁区仙霞西路" },
        {
          value: "快乐柠檬（神州智慧店）",
          address: "上海市长宁区天山西路567号1层R117号店铺",
        },
        {
          value: "Merci Paul cafe",
          address: "上海市普陀区光复西路丹巴路28弄6号楼819",
        },
        {
          value: "猫山王（西郊百联店）",
          address: "上海市长宁区仙霞西路88号第一层G05-F01-1-306",
        },
        { value: "枪会山", address: "上海市普陀区棕榈路" },
        { value: "纵食", address: "元丰天山花园(东门) 双流路267号" },
        { value: "钱记", address: "上海市长宁区天山西路" },
        { value: "壹杯加", address: "上海市长宁区通协路" },
        {
          value: "唦哇嘀咖",
          address: "上海市长宁区新泾镇金钟路999号2幢（B幢）第01层第1-02A单元",
        },
        { value: "爱茜茜里(西郊百联)", address: "长宁区仙霞西路88号1305室" },
        {
          value: "爱茜茜里(近铁广场)",
          address:
            "上海市普陀区真北路818号近铁城市广场北区地下二楼N-B2-O2-C商铺",
        },
        {
          value: "鲜果榨汁（金沙江路和美广店）",
          address: "普陀区金沙江路2239号金沙和美广场B1-10-6",
        },
        {
          value: "开心丽果（缤谷店）",
          address: "上海市长宁区威宁路天山路341号",
        },
        { value: "超级鸡车（丰庄路店）", address: "上海市嘉定区丰庄路240号" },
        { value: "妙生活果园（北新泾店）", address: "长宁区新渔路144号" },
        { value: "香宜度麻辣香锅", address: "长宁区淞虹路148号" },
        {
          value: "凡仔汉堡（老真北路店）",
          address: "上海市普陀区老真北路160号",
        },
        { value: "港式小铺", address: "上海市长宁区金钟路968号15楼15-105室" },
        { value: "蜀香源麻辣香锅（剑河路店）", address: "剑河路443-1" },
        { value: "北京饺子馆", address: "长宁区北新泾街道天山西路490-1号" },
        {
          value: "饭典*新简餐（凌空SOHO店）",
          address: "上海市长宁区金钟路968号9号楼地下一层9-83室",
        },
        {
          value: "焦耳·川式快餐（金钟路店）",
          address: "上海市金钟路633号地下一层甲部",
        },
        { value: "动力鸡车", address: "长宁区仙霞西路299弄3号101B" },
        { value: "浏阳蒸菜", address: "天山西路430号" },
        { value: "四海游龙（天山西路店）", address: "上海市长宁区天山西路" },
        {
          value: "樱花食堂（凌空店）",
          address: "上海市长宁区金钟路968号15楼15-105室",
        },
        { value: "壹分米客家传统调制米粉(天山店)", address: "天山西路428号" },
        {
          value: "福荣祥烧腊（平溪路店）",
          address: "上海市长宁区协和路福泉路255弄57-73号",
        },
        {
          value: "速记黄焖鸡米饭",
          address: "上海市长宁区北新泾街道金钟路180号1层01号摊位",
        },
        { value: "红辣椒麻辣烫", address: "上海市长宁区天山西路492号" },
        {
          value: "(小杨生煎)西郊百联餐厅",
          address: "长宁区仙霞西路88号百联2楼",
        },
        { value: "阳阳麻辣烫", address: "天山西路389号" },
        {
          value: "南拳妈妈龙虾盖浇饭",
          address: "普陀区金沙江路1699号鑫乐惠美食广场A13",
        },
      ];
    },
    querySearchAsync(queryString, cb) {
      var restaurants = this.restaurants;
      var results = queryString
        ? restaurants.filter(this.createStateFilter(queryString))
        : restaurants;

      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        cb(results);
      }, 3000 * Math.random());
    },
    createStateFilter(queryString) {
      return (state) => {
        return (
          state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
        );
      };
    },
    handleSelect(item) {
      console.log(item);
    },
    // 上传文件之前的钩子, 参数为上传的文件,若返回 false，则停止上传
    beforeUploadFile(file) {
      let extension = file.name.substring(file.name.lastIndexOf(".") + 1);
      if (extension !== "xlsx") {
        alert("文件格式不正确");
        return false;
      }
    },
    //上传文件
    customUpload(file) {
      let FormDatas = new FormData();
      FormDatas.append("file", file.file);
      // this.axios({
      //   url: "/api/teacher/importStudentInfoWithExcel",
      //   method: "post",
      //   data: FormDatas,
      // }).then((res) => {
      //   if (res.data.code == 200) {
      //     console.log(res);
      //   } else {
      //     this.$message.error("文件上传失败!");
      //   }
      // });
    },
  },
  beforeDestroy: function () {
    clearInterval(this.timer);
    this.timer = null;
  },
  mounted() {
    this.restaurants = this.loadAll();
  },
};
</script>

<style scoped>
.tree {
  height: calc(100vh - 120px);
  display: flex;
  justify-content: space-between;
}
.treeL {
  max-height: 100%;
  width: 22%;
  overflow-y: scroll;
}
.btn {
  display: flex;
  justify-content: flex-start;
  margin-bottom: 20px;
}
.treeR {
  width: 74%;
}
.headRL {
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  margin-bottom: 25px;
}
.block {
  width: 40%;
}
.input-with-select {
  width: 35%;
}
.el-table--border{
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
</style>