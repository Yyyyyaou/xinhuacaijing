<template>
    <div :class="[showAll ? 'showLine' : '', 'companyInfo']">

        <img class="picture" :src="item.pic" alt="">
        <div class="info">

            <el-row :gutter="20" class="title">
                <el-col :span="24">{{data.title}}</el-col>
            </el-row>

            <el-row :gutter="20" class="second">
                <el-col>
                    <span>Region:{{data.region}}</span>
                    <span>Number of articles:{{data.number}}</span>
                </el-col>
            </el-row>

            <el-row :gutter="20" class="third">
                <el-col :span="6">Website:</el-col>
                <el-col :span="18">{{data.website}}</el-col>
            </el-row>
            <el-row :gutter="20" class="third">
                <el-col :span="6">Securities Code:</el-col>
                <el-col :span="18">{{data.securitiesCode}}</el-col>
            </el-row>
            <el-row :gutter="20" class="third">
                <el-col :span="6">Establishment Date:</el-col>
                <el-col :span="18">{{data.establishmentDate}}</el-col>
            </el-row>
            <el-row :gutter="20" class="third">
                <el-col :span="6">Stock exchange(s) listed:</el-col>
                <el-col :span="18">{{data.listed}}</el-col>
            </el-row>
            <el-row :gutter="20" class="third">
                <el-col :span="6">Registered Capital:</el-col>
                <el-col :span="18">{{data.capital}}</el-col>
            </el-row>
            <el-row :gutter="20" class="third">
                <el-col :span="6">Office Address:</el-col>
                <el-col :span="18">{{data.address}}</el-col>
            </el-row>
            <el-row :gutter="20" class="third">
                <el-col :span="6">E-mail:</el-col>
                <el-col :span="18">{{data.mail}}</el-col>
            </el-row>
            <el-row :gutter="20" class="third">
                <el-col :span="6">Telephone:</el-col>
                <el-col :span="18">{{data.telephone}}</el-col>
            </el-row>
            <el-row :gutter="20" class="third">
                <el-col :span="6">Fax:</el-col>
                <el-col :span="18">{{data.fax}}</el-col>
            </el-row>
            <el-row :gutter="20" class="third">
                <el-col :span="6">Postal Code:</el-col>
                <el-col :span="18">{{data.postalCode}}</el-col>
            </el-row>
            <el-row :gutter="20" class="third">
                <el-col :span="6">Securities Abbreviation:</el-col>
                <el-col :span="18">{{data.abbreviation}}</el-col>
            </el-row>

            <div :class="[showAll ? 'show' : 'hide']">
                <el-row :gutter="20" class="third">
                    <el-col :span="6">Industry tag:</el-col>
                    <el-col :span="18">
                        <el-tag color="#81d3f8" style="color: #000000" v-for="i in data.tag">{{i}}</el-tag>
                    </el-col>
                </el-row>
                <el-row :gutter="20" class="third">
                    <el-col :span="6">Positive affective label:</el-col>
                    <el-col :span="18">
                        <el-tag color="#aff0b5" style="color: #08b731" v-for="i in data.positive">{{i}}</el-tag>
                    </el-col>
                </el-row>
                <el-row :gutter="20" class="third">
                    <el-col :span="6">Negative affective label:</el-col>
                    <el-col :span="18">
                        <el-tag color="#ffe4ba" style="color: #ff8e1f" v-for="i in data.negative">{{i}}</el-tag>
                    </el-col>
                </el-row>
                <el-row class="third">
                    <el-col :span="24">Note:{{data.note}}</el-col>
                </el-row>
            </div>

            <el-row class="showAll">
                <el-col :span="24">
                    <i :class="showAll ? 'el-icon-caret-top' : 'el-icon-caret-bottom'"></i>
                    <span @click="enterprise">{{showAll ? 'Pack Up' : 'Enterprise label'}}</span>
                </el-col>
            </el-row>

        </div>

    </div>
</template>

<script>
    export default {
        name: "companyInfo",
        props: {
            item: {
                type: undefined,
                require: true,
                default: {}
            }
        },
        data(){
            return{
                data: {},
                showAll: false
            }
        },
        mounted(){
            this.getData()
        },
        methods: {
            getData(){
                let title = this.item.title;
                this.data = {
                    title: 'Jingdong Technology Co., LTD',
                    region: 'Chengdu',
                    number: 137,
                    website: 'www.zhongminenergy.com',
                    securitiesCode: '600163',
                    establishmentDate: '1998-05-26 00:00:00.00',
                    listed: 'Shanghai Stock Exchange',
                    capital: '1902.996143 million CNY',
                    address: 'Block A, B and C, 22F, International Building, Wusi Road, Gulou District, Fuzhou, Fujian',
                    mail: 'zmzqb@zmny600163.com',
                    telephone: '0591-87868796',
                    fax: '0591-87865515',
                    postalCode: '350003',
                    abbreviation: '',
                    tag: ['Big data', 'The electronic commerce'],
                    positive: ['Investment in mergers and acquisitions', 'Exceed expectations'],
                    negative: ['Tax evasion', 'layoffs'],
                    note: 'Positive and negative emotions are labeled as statistics for the past 90 days'
                }
            },
            enterprise(){
                this.showAll = !this.showAll;
            }
        },
    }
</script>

<style scoped>
    .companyInfo{
        display: flex;
        justify-content: flex-start;
        position: relative;
    }
    .showLine:after{
        content: '';
        display: block;
        width: 100%;
        height: 1px;
        background: #e0e0e0;
        position: absolute;
        bottom: 150px;
        left: 0;
    }
    .companyInfo .picture{
        width: 220px;
        height: 130px;
        margin-right: 30px;
    }
    .companyInfo .info{
        font-size: 12px;
        width: 100%;
    }
    .companyInfo .info .title{
        color: #EC808DFB;
        font-size: 18px;
        font-weight: bold;
    }
    .companyInfo .info .second{
        color: #AAAAAA;
        margin-bottom: 16px;
        margin-top: 6px;
    }
    .companyInfo .info .second span{
        margin-right: 30px;
    }
    .companyInfo .info .third{
        color: #7F7F7FFB;
        line-height: 18px;
    }
    .companyInfo .info .hide{
        display: none;
    }
    .companyInfo .info .show{
        margin-top: 20px;
        padding-top: 14px;
    }
    .companyInfo .info .show .third{
        margin-bottom: 6px;
    }
    .companyInfo .info .showAll{
        margin-top: 20px;
    }
    .companyInfo .info .showAll .el-col{
        text-decoration: underline;
        cursor: pointer;
        color: #183C73;
    }
</style>
