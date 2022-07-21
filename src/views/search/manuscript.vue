<template>
    <div class="manuscript">
        <div v-if="$store.state.activeName === '0'" class="header clearBoth">
            <span class="title">Manuscript</span>
            <span class="amount" @click="toManuscript">View all {{count}} search results >></span>
        </div>
        <div v-if="$store.state.activeName === '2'" class="header clearBoth">
            <span class="describe">The system searches for {{count}} results for you</span>
            <div class="sortSelect">
                <span class="describe">Sortord:</span>
                <el-select v-model="sortord" placeholder="">
                    <el-option
                            v-for="item in sorts"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
            </div>

        </div>
        <ul class="dataList">
            <li v-for="(item, index) in dataList" v-if="$store.state.activeName === '0' && index < 3" @click="toDetail(item)">
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
            <li v-for="(item, index) in dataList" v-if="$store.state.activeName === '2'" @click="toDetail(item)">
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
                v-if="$store.state.activeName === '2'"
                background
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage"
                :page-size="100"
                layout="total, prev, pager, next, jumper"
                :total="400">
        </el-pagination>

    </div>
</template>

<script>
    export default {
        name: "enterprise",
        data(){
            return{
                count: 888,
                focusBtn: true,
                currentPage: 1,
                keywords: 'Jingdong',
                dataList:[
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
                ],
                sortord: '',
                sorts: [
                    {
                        value: 'The default',
                        label: 'The default'
                    }, {
                        value: 'Time in descending order',
                        label: 'Time in descending order'
                    }, {
                        value: 'Time ascending',
                        label: 'Time ascending'
                    }, {
                        value: 'The heat in descending order',
                        label: 'The heat in descending order'
                    }, {
                        value: 'Heat ascending',
                        label: 'Heat ascending'
                    }
                ]
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
        methods:{
            isFocus(index){
                this.dataList[index].focusBtn = !this.dataList[index].focusBtn;
            },
            toManuscript(){
                this.$store.commit('setActiveName', '2')
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
    .header{
        border-bottom: 2px solid #ededed;
        padding-bottom: 10px;
        text-align: left;
    }
    .header .title{
        float: left;
        height: 50px;
        line-height: 50px;
        border-left: 12px solid #2f8eff;
        font-size: 18px;
        font-weight: bold;
        padding-left: 8px;
    }
    .header .amount{
        float: right;
        line-height: 50px;
        font-size: 14px;
        cursor: pointer;
    }
    .header .describe{
        line-height: 50px;
        font-size: 12px;
        color: #aaaaaa;
        margin-right: 10px;
    }
    .sortSelect{
        float: right;
    }

    /*enterprise*/
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
    }
    .dataList .tag .source span:first-child{
        margin-right: 8px;
    }
    .manuscript .el-pagination{
        margin-top: 20px;
    }
    .clearBoth:after{
        content: '';
        display: block;
        clear: both;
    }
</style>
