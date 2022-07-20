<template>
  <div style="height: 671px; display: flex">
    <div class="mapLeft">
      <div class="targeta">
        <span class="seatar"
          >Dynamic monitoring of global public opinion of Chinese enterprises
          and industries</span
        >
        <div class="elDownload"><i class="el-icon-download"></i></div>
      </div>
      <div
        id="mapDiv"
        style="
          height: 590px;
          margin: 20px 30px 0;
          position: relative;
        "
      >
        <div class="mapTop">
          <div
            class="mapTopFir"
            :class="{ IndusorEnter: IndusorEnter == 'Indus' }"
            @click="IndusorEnter = 'Indus'"
          >
            Industries
          </div>
          <div
            class="mapTopSec"
            :class="{ IndusorEnter: IndusorEnter == 'Enter' }"
            @click="IndusorEnter = 'Enter'"
          >
            Enterprises
          </div>
          <span
            >Dynamic monitoring of public opinion of Chinese enterprises and
            their industries in 200 countries around the world, default display
            of public opinion of Chinese enterprises in the last 7 days, time
            can be adjusted in the screening function.</span
          >
        </div>
        <div class="mapBottom">
          <div class="mapBottomText">Heat legend</div>
          <ul>
            <li class="mapBottomFir"></li>
            <li class="mapBottomSec"></li>
            <li class="mapBottomThir"></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="focusRight">
      <div class="targeta">
        <span class="seatar">Focus</span>
        <div class="btnCustom" @click="dialogFormVisible = true">
          <img src="../../assets/img/custom.png" alt="" /><span>Custom</span>
        </div>
      </div>
      <ul class="focusDetails">
        <li>
          <div class="focustitle">
            Jingdong big news! 50 A shares are newly included, and KEChuang
            shares are in the "shopping cart" in batches.
          </div>
          <ul class="focusnames">
            <li>
              <div class="focusnamesFir">
                <span class="focusnamesPink">Jingdong Technology Co., LTD</span>
              </div>
              <div>
                <span class="focusnamesBlue">The electronic commerce</span>
              </div>
            </li>
            <li>
              <div>
                <span class="focusnamesGreen"
                  >Investment in mergers and acquisitions</span
                >
              </div>
              <div><span class="focusnamesOrange">layoffs</span></div>
            </li>
          </ul>
          <div class="focusfooter">
            <span>News source: The XX YHJ published: 2021.12.21 09:05:00</span>
            <img
              src="../../assets/img/customfire.png"
              alt=""
              style="width: 22px; height: 22px"
            /><span class="footerNum">888</span>
          </div>
        </li>
        <li>
          <div class="focustitle">
            Jingdong big news! 50 A shares are newly included, and KEChuang
            shares are in the "shopping cart" in batches.
          </div>
          <ul class="focusnames">
            <li>
              <div class="focusnamesFir">
                <span class="focusnamesPink">Jingdong Technology Co., LTD</span>
              </div>
              <div>
                <span class="focusnamesBlue">The electronic commerce</span>
              </div>
            </li>
            <li>
              <div>
                <span class="focusnamesGreen"
                  >Investment in mergers and acquisitions</span
                >
              </div>
              <div><span class="focusnamesOrange">layoffs</span></div>
            </li>
          </ul>
          <div class="focusfooter">
            <span>News source: The XX YHJ published: 2021.12.21 09:05:00</span>
            <img
              src="../../assets/img/customfire.png"
              alt=""
              style="width: 22px; height: 22px"
            /><span class="footerNum">888</span>
          </div>
        </li>
        <li>
          <div class="focustitle">
            Jingdong big news! 50 A shares are newly included, and KEChuang
            shares are in the "shopping cart" in batches.
          </div>
          <ul class="focusnames">
            <li>
              <div class="focusnamesFir">
                <span class="focusnamesPink">Jingdong Technology Co., LTD</span>
              </div>
              <div>
                <span class="focusnamesBlue">The electronic commerce</span>
              </div>
            </li>
            <li>
              <div>
                <span class="focusnamesGreen"
                  >Investment in mergers and acquisitions</span
                >
              </div>
              <div><span class="focusnamesOrange">layoffs</span></div>
            </li>
          </ul>
          <div class="focusfooter">
            <span>News source: The XX YHJ published: 2021.12.21 09:05:00</span>
            <img
              src="../../assets/img/customfire.png"
              alt=""
              style="width: 22px; height: 22px"
            /><span class="footerNum">888</span>
          </div>
        </li>
        <li>
          <div class="focustitle">
            Jingdong big news! 50 A shares are newly included, and KEChuang
            shares are in the "shopping cart" in batches.
          </div>
          <ul class="focusnames">
            <li>
              <div class="focusnamesFir">
                <span class="focusnamesPink">Jingdong Technology Co., LTD</span>
              </div>
              <div>
                <span class="focusnamesBlue">The electronic commerce</span>
              </div>
            </li>
            <li>
              <div>
                <span class="focusnamesGreen"
                  >Investment in mergers and acquisitions</span
                >
              </div>
              <div><span class="focusnamesOrange">layoffs</span></div>
            </li>
          </ul>
          <div class="focusfooter">
            <span>News source: The XX YHJ published: 2021.12.21 09:05:00</span>
            <img
              src="../../assets/img/customfire.png"
              alt=""
              style="width: 22px; height: 22px"
            /><span class="footerNum">888</span>
          </div>
        </li>
      </ul>
      <div class="rightFooter">
        <i class="el-icon-caret-right"></i>
        <span>Click here to see more</span>
        <i class="el-icon-caret-left"></i>
      </div>
    </div>
    <el-dialog title="My Focus" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item
          label="Industry"
          :label-width="formLabelWidth"
          class="formInput"
        >
          <el-autocomplete
            class="inline-input"
            v-model="industrydata"
            :fetch-suggestions="querySearch"
            placeholder="Please enter the industry you want to add"
            clearable
          ></el-autocomplete>
          <div class="formInputPlus" @click="addIndustry">+</div>
        </el-form-item>
        <el-form-item>
          <div class="lengends">
            <ul>
              <li v-for="(item, index) in dataTopTenindustry" :key="index">
                <div class="lengendtext">
                  <span class="lengendanme">{{ item.name }}</span>
                  <span class="lengenddelete" @click="deleteIndustry(index)"
                    ><i class="el-icon-close"></i
                  ></span>
                </div>
              </li>
            </ul>
          </div>
        </el-form-item>
        <el-form-item
          label="Enterprise"
          :label-width="formLabelWidth"
          class="formInput"
        >
          <el-autocomplete
            class="inline-input"
            v-model="enterprisedata"
            :fetch-suggestions="querySearchen"
            placeholder="Please enter the industry you want to add"
            clearable
          ></el-autocomplete>
          <div class="formInputPlus" @click="addEnterprise">+</div>
        </el-form-item>
        <el-form-item>
          <div class="lengends">
            <ul>
              <li v-for="(item, index) in dataTopTenenterprise" :key="index">
                <div class="lengendtext">
                  <span class="lengendanme">{{ item.name }}</span>
                  <span class="lengenddelete" @click="deleteEnterprise(index)"
                    ><i class="el-icon-close"></i
                  ></span>
                </div>
              </li>
            </ul>
          </div>
        </el-form-item>

        <el-form-item
          label="National screening"
          :label-width="formLabelWidthbig"
          class="formInput formInputSelect"
        >
          <el-select
            v-model="valueNational"
            filterable
            placeholder="Please select"
            class=""
            size="small"
          >
            <el-option
              v-for="item in optionsNational"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
          <div class="lengends">
            <ul>
              <li v-for="(item, index) in dataTopTennational" :key="index">
                <div class="lengendtext">
                  <span class="lengendanme">{{ item.name }}</span>
                  <span class="lengenddelete" @click="deleteNational(index)"
                    ><i class="el-icon-close"></i
                  ></span>
                </div>
              </li>
            </ul>
          </div>
        </el-form-item>
        <el-form-item
          label="Time interval"
          :label-width="formLabelWidth"
          class="formInputTime"
        >
          <el-date-picker
            v-model="valuetime"
            type="daterange"
            range-separator="——"
            start-placeholder="start date"
            end-placeholder="end date"
            class=""
            size="small"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item
          label="Sortord"
          :label-width="formLabelWidth"
          class="formSortord"
        >
          <el-select
            v-model="valueSortord"
            filterable
            placeholder="Please select"
            class=""
            size="small"
          >
            <el-option
              v-for="item in optionsSortord"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item
          label="Emotional label type"
          :label-width="formLabelWidthbig"
          class="formEmotional"
        >
          <el-select
            v-model="valueEmotional"
            filterable
            placeholder="Please select"
            class=""
            size="small"
          >
            <el-option
              v-for="item in optionsEmotional"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogFormVisible = false"
          >Confirm</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogFormVisible: false,
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      formLabelWidth: "120px",
      formLabelWidthbig: "150px",
      industrydata: "",
      dataTopTenindustry: [
        { name: "Wholesale and Retail" },
        { name: "Wholesale and Retail" },
        { name: "Wholesale and Retail" },
        { name: "Wholesale and Retail" },
        { name: "Wholesale and Retail" },
        { name: "Sat" },
        { name: "Sun" },
        { name: "sasd" },
        { name: "ffr" },
        { name: "rhh" },
      ],
      enterprisedata: "",
      dataTopTenenterprise: [
        { name: "Sat" },
        { name: "Sichuan Chengyu Expressway Co. LTD" },
        { name: "Wholesale and Retail" },
        { name: "Wholesale and Retail" },
        { name: "Wholesale and Retail" },
        { name: "Sat" },
        { name: "Sun" },
        { name: "sasd" },
        { name: "ffr" },
        { name: "rhh" },
      ],
      valueNational: [],
      optionsNational: [
        {
          value: "选项1",
          label: "usa",
        },
        {
          value: "选项2",
          label: "canada",
        },
        {
          value: "选项3",
          label: "rtrtrrt",
        },
        {
          value: "选项4",
          label: "yttyty",
        },
        {
          value: "选项5",
          label: "rerer",
        },
      ],
      dataTopTennational: [
        { name: "Sat" },
        { name: "Sichuan Chengyu Expressway Co. LTD" },
        // { name: "Wholesale and Retail" },
        // { name: "Wholesale and Retail" },
        // { name: "Wholesale and Retail" },
        // { name: "Sat" },
        // { name: "Sun" },
        // { name: "sasd" },
        // { name: "ffr" },
        // { name: "rhh" },
      ],
      valuetime: "", //日期
      valueSortord: [],
      optionsSortord: [
        {
          value: "选项1",
          label: "The default",
        },
        {
          value: "选项2",
          label: "Time in descending order",
        },
        {
          value: "选项3",
          label: "The heat in descending order",
        },
        {
          value: "选项4",
          label: "The heat in descending order",
        },
        {
          value: "选项5",
          label: "The heat in descending order",
        },
      ],
      valueEmotional: [],
      optionsEmotional: [
        {
          value: "选项1",
          label: "No limit",
        },
        {
          value: "选项2",
          label: "Positive label",
        },
        {
          value: "选项3",
          label: "Negative labels",
        },
      ],
      map: {},
      mappoint: [
        {
          x: 116.40769,
          y: 39.89945,
          src: "red",
          location: "Beijing",
          articlenum: "9,999",
          name: "The electronic commerce",
          hotnum: "456",
        },
        {
          x: 134.411794,
          y: 42.9068,
          src: "red",
          location: "Shanghai",
          articlenum: "66",
          name: "cccccccccc",
          hotnum: "1234",
        },
        {
          x: 104.411794,
          y: 40.9068,
          src: "blue",
          location: "Guangdong",
          articlenum: "6,485",
          name: "aaaaaaaaa",
          hotnum: "5555",
        },
        {
          x: 94.411794,
          y: 20.9068,
          src: "yellow",
          location: "Shenzhen",
          articlenum: "10,121",
          name: "bbbbbbbbb",
          hotnum: "96545",
        },
      ],
      IndusorEnter: "Indus",
    };
  },
  methods: {
    querySearch(queryString, cb) {
      var industryinits = this.industryinits;
      var results = queryString
        ? industryinits.filter(this.createFilter(queryString))
        : industryinits;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    createFilter(queryString) {
      return (industryinit) => {
        return (
          industryinit.value
            .toLowerCase()
            .indexOf(queryString.toLowerCase()) === 0
        );
      };
    },
    querySearchen(queryString, cb) {
      var enterpriseinits = this.enterpriseinits;
      var results = queryString
        ? enterpriseinits.filter(this.createFilteren(queryString))
        : enterpriseinits;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    createFilteren(queryString) {
      return (enterpriseinit) => {
        return (
          enterpriseinit.value
            .toLowerCase()
            .indexOf(queryString.toLowerCase()) === 0
        );
      };
    },
    loadAll() {
      return [
        { value: "The electronic commerce" },
        { value: "Wholesale and Retail" },
        { value: "Farming, forestry, animal husbandry and fishery" },
        { value: "Wholesale and Retail" },
        { value: "Wholesale and Retail" },
        { value: "Wholesale and Retail" },
      ];
    },
    loadAllen() {
      return [
        { value: "en" },
        { value: "Wholesale and Retail" },
        { value: "Farming, forestry, animal husbandry and fishery" },
        { value: "Wholesale and Retail" },
        { value: "Wholesale and Retail" },
        { value: "Wholesale and Retail" },
      ];
    },
    addIndustry() {
      if (!this.industrydata) {
        return;
      }
      var obj = {};
      obj.name = this.industrydata;
      this.dataTopTenindustry.push(obj);
    },
    deleteIndustry(index) {
      this.dataTopTenindustry.splice(index, 1);
    },
    addEnterprise() {
      if (!this.enterprisedata) {
        return;
      }
      var obj = {};
      obj.name = this.enterprisedata;
      this.dataTopTenenterprise.push(obj);
    },
    deleteEnterprise(index) {
      this.dataTopTenenterprise.splice(index, 1);
    },
    deleteNational(index) {
      this.dataTopTennational.splice(index, 1);
    },
    load() {
      const init = new Promise((resolve, reject) => {
        if (window.T) {
          console.log("地图初始化成功");
          resolve(window.T);
          reject("error");
        }
      });
      init.then((T) => {
        this.map = new T.Map("mapDiv");
        this.map.centerAndZoom(new T.LngLat(116.411794, 39.9068), 4);
        this.handleAddPoint(); //标点

        document.getElementsByClassName(
          "tdt-control-copyright"
        )[0].style.display = "none";
        //icon 图片设置src
        var arr = document.getElementsByClassName("tdt-marker-pane");
        arr = Array.from(arr);
        if (arr) {
          arr = arr[0].getElementsByTagName("img");
          arr = Array.from(arr);
          arr.forEach((element) => {
            try {
              if (element.src.indexOf("red") !== -1) {
                element.src = require("../../assets/img/redcircle.svg");
                element.className = element.className + " redicon";
              } else if (element.src.indexOf("blue") !== -1) {
                element.src = require("../../assets/img/bluecircle.svg");
                element.className = element.className + " blueicon";
              } else if (element.src.indexOf("yellow") !== -1) {
                element.src = require("../../assets/img/yellowcircle.svg");
                element.className = element.className + " yellowicon";
              }
            } catch {
              console.log("图片设置src失败");
            }
          });
        }
      });
    },
    handleAddPoint() {
      //创建图片对象
      var icon = new T.Icon({
        iconUrl: "http://api.tianditu.gov.cn/img/map/markerA.png",
        iconSize: new T.Point(50, 50),
        iconAnchor: new T.Point(10, 25),
      });

      this.mappoint.forEach((element) => {
        if (element.src == "red") {
          icon.options.iconUrl = "red";
        } else if (element.src == "blue") {
          icon.options.iconUrl = "blue";
        } else if (element.src == "yellow") {
          icon.options.iconUrl = "yellow";
        }

        //创建标注对象
        var marker = new T.Marker(new T.LngLat(element.x, element.y), {
          icon: icon,
        });
        //向地图上添加标注
        this.map.addOverLay(marker);
        marker.addEventListener("mouseover", function () {
          var infoWin1 = new T.InfoWindow();
          var sContent =
            "<div style='min-width: 250px;'>" +
            "<div style='display: flex;justify-content: space-between;padding-bottom: 10px;align-items: center;'>" +
            "<span style='font-weight: 700;font-size: 16px;color: rgb(99, 170, 255);'>-" +
            element.location +
            "-</span>" +
            "<span style='font-weight: 700;font-size: 12px;color: rgb(127, 127, 127);'>" +
            element.articlenum +
            " Aticles</span>" +
            "</div>" +
            "<div style='display: flex;justify-content: space-between;border-top: 1px solid #ccc;padding-top: 10px;'>" +
            "<span style='    background: rgba(236, 128, 141, 1);border-radius: 15px;padding: 0 5px;color: #fff;line-height: 20px;'>" +
            element.name +
            "</span>" +
            "<div style='display: flex;align-items: center;'>" +
            "<img class='infowindowimg' style='float:left;margin:0px 10px' src=' ' width='18' height='18' title='fire'/>" +
            "<span style='color: font-weight: 700;font-size: 16px;color:rgb(217, 0, 27);'>" +
            element.hotnum +
            "</span>" +
            "</div>" +
            "</div>" +
            "</div>";
          infoWin1.setContent(sContent);
          marker.openInfoWindow(infoWin1);
        });
        marker.addEventListener("mouseout", function () {
          marker.closeInfoWindow();
        });
      });
    },
  },
  mounted() {
    this.industryinits = this.loadAll();
    this.enterpriseinits = this.loadAllen();
    let script = document.createElement("script");
    script.type = "text/javascript";
    script.src =
      "http://api.tianditu.gov.cn/api?v=4.0&tk=4ec12c59e31a51b0f6e5159000bef507";
    document.body.appendChild(script);
    setTimeout(() => {
      this.load(); //加载地图
    }, 500);
  },
};
</script>

<style scoped>
* {
  font-family: "微软雅黑 Bold", "微软雅黑 Regular", 微软雅黑;
}
.mapLeft {
  width: 67%;
  height: 100%;
}
.focusRight {
  width: 32%;
  height: 100%;
  margin-left: 1%;
}
.targeta {
  display: flex;
  height: 36px;
  padding: 0 30px;
}
.seatar {
  font-weight: 700;
  font-size: 16px;
  color: #389afe;
}
.elDownload,
.btnCustom {
  margin-left: auto;
}
.el-icon-download {
  font-size: 25px;
  cursor: pointer;
  color: #409eff;
}
.btnCustom {
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(245, 154, 35, 1);
  width: 150px;
  height: 30px;
  border-radius: 15px;
  cursor: pointer;
}
.btnCustom img {
  width: 22px;
  height: 22px;
}
.btnCustom span {
  font-weight: 700;
  font-style: normal;
  font-size: 12px;
  color: #ffffff;
  margin-left: 10px;
}
.focusDetails {
  margin-top: 10px;
  padding: 0 30px;
}
.focusDetails > li {
  border-top: 1px solid #aaa;
  padding: 10px 0;
}
.focusDetails > li:last-child {
  border-bottom: 1px solid #aaa;
}
.focustitle {
  height: 30px;
  font-weight: 700;
  font-style: normal;
  font-size: 13px;
  color: #183c73;
  line-height: 15px;
  text-align: left;
}
.focusnames {
  margin-top: 10px;
}
.focusnames li {
  display: flex;
  font-size: 12px;
}
.focusnames li > div {
  display: flex;
}
.focusnames li > div span {
  border-radius: 15px;
  padding: 0 15px;
  height: 20px;
}
.focusnamesPink {
  background: rgba(236, 128, 141, 1);
  color: #ffffff;
}
.focusnamesBlue {
  background: rgba(129, 211, 248, 1);
  color: #183c73;
  margin-left: 5px;
}
.focusnamesGreen {
  background: rgba(175, 240, 181, 1);
  color: #08b731;
}
.focusnamesOrange {
  background: rgba(255, 228, 186, 1);
  color: #ff8e1f;
  margin-left: 5px;
}
.focusnamesFir {
  margin-bottom: 10px;
}
.focusfooter {
  margin-top: 10px;
  font-size: 12px;
  letter-spacing: 0.5px;
  color: #aaaaaa;
  text-align: left;
  display: flex;
  align-items: center;
}
.focusfooter img {
  margin-left: auto;
}
.footerNum {
  font-size: 13px;
  font-weight: 700;
  color: #d9001b;
}
.rightFooter {
  display: flex;
  margin-top: 10px;
  font-size: 12px;
  color: #2f8eff;
  justify-content: center;
  cursor: pointer;
}
.rightFooter i {
  font-size: 20px;
  margin: 0 8px;
}
div/deep/.el-dialog {
  text-align: left;
}
div/deep/.el-dialog__body {
  border-bottom: 1px solid #ccc;
  border-top: 1px solid #ccc;
}
div/deep/.el-dialog__title {
  font-weight: 700;
  font-size: 20px;
  color: rgb(47, 142, 255);
}
div/deep/.el-dialog__header {
  border-top: 3px solid rgb(47, 142, 255);
}
.formInput /deep/.el-form-item__content {
  display: flex;
}
.formInput /deep/.el-form-item__content .formInputPlus {
  font-size: 40px;
  background: rgba(47, 142, 255, 1);
  border-radius: 10px;
  height: 36px;
  width: 30px;
  line-height: 30px;
  color: #fff;
  margin-left: 20px;
  cursor: pointer;
}
.formInput /deep/.el-input__inner {
  width: 310px;
  height: 30px;
  line-height: 30px;
}
.formInputSelect /deep/.el-input__inner {
  width: 190px;
  border-radius: 10px;
}
.formInputTime,
.formSortord {
  display: inline-block;
}
.formSortord /deep/.el-input__inner,
.formInputTime /deep/.el-input__inner {
  border-radius: 10px;
}
.formEmotional /deep/.el-input__inner {
  border-radius: 10px;
  width: 290px;
}
.lengends ul li {
  float: left;
  display: flex;
  margin-right: 5px;
  cursor: pointer;
  align-items: center;
  margin-bottom: 5px;
}
.lengends ul {
  margin-left: 45px;
}
.lengendtext {
  font-size: 12px;
  margin-top: 5px;
  padding: 0 10px;
  border: 1px solid #ccc;
  border-radius: 20px;
  height: 20px;
  line-height: 20px;
  color: rgba(0, 0, 0, 0.45);
}
.lengendtext .lengenddelete {
  font-size: 18px;
}
.lengendtext .lengenddelete {
  margin-left: 40px;
}
div/deep/.tdt-marker-pane .redicon:hover {
  content: url(../../assets/img/circleouterred.png);
}
div/deep/.tdt-marker-pane .blueicon:hover {
  content: url(../../assets/img/circleouterblue.png);
}
div/deep/.tdt-marker-pane .yellowicon:hover {
  content: url(../../assets/img/circleouteryellow.png);
}
.mapBottom {
  position: absolute;
  z-index: 999;
  bottom: 0;
  left: 0;
  height: 50px;
  width: 230px;
  background: rgba(237, 249, 254, 1);
  text-align: left;
}
.mapBottomText {
  margin-top: 5px;
  margin-left: 10px;
  font-size: 10px;
  color: rgb(47, 142, 255);
  font-weight: 700;
}
.mapBottom ul li {
  float: left;
  width: 55px;
  height: 15px;
  margin-top: 5px;
}
.mapBottomFir {
  background: rgba(217, 0, 27, 0.698039215686274);
  margin-left: 10px;
}
.mapBottomSec {
  background: rgba(255, 255, 128);
  margin-left: 20px;
}
.mapBottomThir {
  background: rgba(2, 167, 240);
  margin-left: 20px;
}
.mapTop {
  position: absolute;
  z-index: 999;
  height: 36px;
  width: 100%;
  background: rgba(255, 255, 255, 0.698039215686274);
  display: flex;
  align-items: center;
}
.mapTop div {
  min-width: 80px;
  height: 25px;
  line-height: 25px;
  background: #fff;
  color: rgb(127, 127, 127);
  font-weight: 700;
  font-size: 12px;
}
.mapTop span {
  font-family: "Arial Normal", "Arial";
  text-align: left;
  max-width: 830px;
  font-size: 12px;
  color: #555555;
  line-height: 15px;
}
.mapTopFir {
  margin-left: 20px;
}
.mapTopSec {
  margin-right: 20px;
}
.IndusorEnter {
  background: rgb(47, 142, 255) !important;
  color: #fff !important;
}
div/deep/.infowindowimg {
  content: url(../../assets/img/fire.png);
}
</style>