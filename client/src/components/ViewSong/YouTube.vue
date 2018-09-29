<template>
  <v-flex>
    <youtube 
    :video-id="youtubeid"
    :player-width="width"
    :player-height="auto"
    ></youtube>
 </v-flex>
</template>

<script>
  import Panel from '@/components/Panel'
  import VueYouTubeEmbed from 'vue-youtube-embed'
export default 
{
 props: 
 [
     'youtubeid',
     'width'
 ],
   components: {
      Panel,
      VueYouTubeEmbed
    }
}
</script>

<style scoped>

</style>
