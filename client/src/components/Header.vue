<template>

  <v-toolbar  class="white" dense flat="false">
    <v-toolbar-tittle>
      
      <span @click="navigateTo({name:'root'})">
          <div class="tittleWrapper">
         <div class="tittle1">
          YouSong
        </div>
          </div>
      </span>
  

    </v-toolbar-tittle>
   
      <v-spacer></v-spacer>
      
      <v-btn flat @click="navigateTo({name:'songs'})" v-if="!$store.state.isUserLoggedIn">
            <router-link to="/songs">
        Browse
         </router-link>
      </v-btn> 
      
    
    <div class="hidden-sm-and-down">
      <v-btn flat @click="navigateTo({name:'login'})" v-if="!$store.state.isUserLoggedIn">
          <router-link to="/login">
        Login
         </router-link>
        
      </v-btn>

      <v-btn flat @click="navigateTo({name:'register'})" v-if="!$store.state.isUserLoggedIn">
        
          <router-link to="/register">
         Sign Up
         </router-link>
      </v-btn>

      <v-btn flat v-if="$store.state.isUserLoggedIn" @click="logout({name:'root'})">
        
          <router-link to="/root">
          Log Out
         </router-link>
      </v-btn>
    
 <v-toolbar-side-icon @click="drawerOpen()"></v-toolbar-side-icon>
    </div>
    <span class="hidden-md-and-up">
      <v-toolbar-side-icon @click="drawerOpen()"></v-toolbar-side-icon>
      
    </span>
    
  </v-toolbar>

</template>

<script>
  export default {
   
    methods: {
      navigateTo(route) {
        this.$router.push(route)
      },
      logout(route) {
        this.$router.push(route)
        this.$store.dispatch('setToken', null)
        this.$store.dispatch('setUser', null)

      },
      drawerOpen(){
      
        this.$store.dispatch('OpenDrawer', !this.$store.state.IsDrawerOpen)
       
      }
    }
  }

</script>

<style scoped>
  .v-toolbar {
    background: rgba(255, 255, 255, 1) !important;
position: absolute;
top:-40px;
  }

  .tittleWrapper {
    display:flex !important;
     cursor: pointer;
  height: 47px;
width: 150%;
align-items:center;

  }

  
  .v-btn {
    background: white;
    color: rgba(114, 114, 114, 0.685);
 

  }
 a {
     color:rgba(0, 0, 0, 0.699);
      text-decoration: none;
  }
  
.router-link-active {
 text-decoration: none;
 color:#1DA1F2;
 
}
 /* .router-link-active::before{ 
  display: block;
  position:relative;
  border-bottom: 1px solid #1DA1F2;
 
  content:""; 
  width: 100%;
  bottom:-23px;
  height: 0px;
   
    
 
}  */
.tittle1 {
  
    color: #1DA1F2 ;
    width:100%;
    height: 30px ;
    margin-left:0.06em;
   /* height: 17px;*/
   
    font-weight: 100;
    font-size: 20px;
   /* color: #2c3e50f5; */
    position: relative;
    transition: .1s ease-in-out;
     

  
}
 

  .tittle:hover {
    cursor: pointer;

    font-size: 20px;
    
    
    
  }


 /* .tittle:active {
    width: 126%;
    font-size: 19px;
    transition: .2s ease-in-out;
  }
*/
  .v-toolbar {
  
    box-shadow: 0px 7px 6px -11px rgba(0, 0, 0, 0.75) !important;
  }
  @media screen and (max-width: 600px) {
 .tittleWrapper {
    
   margin-left: -30%;
  }
}

</style>
