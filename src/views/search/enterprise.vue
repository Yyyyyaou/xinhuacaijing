<template>
    <div class="enterprise">
        <div v-if="$store.state.activeName === '0'" class="header clearBoth">
            <span class="title">Enterprise</span>
            <span class="amount" @click="toEnterprise">View all {{count}} search results >></span>
        </div>
        <div v-if="$store.state.activeName === '1'" class="header clearBoth">
            <span class="describe">The system searches for {{count}} results for you</span>
        </div>
        <ul class="dataList">
            <li v-for="(item, index) in dataList" v-if="$store.state.activeName === '0' && index < 3" @click="toDetail(item)">
                <img :src="item.pic" alt="">
                <div class="detail">
                    <div class="detail-top">
                        <span class="mark" v-html="titleInit(item.title)"></span>
                        <span class="number">Number of articles:{{item.number}}</span>
                    </div>
                    <div class="tag">
                        <el-tag color="#81d3f8" v-for="i in item.tips" v-if="i.type === 1">{{i.name}}</el-tag>
                        <el-tag color="#aff0b5" style="color: #08b731" v-for="i in item.tips" v-if="i.type === 2">{{i.name}}</el-tag>
                    </div>
                    <el-row class="description">
                        <span>Establishment Date:{{item.date}}</span>
                        <span>Registered Capital:{{item.registered}}</span>
                        <span>Stock exchange(s) listed:{{item.exchanges}}</span>
                        <span>Securities Code:{{item.code}}</span>
                    </el-row>
                    <el-row class="description">
                        <span>Office Address:{{item.address}}</span>
                    </el-row>
                </div>
                <div class="btn">
                    <el-button @click="isFocus(index)" size="mini" :class="item.focusBtn ? 'focusBtn' : 'blurBtn'"><i :class="[item.focusBtn? 'el-icon-plus': 'el-icon-check','icon-plus']"></i>Focus</el-button>
                </div>
            </li>
            <li v-for="(item, index) in dataList" v-if="$store.state.activeName === '1'" @click="toDetail(item)">
                <img :src="item.pic" alt="">
                <div class="detail">
                    <div class="detail-top">
                        <span class="mark" v-html="titleInit(item.title)"></span>
                        <span class="number">Number of articles:{{item.number}}</span>
                    </div>
                    <div class="tag">
                        <el-tag color="#81d3f8" v-for="i in item.tips" v-if="i.type === 1">{{i.name}}</el-tag>
                        <el-tag color="#aff0b5" style="color: #08b731" v-for="i in item.tips" v-if="i.type === 2">{{i.name}}</el-tag>
                    </div>
                    <el-row class="description">
                        <span>Establishment Date:{{item.date}}</span>
                        <span>Registered Capital:{{item.registered}}</span>
                        <span>Stock exchange(s) listed:{{item.exchanges}}</span>
                        <span>Securities Code:{{item.code}}</span>
                    </el-row>
                    <el-row class="description">
                        <span>Office Address:{{item.address}}</span>
                    </el-row>
                </div>
                <div class="btn">
                    <el-button @click="isFocus(index)" size="mini" :class="item.focusBtn ? 'focusBtn' : 'blurBtn'">
                        <i :class="[item.focusBtn? 'el-icon-plus': 'el-icon-check','icon-plus']"></i>Focus
                    </el-button>
                </div>
            </li>
        </ul>

        <el-pagination
                v-if="$store.state.activeName === '1'"
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
                dataList:[
                    {
                        pic: require('@/assets/img/jingdong.png'),
                        title: 'Jingdong Co.,LTD',
                        tips: [
                            {
                                name: 'Big data',
                                type: 1
                            },{
                                name: 'The electronic commerce',
                                type: 1
                            },{
                                name: 'Investment in merges and acquisitions',
                                type: 2
                            }
                        ],
                        number: 137,
                        date: '1998-01-01 00:00:00.0',
                        registered: '1902.996143 million CNY',
                        exchanges: 'Shanghai Stock Exchange',
                        code: 600163,
                        address: 'Block A, B and C, 22F, International Building, Wusi Road, Gulou District, Fuzhou, Fujian',
                        focusBtn: true
                    },{
                        pic: require('@/assets/img/jingdong.png'),
                        title: 'Jingdong Co.,LTD',
                        tips: [
                            {
                                name: 'Big data',
                                type: 1
                            },{
                                name: 'The electronic commerce',
                                type: 1
                            },{
                                name: 'Investment in merges and acquisitions',
                                type: 2
                            }
                        ],
                        number: 137,
                        date: '1998-01-01 00:00:00.0',
                        registered: '1902.996143 million CNY',
                        exchanges: 'Shanghai Stock Exchange',
                        code: 600163,
                        address: 'Block A, B and C, 22F, International Building, Wusi Road, Gulou District, Fuzhou, Fujian',
                        focusBtn: true
                    },{
                        pic: require('@/assets/img/jingdong.png'),
                        title: 'Jingdong Co.,LTD',
                        tips: [
                            {
                                name: 'Big data',
                                type: 1
                            },{
                                name: 'The electronic commerce',
                                type: 1
                            },{
                                name: 'Investment in merges and acquisitions',
                                type: 2
                            }
                        ],
                        number: 137,
                        date: '1998-01-01 00:00:00.0',
                        registered: '1902.996143 million CNY',
                        exchanges: 'Shanghai Stock Exchange',
                        code: 600163,
                        address: 'Block A, B and C, 22F, International Building, Wusi Road, Gulou District, Fuzhou, Fujian',
                        focusBtn: true
                    },{
                        pic: require('@/assets/img/jingdong.png'),
                        title: 'Jingdong Co.,LTD',
                        tips: [
                            {
                                name: 'Big data',
                                type: 1
                            },{
                                name: 'The electronic commerce',
                                type: 1
                            },{
                                name: 'Investment in merges and acquisitions',
                                type: 2
                            }
                        ],
                        number: 137,
                        date: '1998-01-01 00:00:00.0',
                        registered: '1902.996143 million CNY',
                        exchanges: 'Shanghai Stock Exchange',
                        code: 600163,
                        address: 'Block A, B and C, 22F, International Building, Wusi Road, Gulou District, Fuzhou, Fujian',
                        focusBtn: true
                    },{
                        pic: require('@/assets/img/jingdong.png'),
                        title: 'Jingdong Co.,LTD',
                        tips: [
                            {
                                name: 'Big data',
                                type: 1
                            },{
                                name: 'The electronic commerce',
                                type: 1
                            },{
                                name: 'Investment in merges and acquisitions',
                                type: 2
                            }
                        ],
                        number: 137,
                        date: '1998-01-01 00:00:00.0',
                        registered: '1902.996143 million CNY',
                        exchanges: 'Shanghai Stock Exchange',
                        code: 600163,
                        address: 'Block A, B and C, 22F, International Building, Wusi Road, Gulou District, Fuzhou, Fujian',
                        focusBtn: true
                    },{
                        pic: require('@/assets/img/jingdong.png'),
                        title: 'Jingdong Co.,LTD',
                        tips: [
                            {
                                name: 'Big data',
                                type: 1
                            },{
                                name: 'The electronic commerce',
                                type: 1
                            },{
                                name: 'Investment in merges and acquisitions',
                                type: 2
                            }
                        ],
                        number: 137,
                        date: '1998-01-01 00:00:00.0',
                        registered: '1902.996143 million CNY',
                        exchanges: 'Shanghai Stock Exchange',
                        code: 600163,
                        address: 'Block A, B and C, 22F, International Building, Wusi Road, Gulou District, Fuzhou, Fujian',
                        focusBtn: true
                    }

                ],
                province:['Beijing','Anhui', 'Fujian', 'Gansu', 'Guangdong', 'Guangxi', 'Guizhou', 'Hainan', 'Hebei', 'Henan', 'Heilongjiang', 'Hubei', 'Hunan']
            }
        },
        computed:{
            titleInit:function (title) {
                return function(title){
                    title = title.replaceAll(this.$store.state.keywords, '<span style="color: #d9011c">'+this.$store.state.keywords+'</span>');
                    return title;
                }

            }
        },
        methods:{
            isFocus(index){
                this.dataList[index].focusBtn = !this.dataList[index].focusBtn;
            },
            toEnterprise(){
                this.$store.commit('setActiveName', '1')
            },
            toDetail(item){
                this.$router.push({path:'/companyDetail', query: {item: item}});
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
        font-size: 14px;
    }
    /*enterprise*/
    .dataList li{
        display: flex;
        justify-content: space-between;
        align-items: center;
        text-align: left;
        padding: 24px 20px;
        border-bottom: 2px solid #e0e0e0;
        cursor: pointer;
    }
    .dataList li:hover{
        background: #eeeeee;
    }
    .dataList li img{
        width: 95px;
        height: 95px;
        border-radius: 10px;
    }
    .dataList li .description{
        font-size: 12px;
        margin-top: 10px;
    }
    .dataList li .description span{
        margin-right: 20px;
        color: #666666;
    }
    .dataList .detail .tag{
        margin-top: 10px;
        margin-bottom: 10px;
    }
    .dataList .detail .detail-top .mark{
        color: #3a68b1;
        font-weight: bold;
        font-size: 16px;
        margin-right: 60px;
    }
    .dataList .detail .detail-top .number{
        color: #aaaaaa;
        font-size: 12px;
    }
    .dataList .btn .icon-plus{
        margin-right: 2px;
        font-weight: bold;
    }
    .dataList .btn .focusBtn{
        border: 1px solid #2f8eff;
        color: #2f8eff;
    }
    .dataList .btn .blurBtn.el-button{
        background: #ffffff;
        color: #aaaaaa;
    }
    .dataList .el-button:focus, .el-button:hover{
        background: none;
    }
    .enterprise .el-pagination{
        margin-top: 20px;
    }
    .clearBoth:after{
        content: '';
        display: block;
        clear: both;
    }
</style>
