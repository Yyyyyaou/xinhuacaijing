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

                <el-tabs v-model="activeName" @tab-click="handleClick"  type="border-card" class="tabs">
                    <el-tab-pane label=" Overseas public opinion data analysis" name="0">
                        <el-card>
                            <analysis></analysis>
                            <attention></attention>
                            <emotion-distribution></emotion-distribution>
                            <emotion-trend></emotion-trend>
                            <public-opinion></public-opinion>
                            <region-volume></region-volume>
                            <ranking></ranking>
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
                activeName: '0'
            }
        },
        components:{CompanyInfo, RelatedArticle, Analysis, Attention, EmotionDistribution, EmotionTrend, PublicOpinion, RegionVolume, Ranking},
        watch: {
            filterText(val) {

            }
        },
        methods: {
            showDetail(i){
                console.log(i);
            },
            handleClick(){}
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

</style>
