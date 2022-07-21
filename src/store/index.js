import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
    activeName: '0', // 搜索页当前标签页
    keywords: '', // 搜索页关键词
    province: '', // 搜索页选中的省份
    dynamicTags: [], // 搜索页industry标签
    industry: [], // 搜索页enterprise-industry标签
    enterprise: [], // 搜索页enterprise-enterprise标签
    regional: [], // 搜索页Regional screening标签
    time: '', // 搜索页Time interval Manuscript source
    source: '' // 搜索页Manuscript source
};
const mutations = {
    setActiveName(state, value){
        state.activeName = value
    },
    setKeyWords(state, value){
        state.keywords = value
    },
    setProvince(state, value){
        state.province = value
    },
    setDynamicTags(state, value){
        state.dynamicTags = value
    },
    setIndustry(state, value){
        state.industry = value
    },
    setEnterprise(state, value){
        state.enterprise = value
    },
    setRegional(state, value){
        state.regional = value
    },
    setTime(state, value){
        state.time = value
    },
    setSource(state, value){
        state.source = value
    }
};
const actions = {
    changeActiveName(context, value){
        context.commit('setActiveName', value)
    }
};

const store = new Vuex.Store({
    state,
    mutations,
    actions
});

export default store
