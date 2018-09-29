<template>
  <v-layout align-center justify-start column fill-height>
    <panel :title="song.title">
      <div class="edit" slot="action">
        <v-btn @click="navigateTo({
        name:'song-edit',
        params: {
        songId: song.id}
          })" fab small>
          <v-icon> edit </v-icon>
        </v-btn>
        <div class="space"></div>
      </div>
    
      <v-text-field
      v-model="width"
            label="W I D T H "
            
             box
          ></v-text-field>
     
      <you-tube v-show="this.showYouTube" :width="this.width" :youtubeid="song.youtubeID" />
      <textarea v-show="this.showLyrics" readonly v-model="song.lyrics">
       
      </textarea>
    </panel>
  </v-layout>
</template>

<script>
  import SongsService from '@/services/SongsService'
  import YouTube from '@/components/ViewSong/YouTube'
  import Panel from '@/components/Panel'

  export default {
    
    components: {
      Panel,
      YouTube

    },
    data() {
      return {
        song: {},
        showYouTube: true,
        showLyrics: true,
        width: 700,
          txt: '',
          bufWidth: ''
      }
    },
    methods: {
        
      navigateTo(route) {
        this.$router.push(route)
      },
  

      change_ShowYouTube(ID) {
        if (ID === null) {
          this.showYouTube = !this.showYouTube;
        }
      },
      change_ShowLyrics(Lyrics) {
        if (Lyrics === null) {
          this.showLyrics = !this.showLyrics;
        }
      },
      resize(width) {
    
        if (width < 700) {
          this.width = (width - 60);
           
        }
        else {
          this.width = 700;
        }
      }
    },
    async mounted() {
      const songId = this.$store.state.route.params.songId;
      this.song = (await SongsService.show(songId)).data;
      this.change_ShowYouTube(this.song.youtubeID);
      this.change_ShowLyrics(this.song.lyrics);
      var width = document.body.clientWidth;
      this.resize(width);
      this.$nextTick(() => {
      window.addEventListener('resize', () => {
        this.bufWidth = window.innerWidth
         
      });
    })
    },
    watch: {
  bufWidth(oldWith ,newWidth) {
    this.resize(newWidth);
  }
    }
    
  }
  
</script>

<style scoped>
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

  textarea {
    height: 400px;
    width: 100%;
    overflow: auto;
    font-size: 17px;
  }

  .youTubeWrapper {
    position: relative;
    width: 100%;

    background: red;
  }

</style>
