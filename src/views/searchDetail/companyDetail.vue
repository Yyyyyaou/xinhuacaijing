<template>
    <div class="companyDetail">
        <el-card class="titleCard">
            <div class="back">
                <router-link to="/search">
                    <i class="el-icon-caret-left">Return</i>
                </router-link>
                <h3>Company details</h3>
            </div>
        </el-card>

        <el-container>

            <el-aside width="300px">
                <el-card class="aside">
                    <span>Enterprise Query</span>
                    <el-input
                            prefix-icon="el-icon-search"
                            placeholder="PLEASE INPUT..."
                            v-model="filterText">
                    </el-input>

                    <el-collapse v-model="activeNames">
                        <el-collapse-item v-for="(item, index) in data" :title="item.title" :name="index">
                            <ul>
                                <li v-for="i in item.children">
                                    <a @click="showDetail(i)">
                                        <img :src="i.pic" alt="">
                                        <span>{{i.title}}</span>
                                    </a>

                                </li>
                            </ul>
                        </el-collapse-item>
                    </el-collapse>
                </el-card>

            </el-aside>
            <el-main>
                <el-card class="info">
                    <company-info :item="item"></company-info>
                </el-card>

                <el-tabs v-model="activeName" type="border-card" class="tabs">
                    <el-tab-pane label=" Overseas public opinion data analysis" name="0">
                        <el-card>
                            <div class="overseasPublic">
                                <div class="content">
                                    <analysis id="item0"></analysis>
                                    <attention id="item1"></attention>
                                    <emotion-distribution id="item2"></emotion-distribution>
                                    <emotion-trend id="item3"></emotion-trend>
                                    <public-opinion id="item4"></public-opinion>
                                    <region-volume id="item5"></region-volume>
                                    <ranking id="item6"></ranking>
                                </div>
                                <div class="timeLine">
                                    <el-timeline>
                                        <el-timeline-item
                                            v-for="(activity, index) in activities"
                                            :key="index"
                                            :color="index === activeItem ? 'rgba(47, 142, 255, 1)' : ''"
                                            :size="index === activeItem ? 'large' : 'normal'"
                                            @click.native="toHere(index)">
                                            {{activity.content}}
                                        </el-timeline-item>
                                    </el-timeline>
                                </div>
                            </div>
                        </el-card>

                    </el-tab-pane>
                    <el-tab-pane label=" Related Article search" name="1">
                        <related-article></related-article>
                    </el-tab-pane>
                </el-tabs>
            </el-main>
        </el-container>
    </div>
</template>

<script>
    import CompanyInfo from '@/views/searchDetail/company/companyInfo.vue'
    import RelatedArticle from '@/views/searchDetail/company/relatedArticle.vue'
    import Analysis from '@/views/searchDetail/company/analysis.vue'
    import Attention from '@/views/searchDetail/company/attention.vue'
    import EmotionDistribution from '@/views/searchDetail/company/emotionDistribution.vue'
    import EmotionTrend from '@/views/searchDetail/company/emotionTrend.vue'
    import PublicOpinion from '@/views/searchDetail/company/publicOpinion.vue'
    import RegionVolume from '@/views/searchDetail/company/regionVolume.vue'
    import Ranking from '@/views/searchDetail/company/ranking.vue'
    export default {
        name: "companyDetail",
        data(){
            return{
                filterText: '',
                activeNames: 0,
                data: [
                    {
                        title: 'Raw Chemical Materials and Chemical',
                        children: [
                            {
                                pic: require('@/assets/img/jingdong.png'),
                                title: 'Jingdong Co.,LTD',
                            },{
                                pic: require('@/assets/img/jingdong.png'),
                                title: 'Jingdong Co.,LTD',
                            },{
                                pic: require('@/assets/img/jingdong.png'),
                                title: 'Jingdong Co.,LTD',
                            }
                        ]
                    },
                    {
                        title: 'Raw Chemical Materials and Chemical',
                        children: [
                            {
                                pic: require('@/assets/img/jingdong.png'),
                                title: 'Jingdong Co.,LTD',
                            },{
                                pic: require('@/assets/img/jingdong.png'),
                                title: 'Jingdong Co.,LTD',
                            }
                        ]
                    },
                    {
                        title: 'Raw Chemical Materials and Chemical',
                        children: [
                            {
                                pic: require('@/assets/img/jingdong.png'),
                                title: 'Jingdong Co.,LTD',
                            },{
                                pic: require('@/assets/img/jingdong.png'),
                                title: 'Jingdong Co.,LTD',
                            }
                        ]
                    }
                ],
                item: {
                    pic: require('@/assets/img/jingdong.png'),
                    title: 'Jingdong Co.,LTD',
                },
                activeName: '0',
                activities: [
                  {
                      content: 'Enterprise manuscript trend analysis',
                  }, {
                      content: 'Trend of User\'s Attention',
                  }, {
                      content: 'Emotion Distribution',
                  }, {
                      content: 'Emotion Trend',
                  }, {
                      content: 'Public Opinion Activation',
                  }, {
                      content: 'Region Volume Analysis',
                  }, {
                      content: 'Brand Popularity Ranking',
                  }
                ],
                activeItem: 0
            }
        },
        components:{CompanyInfo, RelatedArticle, Analysis, Attention, EmotionDistribution, EmotionTrend, PublicOpinion, RegionVolume, Ranking},

        methods: {
            showDetail(i){
                console.log(i);
            },
            toHere(index){
                this.activeItem = index;
                console.log(index);
                let id = "#item" + index; // id
                // 给对应dom滚动到对应锚点，使之出现在视图中
                document.querySelector(id).scrollIntoView({
                    behavior: "smooth", // 定义过渡动画 instant立刻跳过去 smooth平滑过渡过去
                    block: "end", // 定义垂直滚动方向的对齐 start顶部（尽可能）  center中间（尽可能）  end（底部）
                    inline: "center", // 定义水平滚动方向的对齐
                });
            }
        }
    }
</script>

<style scoped>
    .companyDetail{
        text-align: left;
        overflow-y: auto;
        -ms-overflow-style: none;
        scrollbar-width: none;
    }
    .companyDetail::-webkit-scrollbar{
        display: none;
    }
    .companyDetail .back{
        color: #7F7F7F;
        background-color: #ffffff;
        height: 54px;
        line-height: 54px;
    }
    .companyDetail .back a{
        color: #7F7F7F;
        margin-left: 10px;
    }
    .companyDetail .back h3{
        display: inline-block;
        width: 90%;
        text-align: center;
    }
    .companyDetail .aside span{
        font-size: 12px;
        color: #2F8EFF;
        font-weight: bold;
        line-height: 30px;
    }
    .companyDetail .el-aside{
        padding-top: 20px;
    }
    .companyDetail .el-aside .el-card{
        padding: 10px;
    }
    .companyDetail .aside ul li{
        cursor: pointer;
        padding: 8px;
    }
    .companyDetail .aside ul li a:hover span{
        color: #2F8EFF;
    }
    .companyDetail .aside ul li img{
        width: 58px;
        height: 35px;
        margin-right: 8px;
    }
    .companyDetail .aside ul li span{
        color: #AAAAAA;
    }
    .companyDetail .info{
        margin-bottom: 20px;
    }
  .companyDetail .timeLine{
      /*width: 160px;*/
  }
  .companyDetail .overseasPublic{
    display: flex;
    justify-content: space-between;
    /*align-items: center;*/
  }
  .companyDetail .overseasPublic .content{
    margin-right: 20px;
  }

</style>
