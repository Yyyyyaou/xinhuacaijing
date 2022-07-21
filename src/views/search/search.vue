<template>
    <div class="searchBox">
        <el-card class="box-card">
            <i class="el-icon-s-home icon-home"></i>
            <el-input
                    class="searchInput"
                    placeholder="Please enter enterprise name,industry name,or keywords of the manuscript,and separate multiple keywords with spaces."
                    prefix-icon="el-icon-search"
                    @change="onChange"
                    v-model="keywords">
            </el-input>

            <el-tabs v-model="activeName" @tab-click="handleClick"  type="border-card" class="tabs">
                <el-tab-pane label="Comprehensive" name="0">
                    <enterprise></enterprise>
                </el-tab-pane>
                <el-tab-pane label="Enterprise" name="1">
                    <manuscript-search></manuscript-search>
                </el-tab-pane>
                <el-tab-pane label="Manuscript" name="2">
                    <enterprise-search></enterprise-search>
                </el-tab-pane>
            </el-tabs>

        </el-card>

        <el-card class="content">
            <enterprise v-if="activeName === '1'"></enterprise>
            <manuscript v-if="activeName !== '1'"></manuscript>
        </el-card>
    </div>

</template>

<script>
    import Enterprise from '@/views/search/enterprise.vue'
    import Manuscript from '@/views/search/manuscript.vue'
    import ManuscriptSearch from '@/views/search/manuscriptSearch.vue'
    import EnterpriseSearch from '@/views/search/enterpriseSearch.vue'
    export default {
        name: "search",
        components: {Manuscript, Enterprise, ManuscriptSearch, EnterpriseSearch},
        data(){
            return{
                keywords: '',
                industry: '',
                count: 888,
                provinceMax: 15,
                province:['Beijing','Anhui', 'Fujian', 'Gansu', 'Guangdong', 'Guangxi', 'Guizhou', 'Hainan', 'Hebei', 'Henan', 'Heilongjiang', 'Hubei', 'Hunan', 'Jilin', 'Jiangsu', 'Jiangxi', 'Liaoning'],
                dynamicTags: ['标签一', '标签二', '标签三']

            }
        },
        computed: {
            activeName:{
                get(){
                    return this.$store.state.activeName;
                },
                set(n){
                    this.$store.commit('setActiveName', n);
                }
            }
        },

        methods:{
            onChange(){
                this.$store.commit('setKeyWords', this.keywords);
            },
            handleClick(tab){
                this.$store.commit('setActiveName', tab.index);
            },
            toEnterprise(){
                this.$store.commit('setActiveName', '1');
            },
            showAll(){
                if(this.provinceMax<this.province.length) {
                    this.provinceMax = this.province.length;
                }else {
                    this.provinceMax = 15;
                }
            },
            selectedProvince(item){
                this.$store.commit('setProvince', item);
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
    .searchBox .icon-home{
        color: #2f8eff;
        font-size: 50px;
        text-shadow: 0 0 4px #666666;
        vertical-align: middle;
    }
    .searchBox .tabs{
        margin-top: 20px;
    }
    .searchBox .content{
        margin-top: 20px;
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
    .clearBoth:after{
        content: '';
        display: block;
        clear: both;
    }

</style>
