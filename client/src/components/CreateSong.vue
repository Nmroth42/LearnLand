<template>
  <div class="wrapper">
    <panel title="Song Metadata">
      <br>
      <input v-model="song.title"  placeholder="title" />
      <br>
      <input v-model="song.artist" placeholder="artist" />
     <br>
      <input v-model="song.albumImage" placeholder="albumImage" />
      <br>
        <input v-model="song.youtubeID" placeholder="youtubeID" />
      <br>
        <textarea v-model="song.lyrics" placeholder="lyrics" />
        <br>
      <v-btn @click="create" small outline color="grey darken-4">Create</v-btn>
      
      <div class="error" >{{error1}}</div>
   
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

        song: {
          title: null,
          artist: null,
          genre: null,
          album: null,
          albumImage: null,
          youtubeID: null,
          lyrics: null,
          tab: null,

        },
        error1: null,
       

      }
    },
    methods: {
      async create() {
        var e1 = true
        var e2 = true

        if (!this.song.title) {
          this.error1 = 'title required'        
          e1 = false
        }
        console.log(e1)

        if (!this.song.artist) {
          this.error1 = 'artist required'
          e2 = false
        }
        if (!e1 && !e2) {
          this.error1 = 'artist and title required'
        }
        console.log(e2)
        if (e1 & e2) {
          await SongsService.post(this.song)
          this.$router.push({
            name: 'songs'
          })
        }
      }

    },




  }

</script>

<style scoped>
  input {
    width: 300px;
    font-size: 13px;
    padding-bottom: 10px;
    padding-left: 10px;
    font-size: 16px;



  }
textarea {
  width: 90%;
 
}
.wrapper {
    position: relative;
    width: 300px;
    left: 50%;
    transform: translate(-50%);
  }
  .error {
    color: #f44336;
    background: none !important;
    padding-bottom: 10px;
  }

</style>
