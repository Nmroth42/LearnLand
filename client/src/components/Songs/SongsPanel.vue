<template>
  <div class="wrapper">
    <panel title="songs">
      <div class="add" slot="action">
        <v-btn @click="navigateTo({name:'song-create'})" fab small>
          <v-icon> add </v-icon>
        </v-btn>
        <div class="space"></div>

      </div>


      <slot>

        <div v-for="song in songs" class="song" :key="song.id">
          <div>
            <img class="album-image" :src="song.albumImage">
          </div>
          {{song.title}} - {{song.artist}}
        
          <div class="forward" @click="navigateTo({
        name:'song',
        params: {
        songId: song.id}
          })">
            <v-icon> arrow_forward </v-icon>
          </div>
        </div>


      </slot>
    </panel>
  </div>

</template>

<script>
  import SongsService from '@/services/SongsService'
  import Panel from '@/components/Panel'
  export default {
    components: {
      Panel
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
    watch: {
         '$route.query.search': {
            immediate: true,
           async handler (value) {
                this.songs = (await SongsService.index(value)).data
            }
        }
    }
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
   .forward:hover > .v-icon {
       color: #1DA1F2 !important;
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
