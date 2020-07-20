const state = {message: 'Not yet initialized'}

const getters = {}

const mutations = {
    setMessage (state, msg){
        state.message = msg
    }
}

const actions = {
    initMessages({commit}){
        commit('setMessage', 'Tap here to get URL')
    },


}

export default {
    namespaced:true,
    state,
    getters,
    mutations,
    actions,
}
