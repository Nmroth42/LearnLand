<template>
<div class="wrapper">
  <panel title="Login">
    <br>
    <input type="email" name="emal" v-model="email" placeholder="email" />
    <br>
    <input type="password" name="password" v-model="password" placeholder="password" />
    <br>
    <br>

    <v-btn @click="login" small outline color="grey darken-4">Login</v-btn>

    <div class="error" v-html="error" />
    <br>
  </panel>
  </div>

</template>

<script>
  import Panel from '@/components/Panel'
  import AuthenticationServices from "@/services/AuthenticationServices";
  export default {
    data() {
      return {
        email: "",
        password: "",
        error: null
      };
    },
      components: {
      Panel
    },
    methods: {
      async login() {
        try {
          const response = await AuthenticationServices.login({
            email: this.email,
            password: this.password
          })
          this.$router.push({
          name: 'songs'
        })
          this.$store.dispatch('setToken', response.data.token)
          this.$store.dispatch('setUser', response.data.user)
          

        } catch (error) {
          this.error = error.response.data.error;
        }
      }
    }
  };

</script>
<style scoped>
.v-btn {
  border-radius: 0px;
  
}
  .error {
    color: #f44336;
    background: none !important;
  }

  .wrapper {
    position: relative;
    width: 300px;
    left: 50%;
    transform: translate(-50%);
  }

  h2 {
    font-weight: 100;
    margin: 2px;
    color:#FAFAFA;
    background: #1DA1F2;
  }

</style>
