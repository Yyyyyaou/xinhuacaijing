<template>
    <el-card class="relatedArticle">

        <div class="selectBox">
            <div>
                <span>Select time</span>
                <el-date-picker
                        v-model="selectedDate"
                        type="daterange"
                        range-separator="-"
                        format="yyyy/MM/dd"
                        start-placeholder="yyyy/mm/dd"
                        end-placeholder="yyyy/mm/dd">
                </el-date-picker>
            </div>

            <div>
                <span>News sources</span>
                <el-select class="sourceSelect" v-model="source" placeholder="">
                    <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
            </div>

            <div>
                <span>countries</span>
                <el-select class="sourceSelect country" v-model="countriesSelect" placeholder="">
                    <el-option
                            v-for="item in country"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
            </div>

            <div>
                <el-input
                        class="search"
                        placeholder=""
                        suffix-icon="el-icon-search"
                        v-model="keywords">
                </el-input>
            </div>


        </div>

        <ul class="dataList">
            <li v-for="(item, index) in dataList" @click="toDetail(item)">
                <p class="dataTitle" v-html="titleInit(item.title)"></p>
                <p class="descript">{{item.descript}}</p>
                <div class="tag">
                    <el-tag color="#ec808d" style="color: #ffffff" v-for="i in item.tips" v-if="i.type === 1">{{i.name}}</el-tag>
                    <el-tag color="#81d3f8" v-for="i in item.tips" v-if="i.type === 2">{{i.name}}</el-tag>
                    <el-tag color="#aff0b5" style="color: #08b731" v-for="i in item.tips" v-if="i.type === 3">{{i.name}}</el-tag>
                    <el-tag color="#ffe4ba" style="color: #ff8e1f" v-for="i in item.tips" v-if="i.type === 4">{{i.name}}</el-tag>
                    <div class="source">
                        <span>News source: {{item.source}}</span>
                        <span>published: {{item.published}}</span>
                    </div>
                </div>
            </li>
        </ul>

        <el-pagination
                background
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage"
                :page-size="100"
                layout="total, prev, pager, next, jumper"
                :total="total">
        </el-pagination>
    </el-card>
</template>

<script>
    export default {
        name: "relatedArticle",
        data(){
            return{
                dataList:[],
                keywords: 'Jingdong',
                currentPage: 1,
                total: 0,
                selectedDate: '',
                source: 'All',
                options: [
                    {
                        value: 'All',
                        label: 'All'
                    }
                ],
                countriesSelect: 'Canada',
                country: [
                    {
                        value: 'Canada',
                        label: 'Canada'
                    },
                    {
                        value: 'The United States',
                        label: 'The United States'
                    }
                ],
            }
        },
        computed:{
            titleInit:function (title) {
                return function(title){
                    title = title.replaceAll(this.keywords, '<span style="color: #d9011c">'+this.keywords+'</span>');
                    return title;
                }

            }
        },
        mounted(){
            this.getDataList();
        },
        methods:{
            getDataList(){
                this.dataList = [
                    {
                        title: 'Jingdong big news! 50 A shares are newly included, and KEChuang shares are in the "shopping cart" in batches. How does "smart capital" act?',
                        descript: 'The summary is shown here. On December 23, 2021, the Company and (" Intelligent Company ") signed the Framework Agreement on Clearing and Operation Service of Sichuan Expressway Network Toll Collection System.',
                        tips: [
                            {
                                name: 'Jingdong Technology Co., LTD',
                                type: 1
                            },{
                                name: 'The electronic commerce',
                                type: 2
                            },{
                                name: 'Investment in merges and acquisitions',
                                type: 3
                            },{
                                name: 'layoffs',
                                type: 4
                            }
                        ],
                        published: '2021.12.21 09:05:00',
                        source: 'The XX YHJ'
                    },{
                        title: 'Jingdong big news! 50 A shares are newly included, and KEChuang shares are in the "shopping cart" in batches. How does "smart capital" act?',
                        descript: 'The summary is shown here. On December 23, 2021, the Company and (" Intelligent Company ") signed the Framework Agreement on Clearing and Operation Service of Sichuan Expressway Network Toll Collection System.',
                        tips: [
                            {
                                name: 'Jingdong Technology Co., LTD',
                                type: 1
                            },{
                                name: 'The electronic commerce',
                                type: 2
                            },{
                                name: 'Investment in merges and acquisitions',
                                type: 3
                            },{
                                name: 'layoffs',
                                type: 4
                            }
                        ],
                        published: '2021.12.21 09:05:00',
                        source: 'The XX YHJ'
                    },{
                        title: 'Jingdong big news! 50 A shares are newly included, and KEChuang shares are in the "shopping cart" in batches. How does "smart capital" act?',
                        descript: 'The summary is shown here. On December 23, 2021, the Company and (" Intelligent Company ") signed the Framework Agreement on Clearing and Operation Service of Sichuan Expressway Network Toll Collection System.',
                        tips: [
                            {
                                name: 'Jingdong Technology Co., LTD',
                                type: 1
                            },{
                                name: 'The electronic commerce',
                                type: 2
                            },{
                                name: 'Investment in merges and acquisitions',
                                type: 3
                            },{
                                name: 'layoffs',
                                type: 4
                            }
                        ],
                        published: '2021.12.21 09:05:00',
                        source: 'The XX YHJ'
                    },{
                        title: 'Jingdong big news! 50 A shares are newly included, and KEChuang shares are in the "shopping cart" in batches. How does "smart capital" act?',
                        descript: 'The summary is shown here. On December 23, 2021, the Company and (" Intelligent Company ") signed the Framework Agreement on Clearing and Operation Service of Sichuan Expressway Network Toll Collection System.',
                        tips: [
                            {
                                name: 'Jingdong Technology Co., LTD',
                                type: 1
                            },{
                                name: 'The electronic commerce',
                                type: 2
                            },{
                                name: 'Investment in merges and acquisitions',
                                type: 3
                            },{
                                name: 'layoffs',
                                type: 4
                            }
                        ],
                        published: '2021.12.21 09:05:00',
                        source: 'The XX YHJ'
                    },{
                        title: 'Jingdong big news! 50 A shares are newly included, and KEChuang shares are in the "shopping cart" in batches. How does "smart capital" act?',
                        descript: 'The summary is shown here. On December 23, 2021, the Company and (" Intelligent Company ") signed the Framework Agreement on Clearing and Operation Service of Sichuan Expressway Network Toll Collection System.',
                        tips: [
                            {
                                name: 'Jingdong Technology Co., LTD',
                                type: 1
                            },{
                                name: 'The electronic commerce',
                                type: 2
                            },{
                                name: 'Investment in merges and acquisitions',
                                type: 3
                            },{
                                name: 'layoffs',
                                type: 4
                            }
                        ],
                        published: '2021.12.21 09:05:00',
                        source: 'The XX YHJ'
                    },{
                        title: 'Jingdong big news! 50 A shares are newly included, and KEChuang shares are in the "shopping cart" in batches. How does "smart capital" act?',
                        descript: 'The summary is shown here. On December 23, 2021, the Company and (" Intelligent Company ") signed the Framework Agreement on Clearing and Operation Service of Sichuan Expressway Network Toll Collection System.',
                        tips: [
                            {
                                name: 'Jingdong Technology Co., LTD',
                                type: 1
                            },{
                                name: 'The electronic commerce',
                                type: 2
                            },{
                                name: 'Investment in merges and acquisitions',
                                type: 3
                            },{
                                name: 'layoffs',
                                type: 4
                            }
                        ],
                        published: '2021.12.21 09:05:00',
                        source: 'The XX YHJ'
                    }
                ];
                this.total = this.dataList.length
            },
            toDetail(item){
                this.$router.push({path:'/articleDetail', query: {item: item}});
            },
            handleSizeChange(){},
            handleCurrentChange(){}
        }
    }
</script>

<style scoped>
    .dataList li{
        text-align: left;
        padding: 24px 20px;
        border-bottom: 2px solid #e0e0e0;
        cursor: pointer;
    }
    .dataList li:hover{
        background: #eeeeee;
    }
    .dataList li .dataTitle{
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 14px;
        color: #3a68b1;
        font-weight: bold;
    }
    .dataList li .descript{
        font-size: 13px;
        margin: 12px 0;
        width: 66%;
    }
    .dataList .tag .source{
        font-size: 12px;
        float: right;
        line-height: 24px;
        color: #AAAAAA;
    }
    .dataList .tag .source span:first-child{
        margin-right: 8px;
    }
    .relatedArticle .el-pagination{
        margin-top: 20px;
        margin-bottom: 20px;
        text-align: center;
    }
    .relatedArticle .selectBox{
        padding: 10px 24px;
        font-size: 12px;
        color: #7F7F7F;
        border-bottom: 1px solid #e0e0e0;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .relatedArticle .selectBox span{
        margin-right: 4px;
        font-weight: bold;
    }
    .relatedArticle .selectBox .sourceSelect{
        width: 100px;
        /*margin-right: 20px;*/
    }
    .relatedArticle .selectBox .country{
        width: 120px;
    }
</style>
