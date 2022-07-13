<template>
  <div class="back">
    <el-page-header
      style="height: 50px; line-height: 50px"
      @back="goBack"
      content="详情页面"
    ></el-page-header>
    <div class="content">
      <div class="content-text">
        <div class="smart">
          <div>智能识别</div>
          <span>查看原文&nbsp;&nbsp;<i class="el-icon-arrow-right"></i></span>
        </div>
        <div class="Abstract">
          GMV and trading volumes are not converted to direct revenues from JD
          and Alibaba. Also, returns are not considered This number is related
          to the amount of transactions across both platforms.
        </div>
        <div class="text">
          GMV and trading volumes are not converted to direct revenues from JD
          and Alibaba. Also, returns are not considered This number is related
          to the amount of transactions across both platforms. Guangzhou, China
          — China's e-commerce giants Alibaba and JD.com have set new sales
          records across the platforr at Singles' Day, the world's largest
          shopping event.Shares of both companies rose on Friday, Alibaba rose
          about 1%, and JD rose more than 5% in Hong Kong's early trading.
          Record sales were achieved despite concerns about the impact of
          Chinese consumer power and Beijing's crackdow on tech companies.
          Single Day, also known as Double 11, was previously a 24-hour
          flashsale-type event, but has been transformed into November, This
          extended period helped businesses continue to grow sales.Alibaba Group
          Holding Limited signboard exhibited at its headquarters in Hangzhou,
          China, on Wednesday November 10.2021.Alibaba's annual 11.11 Sinale Dav
          Online Shooping Jackoot attracts hundreds of millions of people around
          the world. This year is a more modest event as e-commerce giants are
          shifting their focus from increasing sales to sustainability and
          philanthropy.This is an important pillar of President Xi Jinping's w
          rebuild the Chinese economy Qilai Shen | Bloomberg | Getty Images
          According to Alibaba, the total commodity volume (GMV) for 11 days
          totaled 540.3 billion yuan ($ 84.54 billion), increase of more than 8%
          from 498.2 billion yuan last year,According to JD, the total volume of
          transactions on the platform during Singles' Day was 349.1 billion
          yuan ($ 54.6billion), an increase of 28% from 271.5 billion yuan last
          year.GMV and trading volumes are not converted to direct revenues from
          JD and Alibaba. Also, returns are not considered This number is
          related to the amount of transactions across both platforms However,
          they show Chinese consumers' willingness to shop on the e-commerce
          giant platform. “Social responsibility".Both JD and Alibaba advertised
          their social and environmental responsibilities during the event and
          were in line with Beijing's priorities.“This 11.11 Global Shoppina
          Festival has achieved steady, hiah-quality arowth that reflects the
          dvnamic Chines “We also used the power of 11.11 as a platform to
          fulfill our social resoonsibilities. This vear's festival was a
          sianificant milestone as part of our commitment to building a
          sustainable future."Meanwhile, JD emphasized its trust in the
          environment, saying it reduced carbon emissions during the Singles'
          Day by 26,000 tonnes compared to last year. What did people buy?JD
          said purchases of luxury and pet-related products surged. Apple seemed
          to see strong sales. According to JD, the transaction volume of the
          iPhone exceeded 100 million yua in two seconds after the final sale
          started on November 10.Both Alibaba and JD said growth was seen in
          small cities in ChinaThis is an important focus for e-com companies
          looking to expand their user base.According to JD, users in the
          so-called low-rise market accounted for 77% of all shoppers during
          Singles' Day. According to the company, these markets have seen "rapid
          consumption growth" in home appliances pharmaceuticals and upholstery.
          According to Alibaba, spending in low-rise cities and r by nearly 25%
          from last year when Double11 went on sale November 1-3. Alibaba
          records record $ 139 billion in sales
        </div>
      </div>
      <div class="content-related">
        <div class="smart" style="margin-bottom: 20px">
          <div>智能标签</div>
        </div>
        <div class="smartItem smartItemA">
          <div class="POSITIVE_RISK">POSITIVE_RISK</div>
          <span
            >Operating and Management\Operating and Production\Shares of
            companies rose</span
          >
          <span
            >Operating and Management\Operating and Production\Shares of
            companies rose</span
          >
          <span
            >Operating and Management\Operating and Production\Shares of
            companies rose</span
          >
          <span
            >Operating and Management\Operating and Production\Shares of
            companies rose</span
          >
        </div>
        <div class="smartItem smartItemB">
          <div class="NEGATIVE_RISK">NEGATIVE_RISK</div>
          <span
            >Operating and Management\Operating and Production\Shares of
            companies rose</span
          >
          <span
            >Operating and Management\Operating and Production\Shares of
            companies rose</span
          >
          <span
            >Operating and Management\Operating and Production\Shares of
            companies rose</span
          >
          <span
            >Operating and Management\Operating and Production\Shares of
            companies rose</span
          >
        </div>
        <div class="smartItem smartItemC">
          <div class="INDUSTRY">INDUSTRY</div>
          <span>Operating and Management</span>
          <span>Operating and Management</span>
        </div>
        <div class="smartItem smartItemD">
          <div class="COUNTRY">COUNTRY</div>
          <span
            >Operating and Management\Operating and Production\Shares of
            companies rose</span
          >
          <span
            >Operating and Management\Operating and Production\Shares of
            companies rose</span
          >
          <span
            >Operating and Management\Operating and Production\Shares of
            companies rose</span
          >
          <span
            >Operating and Management\Operating and Production\Shares of
            companies rose</span
          >
        </div>
        <div class="smartItem smartItemE">
          <div class="COMPANY">COMPANY</div>
          <img src="" alt="">
          <img src="" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goBack() {
      console.log("go back");
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
.el-page-header {
  height: 50px;
}
.Abstract {
  margin: 20px 0;
  padding: 10px;
  box-sizing: border-box;
  font-size: 14px;
  color: #666;
  height: 73px;
  background: #d7d7d7;
  border-radius: 10px;
  font-family: 微软雅黑;
  font-weight: 400;
  font-style: normal;
  letter-spacing: 0.5px;
  text-align: left;
  line-height: 25px;
}
.content {
  display: flex;
  justify-content: space-between;
}
.content-text {
  width: 70%;
  padding: 0 16px;
  box-sizing: border-box;
  box-shadow: 0px 0px 4px 0px #000;
}
.content-related {
  width: 28%;
}
.text {
  font-size: 14px;
  font-family: 微软雅黑;
  font-weight: 400;
  font-style: normal;
  letter-spacing: 0.5px;
  line-height: 25px;
  color: rgb(51, 51, 51);
  text-align: left;
}
.smart {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  line-height: 60px;
  border-bottom: 1px solid #000;
}
.smart div {
  font-family: "微软雅黑";
  font-weight: 400;
  font-style: normal;
  font-size: 18px;
}
.smart span {
  font-family: "微软雅黑";
  font-weight: 400;
  font-style: normal;
  color: #027db4;
}
.smartItem {
  text-align: left;
}
.smartItem div {
  font-size: 24px;
  line-height: 50px;
}
.smartItem span {
  line-height: 26px;
  font-size: 18px;
  display: inline-block;
  border-radius: 25px;
  padding: 5px 10px;
  margin: 6px 0;
}
.smartItemA span {
  background: #f0f6ff;
  color: #98b1fb;
}
.smartItemB span {
  background: #fffbe6;
  color: #fcd073;
}
.smartItemC span {
  background: #f6ffed;
  color: #ace58d;
}
.smartItemD span {
  background: #f2fdfd;
  color: #aae4e4;
}
</style>