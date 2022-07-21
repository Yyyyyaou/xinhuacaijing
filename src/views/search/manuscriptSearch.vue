<template>
    <div class="enterprise-content">
        <p>Filter</p>
        <el-row :gutter="20" class="provinceBox">
            <el-col :span="3"><div class="text-label">Province area</div></el-col>
            <el-col :span="20">
                <ul class="province clearBoth">
                    <li v-for="(item, index) in province" v-if="index < provinceMax" @click="selectedProvince(item, index)" :class="index === selectedIndustry ? 'on' : ''">{{item}}</li>
                    <span class="show" v-if="province" @click="showAll"><i :class="provinceMax < province.length ? 'el-icon-caret-bottom' : 'el-icon-caret-top'">{{provinceMax < province.length ? 'unfurl' : 'Pack up'}}</i></span>
                </ul>

            </el-col>
        </el-row>
        <el-row :gutter="20" class="industry">
            <el-col :span="3"><div class="text-label">industry</div></el-col>
            <el-col :span="7">
                <el-input
                        v-model="industry"
                        placeholder="Please enter the industry you want to add"
                        size="mini"
                        @keyup.enter.native="handleInputConfirm">
                </el-input>
                <el-button type="primary" icon="el-icon-plus icon-plus" size="mini" @click="handleInputConfirm"></el-button>
            </el-col>
            <el-col :span="13">
                <el-tag
                        :key="tag"
                        v-for="tag in dynamicTags"
                        closable
                        :disable-transitions="false"
                        @close="handleClose(tag)">
                    {{tag}}
                </el-tag>
            </el-col>
        </el-row>

    </div>
</template>

<script>
    export default {
        name: "manuscriptSearch",
        data(){
            return{
                industry: '',
                selectedIndustry: 0,
                provinceMax: 15,
                province:['Beijing','Anhui', 'Fujian', 'Gansu', 'Guangdong', 'Guangxi', 'Guizhou', 'Hainan', 'Hebei', 'Henan', 'Heilongjiang', 'Hubei', 'Hunan', 'Jilin', 'Jiangsu', 'Jiangxi', 'Liaoning'],
                dynamicTags: ['Wholesale and Retail', 'animal husbandry and fishery', 'The electronic commerce']
            }
        },
        methods:{
            showAll(){
                if(this.provinceMax<this.province.length) {
                    this.provinceMax = this.province.length;
                }else {
                    this.provinceMax = 15;
                }
            },
            selectedProvince(item, index){
                this.$store.commit('setProvince', item);
                this.selectedIndustry = index;
            },
            handleClose(tag) {
                this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
                this.$store.commit('setDynamicTags', this.dynamicTags);
            },
            handleInputConfirm() {
                let inputValue = this.industry;
                if (inputValue) {
                    this.dynamicTags.push(inputValue);
                    this.$store.commit('setDynamicTags', this.dynamicTags);
                }
                this.industry = '';
            }
        }
    }
</script>

<style scoped>
    .enterprise-content{
        text-align: left;
    }
    .enterprise-content p{
        font-weight: bold;
        color: #2f8eff;
        text-align: left;
        padding-bottom: 20px;
        border-bottom: 1px solid #d8d8d8;
        margin-bottom: 20px;
    }
    .enterprise-content .text-label{
        font-size: 12px;
        color: #aaaaaa;
        text-align: left;
        line-height: 28px;
    }
    .enterprise-content .province{
        line-height: 28px;
    }
    .enterprise-content .province li{
        float: left;
        font-size: 12px;
        cursor: pointer;
        margin-right: 20px;
    }
    .enterprise-content .province .show{
        color: #2f8eff;
        font-size: 12px;
        cursor: pointer;
    }
    .enterprise-content .provinceBox{
        margin-bottom: 20px;
    }
    .enterprise-content .el-input{
        width: 80%;
        margin-right: 10px;
    }
    .enterprise-content .icon-plus{
        font-weight: bold;
    }
    .enterprise-content .industry .el-tag{
        margin-right: 10px;
        background-color: #ffffff;
        border: 1px solid #e0e0e0;
        color: #999999;
        height: 28px;
        line-height: 26px;
        border-radius: 12px;
        margin-bottom: 6px;
    }
    .on{
        color: #2f8eff;
    }
</style>
