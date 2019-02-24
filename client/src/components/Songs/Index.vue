<template>

<div>
 <songs-search/>
  <songs-panel/>
</div>
 

</template>

<script>
import SongsSearch from './SongsSearchPanel'
  import SongsPanel from './SongsPanel'
  import SongsService from '@/services/SongsService'
  import Panel from '@/components/Panel'
  export default {
    components: {
      Panel,
      SongsPanel,
      SongsSearch
    },
    data() {
      return {
        songs: null
      }
    },
 /*    async mounted() {
      this.songs = (await SongsService.index()).data
    }, */
    methods: {
      navigateTo(route) {
        this.$router.push(route)
      }
    },
      mounted() {
    
 if  (this.$store.state.token !== null) {
     this.$cookie.set('token-auth', this.$store.state.token, 1*60)
  
       
     
 }
 if  (this.$store.state.token == null) {
    this.$store.state.token = this.$cookie.get('token-auth');
    
 }
    
  
},
  }

</script>

<style scoped>
  .album-image {
    clip-path: circle(30%);
  }

  .forward>.v-icon {
    color: rgba(0, 0, 0, 0.600) !important;
  }

  .forward>.v-icon:hover {
    color: #1DA1F2 !important;

  }

  .forward {
    box-shadow: none;
    background: white;
    color: black !important;
  }

  .forward:hover {
    cursor: pointer;


  }

  .song {
    padding-bottom: 10px;
    border: 5px solid #FAFAFA;
    border-bottom: 1px solid #b3d4fca1;

  }

  .album-image {
    width: 50%;

  }

  .space {
    height: 15px;
  }

  .v-btn {
    color: rgba(0, 0, 0, 0.600) !important;
    top: 2px;
    right: 0px;
    position: relative !important;
    box-shadow: 0px 5px 15px -5px #000000 !important;
    background: white !important;

  }

  .v-btn:hover {
    box-shadow: none !important;

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
    color: #FAFAFA;

    background: #1DA1F2;
  }

</style>
