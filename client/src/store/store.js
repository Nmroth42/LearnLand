import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    strict: true,
    state: {
        token: null,
        user: null,
        isUserLoggedIn: false,
        IsDrawerOpen:false
    },
    mutations: 
    {
        setToken (state, token) {
            state.token = token
            if (token) {
                state.isUserLoggedIn = true
            } else {
                state.isUserLoggedIn = false
            }
        },
        setUser (state, token) {
            state.user = user
        },
        OpenDrawer (state, isDrawerOpen) {
            state.IsDrawerOpen = isDrawerOpen
        }
    },
    actions: {
        setToken ({commit}, token) {
            commit('setToken', token)
        },
        setUser({commit}, user) {
            commit('setUser', user)
        },
        OpenDrawer ({commit}, isDrawerOpen) {
            commit('OpenDrawer', isDrawerOpen)
        }
    }
})