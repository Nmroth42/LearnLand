<template>
  <div id="app">
    <v-app>
      <page-header />
      <Drawer />
      <main>
        <v-container>
          <router-view> </router-view>
        </v-container>
      </main>
    </v-app>
  </div>
</template>

<script>
  import PageHeader from '@/components/Header.vue'
  import Drawer from '@/components/Drawer.vue'

  export default {
    name: 'App',
    components: {
      PageHeader,
      Drawer
    },
    created() {
      if (this.$store.state.token !== null) {
        this.$cookie.set('token-auth', this.$store.state.token, 1 * 60)
      }
      if ((this.$store.state.token == null) && (this.$cookie.get('token-auth') !== null)) {
        this.$store.state.token = this.$cookie.get('token-auth');
        this.$store.state.isUserLoggedIn = true
      }


    },
  }

</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 40px;

  }

  input {
    font-size: 16px;
  }

</style>
