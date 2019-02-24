import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
var VueCookie = require('vue-cookie');
// Tell Vue to use the plugin
Vue.use(VueCookie);


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
                this.$cookie.set('token-auth', this.$store.state.token, 1*60)
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