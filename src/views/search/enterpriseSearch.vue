<template>
    <div class="enterprise-content">
        <p class="title">Filter</p>
        <div :class="[showAll ? 'flexC' : 'flexR' , 'industry']" >
            <div class="w40">
                <span class="text-label">Industry:</span>
                <el-input
                        v-model="industry"
                        placeholder="Please enter the industry you want to add"
                        size="mini"
                        @keyup.enter.native="handleInputConfirm">
                </el-input>
                <el-button type="primary" icon="el-icon-plus icon-plus" size="mini" @click="handleInputConfirm"></el-button>
            </div>

            <div v-if="showAll" class="enterprise">
                <el-tag
                        :key="tag"
                        v-for="tag in dynamicTags"
                        closable
                        :disable-transitions="false"
                        @close="handleClose(tag)">
                    {{tag}}
                </el-tag>
            </div>

            <div class="w40">
                <span class="text-label">Enterprise:</span>
                <el-input
                        v-model="enterprise"
                        placeholder="Please enter the industry you want to add"
                        size="mini"
                        @keyup.enter.native="enterpriseInputConfirm">
                </el-input>
                <el-button type="primary" icon="el-icon-plus icon-plus" size="mini" @click="enterpriseInputConfirm"></el-button>
            </div>

            <div v-if="showAll">
                <el-tag
                        :key="tag"
                        v-for="tag in enterpriseTags"
                        closable
                        :disable-transitions="false"
                        @close="enterpriseClose(tag)">
                    {{tag}}
                </el-tag>
            </div>

        </div>
        <div :class="[showAll ? 'flexC' : 'flexR' , 'industry']">
            <div :class="[showAll ? '' : 'w34' , 'industry']">
                <div class="regional">
                    <span class="text-label">Regional screening:</span>
                    <el-select
                            v-model="regional"
                            multiple
                            collapse-tags
                            filterable
                            placeholder="Please select"
                            @change="regionalInputConfirm">
                        <el-option
                                v-for="item in regionalTags"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                        </el-option>
                    </el-select>
                    <el-tag
                            v-if="showAll"
                            v-for="tag in regional"
                            :key="tag"
                            closable
                            :disable-transitions="false"
                            @close="regionalClose(tag)">
                        {{tag}}
                    </el-tag>
                </div>

            </div>
            <div :class="[showAll ? '' : 'w64' , 'industry']">
                <div class="regional marR">
                    <span class="text-label">Time interval:</span>
                    <el-date-picker
                            v-model="selectedDate"
                            type="daterange"
                            value-format="yyyy-MM-dd"
                            range-separator="-"
                            start-placeholder=""
                            end-placeholder=""
                            @change="dateChange">
                    </el-date-picker>
                </div>
                <div class="regional">
                    <span class="text-label">Manuscript source:</span>
                    <el-select v-model="source" placeholder="">
                        <el-option
                                v-for="item in sources"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                                @change="sourceChange">
                        </el-option>
                    </el-select>
                </div>
            </div>

        </div>

        <el-button round class="showBtn" @click="pick">
            <p>{{showAll ? 'Pack Up' : 'View Details'}}</p>
            <p><i :class="showAll ? 'el-icon-arrow-up' : 'el-icon-arrow-down'"></i></p>
        </el-button>

    </div>
</template>

<script>
    export default {
        name: "enterpriseSearch",
        data(){
            return{
                showAll: false,
                industry: '',
                dynamicTags: ['Wholesale and Retail', 'Farming, forestry, animal husbandry and fishery', 'The electronic commerce', 'Wholesale and Retail1', 'Farming, forestry, animal husbandry and fishery1', 'The electronic commerce1'],
                enterprise: '',
                enterpriseTags: ['Wholesale and Retail', 'Farming, forestry, animal husbandry and fishery', 'The electronic commerce', 'Wholesale and Retail1', 'Farming, forestry, animal husbandry and fishery1', 'The electronic commerce1'],
                regional: [],
                selectedDate: '',
                regionalTags: [{
                    value: 'Canada',
                    label: 'Canada'
                }, {
                    value: 'Mexico',
                    label: 'Mexico'
                }, {
                    value: 'Greenland',
                    label: 'Greenland'
                }],
                source: 'All',
                sources: [{
                    value: 'All',
                    label: 'All'
                }],

            }
        },
        methods:{
            handleInputConfirm() {
                let inputValue = this.industry;
                if (inputValue) {
                    this.dynamicTags.push(inputValue);
                    this.$store.commit('setIndustry', this.dynamicTags);
                }
                this.industry = '';
            },
            handleClose(tag) {
                this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
                this.$store.commit('setIndustry', this.dynamicTags);
            },
            enterpriseInputConfirm() {
                let inputValue = this.enterprise;
                if (inputValue) {
                    this.enterpriseTags.push(inputValue);
                    this.$store.commit('setEnterprise', this.enterpriseTags);
                }
                this.enterprise = '';
            },
            enterpriseClose(tag) {
                this.enterpriseTags.splice(this.enterpriseTags.indexOf(tag), 1);
                this.$store.commit('setEnterprise', this.enterpriseTags);
            },
            regionalInputConfirm() {
                let inputValue = this.regional;
                if (inputValue) {
                    this.$store.commit('setRegional', this.regional);
                }

            },
            regionalClose(tag) {
                this.regional.splice(this.regional.indexOf(tag), 1);
                this.$store.commit('setRegional', this.regional);
            },
            pick(){
                this.showAll = !this.showAll;
            },
            dateChange(){
                this.$store.commit('setTime', this.selectedDate);
            },
            sourceChange(){
                this.$store.commit('setSource', this.source);
            }
        }
    }
</script>

<style scoped>
    .enterprise-content{
        text-align: left;
        position: relative;
    }
    .industry{
        display: flex;
    }
    .flexC{
        flex-direction: column;
    }
    .flexR{
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
    }
    .w40{
        width: 40%;
    }
    .w34{
        width: 34%;
    }
    .w64{
        width: 64%;
    }
    .marR{
        margin-right: 20px;
    }
    .enterprise{
        margin-bottom: 30px;
    }
    .enterprise-content .title{
        font-weight: bold;
        color: #2f8eff;
        text-align: left;
        padding-bottom: 20px;
        border-bottom: 1px solid #d8d8d8;
        margin-bottom: 20px;
    }
    .enterprise-content .text-label{
        font-size: 14px;
        color: #666666;
        text-align: left;
        line-height: 28px;
        margin-right: 40px;
    }
    .enterprise-content .el-input{
        margin-right: 10px;
        width: 58%;
    }
    .enterprise-content .icon-plus{
        font-weight: bold;
    }
    .enterprise-content .el-tag{
        margin-right: 10px;
        background-color: #ffffff;
        border: 1px solid #e0e0e0;
        color: #999999;
        height: 28px;
        line-height: 26px;
        border-radius: 12px;
        margin-top: 16px;
    }
    .regional{
        margin-top: 20px;
    }

    .industry .el-select{
        margin-right: 20px;
    }
    .enterprise-content .el-date-editor--daterange.el-input__inner{
        width: 220px;
    }
    .enterprise-content .showBtn{
        color: #2f8eff;
        font-size: 12px;
        font-weight: bold;
        position: absolute;
        bottom: -50px;
        left: 45%;
    }
    .enterprise-content .el-button.is-round{
        padding: 4px 40px;
    }
</style>
