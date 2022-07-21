<template>
    <div class="articleDetail">
        <div class="back">
            <router-link to="/companyDetail">
                <i class="el-icon-caret-left">Return</i>
            </router-link>
            <h3>The article details</h3>
        </div>
        <div class="content">
            <p class="abstract">{{abstract}}</p>
            <div class="detail">{{detail}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "articleDetail",
        data(){
            return{
                detail: '',
                abstract: ''
            }
        },
        mounted(){
            this.getData();
        },
        methods: {
            getData(){
                let param = this.$route.query.item;
                this.abstract = 'Fourth Quarter 2020 Financial Highlights1 Net revenues increased by 77.5% to RMB3,783.5 million (US$579.9 million) from RMB2,131.9 million in the corresponding period of 2019.';
                this.detail = 'GUANGZHOU, China, March 26, 2021 (GLOBE NEWSWIRE) — JOYY Inc. (NASDAQ: YY) (“JOYY” or the “Company”, formerly known as YY Inc.), a global video-based social media platform, today announced its unaudited financial results for the fourth quarter and full year of 2020.'
            }
        }
    }
</script>

<style scoped>
    .articleDetail{
        text-align: left;
        overflow-y: auto;
        -ms-overflow-style: none;
        scrollbar-width: none;
    }
    .articleDetail::-webkit-scrollbar{
        display: none;
    }
    .articleDetail .back{
        color: #7F7F7F;
        background-color: #ffffff;
        height: 58px;
        line-height: 58px;
    }
    .articleDetail .back a{
        color: #7F7F7F;
        margin-left: 10px;
    }
    .articleDetail .back h3{
        display: inline-block;
        width: 90%;
        text-align: center;
    }
    .articleDetail .content{
        background-color: #ffffff;
        margin-top: 20px;
        padding: 40px 80px;
    }
    .articleDetail .content .abstract{
        background-color: #D7D7D7;
        font-size: 12px;
        color: #333333;
        padding: 0 30px;
        height: 70px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }
    .articleDetail .content .detail{
        font-size: 12px;
        color: #333333;
        margin-top: 30px;
    }
</style>
